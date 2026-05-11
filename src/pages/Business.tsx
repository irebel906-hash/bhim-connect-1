import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Star, MessageCircle, ExternalLink, ShieldCheck } from 'lucide-react';

export default function Business() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Coaching', 'Healthcare', 'Legal', 'Bookstore', 'Startup', 'Services'];

  const businesses = [
    {
      id: 1,
      name: "Samata Coaching Academy",
      category: "Coaching",
      address: "Dadar West, Mumbai",
      phone: "+91 9876543210",
      rating: 4.8,
      reviews: 124,
      description: "UPSC/MPSC guidance by successful civil servants from the community.",
      verified: true,
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Pragati Multispeciality Clinic",
      category: "Healthcare",
      address: "Deccan Gymkhana, Pune",
      phone: "+91 9876543211",
      rating: 4.9,
      reviews: 312,
      description: "Dr. Milind Kamble (MD Medicine)",
      verified: true,
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Blue Buddha Book Store",
      category: "Bookstore",
      address: "Dikshabhoomi area, Nagpur",
      phone: "+91 9876543212",
      rating: 4.7,
      reviews: 89,
      description: "Largest collection of Babasaheb's literature and Buddhist texts.",
      verified: false,
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Nyay Legal Associates",
      category: "Legal",
      address: "High Court Road, Aurangabad",
      phone: "+91 9876543213",
      rating: 4.6,
      reviews: 56,
      description: "Adv. Sneha Bansode & Team. Special focus on Atrocity cases & civil rights.",
      verified: true,
      image: "https://images.unsplash.com/photo-1589829085413-56de2ae18c73?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 5,
      name: "TechZen Startups",
      category: "Startup",
      address: "Baner, Pune",
      phone: "+91 9876543214",
      rating: 4.9,
      reviews: 45,
      description: "IT agency providing web dev and marketing for community businesses.",
      verified: true,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 6,
      name: "Bhimrao CA & Tax Firm",
      category: "Legal",
      address: "Sadashiv Peth, Pune",
      phone: "+91 9876543215",
      rating: 4.8,
      reviews: 112,
      description: "Financial planning, GST filing, and audit services.",
      verified: true,
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 7,
      name: "Maitri Cafe & Restaurant",
      category: "Services",
      address: "Kothrud, Pune",
      phone: "+91 9876543216",
      rating: 4.5,
      reviews: 210,
      description: "Pure veg family restaurant. Calm and peaceful atmosphere.",
      verified: false,
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 8,
      name: "Vidyarthi Medicals",
      category: "Healthcare",
      address: "Nanded",
      phone: "+91 9876543217",
      rating: 4.4,
      reviews: 42,
      description: "24/7 Pharmacy with 10% discount for community students.",
      verified: true,
      image: "https://images.unsplash.com/photo-1587854692152-cbe668df9731?q=80&w=600&auto=format&fit=crop"
    }
  ];

  const filteredBusinesses = filter === 'All' ? businesses : businesses.filter(b => b.category === filter);

  return (
    <div className="bg-gray-50 min-h-screen pb-6">
      <div className="bg-white px-4 py-3 sticky top-0 z-30 shadow-sm border-b border-gray-100 mb-4">
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${filter === cat ? 'bg-blue-700 text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 space-y-4">
        <AnimatePresence>
          {filteredBusinesses.map((b) => (
            <motion.div
              key={b.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="flex h-32">
                <div className="w-1/3 bg-gray-200">
                  <img src={b.image} alt={b.name} className="w-full h-full object-cover" />
                </div>
                <div className="w-2/3 p-3 flex flex-col justify-center">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full mb-1 inline-block">{b.category}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-base leading-tight mt-1 flex items-center gap-1">
                    {b.name}
                    {b.verified && <ShieldCheck className="w-4 h-4 text-blue-600" />}
                  </h3>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                    <span className="text-xs font-bold text-gray-700">{b.rating}</span>
                    <span className="text-xs text-gray-400">({b.reviews})</span>
                  </div>
                </div>
              </div>
              <div className="p-3 border-t border-gray-50 flex flex-col gap-2">
                <p className="text-sm text-gray-600">{b.description}</p>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  {b.address}
                </div>
                <div className="flex gap-2 mt-2">
                  <button className="flex-1 bg-green-50 text-green-700 flex items-center justify-center gap-1 py-2 rounded-xl text-sm font-bold transition active:bg-green-100">
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </button>
                  <button className="flex-1 bg-blue-50 text-blue-700 flex items-center justify-center gap-1 py-2 rounded-xl text-sm font-bold transition active:bg-blue-100">
                    <ExternalLink className="w-4 h-4" /> Visit Profile
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
