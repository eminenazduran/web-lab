# Web LAB-3 - Responsive Layout

## Hakkında
Bu proje, Web Tasarımı ve Programlama dersi LAB-3 kapsamında Vite + React + TypeScript kullanılarak oluşturulmuştur. Ayrıca modern layout araçları (Flexbox/Grid), tasarım sistemi altyapısı (CSS değişkenleri) ve Media Query kullanılarak mobile-first prensibiyle responsive uyumluluğu sağlanmıştır.

## Geliştirici
- **Ad Soyad:** Emine Naz Duran
- **Öğrenci No:** 235541093

## Kullanılan Teknolojiler
- React 18
- TypeScript
- Vite
- Modern CSS (Flexbox, Grid, CSS Değişkenleri, Mobile-First Medya Sorguları)

## Kurulum
```bash
npm install
```

## Çalıştırma
```bash
npm run dev
```
Tarayıcıda http://localhost:5173 adresini aç.

## Ekran Görüntüsü
Mobil, Tablet ve Masaüstü ekran görüntüleri `/screenshots` klasörü içerisindedir.

---

# CSS Kararları

## 1. Breakpoint Seçimi
- **Neden 640px ve 1024px seçtim?** 
  Mobile-first yaklaşımını benimsediğim için, varsayılan ekran darlığını hesaba katarak en sık kullanılan küçük telefon, tablet (640px+) ve dizüstü/masaüstü (1024px+) cihazlarına göre en ideal kırılım noktalarını belirledim.
- **İçeriğim bu noktalarda nasıl değişiyor?** 
  Mobilde her şey alt alta ve ortalı (örneğin header ve projeler tek sütun). 640px'den itibaren `Hakkımda` alanı yan yana geçiyor, elementlerin margin-padding değerleri artıyor. 1024px'te ana içerik genişliği max-width ile sınırlanıyor ve projeler 3 sütun şeklinde genişliyor.

## 2. Layout Tercihleri
- **Header için neden Flexbox seçtim?**
  Header içerisinde dikey merkezleme ve elemanlar arasındaki mesafeyi orantılı ayarlamak (justify-content: space-between) için tek eksen düzen sağlayan en iyi araç Flexbox'tır. Mobilde de tek bir komutla flex yönünü değiştirebilmek işimi kolaylaştırmaktadır.
- **Proje kartları için neden Grid seçtim?**
  Grid, iki boyutlu düzen (satır/sütun) hizalamada en iyisidir. Sütunları grid-template-columns ile rahatça parçalara ayırabilir, aralarına eşit boşluk bırakabilirim.
- **auto-fit mi auto-fill mi kullandım, neden?**
  `auto-fit` kullandım çünkü var olan boş alana mevcut kartların responsive bir şekilde yayılıp sığdırılmasını daha pratik buldum. Böylelikle medya sorgusu olmadan boşalan sütunları projeler üstlenerek tasarımı dengeleyebildi.

## 3. Design Tokens
- **Hangi renk paletini seçtim ve neden?**
  Güvenilir ve teknolojik çağrışımlarından dolayı "blue-indigo" ekseninde modern bir renk paleti seçtim. Gözü yormaması adına yüzey ve background olarak temiz bir "slate" beyaz/grisi belirleyici rol oynadı.
- **Spacing skalasını nasıl belirledim?**
  `rem` birimleri ve CSS değişkenleri kullanarak aralarında dörder px fark barındıran orantılı ve kolay anlaşılabilir bir boşluk (gap/padding/margin vb.) ağı tanımladım. 4px, 8px, 16px, 24px.. gibi.
- **Fluid typography için clamp değerlerini nasıl ayarladım?**
  En küçük yazıyı `0.8rem` (ortalama 12-14px), tercih edileni kısmı dinamik `vw` birim ile (`0.9rem + 0.5vw` vs) verdim ve maksimuma da fonta göre `1.125rem`, `3.5rem` vs sıralı enstrümanlar atadım, böylece yazı aniden değil tarayıcı büyüdükçe orantılı büyüyecek.

## 4. Responsive Stratejiler
- **Mobile-first yaklaşımını nasıl uyguladım?**
  Ana CSS kodlarımı kırılım noktalarını oluşturmadan (hiç media query koymadan) genel varsayılan küçük mobil cihazlara uygun kaleme aldım. Ardından `min-width: 640px` ve `1024px` query'leri ekleyerek gerekli eklemeleri sağladım.
- **Hangi elemanlar breakpoint'lerde değişiyor?**
  Navigasyon öğeleri, proje listeleme sütun durumları (flex direction row'a, grid column auto vs. geçmesi), sayfanın padding limitleri, butonların sağ/sola daralması gibi genişlik açısından alan talep eden alanlar değişiyor.
- **Görsel boyutları nasıl yönettim?**
  Resim taşmasına izin vermemek adına genel `img` tanımında `max-width: 100%` şeklinde genişlik sağladım. Kutucuk (box) içinde esnek formu korumak adına `object-fit: cover` yapısını ve `aspect-ratio` kullandım.
