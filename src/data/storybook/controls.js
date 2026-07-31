export const chapter = {
  slug: "controls",
  title: "Controls & Args",
  description: "Menggunakan Controls dan Args untuk interaksi dengan props komponen di Storybook.",
  icon: "SiStorybook",
  color: "#FF4785",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["storybook-introduction", "storybook-stories"],
  tags: ["storybook", "controls", "args", "interaction"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Controls?

Controls adalah fitur Storybook yang memungkinkan user untuk mengubah props komponen secara real-time melalui UI.

## Basic Controls

\`\`\`jsx
export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        // Control types
        label: {
            control: 'text'
        },
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'danger']
        },
        size: {
            control: 'radio',
            options: ['small', 'medium', 'large']
        },
        disabled: {
            control: 'boolean'
        },
        count: {
            control: 'number'
        },
        onClick: {
            action: 'clicked'
        }
    }
};
\`\`\`

## Control Types

### 1. Text
\`\`\`jsx
label: {
    control: 'text',
    description: 'Button label text'
}

// Default value
label: {
    control: 'text',
    defaultValue: 'Click Me'
}
\`\`\`

### 2. Number
\`\`\`jsx
count: {
    control: 'number',
    min: 0,
    max: 100,
    step: 1
}

// With default
count: {
    control: {
        type: 'number',
        min: 0,
        max: 100
    },
    defaultValue: 10
}
\`\`\`

### 3. Select
\`\`\`jsx
variant: {
    control: 'select',
    options: ['primary', 'secondary', 'danger', 'success', 'warning']
}

// With labels
variant: {
    control: 'select',
    options: [
        { value: 'primary', label: 'Primary' },
        { value: 'secondary', label: 'Secondary' },
        { value: 'danger', label: 'Danger' }
    ]
}
\`\`\`

### 4. Radio
\`\`\`jsx
size: {
    control: 'radio',
    options: ['small', 'medium', 'large']
}
\`\`\`

### 5. Boolean (Checkbox)
\`\`\`jsx
disabled: {
    control: 'boolean'
}

loading: {
    control: 'boolean',
    defaultValue: false
}
\`\`\`

### 6. Color
\`\`\`jsx
color: {
    control: 'color',
    defaultValue: '#FF4785'
}

background: {
    control: 'color',
    description: 'Background color'
}
\`\`\`

### 7. Date
\`\`\`jsx
date: {
    control: 'date',
    description: 'Select a date'
}
\`\`\`

### 8. Array
\`\`\`jsx
items: {
    control: 'array',
    separator: ',',
    defaultValue: ['item1', 'item2']
}

// Object
config: {
    control: 'object',
    defaultValue: {
        theme: 'light',
        size: 'medium'
    }
}
\`\`\`

### 9. Range (Slider)
\`\`\`jsx
progress: {
    control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1
    },
    defaultValue: 50
}
\`\`\`

## Advanced Controls

### 1. Conditional Controls
\`\`\`jsx
argTypes: {
    variant: {
        control: 'select',
        options: ['primary', 'secondary', 'danger']
    },
    size: {
        control: 'select',
        options: ['small', 'medium', 'large'],
        // Only show if variant is 'primary'
        if: { arg: 'variant', eq: 'primary' }
    }
}
\`\`\`

### 2. Custom Control
\`\`\`jsx
import { Select } from '@storybook/components';

argTypes: {
    theme: {
        control: {
            type: 'select',
            options: ['light', 'dark', 'auto'],
            labels: {
                light: 'Light Mode',
                dark: 'Dark Mode',
                auto: 'Auto (System)'
            }
        }
    }
}
\`\`\`

### 3. Control with Description
\`\`\`jsx
argTypes: {
    label: {
        control: 'text',
        description: 'The text displayed on the button',
        table: {
            type: { summary: 'string' },
            defaultValue: { summary: 'Button' }
        }
    }
}
\`\`\`

## Args

### Basic Args
\`\`\`jsx
// Default args
export default {
    title: 'Components/Button',
    component: Button,
    args: {
        label: 'Button',
        variant: 'primary',
        size: 'medium'
    }
};

// Override args in stories
export const Primary = {
    args: {
        label: 'Primary Button'
    }
};
\`\`\`

### Args for Different Stories
\`\`\`jsx
export const Small = {
    args: {
        size: 'small',
        label: 'Small Button'
    }
};

export const Large = {
    args: {
        size: 'large',
        label: 'Large Button'
    }
};

export const Disabled = {
    args: {
        disabled: true,
        label: 'Disabled Button'
    }
};
\`\`\`

### Args with Actions
\`\`\`jsx
export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        onClick: { action: 'clicked' },
        onMouseEnter: { action: 'hovered' },
        onMouseLeave: { action: 'unhovered' }
    }
};
\`\`\`

## Control Matchers

\`\`\`jsx
// Automatic control type detection
export const parameters = {
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    }
};

// This will automatically use color picker for props ending with 'color'
// and date picker for props ending with 'Date'
\`\`\`

## Control Presets

\`\`\`jsx
// Reusable control presets
const colorControl = {
    control: 'color',
    description: 'Color selection'
};

const sizeControl = {
    control: 'select',
    options: ['small', 'medium', 'large']
};

// Usage
export default {
    title: 'Components/Card',
    component: Card,
    argTypes: {
        backgroundColor: {
            ...colorControl,
            description: 'Card background color'
        },
        borderColor: {
            ...colorControl,
            description: 'Card border color'
        },
        size: sizeControl
    }
};
\`\`\`

## Control Groups

\`\`\`jsx
export default {
    title: 'Components/Card',
    component: Card,
    argTypes: {
        // Group: Appearance
        variant: {
            control: 'select',
            options: ['default', 'elevated', 'outlined'],
            table: {
                category: 'Appearance'
            }
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
            table: {
                category: 'Appearance'
            }
        },
        
        // Group: Content
        title: {
            control: 'text',
            table: {
                category: 'Content'
            }
        },
        description: {
            control: 'text',
            table: {
                category: 'Content'
            }
        },
        
        // Group: Interaction
        onClick: {
            action: 'clicked',
            table: {
                category: 'Interaction'
            }
        }
    }
};
\`\`\`

## Best Practices

### 1. Define Controls for Complex Props
\`\`\`jsx
// ✅ Define control
variant: {
    control: 'select',
    options: ['primary', 'secondary', 'danger']
}

// ❌ Default control might not be ideal
variant: {
    // No control defined - will show as text input
}
\`\`\`

### 2. Set Default Args
\`\`\`jsx
// ✅ Set defaults
export default {
    component: Button,
    args: {
        label: 'Button',
        variant: 'primary'
    }
};

// ❌ No defaults
export default {
    component: Button
};
\`\`\`

### 3. Use Actions for Events
\`\`\`jsx
// ✅ Use actions
onClick: { action: 'clicked' }

// ❌ No action defined
onClick: { control: false }
\`\`\`

### 4. Group Related Controls
\`\`\`jsx
// ✅ Group by category
table: {
    category: 'Appearance'
}

// ❌ All controls mixed together
\`\`\`

### 5. Provide Helpful Descriptions
\`\`\`jsx
// ✅ With description
label: {
    control: 'text',
    description: 'The text displayed on the button'
}

// ❌ No description
label: {
    control: 'text'
}
\`\`\`
  `,
  quiz: [
    {
      question: "Control type untuk memilih dari beberapa pilihan adalah?",
      options: [
        "text",
        "select",
        "boolean",
        "number"
      ],
      correctAnswer: 1
    },
    {
      question: "Control type untuk warna adalah?",
      options: [
        "text",
        "select",
        "color",
        "range"
      ],
      correctAnswer: 2
    },
    {
      question: "Arg yang digunakan untuk event handler adalah?",
      options: [
        "action",
        "handler",
        "event",
        "function"
      ],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Complete Controls Example",
      code: `// src/components/Form/Form.jsx
import React, { useState } from 'react';
import './Form.css';

export const Form = ({
    label,
    placeholder,
    value: initialValue = '',
    type = 'text',
    size = 'medium',
    variant = 'default',
    disabled = false,
    required = false,
    error = '',
    helperText = '',
    onChange,
    onFocus,
    onBlur
}) => {
    const [value, setValue] = useState(initialValue);
    const [focused, setFocused] = useState(false);
    
    const className = \`form-input form-input-\${variant} form-input-\${size} \${error ? 'has-error' : ''} \${focused ? 'is-focused' : ''}\`;
    
    const handleChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);
        if (onChange) onChange(newValue);
    };
    
    return (
        <div className="form-group">
            {label && <label className="form-label">{label}</label>}
            <input
                type={type}
                className={className}
                placeholder={placeholder}
                value={value}
                disabled={disabled}
                required={required}
                onChange={handleChange}
                onFocus={(e) => { setFocused(true); if (onFocus) onFocus(e); }}
                onBlur={(e) => { setFocused(false); if (onBlur) onBlur(e); }}
            />
            {error && <span className="form-error">{error}</span>}
            {helperText && !error && <span className="form-helper">{helperText}</span>}
        </div>
    );
};

// src/components/Form/Form.stories.jsx
import { Form } from './Form';

export default {
    title: 'Components/Form/Input',
    component: Form,
    tags: ['autodocs'],
    
    // Default args
    args: {
        label: 'Email',
        placeholder: 'Enter your email',
        type: 'email',
        size: 'medium',
        variant: 'default',
        disabled: false,
        required: false,
        error: '',
        helperText: 'We will never share your email'
    },
    
    // Controls configuration
    argTypes: {
        // 1. Text Control
        label: {
            control: 'text',
            description: 'Label text for the input',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Input Label' },
                category: 'Content'
            }
        },
        
        placeholder: {
            control: 'text',
            description: 'Placeholder text',
            table: {
                category: 'Content'
            }
        },
        
        // 2. Select Control
        type: {
            control: 'select',
            options: ['text', 'email', 'password', 'number', 'tel', 'url'],
            description: 'Input type attribute',
            table: {
                category: 'Behavior',
                type: { summary: 'string' },
                defaultValue: { summary: 'text' }
            }
        },
        
        // 3. Select Control with Labels
        size: {
            control: {
                type: 'select',
                labels: {
                    small: 'Small',
                    medium: 'Medium',
                    large: 'Large'
                }
            },
            options: ['small', 'medium', 'large'],
            description: 'Input size variant',
            table: {
                category: 'Appearance',
                defaultValue: { summary: 'medium' }
            }
        },
        
        variant: {
            control: 'radio',
            options: ['default', 'outlined', 'filled', 'underline'],
            description: 'Input visual variant',
            table: {
                category: 'Appearance',
                defaultValue: { summary: 'default' }
            }
        },
        
        // 4. Boolean Control
        disabled: {
            control: 'boolean',
            description: 'Disable the input',
            table: {
                category: 'State',
                defaultValue: { summary: 'false' }
            }
        },
        
        required: {
            control: 'boolean',
            description: 'Make the input required',
            table: {
                category: 'Validation',
                defaultValue: { summary: 'false' }
            }
        },
        
        // 5. Text Control for Error
        error: {
            control: 'text',
            description: 'Error message (shows when present)',
            table: {
                category: 'Validation'
            }
        },
        
        helperText: {
            control: 'text',
            description: 'Helper text below the input',
            table: {
                category: 'Content'
            }
        },
        
        // 6. Number Control with Range
        value: {
            control: {
                type: 'text',
                description: 'Initial value'
            },
            table: {
                category: 'Value'
            }
        },
        
        // 7. Actions
        onChange: {
            action: 'changed',
            description: 'Called when input value changes',
            table: {
                category: 'Events'
            }
        },
        
        onFocus: {
            action: 'focused',
            description: 'Called when input receives focus',
            table: {
                category: 'Events'
            }
        },
        
        onBlur: {
            action: 'blurred',
            description: 'Called when input loses focus',
            table: {
                category: 'Events'
            }
        }
    }
};

// 1. Default Story
export const Default = {
    args: {
        label: 'Default Input',
        placeholder: 'Type something...'
    }
};

// 2. All Variants
export const Variants = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '400px' }}>
            <Form label="Default" placeholder="Default variant" variant="default" />
            <Form label="Outlined" placeholder="Outlined variant" variant="outlined" />
            <Form label="Filled" placeholder="Filled variant" variant="filled" />
            <Form label="Underline" placeholder="Underline variant" variant="underline" />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'All available input variants.'
            }
        }
    }
};

// 3. All Sizes
export const Sizes = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '400px' }}>
            <Form label="Small" placeholder="Small size" size="small" />
            <Form label="Medium" placeholder="Medium size" size="medium" />
            <Form label="Large" placeholder="Large size" size="large" />
        </div>
    )
};

// 4. States
export const States = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '400px' }}>
            <Form label="Default" placeholder="Default state" />
            <Form label="Focused" placeholder="Focused state" />
            <Form label="Filled" placeholder="Filled state" value="Filled value" />
            <Form label="Disabled" placeholder="Disabled state" disabled />
            <Form label="Required" placeholder="Required state" required />
            <Form label="Error" placeholder="Error state" error="This field is required" />
            <Form label="Success" placeholder="Success state" helperText="✓ Looks good!" />
        </div>
    )
};

// 5. Interactive Story with Play
export const Interactive = {
    args: {
        label: 'Interactive Input',
        placeholder: 'Type here...'
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        
        await step('Type in input', async () => {
            const input = canvas.getByPlaceholderText('Type here...');
            await userEvent.type(input, 'Hello World');
        });
        
        await step('Clear input', async () => {
            const input = canvas.getByPlaceholderText('Type here...');
            await userEvent.clear(input);
        });
    }
};

// 6. Form Example (Multiple Inputs)
export const LoginForm = {
    render: () => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [error, setError] = useState('');
        
        const handleSubmit = (e) => {
            e.preventDefault();
            if (!email || !password) {
                setError('Please fill in all fields');
                return;
            }
            setError('');
            alert('Form submitted!');
        };
        
        return (
            <form onSubmit={handleSubmit} style={{ maxWidth: '400px', padding: '20px' }}>
                <h2 style={{ marginBottom: '20px' }}>Login</h2>
                <Form
                    label="Email"
                    placeholder="Enter email"
                    type="email"
                    value={email}
                    onChange={setEmail}
                    required
                    error={error}
                />
                <Form
                    label="Password"
                    placeholder="Enter password"
                    type="password"
                    value={password}
                    onChange={setPassword}
                    required
                />
                <button 
                    type="submit" 
                    style={{
                        marginTop: '20px',
                        padding: '10px 20px',
                        background: '#FF4785',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        width: '100%'
                    }}
                >
                    Login
                </button>
            </form>
        );
    },
    parameters: {
        docs: {
            description: {
                story: 'Complete login form with validation.'
            }
        }
    }
};

// 7. All Input Types
export const InputTypes = {
    render: () => (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', maxWidth: '800px' }}>
            <Form label="Text" placeholder="Text input" type="text" />
            <Form label="Email" placeholder="Email input" type="email" />
            <Form label="Password" placeholder="Password input" type="password" />
            <Form label="Number" placeholder="Number input" type="number" />
            <Form label="Tel" placeholder="Phone input" type="tel" />
            <Form label="URL" placeholder="URL input" type="url" />
        </div>
    )
};

// 8. With Custom Controls (ArgTypes showcase)
export const CustomControls = {
    args: {
        label: 'Custom Controls Demo',
        placeholder: 'Try all controls!'
    },
    parameters: {
        docs: {
            description: {
                story: 'This story showcases all available control types. Try changing the arguments in the Controls panel below!'
            }
        }
    }
};`,
      language: "jsx"
    }
  ]
};