import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Briefcase, Search, BadgeCheck, Bookmark, Building } from 'lucide-react';

export default function Jobs() {
  const [filter, setFilter] = useState('All');

  const jobs = [
    {
      id: 1,
      title: 'MPSC Group B Recruitment 2026',
      company: 'Govt of Maharashtra',
      type: 'Government',
      location: 'Maharashtra',
      deadline: '20 May 2026',
      salary: 'Level 8 Pay Matrix',
      experience: 'Fresher / Graduate',
      verified: true,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Seal_of_Maharashtra.svg/100px-Seal_of_Maharashtra.svg.png"
    },
    {
      id: 2,
      title: 'Senior Software Engineer (React)',
      company: 'TechZen Startups',
      type: 'Community',
      location: 'Pune (Hybrid)',
      deadline: '15 May 2026',
      salary: '12-18 LPA',
      experience: '3-5 Years',
      verified: true,
      logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=100&auto=format&fit=crop"
    },
    {
      id: 3,
      title: 'Clerk / Typist',
      company: 'District Court',
      type: 'Government',
      location: 'Nagpur',
      deadline: '25 May 2026',
      salary: 'Level 4 Pay Matrix',
      experience: 'HSC + Typing',
      verified: true,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/100px-Emblem_of_India.svg.png"
    },
    {
      id: 4,
      title: 'Graphic Designer',
      company: 'Creative Media Agency',
      type: 'Private',
      location: 'Remote',
      deadline: '10 Jun 2026',
      salary: '4-6 LPA',
      experience: '1-3 Years',
      verified: false,
      logo: "https://images.unsplash.com/photo-1542744094-24638ea0b3b5?q=80&w=100&auto=format&fit=crop"
    },
    {
      id: 5,
      title: 'Assistant Professor (History)',
      company: 'Siddharth College',
      type: 'Private',
      location: 'Mumbai',
      deadline: '30 May 2026',
      salary: 'As per UGC',
      experience: 'NET/SET/PhD',
      verified: true,
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=100&auto=format&fit=crop"
    }
  ];

  const filteredJobs = filter === 'All' ? jobs : jobs.filter(j => j.type === filter);

  return (
    <div className="bg-gray-50 min-h-screen pb-8">
      <div className="bg-white p-4 sticky top-0 z-30 shadow-sm border-b border-gray-100">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search jobs, skills, or companies" 
            className="w-full bg-gray-100 placeholder:text-gray-500 rounded-xl py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-blue-700/50 transition-all text-sm font-medium border border-transparent focus:border-blue-700/20 shadow-inner"
          />
        </div>
        
        <div className="flex gap-2 mt-4 overflow-x-auto pb-1 no-scrollbar">
          {['All', 'Government', 'Private', 'Community'].map((cat) => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${
                filter === cat 
                ? (cat === 'Government' ? 'bg-orange-500 text-white' : cat === 'Community' ? 'bg-indigo-500 text-white' : 'bg-blue-700 text-white')
                : 'bg-gray-100 text-gray-600'
              }`}
            >{cat}</button>
          ))}
        </div>
      </div>

      <div className="p-4 space-y-4">
        <AnimatePresence>
          {filteredJobs.map((job) => (
            <motion.div 
              key={job.id} 
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm relative group"
            >
              <button className="absolute top-4 right-4 text-gray-300 hover:text-blue-600 active:scale-90 transition-all">
                <Bookmark className="w-5 h-5" />
              </button>
              
              {job.type === 'Government' && (
                <div className="absolute top-0 left-0 bg-transparent text-orange-600 text-[10px] font-extrabold px-3 py-1 rounded-br-xl uppercase tracking-wider bg-orange-50">
                  Govt Job
                </div>
              )}
              {job.type === 'Private' && (
                <div className="absolute top-0 left-0 bg-transparent text-emerald-600 text-[10px] font-extrabold px-3 py-1 rounded-br-xl uppercase tracking-wider bg-emerald-50">
                  Private
                </div>
              )}
              {job.type === 'Community' && (
                <div className="absolute top-0 left-0 bg-transparent text-indigo-600 text-[10px] font-extrabold px-3 py-1 rounded-br-xl uppercase tracking-wider bg-indigo-50">
                  Community Business
                </div>
              )}
              
              <div className="flex items-start gap-4 mt-4">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0 border border-gray-100 overflow-hidden shadow-sm">
                  {job.logo.startsWith('http') ? (
                    <img src={job.logo} alt={job.company} className="w-full h-full object-cover" />
                  ) : (
                    <Building className="w-6 h-6 text-gray-400" />
                  )}
                </div>
                <div className="pr-6">
                  <h3 className="font-extrabold text-gray-900 leading-tight text-lg">{job.title}</h3>
                  <div className="flex items-center gap-1 mt-1 text-gray-600 text-sm font-semibold">
                    {job.company}
                    {job.verified && <BadgeCheck className="w-4 h-4 text-blue-500 inline" />}
                  </div>
                </div>
              </div>
              
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="flex items-center gap-1 text-xs font-semibold text-gray-600 bg-gray-50 px-2.5 py-1.5 rounded-lg border border-gray-100">
                  <MapPin className="w-3.5 h-3.5 text-gray-400" /> {job.location}
                </span>
                <span className="flex items-center gap-1 text-xs font-semibold text-gray-600 bg-gray-50 px-2.5 py-1.5 rounded-lg border border-gray-100">
                  <Briefcase className="w-3.5 h-3.5 text-gray-400" /> {job.experience}
                </span>
                <span className="flex items-center gap-1 text-xs font-bold text-green-700 bg-green-50 px-2.5 py-1.5 rounded-lg border border-green-100">
                  ₹ {job.salary}
                </span>
              </div>
              
              <div className="mt-5 flex items-center justify-between border-t border-gray-50 pt-4">
                <p className="text-xs text-red-500 font-bold">Ends: {job.deadline}</p>
                <button className="bg-blue-700 text-white font-bold text-sm px-6 py-2 rounded-xl active:scale-95 transition-transform shadow-md shadow-blue-700/20">
                  Apply Now
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
