import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaVimeoV,
  FaLinkedinIn,
  FaRss,
} from "react-icons/fa";
import { FiChevronRight, FiGlobe } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-6 font-sans text-gray-800">
      <div className="max-w-400 mx-auto px-6 lg:px-14">
        {/* Compact Newsletter Row */}
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-100 pb-8 mb-10 gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 whitespace-nowrap">
              Newsletter
            </span>
            <div className="flex w-full sm:w-80 border border-gray-200 rounded-sm focus-within:border-gray-900 transition-colors">
              <input
                type="email"
                placeholder="Enter your email to join us..."
                className="w-full px-3 py-2 text-xs outline-none"
              />
              <button className="bg-gray-900 text-white px-4 py-2 text-[10px] font-bold tracking-tighter hover:bg-black transition-colors">
                JOIN
              </button>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">
              Follow
            </span>
            <div className="flex gap-4 text-gray-400">
              <SocialLink icon={<FaFacebookF />} />
              <SocialLink icon={<FaInstagram />} />
              <SocialLink icon={<FaPinterestP />} />
              <SocialLink icon={<FaVimeoV />} />
              <SocialLink icon={<FaLinkedinIn />} />
            </div>
          </div>
        </div>

        {/* High-Density Grid (Like a Content Filter) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-12">
          <FilterGroup title="Services">
            <FilterLink>Showroom Finder</FilterLink>
            <FilterLink>Virtual Tours</FilterLink>
            <FilterLink>Appointment Booking</FilterLink>
            <FilterLink>Project Consulting</FilterLink>
          </FilterGroup>

          <FilterGroup title="Professional">
            <FilterLink>Architect Portal</FilterLink>
            <FilterLink>Technical BIM Files</FilterLink>
            <FilterLink>Contract Division</FilterLink>
            <FilterLink>Global Associates</FilterLink>
          </FilterGroup>

          <FilterGroup title="Knowledge">
            <FilterLink>Design Trends</FilterLink>
            <FilterLink>Sustainability Report</FilterLink>
            <FilterLink>Technical Guides</FilterLink>
            <FilterLink>Media & Press</FilterLink>
          </FilterGroup>

          {/* Grouping the brands closer together to fill space */}
          <div className="col-span-2">
            <h4 className="text-[10px] uppercase tracking-widest font-bold mb-5 text-gray-900 opacity-50">
              Porcelanosa Portfolio
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <FilterLink>Gamadecor</FilterLink>
              <FilterLink>Butech</FilterLink>
              <FilterLink>Noken</FilterLink>
              <FilterLink>Krion</FilterLink>
              <FilterLink>L'Antic Colonial</FilterLink>
              <FilterLink>Xtone</FilterLink>
            </div>
          </div>
        </div>

        {/* Minimalist Bottom Bar */}
        <div className="pt-6 border-t border-gray-50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6 text-[9px] font-bold tracking-widest text-gray-400 uppercase">
            <p>© 2025 PORCELANOSA</p>
            <Link to="/legal" className="hover:text-gray-900 transition-colors">
              Legal notice
            </Link>
            <Link
              to="/privacy"
              className="hover:text-gray-900 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="flex items-center gap-2 text-[9px] font-bold text-gray-400 hover:text-gray-900 cursor-pointer transition-colors tracking-widest uppercase">
            <FiGlobe /> International | English
          </div>
        </div>
      </div>
    </footer>
  );
};

// Sub-components for density
const FilterGroup = ({ title, children }) => (
  <div className="flex flex-col gap-4">
    <h4 className="text-[10px] uppercase tracking-widest font-bold text-gray-900 opacity-50 underline decoration-gray-100 underline-offset-8">
      {title}
    </h4>
    <div className="flex flex-col gap-2">{children}</div>
  </div>
);

const FilterLink = ({ children }) => (
  <Link
    to="#"
    className="text-[11px] text-gray-600 hover:text-gray-900 flex items-center gap-1 group transition-all"
  >
    <FiChevronRight className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-gray-400" />
    {children}
  </Link>
);

const SocialLink = ({ icon }) => (
  <Link to="#" className="hover:text-gray-900 transition-colors text-xs">
    {icon}
  </Link>
);

export default Footer;
