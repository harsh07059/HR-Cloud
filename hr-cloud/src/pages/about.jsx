export default function About() {
  return (
    <div className="space-y-24">
      {/* About Header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-blue-700">About HR Cloud</h2>
        <p className="text-xl text-gray-600 mt-4">Empowering HR through innovation and simplicity. We are redefining the future of workforce management.</p>
      </div>

      {/* Mission Section */}
      <section className="bg-white p-8 md:p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <h3 className="text-3xl font-semibold text-blue-800 mb-4">Our Mission</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our mission is to empower organizations with seamless HR solutions that enhance productivity and simplify workforce management.
          We strive to make HR processes more intuitive, effective, and accessible.
        </p>
      </section>

      {/* Vision Section */}
      <section className="bg-white p-8 md:p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <h3 className="text-3xl font-semibold text-blue-800 mb-4">Our Vision</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our vision is to be the leading cloud HR platform that modernizes and redefines how businesses manage their workforce.
          We believe in creating solutions that drive growth, efficiency, and empower organizations to thrive in the digital age.
        </p>
      </section>

      {/* Why HR Cloud Section */}
      <section className="bg-white p-8 md:p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <h3 className="text-3xl font-semibold text-blue-800 mb-4">Why HR Cloud?</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          HR Cloud was born from the need for scalable, user-friendly HR tools. We help organizations save time, improve engagement, and
          drive business growth with intuitive solutions that simplify workforce management, all while ensuring data security and ease of use.
        </p>
      </section>

      {/* Core Values Section */}
      <section className="bg-white p-8 md:p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <h3 className="text-3xl font-semibold text-blue-800 mb-4">Our Core Values</h3>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
          <li><strong>Integrity:</strong> We act with honesty, transparency, and accountability in everything we do.</li>
          <li><strong>Innovation:</strong> We constantly evolve and drive forward-thinking HR solutions that meet the demands of today’s workforce.</li>
          <li><strong>User-First Design:</strong> We create HR tools with the end-user in mind, ensuring simplicity, ease of use, and exceptional experience.</li>
        </ul>
      </section>
    </div>
  );
}
