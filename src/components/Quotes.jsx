import { FiMessageSquare } from 'react-icons/fi';

const dummyQuotes = [
  { id: 1, name: 'Senior Dev', text: 'Jangan takut gagal. Setiap error di console adalah langkah menuju solusi.' },
  { id: 2, name: 'Martin Golding', text: 'Tulis kode seolah-olah orang yang akan maintain adalah psychopath yang tahu alamat rumahmu.' },
  { id: 3, name: 'Anonymous', text: 'Debugging itu seperti menjadi detektif di film kriminal. Kamu adalah pembunuhnya.' },
  { id: 4, name: 'John Johnson', text: 'First, solve the problem. Then, write the code.' },
  { id: 5, name: 'Austin Freeman', text: 'Simplicity is the soul of efficiency.' },
  { id: 6, name: 'Linus Torvalds', text: 'Talk is cheap. Show me the code.' },
];

const Quotes = () => {
  return (
    <section className="py-20 px-6" id="quotes">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs text-apple-gray-medium tracking-[0.2em] uppercase mb-3">Community</p>
          <h2 className="text-3xl md:text-5xl font-bold">Quotes Wall</h2>
          <p className="text-sm text-apple-gray-medium mt-3">Kumpulan quotes dari para developer.</p>
        </div>

        <div className="space-y-3">
          {dummyQuotes.map((quote) => (
            <div key={quote.id} className="p-4 border border-white/10 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300">
              <p className="text-sm text-white leading-relaxed mb-3">{quote.text}</p>
              <p className="text-xs text-apple-gray-medium flex items-center space-x-1.5">
                <FiMessageSquare className="text-[10px]" />
                <span>{quote.name}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quotes;