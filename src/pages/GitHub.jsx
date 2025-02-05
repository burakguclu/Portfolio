import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useTranslation } from 'react-i18next';
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const { t } = useTranslation();

  const getLanguageStyle = (language) => {
    const styles = {
      JavaScript: { 
        bg: 'bg-[#f7df1e]/10', 
        text: 'text-[#f7df1e]', 
        border: 'border-[#f7df1e]/20',
        hover: 'hover:border-[#f7df1e]/50',
        icon: '📦'
      },
      TypeScript: { 
        bg: 'bg-[#3178c6]/10', 
        text: 'text-[#3178c6]', 
        border: 'border-[#3178c6]/20',
        hover: 'hover:border-[#3178c6]/50',
        icon: '🔷'
      },
      Python: { 
        bg: 'bg-[#3776ab]/10', 
        text: 'text-[#3776ab]', 
        border: 'border-[#3776ab]/20',
        hover: 'hover:border-[#3776ab]/50',
        icon: '🐍'
      },
      Java: { 
        bg: 'bg-[#b07219]/10', 
        text: 'text-[#b07219]', 
        border: 'border-[#b07219]/20',
        hover: 'hover:border-[#b07219]/50',
        icon: '☕'
      },
      default: { 
        bg: 'bg-gray-50', 
        text: 'text-gray-600', 
        border: 'border-gray-200',
        hover: 'hover:border-gray-300',
        icon: '📁'
      }
    };

    return styles[language] || styles.default;
  };

  const styles = getLanguageStyle(project.language);

  return (
    <div className={`
      relative overflow-hidden rounded-xl border-2 ${styles.border} ${styles.hover}
      transition-all duration-300 hover:shadow-xl hover:-translate-y-1
      backdrop-blur-sm bg-white/40
    `}>
      <div className="p-6">
        {/* Üst Kısım - Başlık ve Dil */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl" role="img" aria-label="language-icon">
                {styles.icon}
              </span>
              <span className={`
                text-sm font-medium ${styles.text} px-3 py-1 rounded-full
                ${styles.bg} border border-current/20
              `}>
                {project.language || t('github.noLanguage')}
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 line-clamp-1 group-hover:text-blue-600">
              {project.name}
            </h3>
          </div>
          
          <div className="flex items-center gap-4 text-gray-400">
            <div className="flex items-center gap-1.5">
              <FaStar className="text-amber-400" />
              <span className="text-sm font-medium">{project.stargazers_count}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <FaCodeBranch className="text-indigo-400" />
              <span className="text-sm font-medium">{project.forks_count}</span>
            </div>
          </div>
        </div>

        {/* Açıklama */}
        <p className="text-gray-600 mb-6 line-clamp-2 min-h-[3rem]">
          {project.description || t('github.noDescription')}
        </p>

        {/* Alt Kısım - Buton */}
        <div className="mt-auto flex justify-end">
          <a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              group inline-flex items-center gap-2 px-4 py-2 rounded-lg
              ${styles.bg} ${styles.text} font-medium
              hover:bg-opacity-100 transition-all duration-300
              border border-current/20 hover:border-current/40
            `}
          >
            <FaGithub className="text-lg transition-transform group-hover:scale-110" />
            {t('github.viewProject')}
            <span className="text-sm transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const GitHub = () => {
  const { t } = useTranslation();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/burakguclu/repos?sort=updated');
        if (!response.ok) throw new Error(t('github.loadError'));
        const data = await response.json();
        setRepos(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchRepos();
  }, [t]);

  if (loading) return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
      </div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded">
          <p className="font-bold">{t('github.error')}</p>
          <p>{error}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      <main className="flex-grow w-full">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-2 text-center gradient-text">
            {t('github.title')}
          </h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            {t('github.subtitle')}
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo) => (
              <ProjectCard key={repo.id} project={repo} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default GitHub; 