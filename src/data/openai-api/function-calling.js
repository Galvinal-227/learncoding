export const chapter = {
  slug: "openai-api-function-calling",
  title: "Function Calling",
  description: "Gunakan Function Calling untuk menghubungkan GPT dengan tools dan API eksternal.",
  icon: "SiOpenai",
  color: "#10A37F",
  difficulty: "Advanced",
  estimatedReadingTime: 25,
  prerequisites: ["openai-api-chat"],
  tags: ["openai", "function-calling", "tools", "agents"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Function Calling?

Function Calling memungkinkan GPT memanggil **fungsi eksternal** (API, database, kalkulasi). GPT tidak menjalankan fungsi, tapi **memberi tahu fungsi apa yang harus dipanggil**.

## Basic Function Calling

\`\`\`javascript
const tools = [{
    type: 'function',
    function: {
        name: 'get_weather',
        description: 'Get current weather for a city',
        parameters: {
            type: 'object',
            properties: {
                city: { type: 'string', description: 'City name' },
                unit: { type: 'string', enum: ['celsius', 'fahrenheit'] }
            },
            required: ['city']
        }
    }
}];

const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [{ role: 'user', content: 'Bagaimana cuaca di Jakarta?' }],
    tools
});

// GPT tidak menjawab, tapi memberi function call
const toolCall = response.choices[0].message.tool_calls[0];
console.log(toolCall.function.name);      // 'get_weather'
console.log(toolCall.function.arguments); // '{"city":"Jakarta"}'
\`\`\`

## Complete Flow

\`\`\`javascript
async function chatWithTools(userMessage) {
    const messages = [{ role: 'user', content: userMessage }];
    
    // Step 1: Dapatkan function call
    const response = await openai.chat.completions.create({
        model: 'gpt-4o',
        messages,
        tools
    });
    
    const toolCalls = response.choices[0].message.tool_calls;
    
    if (toolCalls) {
        for (const toolCall of toolCalls) {
            const args = JSON.parse(toolCall.function.arguments);
            
            // Step 2: Eksekusi fungsi aktual
            const result = await executeFunction(toolCall.function.name, args);
            
            // Step 3: Kirim hasil kembali ke GPT
            messages.push({
                role: 'tool',
                tool_call_id: toolCall.id,
                content: JSON.stringify(result)
            });
        }
        
        // Step 4: Dapatkan final response
        const finalResponse = await openai.chat.completions.create({
            model: 'gpt-4o',
            messages
        });
        
        return finalResponse.choices[0].message.content;
    }
}

async function executeFunction(name, args) {
    const functions = {
        get_weather: ({ city }) => ({ city, temp: 30, humidity: 70 }),
        get_time: ({ timezone }) => ({ time: new Date().toISOString() })
    };
    return functions[name](args);
}
\`\`\`

## Multiple Functions

\`\`\`javascript
const tools = [
    {
        type: 'function',
        function: {
            name: 'search_products',
            description: 'Search products in catalog',
            parameters: {
                type: 'object',
                properties: {
                    query: { type: 'string' },
                    max_price: { type: 'number' },
                    category: { type: 'string' }
                },
                required: ['query']
            }
        }
    },
    {
        type: 'function',
        function: {
            name: 'create_order',
            description: 'Create a new order',
            parameters: {
                type: 'object',
                properties: {
                    product_id: { type: 'string' },
                    quantity: { type: 'number' },
                    customer_email: { type: 'string' }
                },
                required: ['product_id', 'quantity']
            }
        }
    }
];
\`\`\`
  `,

  quiz: [
    { question: "Function Calling: GPT eksekusi?", options: ["Ya", "Tidak (GPT hanya memberi tahu fungsi apa yang harus dipanggil)", "Langsung", "Otomatis"], correctAnswer: 1 },
    { question: "role: 'tool'?", options: ["User", "Kirim hasil eksekusi fungsi ke GPT", "System", "Assistant"], correctAnswer: 1 }
  ],

  codeExamples: []
};