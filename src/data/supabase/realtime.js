export const chapter = {
  slug: "realtime",
  title: "Realtime",
  description: "Menggunakan fitur Realtime di Supabase untuk data live dan subscription.",
  icon: "SiSupabase",
  color: "#3ECF8E",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["supabase-introduction", "supabase-database"],
  tags: ["supabase", "realtime", "websocket", "subscription"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Supabase Realtime

Supabase Realtime menggunakan WebSocket untuk mengirimkan perubahan data secara realtime ke client.

## Basic Subscription

\`\`\`javascript
// Subscribe to all changes in a table
const subscription = supabase
    .channel('public:posts')
    .on(
        'postgres_changes',
        {
            event: '*', // INSERT, UPDATE, DELETE, or '*'
            schema: 'public',
            table: 'posts'
        },
        (payload) => {
            console.log('Change received:', payload);
        }
    )
    .subscribe();

// Clean up
subscription.unsubscribe();
\`\`\`

## Filtered Subscriptions

### By Event Type
\`\`\`javascript
// Subscribe to INSERT events only
const subscription = supabase
    .channel('posts:insert')
    .on(
        'postgres_changes',
        {
            event: 'INSERT',
            schema: 'public',
            table: 'posts'
        },
        (payload) => {
            console.log('New post:', payload.new);
        }
    )
    .subscribe();

// Subscribe to UPDATE events only
const subscription = supabase
    .channel('posts:update')
    .on(
        'postgres_changes',
        {
            event: 'UPDATE',
            schema: 'public',
            table: 'posts'
        },
        (payload) => {
            console.log('Updated post:', payload.new);
        }
    )
    .subscribe();

// Subscribe to DELETE events only
const subscription = supabase
    .channel('posts:delete')
    .on(
        'postgres_changes',
        {
            event: 'DELETE',
            schema: 'public',
            table: 'posts'
        },
        (payload) => {
            console.log('Deleted post:', payload.old);
        }
    )
    .subscribe();
\`\`\`

### By Filter
\`\`\`javascript
// Subscribe to specific user's posts
const subscription = supabase
    .channel('posts:user-1')
    .on(
        'postgres_changes',
        {
            event: '*',
            schema: 'public',
            table: 'posts',
            filter: 'user_id=eq.1'
        },
        (payload) => {
            console.log('User 1 posts changed:', payload);
        }
    )
    .subscribe();

// Subscribe to published posts only
const subscription = supabase
    .channel('posts:published')
    .on(
        'postgres_changes',
        {
            event: '*',
            schema: 'public',
            table: 'posts',
            filter: 'published=eq.true'
        },
        (payload) => {
            console.log('Published post:', payload);
        }
    )
    .subscribe();

// Subscribe with multiple filters
const subscription = supabase
    .channel('posts:filtered')
    .on(
        'postgres_changes',
        {
            event: '*',
            schema: 'public',
            table: 'posts',
            filter: 'user_id=eq.1&published=eq.true'
        },
        (payload) => {
            console.log('Filtered post:', payload);
        }
    )
    .subscribe();
\`\`\`

## Multiple Subscriptions

\`\`\`javascript
// Subscribe to multiple tables in one channel
const subscription = supabase
    .channel('public:all')
    .on(
        'postgres_changes',
        {
            event: '*',
            schema: 'public',
            table: 'posts'
        },
        (payload) => {
            console.log('Posts changed:', payload);
        }
    )
    .on(
        'postgres_changes',
        {
            event: '*',
            schema: 'public',
            table: 'comments'
        },
        (payload) => {
            console.log('Comments changed:', payload);
        }
    )
    .on(
        'postgres_changes',
        {
            event: '*',
            schema: 'public',
            table: 'users'
        },
        (payload) => {
            console.log('Users changed:', payload);
        }
    )
    .subscribe();
\`\`\`

## Broadcast

\`\`\`javascript
// Broadcast messages between clients
const channel = supabase.channel('chat-room');

// Subscribe to broadcast
channel
    .on('broadcast', { event: 'message' }, (payload) => {
        console.log('New message:', payload);
    })
    .subscribe();

// Send broadcast message
await channel.send({
    type: 'broadcast',
    event: 'message',
    payload: {
        user: 'John Doe',
        message: 'Hello everyone!',
        timestamp: new Date().toISOString()
    }
});

// Broadcast presence
channel
    .on('presence', { event: 'sync' }, () => {
        const presence = channel.presenceState();
        console.log('Online users:', presence);
    })
    .on('presence', { event: 'join' }, ({ key, newPresences }) => {
        console.log('User joined:', key, newPresences);
    })
    .on('presence', { event: 'leave' }, ({ key, leftPresences }) => {
        console.log('User left:', key, leftPresences);
    })
    .subscribe();

// Track user presence
const trackStatus = async () => {
    await channel.track({
        user: user.id,
        status: 'online',
        lastSeen: new Date().toISOString()
    });
};
\`\`\`

## React Hook Example

\`\`\`jsx
import { useState, useEffect } from 'react';
import { supabase } from './lib/supabase';

function useRealtime(table, event = '*', filter = null) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        // Fetch initial data
        const fetchData = async () => {
            let query = supabase.from(table).select('*');
            if (filter) {
                query = query.eq(filter.column, filter.value);
            }
            const { data: initialData } = await query;
            setData(initialData || []);
            setLoading(false);
        };
        fetchData();
        
        // Setup subscription
        const subscription = supabase
            .channel(\`realtime:\${table}\`)
            .on(
                'postgres_changes',
                {
                    event,
                    schema: 'public',
                    table,
                    filter: filter ? \`\${filter.column}=eq.\${filter.value}\` : undefined
                },
                (payload) => {
                    setData(currentData => {
                        switch (payload.eventType) {
                            case 'INSERT':
                                return [...currentData, payload.new];
                            case 'UPDATE':
                                return currentData.map(item =>
                                    item.id === payload.new.id ? payload.new : item
                                );
                            case 'DELETE':
                                return currentData.filter(item =>
                                    item.id !== payload.old.id
                                );
                            default:
                                return currentData;
                        }
                    });
                }
            )
            .subscribe();
        
        return () => {
            subscription.unsubscribe();
        };
    }, [table, event, filter]);
    
    return { data, loading };
}

// Usage in component
function PostList() {
    const { data: posts, loading } = useRealtime('posts', '*');
    
    if (loading) return <div>Loading...</div>;
    
    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
}
\`\`\`

## Realtime with Chat App

\`\`\`jsx
function ChatApp() {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        // Get user
        supabase.auth.getUser().then(({ data }) => {
            setUser(data.user);
        });
        
        // Subscribe to messages
        const subscription = supabase
            .channel('chat')
            .on(
                'postgres_changes',
                {
                    event: 'INSERT',
                    schema: 'public',
                    table: 'messages'
                },
                (payload) => {
                    setMessages(prev => [...prev, payload.new]);
                }
            )
            .subscribe();
        
        // Fetch existing messages
        supabase
            .from('messages')
            .select('*')
            .order('created_at')
            .then(({ data }) => {
                setMessages(data || []);
            });
        
        return () => {
            subscription.unsubscribe();
        };
    }, []);
    
    const sendMessage = async () => {
        if (!newMessage.trim()) return;
        
        await supabase
            .from('messages')
            .insert([
                {
                    user_id: user.id,
                    content: newMessage,
                    username: user.email
                }
            ]);
        
        setNewMessage('');
    };
    
    return (
        <div className="chat">
            <div className="messages">
                {messages.map((msg, i) => (
                    <div key={i} className="message">
                        <strong>{msg.username}:</strong> {msg.content}
                    </div>
                ))}
            </div>
            <div className="input">
                <input
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Type a message..."
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}
\`\`\`

## Realtime with Presence

\`\`\`jsx
function PresenceExample() {
    const [presence, setPresence] = useState({});
    
    useEffect(() => {
        const channel = supabase.channel('presence');
        
        channel
            .on('presence', { event: 'sync' }, () => {
                const state = channel.presenceState();
                setPresence(state);
            })
            .on('presence', { event: 'join' }, ({ key, newPresences }) => {
                console.log('User joined:', key);
            })
            .on('presence', { event: 'leave' }, ({ key, leftPresences }) => {
                console.log('User left:', key);
            })
            .subscribe(async () => {
                const user = await supabase.auth.getUser();
                await channel.track({
                    userId: user.data.user.id,
                    online_at: new Date().toISOString()
                });
            });
        
        return () => {
            channel.unsubscribe();
        };
    }, []);
    
    const onlineCount = Object.keys(presence).length;
    
    return (
        <div>
            <p>Online: {onlineCount} users</p>
            <ul>
                {Object.entries(presence).map(([key, users]) => (
                    <li key={key}>
                        User {key}: {users.length} sessions
                    </li>
                ))}
            </ul>
        </div>
    );
}
\`\`\`

## Best Practices

1. **Unsubscribe** when component unmounts
2. **Use filters** to reduce data transfer
3. **Handle reconnections** gracefully
4. **Limit subscriptions** to necessary data
5. **Use presence** for user online status
6. **Batch updates** when possible
7. **Handle errors** in subscriptions
8. **Use channels** for different features
9. **Monitor performance** with many subscribers
10. **Use broadcast** for non-database events
  `,
  quiz: [
    {
      question: "Fitur untuk data live di Supabase adalah?",
      options: [
        "Live",
        "Realtime",
        "WebSocket",
        "SSE"
      ],
      correctAnswer: 1
    },
    {
      question: "Method untuk subscribe ke perubahan tabel adalah?",
      options: [
        ".on()",
        ".subscribe()",
        "Keduanya",
        ".listen()"
      ],
      correctAnswer: 2
    },
    {
      question: "Event yang bisa di-subscribe di Realtime adalah?",
      options: [
        "INSERT, UPDATE, DELETE",
        "CREATE, READ, UPDATE, DELETE",
        "ADD, EDIT, REMOVE",
        "Semua di atas"
      ],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Complete Realtime System",
      code: `// lib/realtime.js - Complete Realtime System
import { supabase } from './supabase';

class RealtimeManager {
    constructor() {
        this.channels = new Map();
        this.subscriptions = new Map();
    }
    
    // ============ TABLE SUBSCRIPTIONS ============
    subscribeToTable(table, event = '*', callback, filter = null) {
        const channelName = \`realtime:\${table}:\${event}\`;
        
        // Check if channel already exists
        if (this.channels.has(channelName)) {
            const channel = this.channels.get(channelName);
            this.subscriptions.set(channelName, callback);
            return channel;
        }
        
        // Create new channel
        const channel = supabase
            .channel(channelName)
            .on(
                'postgres_changes',
                {
                    event,
                    schema: 'public',
                    table,
                    filter: filter ? \`\${filter.column}=eq.\${filter.value}\` : undefined
                },
                (payload) => {
                    const cb = this.subscriptions.get(channelName);
                    if (cb) cb(payload);
                }
            )
            .subscribe();
        
        this.channels.set(channelName, channel);
        this.subscriptions.set(channelName, callback);
        
        return channel;
    }
    
    unsubscribe(table, event = '*') {
        const channelName = \`realtime:\${table}:\${event}\`;
        const channel = this.channels.get(channelName);
        
        if (channel) {
            channel.unsubscribe();
            this.channels.delete(channelName);
            this.subscriptions.delete(channelName);
        }
    }
    
    // ============ BROADCAST ============
    createBroadcastChannel(name, options = {}) {
        const channel = supabase.channel(name);
        
        // Setup broadcast listeners
        if (options.onMessage) {
            channel.on('broadcast', { event: 'message' }, options.onMessage);
        }
        if (options.onJoin) {
            channel.on('presence', { event: 'join' }, options.onJoin);
        }
        if (options.onLeave) {
            channel.on('presence', { event: 'leave' }, options.onLeave);
        }
        if (options.onSync) {
            channel.on('presence', { event: 'sync' }, options.onSync);
        }
        
        channel.subscribe();
        return channel;
    }
    
    async broadcast(channel, event, payload) {
        await channel.send({
            type: 'broadcast',
            event,
            payload
        });
    }
    
    // ============ PRESENCE ============
    async trackPresence(channel, data) {
        await channel.track(data);
    }
    
    async untrackPresence(channel) {
        await channel.untrack();
    }
    
    getPresenceState(channel) {
        return channel.presenceState();
    }
    
    // ============ REACT HOOK HELPER ============
    createHook(table, event = '*', filter = null) {
        return function useRealtime() {
            const [data, setData] = useState([]);
            const [loading, setLoading] = useState(true);
            const [error, setError] = useState(null);
            
            useEffect(() => {
                // Fetch initial data
                const fetchData = async () => {
                    try {
                        let query = supabase.from(table).select('*');
                        if (filter) {
                            query = query.eq(filter.column, filter.value);
                        }
                        const { data: initialData, error } = await query;
                        if (error) throw error;
                        setData(initialData || []);
                    } catch (err) {
                        setError(err.message);
                    } finally {
                        setLoading(false);
                    }
                };
                fetchData();
                
                // Setup subscription
                const callback = (payload) => {
                    setData(currentData => {
                        switch (payload.eventType) {
                            case 'INSERT':
                                return [...currentData, payload.new];
                            case 'UPDATE':
                                return currentData.map(item =>
                                    item.id === payload.new.id ? payload.new : item
                                );
                            case 'DELETE':
                                return currentData.filter(item =>
                                    item.id !== payload.old.id
                                );
                            default:
                                return currentData;
                        }
                    });
                };
                
                const channel = this.subscribeToTable(table, event, callback, filter);
                
                return () => {
                    this.unsubscribe(table, event);
                };
            }, [table, event, filter]);
            
            return { data, loading, error };
        };
    }
}

// Export singleton
const realtime = new RealtimeManager();
export default realtime;

// ============================================
// React Components
// ============================================
// components/RealtimeList.jsx
function RealtimeList({ table, event = '*', filter = null }) {
    const { data, loading, error } = realtime.createHook(table, event, filter)();
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    
    return (
        <ul>
            {data.map(item => (
                <li key={item.id}>{JSON.stringify(item)}</li>
            ))}
        </ul>
    );
}

// components/Chat.jsx
function Chat() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [channel, setChannel] = useState(null);
    
    useEffect(() => {
        // Setup chat channel
        const chatChannel = realtime.createBroadcastChannel('chat', {
            onMessage: (payload) => {
                setMessages(prev => [...prev, payload.payload]);
            },
            onJoin: ({ key }) => {
                console.log('User joined:', key);
            },
            onLeave: ({ key }) => {
                console.log('User left:', key);
            },
            onSync: () => {
                const presence = realtime.getPresenceState(chatChannel);
                console.log('Presence:', presence);
            }
        });
        
        setChannel(chatChannel);
        
        // Track user presence
        supabase.auth.getUser().then(({ data }) => {
            if (data.user) {
                realtime.trackPresence(chatChannel, {
                    userId: data.user.id,
                    username: data.user.email,
                    online: true
                });
            }
        });
        
        return () => {
            chatChannel.unsubscribe();
        };
    }, []);
    
    const sendMessage = async () => {
        if (!input.trim() || !channel) return;
        
        const user = await supabase.auth.getUser();
        await realtime.broadcast(channel, 'message', {
            id: Date.now(),
            userId: user.data.user.id,
            username: user.data.user.email,
            content: input,
            timestamp: new Date().toISOString()
        });
        
        setInput('');
    };
    
    return (
        <div className="chat">
            <div className="messages">
                {messages.map((msg, i) => (
                    <div key={i}>
                        <strong>{msg.username}:</strong> {msg.content}
                    </div>
                ))}
            </div>
            <div>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}

// components/ActiveUsers.jsx
function ActiveUsers() {
    const [presence, setPresence] = useState({});
    const [channel, setChannel] = useState(null);
    
    useEffect(() => {
        const presenceChannel = supabase.channel('presence');
        
        presenceChannel
            .on('presence', { event: 'sync' }, () => {
                const state = presenceChannel.presenceState();
                setPresence(state);
            })
            .subscribe();
        
        setChannel(presenceChannel);
        
        // Track current user
        supabase.auth.getUser().then(({ data }) => {
            if (data.user) {
                presenceChannel.track({
                    userId: data.user.id,
                    username: data.user.email,
                    lastSeen: new Date().toISOString()
                });
            }
        });
        
        return () => {
            presenceChannel.unsubscribe();
        };
    }, []);
    
    const onlineCount = Object.keys(presence).length;
    
    return (
        <div>
            <h3>Online Users ({onlineCount})</h3>
            <ul>
                {Object.entries(presence).map(([key, users]) => (
                    <li key={key}>
                        {users.map(user => user.username).join(', ')}
                    </li>
                ))}
            </ul>
        </div>
    );
}`,
      language: "javascript"
    }
  ]
};