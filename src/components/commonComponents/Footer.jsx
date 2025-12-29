import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import { FiArrowRight, FiGlobe } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white pt-16 lg:pt-24 pb-10 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-14">
        {/* Top Section: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl tracking-[0.3em] font-light mb-6">
              PORCELANOSA
            </h2>
            <p className="text-gray-400 max-w-sm mx-auto lg:mx-0 leading-relaxed text-sm">
              Global leaders in luxury surfaces and architectural solutions.
              Innovation and quality in every detail.
            </p>
          </div>

          <div className="flex flex-col justify-center lg:justify-end">
            <h4 className="text-[10px] md:text-xs uppercase tracking-[0.2em] mb-4 text-gray-500 font-semibold text-center lg:text-left">
              Join the Newsletter
            </h4>
            <div className="relative group w-full max-w-md mx-auto lg:mx-0">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-transparent border-b border-white/20 py-3 pr-10 outline-none focus:border-white transition-colors duration-500 text-sm"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 group-hover:translate-x-2 transition-transform duration-300">
                <FiArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          <FooterGroup
            title="Collections"
            links={[
              { name: "Kitchen Systems", path: "/kitchen" },
              { name: "Natural Stone", path: "/stone" },
              { name: "Bathroom Furniture", path: "/bathroom" },
              { name: "Large Format", path: "/large-format" },
            ]}
          />

          <FooterGroup
            title="Professionals"
            links={[
              { name: "Architects Area", path: "/architects" },
              { name: "BIM Library", path: "/bim" },
              { name: "Technical Guides", path: "/guides" },
            ]}
          />

          <FooterGroup
            title="Company"
            links={[
              { name: "Our History", path: "/about" },
              { name: "Sustainability", path: "/eco" },
              { name: "Press Room", path: "/press" },
            ]}
          />

          {/* Social and Language Section */}
          <div className="flex flex-col items-center lg:items-start gap-6">
            <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold">
              Follow Us
            </h4>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <SocialIcon icon={<FaInstagram />} />
              <SocialIcon icon={<FaFacebookF />} />
              <SocialIcon icon={<FaTwitter />} />
              <SocialIcon icon={<FaPinterestP />} />
              <SocialIcon icon={<FaYoutube />} />
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs text-gray-400 hover:text-white cursor-pointer transition-colors group">
              <FiGlobe className="group-hover:rotate-12 transition-transform" />
              <span className="tracking-widest">INTERNATIONAL | ENGLISH</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-8 text-center md:text-left">
          <p className="text-[10px] tracking-widest text-gray-600 uppercase">
            © {new Date().getFullYear()} PORCELANOSA Group. Lifestyle and
            Design.
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-[10px] tracking-widest text-gray-600 uppercase">
            <Link to="/legal" className="hover:text-white transition-colors">
              Legal
            </Link>
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link to="/cookies" className="hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Sub-component for Link Groups
const FooterGroup = ({ title, links }) => (
  <div className="flex flex-col items-center lg:items-start gap-5">
    <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold">
      {title}
    </h4>
    <ul className="flex flex-col items-center lg:items-start gap-3">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            to={link.path}
            className="text-sm text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

// Sub-component for Social Icons
const SocialIcon = ({ icon }) => (
  <div className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full text-gray-400 hover:text-white hover:border-white hover:bg-white/5 cursor-pointer transition-all duration-300">
    {icon}
  </div>
);

export default Footer;
