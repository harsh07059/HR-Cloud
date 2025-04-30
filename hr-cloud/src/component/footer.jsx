export default function Footer() {
    return (
      <footer className="bg-blue-800 text-white py-10 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-3">HR Cloud</h3>
            <p className="text-sm text-blue-100">
              Empowering your HR operations with simple, reliable, and modern cloud-based tools.
            </p>
          </div>
  
          {/* Navigation */}
          <div>
            <h4 className="text-xl font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-blue-100">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">Services</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
              <li><a href="#" className="hover:text-white transition">About</a></li>
            </ul>
          </div>
  
          {/* Social Media */}
          <div>
            <h4 className="text-xl font-semibold mb-3">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-6 text-lg">
              <a href="#" className="hover:text-blue-300 transition">LinkedIn</a>
              <a href="#" className="hover:text-blue-300 transition">Twitter</a>
              <a href="#" className="hover:text-blue-300 transition">Facebook</a>
            </div>
          </div>
        </div>
  
        {/* Bottom Bar */}
        <div className="border-t border-blue-600 mt-10 pt-6 text-center text-sm text-blue-200">
          © {new Date().getFullYear()} HR Cloud. All rights reserved.
        </div>
      </footer>
    );
  }
  