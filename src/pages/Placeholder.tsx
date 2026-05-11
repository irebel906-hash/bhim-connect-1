import { motion } from 'motion/react';

export default function PlaceHolder({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center pt-24">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-500">This section is currently under development.</p>
        <button className="mt-6 bg-blue-700 text-white px-6 py-2 rounded-xl font-medium shadow-md shadow-blue-700/20">Notify Me When Ready</button>
      </motion.div>
    </div>
  );
}
