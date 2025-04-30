export default function Contact() {
  return (
    <section className="relative bg-gradient-to-b from-white to-blue-50 py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center space-y-16">
        {/* Section Header */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800">Contact Us</h2>
          <p className="text-lg text-gray-600 mt-4">
            We’d love to hear from you. Reach out to us today!
          </p>
        </div>

        {/* Contact Form */}
        <form className="bg-white shadow-xl rounded-3xl p-10 space-y-6 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-base"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-base"
            />
          </div>
          <textarea
            placeholder="Your Message"
            className="w-full p-4 border border-gray-300 rounded-lg h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 text-base"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 text-lg font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info & Socials */}
        <div className="text-center text-gray-700 space-y-4">
          <p className="text-lg"><strong>Address:</strong> 123 HR Cloud Street, Tech City</p>
          <p className="text-lg"><strong>Phone:</strong> +1 (234) 567-890</p>
          <p className="text-lg"><strong>Email:</strong> contact@hrcloud.com</p>

          {/* Social Links */}
          <div className="flex justify-center gap-6 text-blue-600 mt-4 text-lg font-medium">
            <a href="#" className="hover:underline">LinkedIn</a>
            <a href="#" className="hover:underline">Twitter</a>
            <a href="#" className="hover:underline">Facebook</a>
          </div>
        </div>
      </div>
    </section>
  );
}
