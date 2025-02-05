import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useTranslation } from 'react-i18next';

const Certificates = () => {
  const { t } = useTranslation();
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/certificates.json")
      .then((response) => {
        if (!response.ok) throw new Error(t('certificates.loadError'));
        return response.json();
      })
      .then((data) => {
        setCertificates(data);
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
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
      </div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded">
          <p className="font-bold">{t('certificates.error')}</p>
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
            {t('certificates.title')}
          </h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert) => (
              <div 
                key={cert.id} 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="text-xl font-bold text-gray-800 mb-2">{cert.name}</h2>
                <p className="text-gray-600 mb-2">{cert.certificate}</p>
                <p className="text-sm text-gray-500 mb-4">
                  {cert.provider} - {cert.date}
                </p>
                <a 
                  href={cert.validateUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {t('certificates.viewPdf')}
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Certificates;
