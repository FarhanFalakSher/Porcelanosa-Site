import { Link } from "react-router-dom";
import { FiArrowUpRight, FiFacebook, FiInstagram, FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-200 overflow-hidden">
      {/* Main Footer */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16">

          {/* Brand Section - Span 4 cols */}
          <div className="lg:col-span-4">
            <h2 className="text-2xl tracking-[0.4em] font-bold text-gray-900 mb-6">
              PORCELANOSA
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-sm lg:text-base">
              Transforming spaces with premium architectural solutions worldwide. Excellence in design since 1973.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors">
                <FiPhone className="text-gray-400" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors">
                <FiMail className="text-gray-400" />
                <span className="text-sm">contact@porcelanosa.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors">
                <FiMapPin className="text-gray-400" />
                <span className="text-sm">New York • London • Dubai</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              <SocialIcon icon={<FiInstagram />} color="pink" />
              <SocialIcon icon={<FiLinkedin />} color="blue" />
              <SocialIcon icon={<FiFacebook />} color="indigo" />
            </div>
          </div>

          {/* Links Columns - Each spans 2 cols */}
          <FooterCol
            title="Products"
            links={[
              ["Porcelain Tiles", "/products/porcelain"],
              ["Ceramic Tiles", "/products/ceramic"],
              ["Bathroom Solutions", "/bathroom"],
              ["Kitchen Systems", "/kitchen"],
              ["Outdoor Solutions", "/outdoor"],
              ["Technical Materials", "/technical"],
            ]}
            className="lg:col-span-2"
          />

          <FooterCol
            title="Projects"
            links={[
              ["Hotels & Resorts", "/projects/hotels"],
              ["Restaurants", "/projects/restaurants"],
              ["Residential", "/projects/residential"],
              ["Offices", "/projects/offices"],
              ["Retail Spaces", "/projects/retail"],
              ["Healthcare", "/projects/healthcare"],
            ]}
            className="lg:col-span-2"
          />

          <FooterCol
            title="Professionals"
            links={[
              ["Architects", "/professionals/architects"],
              ["Interior Designers", "/professionals/designers"],
              ["Developers", "/professionals/developers"],
              ["Contractors", "/professionals/contractors"],
              ["Distributors", "/professionals/distributors"],
              ["Trade Program", "/professionals/trade"],
            ]}
            className="lg:col-span-2"
          />

          {/* Newsletter - Span 2 cols */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-gray-900 mb-5 text-sm tracking-wider uppercase">
              Newsletter
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              Get design inspiration and updates
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
              <button className="px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Porcelanosa Group. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <Link className="text-xs text-gray-600 hover:text-gray-900 transition-colors hover:underline" to="/about-us">
                About Us
              </Link>
              <Link className="text-xs text-gray-600 hover:text-gray-900 transition-colors hover:underline" to="/blog">
                Blog
              </Link>
              <Link className="text-xs text-gray-600 hover:text-gray-900 transition-colors hover:underline" to="/contact">
                Contact
              </Link>
              <Link className="text-xs text-gray-600 hover:text-gray-900 transition-colors hover:underline" to="/privacy">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterCol = ({ title, links, className = "" }) => (
  <div className={`${className}`}>
    <h4 className="font-semibold text-gray-900 mb-6 text-sm tracking-wider uppercase">
      {title}
    </h4>
    <ul className="space-y-4">
      {links.map(([label, path]) => (
        <li key={label}>
          <Link
            to={path}
            className="group inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-all duration-300"
          >
            <span className="text-sm">{label}</span>
            <FiArrowUpRight className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-xs" />
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const SocialIcon = ({ icon, color = "gray" }) => (
  <div className={`
    p-2.5 rounded-full border transition-all duration-300 cursor-pointer
    ${color === 'pink' ? 'hover:bg-pink-50 hover:border-pink-200 hover:text-pink-600' : ''}
    ${color === 'blue' ? 'hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600' : ''}
    ${color === 'indigo' ? 'hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-600' : ''}
    border-gray-300 text-gray-600 hover:scale-105
  `}>
    {icon}
  </div>
);

export default Footer;