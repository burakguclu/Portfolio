import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import axios from 'axios';

const About = () => {
  const { t } = useTranslation();
  const [profileImage, setProfileImage] = useState('');

  useEffect(() => {
    const fetchGithubProfile = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/burakguclu');
        setProfileImage(response.data.avatar_url);
      } catch (error) {
        console.error('GitHub profil resmi yüklenemedi:', error);
        // Hata durumunda varsayılan resmi kullan
        setProfileImage('https://avatars.githubusercontent.com/u/97850430');
      }
    };

    fetchGithubProfile();
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full">
      <nav className="no-print">
        <Navbar />
      </nav>
      <main className="flex-grow w-full bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          {/* Yazdırma Butonu */}
          <div className="flex justify-end mb-4 no-print">
            <button
              onClick={() => window.print()}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <span>🖨️</span>
              {t('about.printCV')}
            </button>
          </div>

          {/* CV İçeriği */}
          <div className="cv-container">
            {/* Sol Bölüm */}
            <div className="cv-left-column">
              {/* Profil Fotoğrafı */}
              <div className="profile-image-container">
                <img 
                  src={profileImage}
                  alt="Profile" 
                  className="profile-image"
                />
              </div>

              {/* Kişisel Bilgiler */}
              <div className="personal-details">
                <h2 className="section-title">{t('about.sections.personal')}</h2>
                <div className="contact-info">
                  <div className="contact-item">
                    <FaEnvelope className="contact-icon" />
                    <span>email@example.com</span>
                  </div>
                  <div className="contact-item">
                    <FaPhone className="contact-icon" />
                    <span>+90 555 555 5555</span>
                  </div>
                  <div className="contact-item">
                    <FaMapMarkerAlt className="contact-icon" />
                    <span>{t('about.contact.location')}</span>
                  </div>
                </div>
              </div>

              {/* İlgi Alanları */}
              <div className="interests">
                <h2 className="section-title">{t('about.sections.interests')}</h2>
                <ul className="interests-list">
                  <li>{t('about.interests.sports')}</li>
                  <li>{t('about.interests.cooking')}</li>
                  <li>{t('about.interests.reading')}</li>
                </ul>
              </div>

              {/* Diller */}
              <div className="languages">
                <h2 className="section-title">{t('about.sections.languages')}</h2>
                <div className="language-item">
                  <span>{t('about.languages.english')}</span>
                  <div className="language-level">
                    <span className="level-dot filled"></span>
                    <span className="level-dot filled"></span>
                    <span className="level-dot filled"></span>
                    <span className="level-dot"></span>
                  </div>
                </div>
                <div className="language-item">
                  <span>{t('about.languages.german')}</span>
                  <div className="language-level">
                    <span className="level-dot filled"></span>
                    <span className="level-dot filled"></span>
                    <span className="level-dot"></span>
                    <span className="level-dot"></span>
                  </div>
                </div>
                <div className="language-item">
                  <span>{t('about.languages.turkish')}</span>
                  <div className="language-level">
                    <span className="level-dot filled"></span>
                    <span className="level-dot filled"></span>
                    <span className="level-dot filled"></span>
                    <span className="level-dot filled"></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sağ Bölüm */}
            <div className="cv-right-column">
              <h1 className="cv-name">BURAK GÜÇLÜ</h1>
              <p className="cv-title">{t('about.jobTitle')}</p>
              <p className="cv-description">{t('about.summary.content')}</p>

              {/* İş Deneyimi */}
              <section className="experience-section">
                <h2 className="section-title">{t('about.sections.experience')}</h2>
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h3>{t('about.experience.intern.tusas')}</h3>
                      <p className="timeline-location">Türk Havacılık ve Uzay Sanayii</p>
                      <p className="timeline-date">Ağustos 2024 - Eylül 2024</p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h3>{t('about.experience.intern.aselsan')}</h3>
                      <p className="timeline-location">Aselsan</p>
                      <p className="timeline-date">Temmuz 2024 - Ağustos 2024</p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h3>{t('about.experience.intern.bites')}</h3>
                      <p className="timeline-location">BİTES - Defence & Aerospace Technologies</p>
                      <p className="timeline-date">Ağustos 2023 - Eylül 2023</p>
                      <p className="timeline-description">
                        - SBS Aviyonik Komuta Kontrol ve AR Program Direktörlüğü altında görev<br />
                        - Java ile personel değerlendirme sistemi geliştirme<br />
                        - Sistem ve yazılım gereksinimleri hazırlama<br />
                        - UDP protokolü ile uygulamalar arası haberleşme<br />
                        - Apache POI ile Excel veri manipülasyonu<br />
                        - Manuel test süreçleri
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h3>{t('about.experience.intern.tcdd')}</h3>
                      <p className="timeline-location">TCDD Taşımacılık A.Ş.</p>
                      <p className="timeline-date">Temmuz 2023 - Ağustos 2023</p>
                      <p className="timeline-description">
                        - YHT elektronik sistemleri bakım ve onarım<br />
                        - Elektronik kart arıza tespiti ve onarımı<br />
                        - ERTMS ve ATS sistemleri üzerine çalışma<br />
                        - SICAS sistemi ile PLC uygulamaları<br />
                        - İSG ve ESD uygulamaları
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h3>{t('about.experience.intern.assistant')}</h3>
                      <p className="timeline-location">{t('about.education.university')}</p>
                      <p className="timeline-date">Ekim 2022 - Haziran 2023</p>
                      <p className="timeline-description">
                        - LIBE 120 dersinde öğrenci asistanlığı<br />
                        - Ders materyalleri hazırlama<br />
                        - Öğrenci katılımı takibi<br />
                        - Etkinlik performans değerlendirmesi
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Eğitim - Sayfa 2 */}
              <section className="education-section page-break">
                <h2 className="section-title">{t('about.sections.education')}</h2>
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h3>{t('about.education.department.ce')}</h3>
                      <p className="timeline-location">{t('about.education.university')}</p>
                      <p className="timeline-date">2020 - 2025</p>
                      <p className="timeline-description">
                        - 4. Sınıf öğrencisi<br />
                        - Genç TEMA - Sosyal Medya Ekibi<br />
                        - Satranç Kulübü - Yönetim Kurulu Üyesi
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h3>{t('about.education.department.ee')}</h3>
                      <p className="timeline-location">{t('about.education.university')}</p>
                      <p className="timeline-date">2020 - 2025</p>
                      <p className="timeline-description">
                        4. Sınıf Çift Anadal Programı
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h3>{t('about.education.department.erasmus')}</h3>
                      <p className="timeline-location">Wrocław University of Science and Technology</p>
                      <p className="timeline-date">Şubat 2024 - Temmuz 2024</p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h3>{t('about.education.highschool')}</h3>
                      <p className="timeline-location">Ankara Atatürk Lisesi</p>
                      <p className="timeline-date">2015 - 2020</p>
                      <p className="timeline-description">
                        - Mezuniyet Notu: 94.16<br />
                        - Ankara Atatürk Lisesi Oda Orkestrası üyesi
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Sertifikalar ve Başarılar - Sayfa 3 */}
              <section className="certificates-section page-break">
                <h2 className="section-title">{t('about.sections.certificates')}</h2>
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h3>HAVELSAN SUIT Bitirme Projesi</h3>
                      <p className="timeline-location">HAVELSAN</p>
                      <p className="timeline-date">2024 - 2025</p>
                      <p className="timeline-description">
                        "Afet Sonrası Haberleşme" başlıklı proje ile kabul
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h3>Statistics with Python</h3>
                      <p className="timeline-location">
                        Coursera
                        <a 
                          href="https://www.coursera.org/account/accomplishments/specialization/FGLQ9QZSWKNC"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 text-blue-600 hover:text-blue-800 no-print"
                        >
                          (Doğrula)
                        </a>
                      </p>
                      <p className="timeline-date">Aralık 2023</p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h3>BTK Akademi Sertifikaları</h3>
                      <p className="timeline-description">
                        - Proteus ile Devre Tasarımı (Eylül 2023)
                        <a 
                          href="https://dogrulama.ogrencikariyeri.com/6mqFNjlVBM"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 text-blue-600 hover:text-blue-800 no-print"
                        >
                          (Doğrula)
                        </a>
                        <br />
                        - CSS Temelleri (Mart 2023)
                        <a 
                          href="https://dogrulama.ogrencikariyeri.com/qKrhmgdKx4"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 text-blue-600 hover:text-blue-800 no-print"
                        >
                          (Doğrula)
                        </a>
                        <br />
                        {/* Diğer sertifikalar için benzer yapı */}
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h3>Otomotiv Yaz Kampı</h3>
                      <p className="timeline-location">
                        OSD - Otomotiv Sanayii Derneği
                        <a 
                          href="https://dogrulama.ogrencikariyeri.com/OSD17190937"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 text-blue-600 hover:text-blue-800 no-print"
                        >
                          (Doğrula)
                        </a>
                      </p>
                      <p className="timeline-date">Haziran 2022</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About; 