import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useTranslation } from 'react-i18next';
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const { t } = useTranslation();

  const getLanguageStyle = (language) => {
    const styles = {
      JavaScript: { 
        bg: 'bg-blue-50', 
        text: 'text-blue-600', 
        border: 'border-blue-100',
        hover: 'hover:border-blue-300',
        icon: '📦'
      },
      TypeScript: { 
        bg: 'bg-blue-50', 
        text: 'text-blue-600', 
        border: 'border-blue-100',
        hover: 'hover:border-blue-300',
        icon: '🔷'
      },
      Python: { 
        bg: 'bg-blue-50', 
        text: 'text-blue-600', 
        border: 'border-blue-100',
        hover: 'hover:border-blue-300',
        icon: '🐍'
      },
      Java: { 
        bg: 'bg-blue-50', 
        text: 'text-blue-600', 
        border: 'border-blue-100',
        hover: 'hover:border-blue-300',
        icon: '☕'
      },
      HTML: {
        bg: 'bg-blue-50',
        text: 'text-blue-600',
        border: 'border-blue-100',
        hover: 'hover:border-blue-300',
        icon: '🌐'
      },
      CSS: {
        bg: 'bg-blue-50',
        text: 'text-blue-600',
        border: 'border-blue-100',
        hover: 'hover:border-blue-300',
        icon: '🎨'
      },
      default: { 
        bg: 'bg-blue-50', 
        text: 'text-blue-600', 
        border: 'border-blue-100',
        hover: 'hover:border-blue-300',
        icon: '📁'
      }
    };

    return styles[language] || styles.default;
  };

  const styles = getLanguageStyle(project.language);

  return (
    <div className={`
      group relative overflow-hidden rounded-xl border-2 
      ${styles.border} ${styles.hover}
      transition-all duration-300 hover:shadow-xl hover:-translate-y-1
      backdrop-blur-sm bg-white
    `}>
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative p-6">
        {/* Üst Kısım - Başlık ve Dil */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300" role="img" aria-label="language-icon">
                {styles.icon}
              </span>
              <span className={`
                text-sm font-medium ${styles.text} px-3 py-1 rounded-full
                ${styles.bg} border border-current/20
                transform group-hover:scale-105 transition-transform duration-300
              `}>
                {project.language || t('github.noLanguage')}
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
              {project.name}
            </h3>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 group-hover:scale-110 transition-transform duration-300">
              <FaStar className="text-blue-500" />
              <span className="text-sm font-medium text-gray-600">{project.stargazers_count}</span>
            </div>
            <div className="flex items-center gap-1.5 group-hover:scale-110 transition-transform duration-300">
              <FaCodeBranch className="text-blue-500" />
              <span className="text-sm font-medium text-gray-600">{project.forks_count}</span>
            </div>
          </div>
        </div>

        {/* Açıklama */}
        <p className="text-gray-600 mb-6 line-clamp-2 min-h-[3rem] group-hover:text-gray-800 transition-colors duration-300">
          {project.description || t('github.noDescription')}
        </p>

        {/* Alt Kısım - Buton */}
        <div className="mt-auto flex justify-end">
          <a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              group/btn inline-flex items-center gap-2 px-4 py-2 rounded-lg
              bg-blue-50 text-blue-600 font-medium
              hover:bg-blue-100 transition-all duration-300
              border border-blue-200 hover:border-blue-300
              transform hover:scale-105
            `}
          >
            <FaGithub className="text-lg transition-transform group-hover/btn:rotate-12 duration-300" />
            {t('github.viewProject')}
            <span className="text-sm transition-transform group-hover/btn:translate-x-1 duration-300">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const GitHubRepos = () => {
  const { t } = useTranslation();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/burakguclu/repos?sort=updated&per_page=100&type=public',
          {
            headers: {
              'Accept': 'application/vnd.github.v3+json',
              'Authorization': `token ${GITHUB_TOKEN}`
            }
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          console.error('GitHub API Response:', {
            status: response.status,
            statusText: response.statusText,
            error: errorData
          });
          throw new Error(errorData.message || t('github.loadError'));
        }

        const data = await response.json();
        console.log('Fetched repos:', data); // Debug için

        const filteredRepos = data
          .filter(repo => !repo.fork)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

        setRepos(filteredRepos);
        setLoading(false);
      } catch (error) {
        console.error('GitHub API Error:', error);
        setError(`${t('github.loadError')}: ${error.message}`);
        setLoading(false);
      }
    };

    if (GITHUB_TOKEN) {
      fetchRepos();
    } else {
      console.error('GitHub Token is missing');
      setError('GitHub token configuration is missing');
      setLoading(false);
    }
  }, [t, GITHUB_TOKEN]);

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
          <p className="mt-2">{error}</p>
          <p className="mt-2 text-sm">
            Please check your network connection and GitHub token configuration.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      <main className="flex-grow w-full">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8 text-center gradient-text">
            {t('github.title')}
          </h1>
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

export default GitHubRepos;
