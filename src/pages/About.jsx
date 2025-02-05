import { useState } from "react";
import Navbar from "../components/Navbar";

const About = () => {
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
                <h1 className="text-3xl font-bold text-gray-800">Adınız Soyadınız</h1>
                <p className="text-xl text-gray-600">Yazılım Geliştirici</p>
                <div className="mt-2 text-gray-600">
                  <p>📧 email@example.com</p>
                  <p>📱 +90 555 555 5555</p>
                  <p>📍 İstanbul, Türkiye</p>
                </div>
              </div>
              <div className="screen-only">
                <button
                  onClick={handlePrint}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  CV'yi Yazdır
                </button>
              </div>
            </div>

            {/* Özet */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Profesyonel Özet</h2>
              <p className="text-gray-600">
                5 yıllık yazılım geliştirme deneyimine sahip, modern web teknolojilerinde uzmanlaşmış
                bir yazılım geliştiriciyim. React, Node.js ve cloud teknolojileri konusunda güçlü
                bir altyapıya sahibim.
              </p>
            </section>

            {/* Deneyim */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">İş Deneyimi</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Kıdemli Frontend Geliştirici</h3>
                  <p className="text-gray-600">Örnek Şirket A.Ş. | 2020 - Günümüz</p>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>Modern React uygulamaları geliştirme</li>
                    <li>Performans optimizasyonu</li>
                    <li>Takım liderliği</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Frontend Geliştirici</h3>
                  <p className="text-gray-600">Örnek Teknoloji Ltd. | 2018 - 2020</p>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>Responsive web uygulamaları geliştirme</li>
                    <li>UI/UX geliştirmeleri</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Eğitim */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Eğitim</h2>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Bilgisayar Mühendisliği</h3>
                <p className="text-gray-600">Örnek Üniversitesi | 2014 - 2018</p>
              </div>
            </section>

            {/* Yetenekler */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Teknik Yetenekler</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Frontend</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>React.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>Next.js</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Backend</h3>
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
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Yabancı Diller</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>İngilizce - İleri Seviye</li>
                <li>Almanca - Orta Seviye</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About; 