import { motion } from 'motion/react';
import { BookOpen, Download, Headphones, Star } from 'lucide-react';

export default function Books() {
  const books = [
    {
      id: 1,
      title: "Annihilation of Caste",
      author: "Dr. B.R. Ambedkar",
      lang: "English",
      type: "read",
      desc: "One of the most important texts of 20th century.",
      rating: 4.9,
      cover: "https://images.unsplash.com/photo-1589829085413-56de2ae18c73?w=400&h=600&fit=crop"
    },
    {
      id: 2,
      title: "The Buddha and His Dhamma",
      author: "Dr. B.R. Ambedkar",
      lang: "English",
      type: "audiobook",
      desc: "A treatise on Buddha's life and philosophy.",
      rating: 5.0,
      cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop"
    },
    {
      id: 3,
      title: "भारतीय संविधान परिचय",
      author: "Dr. B.R. Ambedkar",
      lang: "Marathi",
      type: "read",
      desc: "Introduction to the Constitution of India in Marathi.",
      rating: 4.8,
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop"
    },
    {
      id: 4,
      title: "Who Were the Shudras?",
      author: "Dr. B.R. Ambedkar",
      lang: "English",
      type: "read",
      desc: "History of the Shudra varna.",
      rating: 4.7,
      cover: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=400&h=600&fit=crop"
    },
    {
      id: 5,
      title: "भगवान बुद्ध आणि त्यांचा धम्म",
      author: "Dr. B.R. Ambedkar",
      lang: "Marathi",
      type: "audiobook",
      desc: "Marathi translation of Buddha and His Dhamma.",
      rating: 4.9,
      cover: "https://images.unsplash.com/photo-1519682577862-22b62b24e493?w=400&h=600&fit=crop"
    },
    {
      id: 6,
      title: "States and Minorities",
      author: "Dr. B.R. Ambedkar",
      lang: "English",
      type: "read",
      desc: "Memorandum on the safeguards for minorities in India.",
      rating: 4.6,
      cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-8">
      
      <div className="bg-blue-700 px-4 py-8 text-white relative overflow-hidden shadow-md">
        <div className="absolute right-0 top-0 opacity-10 w-32 h-32 transform translate-x-8 -translate-y-8">
          <BookOpen className="w-full h-full" />
        </div>
        <h2 className="text-2xl font-extrabold mb-2 relative z-10">BhimConnect Library</h2>
        <p className="text-blue-100 text-sm mb-4 relative z-10 max-w-xs">Read Babasaheb's original works, Buddhist texts, and community literature for free.</p>
        <div className="flex gap-2 relative z-10">
            <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">PDFs</span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">Audiobooks</span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-extrabold text-gray-900 text-lg mb-4">Trending Books</h3>

        <div className="grid grid-cols-2 gap-4">
          {books.map((book) => (
            <motion.div 
              key={book.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group cursor-pointer"
            >
              <div className="aspect-[3/4] w-full bg-gray-200 relative overflow-hidden">
                <img src={book.cover} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-2 right-2 bg-black/60 rounded-full p-2 backdrop-blur-sm">
                  {book.type === 'audiobook' ? (
                    <Headphones className="w-4 h-4 text-white" />
                  ) : (
                    <BookOpen className="w-4 h-4 text-white" />
                  )}
                </div>
                <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/70 px-2 py-0.5 rounded-full backdrop-blur-sm">
                  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  <span className="text-white text-[10px] font-bold">{book.rating}</span>
                </div>
              </div>
              <div className="p-3 flex-1 flex flex-col">
                <h4 className="font-bold text-gray-900 text-sm leading-tight line-clamp-2 pb-1">{book.title}</h4>
                <p className="text-xs text-gray-500 font-medium mb-1">{book.author}</p>
                <p className="text-[10px] text-gray-400 mb-2 border border-gray-200 self-start px-1.5 py-0.5 rounded">{book.lang}</p>
                
                <div className="mt-auto pt-3 border-t border-gray-50 flex gap-2">
                  <button className="flex-1 flex items-center justify-center text-xs font-bold text-blue-700 py-2 bg-blue-50 rounded-xl active:scale-95 transition-transform">
                    {book.type === 'audiobook' ? 'Play' : 'Read'}
                  </button>
                  {book.type === 'read' && (
                    <button className="bg-gray-50 text-gray-600 p-2 rounded-xl border border-gray-100 active:bg-gray-100 transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
