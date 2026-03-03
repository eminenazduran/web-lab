import './App.css'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana icerige atla
      </a>

      <header>
        <h1 className="site-title">Emine Naz Duran</h1>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section id="hakkimda">
          <h2>Hakkimda</h2>
          <div className="about-content">
            <figure>
              <img src="/assets/pp.jpeg" alt="Emine Naz Duran'in profil fotografi" />
              <figcaption>Emine Naz Duran</figcaption>
            </figure>
            <div>
              <p>Merhaba! Web gelistirme ögrenmeye basladigim icin e-ticaret siteleri tasarlamak ve yeni teknolojiler kesfetmek en buyuk hobim.</p>
              <p><strong>Bölüm / Öğrenci No:</strong> Yazılım Mühendisliği / 235541093</p>
              <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
                <li>HTML5</li>
                <li>CSS3</li>
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
              <img src="https://picsum.photos/seed/project1/400/200" alt="E-Ticaret sitesi anasayfa ekran goruntusu" />
              <h3>E-Ticaret Sitesi</h3>
              <p>Modern ve hizli bir e-ticaret platformu portotipi.</p>
              <ul className="skill-tags">
                <li>React</li>
                <li>Vite</li>
                <li>CSS</li>
              </ul>
            </article>

            <article className="project-card">
              <img src="/assets/lighthouse-ss.png" alt="Kisisel Portfolyo Lighthouse skoru" />
              <h3>Kisisel Portfolyo</h3>
              <p>Erisilebilirlik (a11y) standartlarina uygun hazirlanmis semantik HTML portfolyo sitesi. (Isbu Proje!)</p>
              <ul className="skill-tags">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>React</li>
              </ul>
            </article>

            <article className="project-card">
              <img src="https://picsum.photos/seed/project3/400/200" alt="Hava Durumu Uygulamasi Arayuzu" />
              <h3>Hava Durumu</h3>
              <p>Anlik hava durumu bilgisi sunan web uygulamasi.</p>
              <ul className="skill-tags">
                <li>JavaScript</li>
                <li>API</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="iletisim">
          <h2>Iletisim</h2>
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>Iletisim Formu</legend>

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
                  <option value="">-- Seciniz --</option>
                  <option value="is">Is Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Oneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajiniz:</label>
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

              <button type="submit">Gonder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Emine Naz Duran. Tum haklari saklidir.</p>
        <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <a href="#" style={{ textDecoration: 'none', color: 'var(--color-secondary)', fontWeight: 600 }}>LinkedIn</a>
          <a href="https://github.com/eminenazduran" style={{ textDecoration: 'none', color: 'var(--color-secondary)', fontWeight: 600 }}>GitHub</a>
        </div>
      </footer>
    </>
  )
}

export default App
