export const chapter = {
  slug: "actions",
  title: "Actions & Events",
  description: "Menggunakan Actions untuk menangkap dan menampilkan event dari komponen di Storybook.",
  icon: "SiStorybook",
  color: "#FF4785",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["storybook-introduction", "storybook-stories"],
  tags: ["storybook", "actions", "events", "interaction"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Actions?

Actions adalah fitur Storybook yang menangkap event yang terjadi pada komponen dan menampilkannya di panel Actions.

## Basic Actions

### 1. Action with argTypes
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

### 2. Action with Regex Pattern
\`\`\`jsx
export default {
    title: 'Components/Button',
    component: Button,
    parameters: {
        actions: {
            argTypesRegex: '^on[A-Z].*' // Catches all props starting with 'on'
        }
    }
};
\`\`\`

### 3. Action Handler
\`\`\`jsx
import { action } from '@storybook/addon-actions';

export const WithAction = {
    args: {
        onClick: action('button-clicked'),
        onHover: action('button-hovered')
    }
};
\`\`\`

## Action Types

### 1. Click Actions
\`\`\`jsx
argTypes: {
    onClick: { action: 'click' },
    onDoubleClick: { action: 'double-click' },
    onRightClick: { action: 'right-click' }
}
\`\`\`

### 2. Form Actions
\`\`\`jsx
argTypes: {
    onChange: { action: 'changed' },
    onFocus: { action: 'focused' },
    onBlur: { action: 'blurred' },
    onSubmit: { action: 'submitted' },
    onReset: { action: 'reset' }
}
\`\`\`

### 3. Navigation Actions
\`\`\`jsx
argTypes: {
    onNavigate: { action: 'navigate' },
    onRouteChange: { action: 'route-change' },
    onLinkClick: { action: 'link-click' }
}
\`\`\`

### 4. Data Actions
\`\`\`jsx
argTypes: {
    onDataChange: { action: 'data-change' },
    onItemSelect: { action: 'item-select' },
    onItemDelete: { action: 'item-delete' },
    onItemUpdate: { action: 'item-update' }
}
\`\`\`

## Advanced Actions

### 1. Action with Data
\`\`\`jsx
import { action } from '@storybook/addon-actions';

export const WithData = {
    args: {
        onClick: (data) => {
            action('clicked')(data);
            console.log('Data:', data);
        }
    }
};
\`\`\`

### 2. Multiple Actions
\`\`\`jsx
export const MultipleActions = {
    args: {
        onAdd: action('add'),
        onEdit: action('edit'),
        onDelete: action('delete'),
        onCopy: action('copy'),
        onMove: action('move')
    }
};
\`\`\`

### 3. Async Actions
\`\`\`jsx
export const AsyncAction = {
    args: {
        onClick: async (data) => {
            action('click-started')(data);
            await new Promise(resolve => setTimeout(resolve, 1000));
            action('click-completed')(data);
        }
    }
};
\`\`\`

### 4. Action with Payload
\`\`\`jsx
export const WithPayload = {
    args: {
        onItemClick: (id, name) => {
            action('item-clicked')({ id, name, timestamp: new Date().toISOString() });
        }
    }
};
\`\`\`

## Action Configuration

### 1. Global Configuration
\`\`\`jsx
// preview.js
export const parameters = {
    actions: {
        argTypesRegex: '^on[A-Z].*',
        handles: ['mouseenter', 'mouseleave', 'click']
    }
};
\`\`\`

### 2. Story-Specific Configuration
\`\`\`jsx
export const WithConfig = {
    args: {
        onClick: action('click')
    },
    parameters: {
        actions: {
            argTypesRegex: '^on[A-Z].*'
        }
    }
};
\`\`\`

## Actions Panel

### Action Output Format
\`\`\`
▼ Button clicked
  args: { label: "Button", variant: "primary" }
  event: { type: "click", target: "button" }
  timestamp: "2024-01-01T00:00:00.000Z"
\`\`\`

### Clearing Actions
\`\`\`jsx
// Clear actions programmatically
import { clearActions } from '@storybook/addon-actions';

export const ClearActions = {
    play: () => {
        setTimeout(clearActions, 5000);
    }
};
\`\`\`

## Best Practices

### 1. Use Consistent Names
\`\`\`jsx
// ✅ Consistent naming
onClick: { action: 'click' }
onChange: { action: 'change' }
onSubmit: { action: 'submit' }

// ❌ Inconsistent naming
onClick: { action: 'button-clicked' }
onChange: { action: 'input-change' }
\`\`\`

### 2. Include Relevant Data
\`\`\`jsx
// ✅ Include data
onClick: (item) => action('clicked')({ id: item.id, name: item.name })

// ❌ No data
onClick: () => action('clicked')()
\`\`\`

### 3. Use Regex for Common Patterns
\`\`\`jsx
// ✅ Regex pattern
parameters: {
    actions: {
        argTypesRegex: '^on[A-Z].*'
    }
}

// ❌ Manual for each
argTypes: {
    onClick: { action: 'click' },
    onChange: { action: 'change' },
    // ... many more
}
\`\`\`

### 4. Group Related Actions
\`\`\`jsx
// ✅ Group actions
argTypes: {
    // Navigation
    onNavigate: { action: 'navigate' },
    onBack: { action: 'back' },
    
    // Form
    onSubmit: { action: 'submit' },
    onCancel: { action: 'cancel' }
}
\`\`\`
  `,
  quiz: [
    {
      question: "Fungsi Actions di Storybook adalah?",
      options: [
        "Menghubungkan API",
        "Menangkap event komponen",
        "Mengelola state",
        "Membuat animasi"
      ],
      correctAnswer: 1
    },
    {
      question: "Pattern regex untuk actions biasanya?",
      options: [
        "^on[A-Z].*",
        "^handle[A-Z].*",
        "^event[A-Z].*",
        "^action[A-Z].*"
      ],
      correctAnswer: 0
    },
    {
      question: "Import untuk action helper adalah?",
      options: [
        "@storybook/actions",
        "@storybook/addon-actions",
        "@storybook/action",
        "@storybook/event"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Complete Actions Example",
      code: `// src/components/Table/Table.jsx
import React from 'react';
import './Table.css';

export const Table = ({
    data = [],
    columns = [],
    onRowClick,
    onCellClick,
    onSort,
    onSelect,
    onDelete,
    onEdit,
    selectable = false,
    sortable = false
}) => {
    const [selected, setSelected] = React.useState([]);
    const [sortField, setSortField] = React.useState(null);
    const [sortDirection, setSortDirection] = React.useState('asc');
    
    const handleSort = (field) => {
        const direction = sortField === field && sortDirection === 'asc' ? 'desc' : 'asc';
        setSortField(field);
        setSortDirection(direction);
        if (onSort) onSort(field, direction);
    };
    
    const handleSelect = (id) => {
        const newSelected = selected.includes(id)
            ? selected.filter(item => item !== id)
            : [...selected, id];
        setSelected(newSelected);
        if (onSelect) onSelect(newSelected);
    };
    
    const handleRowClick = (row, index) => {
        if (onRowClick) onRowClick(row, index);
    };
    
    return (
        <div className="table-container">
            <table className="table">
                <thead>
                    <tr>
                        {selectable && (
                            <th>
                                <input
                                    type="checkbox"
                                    checked={selected.length === data.length}
                                    onChange={() => {
                                        const allSelected = selected.length === data.length;
                                        setSelected(allSelected ? [] : data.map(d => d.id));
                                        if (onSelect) onSelect(allSelected ? [] : data.map(d => d.id));
                                    }}
                                />
                            </th>
                        )}
                        {columns.map(col => (
                            <th
                                key={col.field}
                                className={sortable ? 'sortable' : ''}
                                onClick={() => sortable && handleSort(col.field)}
                            >
                                {col.label}
                                {sortable && sortField === col.field && (
                                    <span className="sort-icon">
                                        {sortDirection === 'asc' ? ' ↑' : ' ↓'}
                                    </span>
                                )}
                            </th>
                        ))}
                        {(onEdit || onDelete) && <th>Actions</th>}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr
                            key={row.id}
                            className={selected.includes(row.id) ? 'selected' : ''}
                            onClick={() => handleRowClick(row, index)}
                        >
                            {selectable && (
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={selected.includes(row.id)}
                                        onChange={() => handleSelect(row.id)}
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                </td>
                            )}
                            {columns.map(col => (
                                <td
                                    key={col.field}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        if (onCellClick) onCellClick(row, col.field);
                                    }}
                                >
                                    {col.render ? col.render(row[col.field], row) : row[col.field]}
                                </td>
                            ))}
                            {(onEdit || onDelete) && (
                                <td>
                                    <button
                                        className="btn-edit"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            if (onEdit) onEdit(row);
                                        }}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn-delete"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            if (onDelete) onDelete(row.id);
                                        }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// src/components/Table/Table.stories.jsx
import { Table } from './Table';
import { action } from '@storybook/addon-actions';

const sampleData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'Active', role: 'Editor' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', status: 'Pending', role: 'User' },
    { id: 5, name: 'Charlie Davis', email: 'charlie@example.com', status: 'Active', role: 'Admin' }
];

const columns = [
    { field: 'id', label: 'ID' },
    { field: 'name', label: 'Name' },
    { field: 'email', label: 'Email' },
    { 
        field: 'status', 
        label: 'Status',
        render: (value) => (
            <span className={\`status-badge status-\${value.toLowerCase()}\`}>
                {value}
            </span>
        )
    },
    { field: 'role', label: 'Role' }
];

export default {
    title: 'Components/Table',
    component: Table,
    tags: ['autodocs'],
    args: {
        data: sampleData,
        columns,
        selectable: true,
        sortable: true
    },
    
    // Actions configuration
    parameters: {
        actions: {
            argTypesRegex: '^on[A-Z].*'
        }
    },
    
    argTypes: {
        // Action controls
        onRowClick: { action: 'row-clicked' },
        onCellClick: { action: 'cell-clicked' },
        onSort: { action: 'sorted' },
        onSelect: { action: 'selected' },
        onDelete: { action: 'deleted' },
        onEdit: { action: 'edited' }
    }
};

// 1. Default Table
export const Default = {
    args: {
        data: sampleData,
        columns
    }
};

// 2. With Interactions
export const WithInteractions = {
    args: {
        data: sampleData,
        columns,
        onRowClick: action('row-clicked'),
        onCellClick: action('cell-clicked'),
        onSort: action('sorted'),
        onSelect: action('selected'),
        onDelete: action('deleted'),
        onEdit: action('edited')
    }
};

// 3. Complex Actions
export const ComplexActions = {
    args: {
        data: sampleData,
        columns,
        onRowClick: (row, index) => {
            action('row-clicked')({ row, index, timestamp: new Date().toISOString() });
        },
        onDelete: (id) => {
            action('deleted')({ id, timestamp: new Date().toISOString() });
            alert(\`Delete user \${id}\`);
        },
        onEdit: (row) => {
            action('edited')({ row, timestamp: new Date().toISOString() });
            alert(\`Edit user \${row.name}\`);
        },
        onSelect: (selected) => {
            action('selected')({ selected, count: selected.length, timestamp: new Date().toISOString() });
        },
        onSort: (field, direction) => {
            action('sorted')({ field, direction, timestamp: new Date().toISOString() });
        }
    }
};

// 4. Async Actions
export const AsyncActions = {
    args: {
        data: sampleData,
        columns,
        onDelete: async (id) => {
            action('delete-started')({ id, timestamp: new Date().toISOString() });
            await new Promise(resolve => setTimeout(resolve, 2000));
            action('delete-completed')({ id, timestamp: new Date().toISOString() });
            alert(\`Deleted user \${id} (simulated)\`);
        },
        onEdit: async (row) => {
            action('edit-started')({ row, timestamp: new Date().toISOString() });
            await new Promise(resolve => setTimeout(resolve, 1000));
            action('edit-completed')({ row, timestamp: new Date().toISOString() });
        }
    }
};

// 5. Story with Play Function
export const WithPlay = {
    args: {
        data: sampleData,
        columns
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        
        await step('Click first row', async () => {
            const firstRow = canvas.getByText('John Doe').closest('tr');
            await userEvent.click(firstRow);
        });
        
        await step('Sort by name', async () => {
            const nameHeader = canvas.getByText('Name');
            await userEvent.click(nameHeader);
        });
        
        await step('Select first row', async () => {
            const checkbox = canvas.getAllByRole('checkbox')[1];
            await userEvent.click(checkbox);
        });
    }
};

// 6. All Actions Demo
export const AllActionsDemo = {
    render: () => {
        const [data, setData] = React.useState(sampleData);
        
        const handleDelete = (id) => {
            action('delete')({ id });
            setData(data.filter(item => item.id !== id));
        };
        
        const handleEdit = (row) => {
            action('edit')({ row });
            alert(\`Edit: \${row.name}\`);
        };
        
        const handleSort = (field, direction) => {
            action('sort')({ field, direction });
            const sorted = [...data].sort((a, b) => {
                if (a[field] < b[field]) return direction === 'asc' ? -1 : 1;
                if (a[field] > b[field]) return direction === 'asc' ? 1 : -1;
                return 0;
            });
            setData(sorted);
        };
        
        return (
            <div>
                <Table
                    data={data}
                    columns={columns}
                    onRowClick={(row) => action('row-click')({ row })}
                    onCellClick={(row, field) => action('cell-click')({ row, field })}
                    onSort={handleSort}
                    onSelect={(selected) => action('select')({ selected })}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                    selectable
                    sortable
                />
                <div style={{ marginTop: '20px', padding: '10px', background: '#f5f5f5', borderRadius: '4px' }}>
                    <strong>Actions Panel:</strong> Check the Actions tab below to see all events!
                </div>
            </div>
        );
    }
};`,
      language: "jsx"
    }
  ]
};