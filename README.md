# Web Tasarımı ve Programlama LAB-5

## Hakkında
Bu proje, Web Tasarımı ve Programlama dersi **LAB-5** kapsamında geliştirilmiş olup; React'te "State" yönetimi, modern JavaScript (ES2020+) özellikleri ve TypeScript temel tiplerini içermektedir. Projede geleneksel DOM manipülasyonu yerine "veri odaklı" (state-driven) bileşen (component) yapısı kullanılmıştır.

Bu laboratuvarın öne çıkan özellikleri şunlardır:
- **TypeScript Tipleri (Interfaces & Types):** Proje verisini modellemek için `Project`, `Category`, `SortField` ve `SortOrder` gibi tip tanımları oluşturuldu. Katı tip güvenliği (strict typing) ile çalışıldı ve `any` kullanımından kaçınıldı.
- **ES Modules Yapısı:** Kodun modülerliği için veriler, yardımcı fonksiyonlar (`utils`) ve veri çekme servisleri (`services`) ayrı dosyalara bölünüp `import/export` ile sayfada toplandı.
- **Fetch API & Async/Await:** Yerel mock proje verileri (`public/data/projects.json`) asenkron fonksiyonlarla çekildi ve arayüze entegre edildi.
- **Hata Yönetimi (Error Handling):** `try/catch/finally` kullanılarak ağ/veri hataları yakalandı ve kullanıcıya özel "Hata" durumları (Alert bileşeniyle) gösterildi.
- **Gelişmiş Filtreleme ve Sıralama:** Metin tabanlı arama (başlık, açıklama ve teknolojilerde), kategori seçimi, ve (yıla veya başlığa göre) artan/azalan sıralama özellikleri başarılı bir şekilde uygulandı.
- **Loading & Empty State:** Veriler çekilirken "Yükleniyor..." uyarısı eklendi; arama sonucu eşleşen veri yoksa özel boş liste durumları yönetildi.

## Geliştirici
- **Ad Soyad:** Emine Naz Duran
- **Öğrenci No:** 235541093

## Kullanılan Teknolojiler
- React 18
- TypeScript
- Vite
- Tailwind CSS v4
- Fetch API (Modern JS/ES2020+)

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
Tarayıcınızda `http://localhost:5173` adresini açarak uygulamayı görebilirsiniz. Filtreleme, arama ve sıralama seçeneklerini test edebilirsiniz.
