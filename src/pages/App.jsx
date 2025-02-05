import Navbar from "../components/Navbar";
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <main className="flex-grow w-full">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-5xl font-bold text-center gradient-text mb-8">
            {t('home.welcome')}
          </h1>
          <div className="max-w-2xl mx-auto text-center text-gray-600 space-y-6">
            <p className="text-lg">
              {t('home.intro')}
            </p>
            <div className="flex justify-center gap-4">
              <a href="/certificates" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                {t('home.buttons.certificates')}
              </a>
              <a href="/github-repos" className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                {t('home.buttons.projects')}
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
