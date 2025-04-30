import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Employee Tracking",
      description: "Track employee roles, progress, and hierarchy."
    },
    {
      title: "Attendance Management",
      description: "Monitor employee attendance and punctuality."
    },
    {
      title: "Payroll Insights",
      description: "Get accurate payroll calculations and stats."
    },
    {
      title: "Leave Approvals",
      description: "Streamline leave requests and approval processes."
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 px-6 md:px-12">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(191,219,254,0.2),transparent_70%)] z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-6"
        >
          Our Services
        </motion.h2>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
          Streamlining HR operations for your organization with innovative, easy-to-use solutions.
        </p>

        {/* Services Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-left"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

