import { motion } from 'motion/react';
import { Heart, Share2, MessageCircle } from 'lucide-react';

export default function News() {
  const newsItems = [
    {
      id: 1,
      title: "New Buddhist Vihara inaugurations across Maharashtra",
      category: "Community",
      date: "2 hours ago",
      image: "https://images.unsplash.com/photo-1548625361-ec72cefa8367?w=600&h=400&fit=crop",
      likes: 142,
      comments: 24
    },
    {
      id: 2,
      title: "Annual Scholarship distributed to 500+ meritorious students",
      category: "Education",
      date: "5 hours ago",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
      likes: 563,
      comments: 89
    },
    {
       id: 3,
       title: "Thoughts on Dr. Ambedkar's Economic Policies",
       category: "Editorial",
       date: "1 day ago",
       likes: 310,
       comments: 45
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-4 pb-20">
      <div className="space-y-6">
        {newsItems.map((item) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
          >
            {item.image && (
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            )}
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2 py-1 rounded-md">{item.category}</span>
                <span className="text-xs text-gray-400">{item.date}</span>
              </div>
              <h3 className="font-bold text-gray-900 text-xl leading-tight mb-3">
                {item.title}
              </h3>
              
              <div className="flex items-center gap-6 mt-4 pt-3 border-t border-gray-100 pb-1">
                <button className="flex items-center gap-2 text-gray-500 hover:text-rose-500 transition">
                  <Heart className="w-5 h-5" />
                  <span className="text-sm font-medium">{item.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition">
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">{item.comments}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-500 hover:text-green-600 transition ml-auto">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
