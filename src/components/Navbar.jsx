import { Link, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 shadow-lg">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4">
          <ul className="flex justify-center space-x-8">
            {[
              { path: "/", text: t('nav.home') },
              { path: "/about", text: t('nav.about') },
              { path: "/certificates", text: t('nav.certificates') },
              { path: "/github-repos", text: t('nav.github') }
            ].map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`text-white font-medium px-4 py-2 rounded-lg transition-all duration-300
                    ${location.pathname === item.path 
                      ? "bg-white/20 shadow-md" 
                      : "hover:bg-white/10"}`}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Dil değiştirme butonları */}
          <div className="flex gap-2">
            <button
              onClick={() => changeLanguage('tr')}
              className={`px-3 py-1 rounded ${
                i18n.language === 'tr' ? 'bg-white text-blue-600' : 'bg-blue-500 text-white'
              }`}
            >
              TR
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className={`px-3 py-1 rounded ${
                i18n.language === 'en' ? 'bg-white text-blue-600' : 'bg-blue-500 text-white'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
