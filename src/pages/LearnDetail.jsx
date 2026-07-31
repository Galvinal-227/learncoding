import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiCode, FiPlay, FiEye, FiArrowLeft, FiAlertCircle } from 'react-icons/fi';
import { allCategories } from '../data/index.js';

const LearnDetail = () => {
  const { slug } = useParams();
  const [code, setCode] = useState('');
  const [iframeSrc, setIframeSrc] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('tutorial');

  // Cari category berdasarkan slug
  const category = allCategories.find((cat) => cat.slug === slug);

  useEffect(() => {
    if (category) {
      setCode(getDefaultCode(category.slug));
    }
  }, [slug, category]);

  const getDefaultCode = (slug) => {
    const defaults = {
      html: `<!DOCTYPE html>
<html>
<head>
  <title>Belajar HTML</title>
  <style>
    body { font-family: sans-serif; padding: 20px; background: #fafafa; }
    h1 { color: #333; }
    .card { background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
  </style>
</head>
<body>
  <h1>Halo Dunia!</h1>
  <div class="card">
    <p>Selamat datang di tutorial HTML. Coba ubah kode ini!</p>
  </div>
</body>
</html>`,
      css: `<!DOCTYPE html>
<html>
<head>
  <title>Belajar CSS</title>
  <style>
    body {
      font-family: sans-serif;
      padding: 40px;
      background: #f0f0f0;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }
    .card {
      background: white;
      padding: 30px;
      border-radius: 15px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      text-align: center;
      max-width: 400px;
    }
    h1 { color: #333; margin-bottom: 10px; }
    p { color: #666; line-height: 1.6; }
    .btn {
      display: inline-block;
      padding: 10px 24px;
      background: #333;
      color: white;
      border-radius: 25px;
      text-decoration: none;
      margin-top: 15px;
      transition: all 0.3s;
    }
    .btn:hover {
      background: #555;
      transform: scale(1.05);
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>Belajar CSS</h1>
    <p>Ini adalah card dengan styling CSS. Coba ubah warna, ukuran, atau layoutnya!</p>
    <a href="#" class="btn">Klik Saya</a>
  </div>
</body>
</html>`,
      javascript: `<!DOCTYPE html>
<html>
<head>
  <title>Belajar JavaScript</title>
  <style>
    body { font-family: sans-serif; padding: 40px; text-align: center; background: #fafafa; }
    button { padding: 10px 24px; background: #333; color: white; border: none; border-radius: 25px; cursor: pointer; font-size: 16px; margin: 5px; transition: 0.3s; }
    button:hover { background: #555; }
    .output { margin-top: 20px; padding: 15px; background: #eee; border-radius: 10px; min-height: 50px; }
  </style>
</head>
<body>
  <h1>Belajar JavaScript</h1>
  <button onclick="sayHello()">Sapa</button>
  <button onclick="showTime()">Jam</button>
  <button onclick="changeColor()">Warna</button>
  <div class="output" id="output"></div>

  <script>
    function sayHello() {
      document.getElementById('output').innerHTML = 'Halo! Selamat belajar JavaScript!';
    }
    
    function showTime() {
      const now = new Date();
      document.getElementById('output').innerHTML = 'Sekarang: ' + now.toLocaleTimeString();
    }
    
    function changeColor() {
      const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'];
      const random = colors[Math.floor(Math.random() * colors.length)];
      document.body.style.background = random;
      document.getElementById('output').innerHTML = 'Warna background berubah!';
    }
  </script>
</body>
</html>`,
      'async-javascript': `<!DOCTYPE html>
<html>
<head>
  <title>Async JavaScript</title>
  <style>
    body { font-family: sans-serif; padding: 40px; text-align: center; background: #fafafa; }
    button { padding: 10px 24px; background: #333; color: white; border: none; border-radius: 25px; cursor: pointer; font-size: 16px; margin: 5px; transition: 0.3s; }
    button:hover { background: #555; }
    .output { margin-top: 20px; padding: 15px; background: #eee; border-radius: 10px; min-height: 50px; }
  </style>
</head>
<body>
  <h1>Async JavaScript</h1>
  <button onclick="fetchData()">Fetch Data</button>
  <div class="output" id="output"></div>

  <script>
    async function fetchData() {
      const output = document.getElementById('output');
      output.innerHTML = 'Loading...';
      
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        output.innerHTML = '<strong>' + data.title + '</strong><br>' + data.body;
      } catch (error) {
        output.innerHTML = 'Error: ' + error.message;
      }
    }
  </script>
</body>
</html>`,
      react: `<!DOCTYPE html>
<html>
<head>
  <title>React</title>
  <style>
    body { font-family: sans-serif; padding: 40px; text-align: center; background: #fafafa; }
    .counter { font-size: 48px; font-weight: bold; margin: 20px 0; }
    button { padding: 10px 24px; background: #61DAFB; color: #333; border: none; border-radius: 25px; cursor: pointer; font-size: 16px; margin: 5px; transition: 0.3s; }
    button:hover { transform: scale(1.05); }
  </style>
</head>
<body>
  <div id="root"></div>

  <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script>
    const { useState } = React;

    function Counter() {
      const [count, setCount] = useState(0);
      
      return React.createElement('div', null,
        React.createElement('h1', null, 'React Counter'),
        React.createElement('div', { className: 'counter' }, count),
        React.createElement('button', { onClick: () => setCount(count + 1) }, '+'),
        React.createElement('button', { onClick: () => setCount(count - 1) }, '-'),
        React.createElement('button', { onClick: () => setCount(0) }, 'Reset')
      );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(React.createElement(Counter));
  </script>
</body>
</html>`,
      typescript: `<!DOCTYPE html>
<html>
<head>
  <title>TypeScript</title>
  <style>
    body { font-family: sans-serif; padding: 40px; text-align: center; background: #fafafa; }
    .output { margin-top: 20px; padding: 15px; background: #eee; border-radius: 10px; min-height: 50px; }
  </style>
</head>
<body>
  <h1>TypeScript</h1>
  <div class="output" id="output"></div>

  <script>
    // TypeScript compiled to JavaScript
    function greet(name) {
      return "Hello, " + name + "!";
    }
    
    var user = "John";
    document.getElementById('output').innerHTML = greet(user);
    
    // TypeScript features (type annotations)
    function add(a, b) {
      return a + b;
    }
    document.getElementById('output').innerHTML += "<br>2 + 3 = " + add(2, 3);
  </script>
</body>
</html>`,
      'tailwind-css': `<!DOCTYPE html>
<html>
<head>
  <title>Tailwind CSS</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
      <h1 class="text-3xl font-bold text-gray-800 text-center mb-4">
        Tailwind CSS
      </h1>
      <p class="text-gray-600 text-center mb-6">
        Belajar Tailwind CSS dengan mudah!
      </p>
      <div class="flex gap-3 justify-center">
        <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Primary
        </button>
        <button class="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition">
          Secondary
        </button>
      </div>
    </div>
  </div>
</body>
</html>`,
    };
    return defaults[slug] || defaults.html;
  };

  const handleRunCode = () => {
    setError('');
    setOutput('running');
    setIframeSrc(code);
    setTimeout(() => setOutput('success'), 200);
  };

  const handleClearCode = () => {
    setCode('');
    setIframeSrc('');
    setOutput('');
    setError('');
  };

  // Tampilkan 404 jika category tidak ditemukan
  if (!category) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <FiAlertCircle className="text-4xl text-apple-gray-medium/30 mx-auto mb-4" />
          <p className="text-apple-gray-medium">Tutorial tidak ditemukan.</p>
          <Link to="/" className="text-sm text-white hover:underline mt-2 inline-block">
            Kembali ke Home
          </Link>
        </div>
      </div>
    );
  }

  // Warna dari category.color
  const categoryColor = category.color || '#ffffff';

  return (
    <div className="min-h-screen bg-black text-white font-pixel">
      {/* Header */}
      <div className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-2 text-sm text-apple-gray-medium hover:text-white transition-colors duration-300"
          >
            <FiArrowLeft />
            <span>Kembali</span>
          </Link>
          <div className="flex items-center space-x-3">
            <span 
              className="px-2 py-0.5 rounded-full text-[10px] border text-white/80"
              style={{ 
                borderColor: categoryColor,
                color: categoryColor
              }}
            >
              {category.difficulty || 'Beginner'}
            </span>
            <h1 className="text-lg font-bold">{category.title}</h1>
          </div>
          <div className="w-20" />
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 flex items-center space-x-6">
          <button
            onClick={() => setActiveTab('tutorial')}
            className={`py-3 text-sm font-medium border-b-2 transition-all duration-300 cursor-pointer ${
              activeTab === 'tutorial'
                ? 'border-white text-white'
                : 'border-transparent text-apple-gray-medium hover:text-white'
            }`}
          >
            Materi
          </button>
          <button
            onClick={() => setActiveTab('editor')}
            className={`py-3 text-sm font-medium border-b-2 transition-all duration-300 cursor-pointer ${
              activeTab === 'editor'
                ? 'border-white text-white'
                : 'border-transparent text-apple-gray-medium hover:text-white'
            }`}
          >
            <FiPlay className="inline mr-1.5" />
            Coba Sendiri
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto p-6">
        {/* Tutorial Tab */}
        {activeTab === 'tutorial' && (
          <div className="space-y-6">
            <div 
              className="p-6 border border-white/10 rounded-2xl bg-white/[0.02]"
              style={{ 
                borderColor: categoryColor + '33',
                backgroundColor: categoryColor + '08'
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                {category.icon && (
                  <span style={{ color: categoryColor }}>{category.icon}</span>
                )}
                <h2 className="text-xl font-bold">{category.title}</h2>
              </div>
              <p className="text-apple-gray-medium">{category.description}</p>
              {category.totalChapters && (
                <p className="text-sm text-apple-gray-medium/60 mt-2">
                  {category.totalChapters} chapters • {category.difficulty || 'Beginner'}
                </p>
              )}
            </div>

            {/* Chapters - SEKARANG BISA DI KLIK */}
            {category.chapters && category.chapters.length > 0 ? (
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">Chapters</h3>
                {category.chapters
                  .sort((a, b) => (a.order || 0) - (b.order || 0))
                  .map((chapter, index) => (
                    <Link
                      key={chapter.slug || index}
                      to={`/learn/${category.slug}/${chapter.slug}`}
                      className="p-4 border border-white/10 rounded-xl bg-white/[0.02] hover:border-white/20 transition-all duration-300 block"
                      style={{ 
                        borderColor: categoryColor + '22',
                        backgroundColor: categoryColor + '05'
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-md font-medium text-white">
                            {index + 1}. {chapter.title}
                          </h4>
                          <p className="text-sm text-white">
                            {chapter.difficulty || 'Beginner'} • {chapter.estimatedReadingTime || 10} min read
                          </p>
                        </div>
                        <span 
                          className="text-xs px-2 py-1 border border-white/10 rounded-full"
                          style={{ 
                            color: categoryColor,
                            borderColor: categoryColor + '44'
                          }}
                        >
                          {chapter.difficulty || 'Beginner'}
                        </span>
                      </div>
                    </Link>
                  ))}
              </div>
            ) : (
              <div className="p-6 border border-white/10 rounded-2xl bg-white/[0.02]">
                <p className="text-apple-gray-medium">No chapters available for this module.</p>
              </div>
            )}
          </div>
        )}

        {/* Editor Tab */}
        {activeTab === 'editor' && (
          <div className="grid lg:grid-cols-2 gap-4">
            {/* Code Editor */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm text-apple-gray-medium flex items-center space-x-2">
                  <FiCode />
                  <span>HTML / CSS / JS</span>
                </p>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleClearCode}
                    className="px-3 py-1 text-xs text-apple-gray-medium hover:text-white border border-white/10 rounded-full transition-all duration-300 cursor-pointer"
                  >
                    Clear
                  </button>
                  <button
                    onClick={handleRunCode}
                    className="flex items-center space-x-1.5 px-4 py-1.5 bg-white text-black rounded-full text-xs font-semibold hover:bg-apple-gray-light transition-all duration-300 cursor-pointer"
                  >
                    <FiPlay />
                    <span>Run</span>
                  </button>
                </div>
              </div>

              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-[400px] p-4 bg-black/50 border border-white/10 rounded-2xl text-green-400 text-sm font-mono focus:outline-none focus:border-white/20 transition-all duration-300 resize-none"
                spellCheck={false}
                placeholder="Tulis kode di sini..."
              />

              {error && (
                <div className="mt-3 p-3 border border-red-500/30 bg-red-500/10 rounded-xl">
                  <p className="text-xs text-red-400 flex items-center space-x-2">
                    <FiAlertCircle />
                    <span>{error}</span>
                  </p>
                </div>
              )}
            </div>

            {/* Preview */}
            <div>
              <p className="text-sm text-apple-gray-medium mb-3 flex items-center space-x-2">
                <FiEye />
                <span>Preview</span>
              </p>
              <div className="border border-white/10 rounded-2xl overflow-hidden bg-white">
                {output === '' ? (
                  <div className="h-[400px] flex items-center justify-center text-gray-400 text-sm">
                    Klik Run untuk melihat hasil
                  </div>
                ) : output === 'running' ? (
                  <div className="h-[400px] flex items-center justify-center text-gray-400 text-sm">
                    Loading...
                  </div>
                ) : (
                  <iframe
                    srcDoc={iframeSrc}
                    className="w-full h-[400px] border-0"
                    title="Preview"
                    sandbox="allow-scripts"
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LearnDetail;