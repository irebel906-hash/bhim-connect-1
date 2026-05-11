import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, UserPlus, FileText, CheckCircle, MapPin, Heart, MessageCircle } from 'lucide-react';

export default function Matrimonial() {
  const [activeTab, setActiveTab] = useState('browse');
  const [filter, setFilter] = useState('All');

  const mockedProfiles = [
    { id: 1, name: 'Priya Meshram', age: 26, height: '5\'4"', profession: 'Software Engineer', education: 'M.Tech CSE', location: 'Pune, MH', religion: 'Buddhist', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop', verified: true, bio: 'Looking for an educated, understanding partner with modern Ambedkarite values.' },
    { id: 2, name: 'Rahul Gaikwad', age: 30, height: '5\'8"', profession: 'Govt Officer (Class I)', education: 'M.A., UPSC', location: 'Nagpur, MH', religion: 'Navayana Buddhist', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop', verified: true, bio: 'Employed in State Government. Family oriented, loves reading Babasaheb\'s literature.' },
    { id: 3, name: 'Neha Kamble', age: 25, height: '5\'3"', profession: 'Doctor (MBBS)', education: 'MBBS, MD', location: 'Mumbai, MH', religion: 'Buddhist', photo: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop', verified: true, bio: 'Working at a private hospital. Balanced modern lifestyle with traditional values.' },
    { id: 4, name: 'Siddharth More', age: 28, height: '5\'10"', profession: 'Architect', education: 'B.Arch', location: 'Nashik, MH', religion: 'Ambedkarite', photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop', verified: false, bio: 'Owns an architecture firm. Looking for a supportive and independent partner.' },
    { id: 5, name: 'Anjali Bansode', age: 27, height: '5\'5"', profession: 'Bank Manager', education: 'MBA Finance', location: 'Aurangabad, MH', religion: 'Buddhist', photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop', verified: true, bio: 'Working in a PSU Bank. Believes in equality and mutual respect.' },
    { id: 6, name: 'Vishal Khandare', age: 29, height: '5\'9"', profession: 'Professor', education: 'PhD History', location: 'Amravati, MH', religion: 'Buddhist', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop', verified: true, bio: 'Passionate about teaching and community work. Looking for someone with similar ideology.' },
    { id: 7, name: 'Kiran Ingle', age: 26, height: '5\'2"', profession: 'CA', education: 'Chartered Accountant', location: 'Pune, MH', religion: 'Buddhist', photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop', verified: true, bio: 'Working in an MNC. Simple living, high thinking.' },
    { id: 8, name: 'Rohit Kadam', age: 31, height: '6\'0"', profession: 'Business Owner', education: 'BTech, MBA', location: 'Mumbai, MH', religion: 'Ambedkarite', photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop', verified: false, bio: 'Running a successful IT startup. Prefer a partner who is ambitious and kind.' },
    { id: 9, name: 'Pooja Patil (Mane)', age: 28, height: '5\'4"', profession: 'Civil Engineer', education: 'B.E. Civil', location: 'Nagpur, MH', religion: 'Buddhist', photo: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400&h=400&fit=crop', verified: true, bio: 'Employed in PWD. Honest, caring, and values family.' },
    { id: 10, name: 'Akash Wankhede', age: 27, height: '5\'7"', profession: 'HR Manager', education: 'MBA HR', location: 'Thane, MH', religion: 'Buddhist', photo: 'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=400&h=400&fit=crop', verified: true, bio: 'Extrovert, loves traveling and reading. Seeking a friendly companion.' }
  ];

  const filteredProfiles = filter === 'All' 
    ? mockedProfiles 
    : mockedProfiles.filter(p => {
      if (filter === 'Govt Jobs') return p.profession.includes('Govt') || p.profession.includes('Bank') || p.profession.includes('Professor');
      if (filter === 'Doctors/Engineers') return p.profession.includes('Engineer') || p.profession.includes('Doctor') || p.profession.includes('Architect');
      return true;
    });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Tabs */}
      <div className="bg-white px-4 py-3 flex gap-2 overflow-x-auto border-b border-gray-100 shadow-sm sticky top-0 z-30 no-scrollbar">
        <button 
          onClick={() => setActiveTab('browse')}
          className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${activeTab === 'browse' ? 'bg-blue-700 text-white shadow-md' : 'bg-gray-100 text-gray-600'}`}
        >
          Browse
        </button>
        <button 
          onClick={() => setActiveTab('my_profile')}
          className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${activeTab === 'my_profile' ? 'bg-blue-700 text-white shadow-md' : 'bg-gray-100 text-gray-600'}`}
        >
          My Biodata
        </button>
        <button 
          onClick={() => setActiveTab('matches')}
          className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${activeTab === 'matches' ? 'bg-blue-700 text-white shadow-md' : 'bg-gray-100 text-gray-600'}`}
        >
          Matches <span className="bg-rose-500 text-white text-[10px] px-1.5 py-0.5 rounded-full ml-1">2</span>
        </button>
      </div>

      <div className="p-4 pb-8">
        {activeTab === 'browse' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
            <div className="flex justify-between items-center mb-2">
              <div className="flex gap-2 overflow-x-auto no-scrollbar">
                {['All', 'Govt Jobs', 'Doctors/Engineers'].map(f => (
                  <button key={f} onClick={() => setFilter(f)} className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${filter === f ? 'bg-blue-100 text-blue-700' : 'bg-white text-gray-600 border border-gray-200'}`}>
                    {f}
                  </button>
                ))}
              </div>
              <button className="text-gray-600 bg-white p-1.5 rounded-full border border-gray-200 shadow-sm shrink-0">
                <Filter className="w-4 h-4" />
              </button>
            </div>

            <AnimatePresence>
            {filteredProfiles.map((p) => (
              <motion.div layout initial={{ opacity: 0, scale: 0.95 }} flex={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} key={p.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
                <div className="flex p-4 gap-4">
                  <div className="w-28 h-32 rounded-xl flex-shrink-0 bg-gray-200 overflow-hidden shadow-sm relative">
                    <img src={p.photo} alt={p.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col pt-1">
                    <h3 className="font-extrabold text-lg text-gray-900 leading-none flex items-center gap-1">
                      {p.name}
                      {p.verified && <CheckCircle className="w-4 h-4 text-blue-600" />}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1 mb-2 font-medium">{p.age} yrs • {p.height} • {p.religion}</p>
                    
                    <div className="space-y-1 mt-auto">
                      <p className="text-gray-700 text-xs font-semibold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> {p.education}
                      </p>
                      <p className="text-gray-700 text-xs font-semibold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> {p.profession}
                      </p>
                      <p className="text-gray-500 text-xs font-medium flex items-center gap-1 pt-1">
                        <MapPin className="w-3.5 h-3.5" /> {p.location}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="px-4 pb-3">
                  <p className="text-xs text-gray-500 italic bg-gray-50 p-2 rounded-lg border border-gray-100 line-clamp-2">"{p.bio}"</p>
                </div>
                <div className="bg-white p-3 flex gap-2 border-t border-gray-100">
                  <button className="flex-1 bg-white border border-rose-200 text-rose-600 hover:bg-rose-50 py-2 rounded-xl text-sm font-bold text-center flex justify-center items-center gap-1.5 transition">
                    <Heart className="w-4 h-4" /> Send Interest
                  </button>
                  <button className="flex-1 bg-blue-700 text-white py-2 rounded-xl text-sm font-bold text-center flex justify-center items-center gap-1.5 shadow-md shadow-blue-700/20 transition active:scale-95">
                    <MessageCircle className="w-4 h-4" /> Chat Now
                  </button>
                </div>
              </motion.div>
            ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Keeping my profile and matches visually active but dummy */}
        {activeTab === 'my_profile' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center p-8 text-center pt-20">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-4 border border-blue-100">
              <FileText className="w-10 h-10 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Create Your Biodata</h3>
            <p className="text-gray-500 text-sm mb-6">Create a detailed profile to find your perfect match within the community.</p>
            <button className="w-full max-w-xs bg-blue-700 text-white py-3 rounded-xl font-bold shadow-md shadow-blue-700/20 active:scale-95 transition-transform flex items-center justify-center gap-2">
              <UserPlus className="w-5 h-5" /> Let's Start
            </button>
          </motion.div>
        )}

         {activeTab === 'matches' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center p-8 text-center pt-20">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Login Required</h3>
            <p className="text-gray-500 text-sm mb-6">You must create a biodata first to receive requests.</p>
          </motion.div>
         )}
      </div>
    </div>
  );
}
