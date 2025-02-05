import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useTranslation } from 'react-i18next';

const CertificateCard = ({ certificate }) => {
  const { t } = useTranslation();

  const getValidationUrl = (certificate) => {
    switch (certificate.provider.toLowerCase()) {
      case 'btk akademi':
        return `https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=${certificate.id}`;
      case 'coursera':
        return certificate.validateUrl;
      default:
        return certificate.validateUrl;
    }
  };

  // Sertifika adını çevirme
  const getLocalizedCertificateName = (cert) => {
    switch (cert.provider.toLowerCase()) {
      case 'btk akademi':
        return t(`certificates.certificates.btk.${cert.name.toLowerCase().replace(/ & /g, '_&_').replace(/ /g, '_')}`, cert.certificate);
      case 'coursera':
        return t(`certificates.certificates.coursera.${cert.name.toLowerCase().replace(/ /g, '_')}.title`, cert.certificate);
      default:
        return cert.certificate;
    }
  };

  // Sağlayıcıya göre ikon ve renk belirleme
  const getProviderStyles = (provider) => {
    switch (provider.toLowerCase()) {
      case 'btk akademi':
        return {
          bgColor: 'bg-blue-50',
          textColor: 'text-blue-600',
          borderColor: 'border-blue-100',
          hoverBorder: 'hover:border-blue-300',
          icon: '🎓'
        };
      case 'coursera':
        return {
          bgColor: 'bg-indigo-50',
          textColor: 'text-indigo-600',
          borderColor: 'border-indigo-100',
          hoverBorder: 'hover:border-indigo-300',
          icon: '🌐'
        };
      default:
        return {
          bgColor: 'bg-gray-50',
          textColor: 'text-gray-600',
          borderColor: 'border-gray-100',
          hoverBorder: 'hover:border-gray-300',
          icon: '📜'
        };
    }
  };

  const styles = getProviderStyles(certificate.provider);

  return (
    <div className={`
      relative overflow-hidden rounded-xl border-2 ${styles.borderColor} ${styles.hoverBorder}
      transition-all duration-300 hover:shadow-lg hover:-translate-y-1
      ${styles.bgColor}
    `}>
      <div className="p-6">
        {/* Üst Kısım */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl" role="img" aria-label="certificate">
                {styles.icon}
              </span>
              <span className={`text-sm font-medium ${styles.textColor} px-2 py-1 rounded-full bg-white/50`}>
                {certificate.provider}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
              {getLocalizedCertificateName(certificate)}
            </h3>
          </div>
          <span className="text-sm text-gray-500 whitespace-nowrap ml-4">
            {certificate.date}
          </span>
        </div>

        {/* Alt Kısım */}
        <div className="mt-6 flex justify-end">
          <a
            href={getValidationUrl(certificate)}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              inline-flex items-center gap-2 px-4 py-2 rounded-lg
              bg-white/75 backdrop-blur-sm ${styles.textColor} font-medium
              hover:bg-white transition-colors duration-300
              border border-transparent hover:border-current
            `}
          >
            {t('certificates.viewPdf')}
            <span className="text-sm">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const Certificates = () => {
  const { t, i18n } = useTranslation();
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
              <CertificateCard key={cert.id} certificate={cert} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Certificates;
