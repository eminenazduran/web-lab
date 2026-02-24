import './App.css'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana icerige atla
      </a>

      <header>
        <h1>Emine Naz Duran</h1>
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
          <figure>
            <img src="/assets/profile.jpg" alt="Emine Naz Duran'in uretilmis profil fotografi" />
            <figcaption>Emine Naz Duran</figcaption>
          </figure>
          <p>Merhaba! Web gelistirme ögrenmeye basladigim icin e-ticaret siteleri tasarlamak ve yeni teknolojiler kesfetmek en buyuk hobim.</p>
          <p><strong>Bölüm / Öğrenci No:</strong> Yazılım Mühendisliği / 235541093</p>
          <ul>
            <li>HTML5 - Semantik</li>
            <li>CSS3 - A11y</li>
            <li>JavaScript</li>
            <li>React & Vite</li>
          </ul>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <article>
            <img src="https://picsum.photos/300/200?random=1" alt="E-ticaret sitesi anasayfa ekran goruntusu" />
            <div>
              <h3>E-Ticaret Sitesi</h3>
              <p>Modern ve hizli bir e-ticaret platformu portotipi.</p>
              <p><strong>Kullanilan Teknolojiler:</strong> React, Vite, CSS</p>
            </div>
          </article>

          <article>
            <img src="https://picsum.photos/300/200?random=2" alt="Kisisel portfoy sayfasi ana ekran goruntusu" />
            <div>
              <h3>Kisisel Portfolyo</h3>
              <p>Erisilebilirlik (a11y) standartlarina uygun hazirlanmis semantik HTML portfolyo sitesi. (Isbu Proje!)</p>
              <p><strong>Kullanilan Teknolojiler:</strong> HTML5, CSS3, React</p>
            </div>
          </article>
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
          <a href="#" style={{ textDecoration: 'none', color: '#2563EB', fontWeight: 600 }}>LinkedIn</a>
          <a href="https://github.com/eminenazduran" style={{ textDecoration: 'none', color: '#2563EB', fontWeight: 600 }}>GitHub</a>
        </div>
      </footer>
    </>
  )
}

export default App

