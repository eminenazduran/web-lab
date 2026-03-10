# Web Tasarımı ve Programlama LAB-4

## Hakkında
Bu proje, Web Tasarımı ve Programlama dersi **LAB-4** kapsamında geliştirilmiş olup; Tailwind CSS framework'ü, üretken UI mantığı ve "Component" (Bileşen) yaklaşımını içermektedir. Projede geleneksel CSS yerine "Utility-First" CSS modeli kullanılmış, sistem Vite + React + TypeScript tabanlı olarak inşa edilmiştir.

Bu laboratuvarın öne çıkan özellikleri şunlardır:
- **Tailwind CSS v4** entegrasyonu ve `@theme` tabanlı özel tasarım token (design token) yapılandırması.
- **Utility-First Yaklaşımı** ile HTML üzerinde doğrudan class'larla hızlı ve esnek stil yönetimi.
- **Responsive Tasarım**: Tailwind'in `sm:`, `md:`, `lg:` gibi prefix'leri kullanılarak sıfırdan "mobile-first" uyumlu arayüz.
- **Dark Mode (Karanlık Tema)**: Sayfadaki değiştirme (toggle) butonuna bağlı olarak anında değişen `dark:` state varyantları.
- **Component (Bileşen) Yaklaşımı**: Kod tekrarını önlemek için farklı kombinasyonları (renk, boyut, disabled vb.) destekleyen modüler `Button`, `Input`, `Card` ve `Alert` React bileşenleri.
- **UI Kit Sayfası**: En alt bölümde tüm tasarlanan bileşenlerin bir arada (14'ten fazla varyasyonuyla) sergilendiği özel bir UI Kit demonstrasyonu.
- **Erişilebilirlik (a11y) Uyumluluğu**: Tıklanabilir öğelerde focus yönetimleri (`focus:ring`), ekran okuyucu asistanlar (`aria-label`, `role="alert"`, `aria-describedby`) ve semantik yapı.

## Geliştirici
- **Ad Soyad:** Emine Naz Duran
- **Öğrenci No:** 235541093

## Kullanılan Teknolojiler
- React 18
- TypeScript
- Vite
- Tailwind CSS v4

## Kurulum
Aşağıdaki komutla proje klasöründe gerekli tüm paketleri kurabilirsiniz:
```bash
npm install
```

## Çalıştırma
Projeyi yerel sunucuda başlatmak için:
```bash
npm run dev
```
Tarayıcınızda `http://localhost:5173` adresini açarak uygulamayı görebilir, sağ üst köşede yer alan buton ile sayfayı **Dark Mode** deneyimiyle inceleyebilir ve sayfanın alt kısmındaki zengin **UI Kit** bölümünü test edebilirsiniz.
