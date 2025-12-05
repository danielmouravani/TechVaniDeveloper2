import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-white">TechVani</span>
        </div>

        <div className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Desenvolvido com <span className="text-red-500">❤</span> por Tech Vani.
        </div>

        <div>
          {/* Social icons removed as requested */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;