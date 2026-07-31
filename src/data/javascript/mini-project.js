export const chapter = {
  slug: "javascript-mini-project",
  title: "Proyek Mini JavaScript",
  description: "Bangun aplikasi To-Do List lengkap dengan JavaScript vanilla.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Intermediate",
  estimatedReadingTime: 45,
  prerequisites: ["javascript-best-practices"],
  tags: ["javascript", "proyek", "dom", "todo"],
  order: 35,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Proyek: Aplikasi To-Do List

Bangun aplikasi To-Do List lengkap dengan fitur CRUD dan Local Storage.
  `,

  quiz: [],

  codeExamples: [
    {
      title: "To-Do List App Lengkap",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List App</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', sans-serif; background: #f0f2f5; display: flex; justify-content: center; padding: 40px 20px; }
        .app { background: white; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); padding: 30px; max-width: 500px; width: 100%; }
        h1 { text-align: center; color: #333; margin-bottom: 20px; }
        .input-group { display: flex; gap: 10px; margin-bottom: 20px; }
        #todoInput { flex: 1; padding: 12px 16px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 1rem; }
        #todoInput:focus { outline: none; border-color: #F7DF1E; }
        .btn { padding: 12px 20px; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; transition: 0.3s; }
        .btn-add { background: #F7DF1E; color: #333; }
        .btn-add:hover { background: #e6c800; }
        .filters { display: flex; gap: 10px; margin-bottom: 15px; justify-content: center; }
        .filter-btn { background: #f0f0f0; padding: 8px 16px; }
        .filter-btn.active { background: #333; color: white; }
        .todo-list { list-style: none; }
        .todo-item { display: flex; align-items: center; padding: 12px; border-bottom: 1px solid #f0f0f0; gap: 10px; transition: 0.3s; }
        .todo-item:hover { background: #fafafa; }
        .todo-item.completed .todo-text { text-decoration: line-through; color: #999; }
        .todo-text { flex: 1; cursor: pointer; }
        .btn-delete { background: #ff4444; color: white; padding: 6px 12px; font-size: 12px; }
        .stats { text-align: center; color: #666; margin-top: 20px; font-size: 14px; }
    </style>
</head>
<body>
    <div class="app">
        <h1>📝 To-Do List</h1>
        
        <div class="input-group">
            <input type="text" id="todoInput" placeholder="Tambah tugas baru..." autofocus>
            <button class="btn btn-add" onclick="addTodo()">Tambah</button>
        </div>
        
        <div class="filters">
            <button class="btn filter-btn active" onclick="setFilter('all')">Semua</button>
            <button class="btn filter-btn" onclick="setFilter('active')">Aktif</button>
            <button class="btn filter-btn" onclick="setFilter('completed')">Selesai</button>
        </div>
        
        <ul class="todo-list" id="todoList"></ul>
        
        <div class="stats" id="stats"></div>
    </div>
    
    <script>
        let todos = JSON.parse(localStorage.getItem('todos')) || [];
        let filter = 'all';
        
        function saveTodos() {
            localStorage.setItem('todos', JSON.stringify(todos));
        }
        
        function addTodo() {
            const input = document.getElementById('todoInput');
            const text = input.value.trim();
            if (!text) return;
            
            todos.push({ id: Date.now(), text, completed: false });
            input.value = '';
            saveTodos();
            render();
        }
        
        function toggleTodo(id) {
            const todo = todos.find(t => t.id === id);
            if (todo) todo.completed = !todo.completed;
            saveTodos();
            render();
        }
        
        function deleteTodo(id) {
            todos = todos.filter(t => t.id !== id);
            saveTodos();
            render();
        }
        
        function setFilter(f) {
            filter = f;
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            document.querySelector(\`[onclick="setFilter('\${f}')"]\`).classList.add('active');
            render();
        }
        
        function render() {
            const filtered = todos.filter(t => {
                if (filter === 'active') return !t.completed;
                if (filter === 'completed') return t.completed;
                return true;
            });
            
            const list = document.getElementById('todoList');
            list.innerHTML = filtered.map(todo => \`
                <li class="todo-item \${todo.completed ? 'completed' : ''}">
                    <span class="todo-text" onclick="toggleTodo(\${todo.id})">\${todo.text}</span>
                    <button class="btn btn-delete" onclick="deleteTodo(\${todo.id})">✕</button>
                </li>
            \`).join('');
            
            const remaining = todos.filter(t => !t.completed).length;
            document.getElementById('stats').textContent = \`\${remaining} dari \${todos.length} tugas tersisa\`;
        }
        
        // Enter key support
        document.getElementById('todoInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') addTodo();
        });
        
        render();
    </script>
</body>
</html>`
    }
  ]
};