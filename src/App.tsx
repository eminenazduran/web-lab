
import Card from './components/Card';
import Input from './components/Input';
import Button from './components/Button';
import UIKit from './pages/UIKit';

function App() {
  const toggleDark = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="bg-white dark:bg-gray-50 min-h-screen font-sans text-gray-900 dark:text-gray-900 dark:bg-gray-950 dark:text-white transition-colors">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-800 text-white p-2 z-50">
        Ana içeriğe atla
      </a>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDark}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Tema degistir"
      >
        <span className="dark:hidden">&#9790;</span>
        <span className="hidden dark:inline">&#9728;</span>
      </button>

      <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <h1 className="text-xl font-bold text-blue-800 dark:text-blue-300">
            Emine Naz Duran
          </h1>
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap gap-2">
              <li>
                <a href="#hakkimda" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors font-medium">
                  Hakkında
                </a>
              </li>
              <li>
                <a href="#projeler" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors font-medium">
                  Projeler
                </a>
              </li>
              <li>
                <a href="#iletisim" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors font-medium">
                  İletişim
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section id="hakkimda" className="py-16 px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
            <figure className="shrink-0">
              <img
                src="/assets/pp.jpeg"
                alt="Emine Naz Duran'ın profil fotoğrafı"
                className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-gray-100 dark:border-gray-800"
              />
            </figure>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Hakkında
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Merhaba! Yazılım geliştirme alanında kendimi sürekli geliştirmeye odaklı, yeni teknolojilere hızlı adapte olabilen ve problem çözme becerilerini ön planda tutan bir mühendis adayıyım. Özellikle yapay zeka ve veri bilimi konularında tutkuluyum ve bu alanlarda kendimi daha da geliştirmeyi hedefliyorum.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                <strong>Bölüm / Öğrenci No:</strong> Yazılım Mühendisliği / 235541093
              </p>

              <ul className="flex flex-wrap justify-center md:justify-start gap-2" role="list" aria-label="Beceri etiketleri">
                {['Python', 'SQL', 'Java', 'JavaScript', 'React', 'Vite', 'Git', 'Tailwind CSS'].map(skill => (
                  <li key={skill} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="projeler" className="py-16 px-4 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
              Projelerim
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card
                variant="elevated"
                title="CineProfile"
                image="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=200&fit=crop"
                imageAlt="CineProfile sinema uygulaması"
                footer={
                  <div className="flex gap-2">
                    <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-gray-700 dark:text-gray-300">JavaScript</span>
                    <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-gray-700 dark:text-gray-300">Python</span>
                    <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-gray-700 dark:text-gray-300">CSS</span>
                  </div>
                }
              >
                Film izleme zevkini keşfetmek için tasarlanmış bir uygulama.
              </Card>

              <Card
                variant="elevated"
                title="Kişisel Portfolyo"
                image="/assets/portfolyo-ss.png"
                imageAlt="Kişisel Portfolyo ekran görüntüsü"
                footer={
                  <div className="flex gap-2">
                    <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-gray-700 dark:text-gray-300">HTML5</span>
                    <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-gray-700 dark:text-gray-300">Tailwind</span>
                    <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-gray-700 dark:text-gray-300">React</span>
                  </div>
                }
              >
                Erişilebilirlik (a11y) standartlarına uygun hazırlanmış semantik portfolyo sitesi. (İşbu Proje!)
              </Card>

              <Card
                variant="elevated"
                title="Hava Durumu"
                image="https://picsum.photos/seed/project3/400/200"
                imageAlt="Hava Durumu Uygulaması Arayüzü"
                footer={
                  <div className="flex gap-2">
                    <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-gray-700 dark:text-gray-300">JavaScript</span>
                    <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-gray-700 dark:text-gray-300">API</span>
                  </div>
                }
              >
                Anlık hava durumu bilgisi sunan web uygulaması.
              </Card>
            </div>
          </div>
        </section>

        <section id="iletisim" className="py-16 px-4">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              İletişim
            </h2>
            <form className="space-y-4 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-700" onSubmit={(e) => e.preventDefault()}>
              <Input id="name" label="Ad Soyad:" required placeholder="Adınız Soyadınız" />
              <Input id="email" label="E-posta:" type="email" required placeholder="ornek@email.com" />

              <div className="space-y-1">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Konu:
                </label>
                <select
                  id="subject"
                  required
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 focus:border-blue-500"
                >
                  <option value="">-- Seçiniz --</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Mesajınız:
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 focus:border-blue-500 resize-y"
                  placeholder="Mesajınızı buraya yazın..."
                ></textarea>
              </div>
              <div className="pt-2">
                <Button variant="primary" size="lg" type="submit" className="w-full">
                  Gönder
                </Button>
              </div>
            </form>
          </div>
        </section>

        {/* UI Kit Gösterimi */}
        <UIKit />

      </main>

      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 text-center py-8 px-4 text-gray-600 dark:text-gray-400">
        <p className="mb-4">&copy; 2025 Emine Naz Duran. Tüm hakları saklıdır.</p>
        <div className="flex justify-center gap-6">
          <a href="https://www.linkedin.com/in/eminenazduran/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
            LinkedIn
          </a>
          <a href="https://github.com/eminenazduran" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium transition-colors">
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
