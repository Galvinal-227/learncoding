import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiClock, FiBookOpen } from 'react-icons/fi';
import { allCategories } from '../data/index.js';

const ChapterDetail = () => {
  const { slug, chapterSlug } = useParams();
  
  console.log("🔍 Slug:", slug);
  console.log("🔍 Chapter Slug:", chapterSlug);
  console.log("🔍 All Categories:", allCategories);
  
  const category = allCategories.find((cat) => cat.slug === slug);
  console.log("🔍 Category ditemukan:", category);
  
  const chapter = category?.chapters?.find((ch) => ch.slug === chapterSlug);
  console.log("🔍 Chapter ditemukan:", chapter);

  if (!category || !chapter) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <p className="text-apple-gray-medium">Chapter tidak ditemukan.</p>
          <p className="text-xs text-apple-gray-medium/50 mt-2">
            Slug: {slug} • Chapter: {chapterSlug}
          </p>
          <Link to="/" className="text-sm text-white hover:underline mt-2 inline-block">
            Kembali ke Home
          </Link>
        </div>
      </div>
    );
  }

  const categoryColor = category.color || '#ffffff';

  return (
    <div className="min-h-screen bg-black text-white font-pixel">
      {/* Header */}
      <div className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to={`/learn/${category.slug}`}
            className="flex items-center space-x-2 text-sm text-apple-gray-medium hover:text-white transition-colors duration-300"
          >
            <FiArrowLeft />
            <span>Kembali ke {category.title}</span>
          </Link>
          <div className="flex items-center space-x-3">
            <span 
              className="px-2 py-0.5 rounded-full text-[10px] border text-white/80"
              style={{ 
                borderColor: categoryColor,
                color: categoryColor
              }}
            >
              {chapter.difficulty || 'Beginner'}
            </span>
            <h1 className="text-lg font-bold">{chapter.title}</h1>
          </div>
          <div className="w-20" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-6">
        <div 
          className="p-6 border border-white/10 rounded-2xl bg-white/[0.02] mb-6"
          style={{ 
            borderColor: categoryColor + '33',
            backgroundColor: categoryColor + '08'
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <FiBookOpen style={{ color: categoryColor }} />
            <h2 className="text-xl font-bold">{chapter.title}</h2>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-apple-gray-medium">
            <span className="flex items-center gap-1">
              <FiClock />
              {chapter.estimatedReadingTime || 10} min read
            </span>
            <span>•</span>
            <span 
              className="px-2 py-0.5 rounded-full text-[10px] border"
              style={{ 
                borderColor: categoryColor + '44',
                color: categoryColor
              }}
            >
              {chapter.difficulty || 'Beginner'}
            </span>
            <span>•</span>
            <span>Chapter {chapter.order || 1}</span>
          </div>
        </div>

        {/* Konten Chapter */}
        <div className="p-6 border border-white/10 rounded-2xl bg-white/[0.02]">
          <h3 className="text-lg font-semibold text-white mb-4">📖 Materi</h3>
          
          <div className="prose prose-invert max-w-none text-white leading-relaxed whitespace-pre-wrap">
            {chapter.content || 'Konten untuk chapter ini belum tersedia.'}
          </div>

          {chapter.codeExample && (
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white mb-2">💻 Contoh Kode</h4>
              <pre className="p-4 bg-black/50 border border-white/10 rounded-xl text-sm text-green-400 font-mono overflow-x-auto whitespace-pre-wrap">
                {chapter.codeExample}
              </pre>
            </div>
          )}

          {chapter.exercise && (
            <div className="mt-6 p-4 border border-yellow-500/30 rounded-xl bg-yellow-500/10">
              <h4 className="text-sm font-semibold text-yellow-400 mb-2">📝 Latihan</h4>
              <p className="text-sm text-apple-gray-medium whitespace-pre-wrap">
                {chapter.exercise}
              </p>
            </div>
          )}

          {chapter.quiz && chapter.quiz.length > 0 && (
            <div className="mt-6 p-4 border border-blue-500/30 rounded-xl bg-blue-500/10">
              <h4 className="text-sm font-semibold text-blue-400 mb-2">🧪 Quiz</h4>
              {chapter.quiz.map((q, idx) => (
                <div key={idx} className="mb-4 last:mb-0">
                  <p className="text-sm text-white">{idx + 1}. {q.question}</p>
                  <ul className="mt-1 space-y-1">
                    {q.options.map((opt, optIdx) => (
                      <li key={optIdx} className="text-xs text-apple-gray-medium">
                        {String.fromCharCode(65 + optIdx)}) {opt}
                        {optIdx === q.correctAnswer && ' ✅'}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          <Link
            to={`/learn/${category.slug}`}
            className="px-4 py-2 text-sm text-apple-gray-medium hover:text-white border border-white/10 rounded-full transition-all duration-300"
          >
            ← Semua Chapters
          </Link>
          <Link
            to={`/learn/${category.slug}`}
            className="px-4 py-2 text-sm bg-white text-black rounded-full hover:bg-apple-gray-light transition-all duration-300"
          >
            Coba Sendiri →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChapterDetail;