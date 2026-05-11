import { motion } from 'motion/react';
import { Phone, Navigation, HeartHandshake, ShieldAlert, GraduationCap, Users } from 'lucide-react';

export default function Help() {
  const categories = [
    {
      title: "Medical Emergencies",
      icon: HeartHandshake,
      color: "bg-red-50 text-red-600",
      services: [
        { name: "24x7 Blood Help - Pune", contact: "9876543210", distance: "2.4 km" },
        { name: "Community Ambulance", contact: "9876543211", distance: "4.1 km" }
      ]
    },
    {
      title: "Legal Support",
      icon: ShieldAlert,
      color: "bg-blue-50 text-blue-600",
      services: [
        { name: "Bhim Legal Support Team", contact: "9876543212", desc: "Free advice for atrocity & civil rights issues." },
        { name: "Women Safety Cell", contact: "9876543213", desc: "24/7 helpline by community lawyers." }
      ]
    },
    {
      title: "Student & Career",
      icon: GraduationCap,
      color: "bg-emerald-50 text-emerald-600",
      services: [
        { name: "Hostel Admission Guidance", contact: "9876543214", desc: "Help with Post Matric & Swadhar forms." },
        { name: "UPSC/MPSC Query Desk", contact: "9876543215", desc: "Talk to selected candidates." }
      ]
    },
    {
      title: "Social & Mental Well-being",
      icon: Users,
      color: "bg-purple-50 text-purple-600",
      services: [
        { name: "Maitri Counseling", contact: "9876543216", desc: "Confidential mental health support." },
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-8 p-4">
      
      {/* Emergency Button */}
      <motion.button 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-3xl p-6 flex flex-col items-center justify-center shadow-lg shadow-red-600/30 mb-8 active:scale-95 transition-transform"
      >
        <div className="bg-white/20 p-4 rounded-full mb-3 backdrop-blur-sm border border-white/30">
          <Phone className="w-8 h-8 text-white fill-white" />
        </div>
        <span className="text-xl font-extrabold tracking-wide">SOS / Emergency</span>
        <span className="text-red-100 text-sm mt-1">Tap to access immediate help</span>
      </motion.button>

      <div className="space-y-6">
        {categories.map((category, idx) => {
          const Icon = category.icon;
          return (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex items-center gap-2 mb-3 px-1">
                <div className={`p-1.5 rounded-lg ${category.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-gray-900 text-lg">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.services.map((service, i) => (
                  <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-gray-800">{service.name}</h4>
                        {service.desc && <p className="text-xs text-gray-500 mt-1">{service.desc}</p>}
                        {service.distance && (
                          <p className="text-xs text-blue-600 font-semibold flex items-center gap-1 mt-1">
                            <Navigation className="w-3 h-3" /> {service.distance} away
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4 pt-4 border-t border-gray-50">
                      <button className="flex-1 bg-green-50 text-green-700 py-2 rounded-xl text-sm font-bold flex items-center justify-center gap-2 active:bg-green-100 transition">
                        <Phone className="w-4 h-4" /> Call
                      </button>
                      <button className="flex-1 bg-blue-50 text-blue-700 py-2 rounded-xl text-sm font-bold flex items-center justify-center gap-2 active:bg-blue-100 transition">
                        WhatsApp
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
