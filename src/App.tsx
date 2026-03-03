import './App.css'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <header>
        <h1 className="site-title">Emine Naz Duran</h1>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkında</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section id="hakkimda">
          <h2>Hakkında</h2>
          <div className="about-content">
            <figure>
              <img src="/assets/pp.jpeg" alt="Emine Naz Duran'ın profil fotoğrafı" />
              <figcaption>Emine Naz Duran</figcaption>
            </figure>
            <div className="about-text-container">
              <p>Merhaba! Yazılım geliştirme alanında kendimi sürekli geliştirmeye odaklı, yeni teknolojilere hızlı adapte olabilen ve problem çözme becerilerini ön planda tutan bir mühendis adayıyım. Özellikle yapay zeka ve veri bilimi konularında tutkuluyum ve bu alanlarda kendimi daha da geliştirmeyi hedefliyorum.</p>
              <p><strong>Bölüm / Öğrenci No:</strong> Yazılım Mühendisliği / 235541093</p>
              <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
                <li>Python</li>
                <li>SQL</li>
                <li>Java</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Vite</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <div className="project-grid">
            <article className="project-card">
              <img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=200&fit=crop" alt="CineProfile sinema uygulaması" />
              <h3>CineProfile</h3>
              <p>Film izleme zevkini keşfetmek için tasarlanmış bir uygulama.</p>
              <ul className="skill-tags">
                <li>JavaScript</li>
                <li>Python</li>
                <li>CSS</li>
              </ul>
            </article>

            <article className="project-card">
              <img src="/assets/portfolyo-ss.png" alt="Kişisel Portfolyo ekran görüntüsü" />
              <h3>Kişisel Portfolyo</h3>
              <p>Erişilebilirlik (a11y) standartlarına uygun hazırlanmış semantik HTML portfolyo sitesi. (İşbu Proje!)</p>
              <ul className="skill-tags">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>React</li>
              </ul>
            </article>

            <article className="project-card">
              <img src="https://picsum.photos/seed/project3/400/200" alt="Hava Durumu Uygulaması Arayüzü" />
              <h3>Hava Durumu</h3>
              <p>Anlık hava durumu bilgisi sunan web uygulaması.</p>
              <ul className="skill-tags">
                <li>JavaScript</li>
                <li>API</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>İletişim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  aria-describedby="name-error"
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-describedby="email-error"
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  aria-describedby="subject-error"
                >
                  <option value="">-- Seçiniz --</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Emine Naz Duran. Tüm hakları saklıdır.</p>
        <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <a href="https://www.linkedin.com/in/eminenazduran/" style={{ textDecoration: 'none', color: 'var(--color-secondary)', fontWeight: 600 }}>LinkedIn</a>
          <a href="https://github.com/eminenazduran" style={{ textDecoration: 'none', color: 'var(--color-secondary)', fontWeight: 600 }}>GitHub</a>
        </div>
      </footer>
    </>
  )
}

export default App
