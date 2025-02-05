import Navbar from "../components/Navbar";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function App() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <main className="flex-grow w-full bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold gradient-text mb-6 animate-fade-in">
              {t('home.welcome')}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 animate-fade-in-delay">
              {t('home.intro')}
            </p>
            <div className="flex justify-center gap-4 mb-8 animate-fade-in-delay-2">
              <a
                href="https://github.com/burakguclu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <FaGithub className="text-xl" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/burakguclu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FaLinkedin className="text-xl" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Cards Section */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link 
              to="/certificates" 
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-40 bg-blue-500 rounded-lg mb-6 flex items-center justify-center text-white text-5xl">
                🎓
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                {t('home.buttons.certificates')}
              </h2>
              <p className="text-gray-600">
                {t('home.sections.certificates')}
              </p>
            </Link>

            <Link 
              to="/github-repos" 
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-40 bg-purple-500 rounded-lg mb-6 flex items-center justify-center text-white text-5xl">
                💻
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors">
                {t('home.buttons.projects')}
              </h2>
              <p className="text-gray-600">
                {t('home.sections.projects')}
              </p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
