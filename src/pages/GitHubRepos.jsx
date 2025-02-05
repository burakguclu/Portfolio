import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useTranslation } from 'react-i18next';

const GitHubRepos = () => {
  const { t } = useTranslation();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const githubUsername = "burakguclu";

  useEffect(() => {
    fetch(`https://api.github.com/users/${githubUsername}/repos`)
      .then((response) => {
        if (!response.ok) throw new Error(t('github.loadError'));
        return response.json();
      })
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [t]);

  if (loading) return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600"></div>
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
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <main className="flex-grow w-full">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-center gradient-text">
            {t('github.title')}
          </h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo) => (
              <div 
                key={repo.id} 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="text-xl font-bold text-gray-800 mb-2">{repo.name}</h2>
                <p className="text-gray-600 text-sm mb-4 h-20 overflow-auto">
                  {repo.description || t('github.noDescription')}
                </p>
                <div className="flex justify-between items-center">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    {t('github.viewProject')}
                  </a>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-500">
                      ⭐ {repo.stargazers_count}
                    </span>
                    <span className="text-sm text-gray-500">
                      🔄 {repo.forks_count}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default GitHubRepos;
