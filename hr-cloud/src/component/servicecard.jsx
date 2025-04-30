import { motion } from "framer-motion";

export default function ServiceCard({ title, description, icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
    >
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
