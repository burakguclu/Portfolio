import { useState } from "react";
import Navbar from "../components/Navbar";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const [showPrintVersion, setShowPrintVersion] = useState(false);

  const handlePrint = () => {
    setShowPrintVersion(true);
    setTimeout(() => {
      window.print();
      setShowPrintVersion(false);
    }, 100);
  };

  return (
    <div className={`flex flex-col min-h-screen w-full ${showPrintVersion ? 'print-mode' : ''}`}>
      <div className="screen-only">
        <Navbar />
      </div>
      <main className="flex-grow w-full">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            {/* Kişisel Bilgiler */}
            <div className="mb-8 flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">{t('about.title')}</h1>
                <p className="text-xl text-gray-600">{t('about.jobTitle')}</p>
                <div className="mt-2 text-gray-600">
                  <p>📧 email@example.com</p>
                  <p>📱 +90 555 555 5555</p>
                  <p>📍 {t('about.contact.location')}</p>
                </div>
              </div>
              <div className="screen-only">
                <button
                  onClick={handlePrint}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {t('about.printCV')}
                </button>
              </div>
            </div>

            {/* Özet */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('about.summary.title')}</h2>
              <p className="text-gray-600">{t('about.summary.content')}</p>
            </section>

            {/* Deneyim */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('about.experience.title')}</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {t('about.experience.senior.title')}
                  </h3>
                  <p className="text-gray-600">{t('about.experience.senior.company')}</p>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>{t('about.experience.senior.duties.1')}</li>
                    <li>{t('about.experience.senior.duties.2')}</li>
                    <li>{t('about.experience.senior.duties.3')}</li>
                  </ul>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {t('about.experience.junior.title')}
                  </h3>
                  <p className="text-gray-600">{t('about.experience.junior.company')}</p>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>{t('about.experience.junior.duties.1')}</li>
                    <li>{t('about.experience.junior.duties.2')}</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Eğitim */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('about.education.title')}</h2>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-800">{t('about.education.degree')}</h3>
                <p className="text-gray-600">{t('about.education.school')}</p>
              </div>
            </section>

            {/* Yetenekler */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('about.skills.title')}</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('about.skills.frontend')}</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>React.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>Next.js</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('about.skills.backend')}</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Diller */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('about.languages.title')}</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>{t('about.languages.english')}</li>
                <li>{t('about.languages.german')}</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About; 