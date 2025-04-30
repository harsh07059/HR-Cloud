import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="text-center py-24 bg-gradient-to-r from-blue-100 to-blue-200 rounded-3xl shadow-xl">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-6 text-blue-800 drop-shadow-sm"
        >
          Welcome to HR Cloud
        </motion.h1>
        <p className="text-xl text-gray-700 max-w-xl mx-auto">
          Simplifying HR operations with powerful, cloud-based tools built for modern teams.
        </p>
        <motion.button 
          whileHover={{ scale: 1.05 }} 
          className="mt-8 px-8 py-3 bg-blue-600 text-white font-medium rounded-xl shadow-md hover:bg-blue-700 transition"
        >
          Get Started
        </motion.button>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mx-auto px-6 md:px-12">
        {[ 
          { icon: '👥', title: 'Employee Management', desc: 'Easily manage employee records and roles.' },
          { icon: '⏰', title: 'Attendance Tracking', desc: 'Track time and attendance seamlessly.' },
          { icon: '💰', title: 'Payroll Insights', desc: 'Analyze and manage payroll operations.' }
        ].map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-2xl shadow-lg text-center transition-all duration-300 hover:shadow-xl"
          >
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Testimonials Section */}
      <section className="text-center py-16 bg-blue-50 rounded-3xl shadow-lg mx-4">
        <h2 className="text-3xl font-bold text-blue-800 mb-8">What Our Clients Say</h2>
        <div className="flex justify-center gap-12 space-x-8">
          {[ 
            { name: "Jane Doe", role: "HR Manager", testimonial: "HR Cloud transformed the way we handle HR tasks. It's user-friendly and incredibly efficient." },
            { name: "John Smith", role: "CEO", testimonial: "The insights we gain from HR Cloud are invaluable. Payroll and attendance management have never been easier." }
          ].map((client, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg max-w-xs mx-auto">
              <p className="text-gray-600 text-sm italic">"{client.testimonial}"</p>
              <div className="mt-6">
                <h4 className="font-semibold text-blue-800">{client.name}</h4>
                <p className="text-gray-500">{client.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center py-16 bg-blue-600 text-white rounded-3xl shadow-xl">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-xl mb-8">We'd love to hear from you! Whether you have questions or need support, our team is here to help.</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-8 py-3 bg-white text-blue-600 font-medium rounded-xl shadow-md hover:bg-gray-100 transition"
        >
          Contact Us
        </motion.button>
      </section>
    </div>
  );
}
