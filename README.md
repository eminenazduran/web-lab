# Web Tasarımı ve Programlama LAB-6 (Ara Checkpoint #1)

## Hakkında
Bu proje, Web Tasarımı ve Programlama dersi **LAB-6** (Ara Checkpoint #1) kapsamında geliştirilmiş olup; React bileşen (component) mimarisi, Props ve State yönetimi, form veri doğrulaması (validation), ve useMemo ile performans optimizasyonlarını içermektedir. Arayüzün geliştirilmesi tamamen bütünleşik çalışan bir portfolyo uygulamasına dönüştürülmüştür. 

Bu laboratuvarın öne çıkan özellikleri şunlardır:
- **Component (Bileşen) Mimarisi:** Uygulama modüler, yeniden kullanılabilir parçalara ayrıldı. `layout`, `sections`, `forms` ve `ui` gibi klasörlerde organize edildi (`App.tsx` artık temel orkestra şefi rolünü görmektedir). 
- **Props ve Props TypeScript İnterfaceleri:** Component'ler arasında veri aktarımı `props` ile sağlandı. Props özellikleri TypeScript interfaceleriyle tiplendirildi. Ebeveynden çocuğa doğru tek yönlü veri akışına (one-way data flow) dikkat edildi. 
- **State Yönetimi (\`useState\`):** Component düzeyinde durumlar yönetildi, hem array/object'ler (örneğin filtreler) mutable olmayan yöntemlerle (`useState` + spread syntax) güncellendi.
- **Performans İyileştirmesi (\`useMemo\`):** Liste filtreleme/sıralama kısmında veri büyük olduğunda her render'da aynı hesaplama yapılmaması için `useMemo` kullanılarak pahalı (expensive) hesaplamalar memoize edildi (önbelleğe alındı). 
- **Kontrollü Formlar (Controlled Forms):** İletişim formu (`ContactForm.tsx`) state kullanılarak tamamen kontrollü hale getirildi (`value` ve `onChange` pratikleriyle) ve gönderilmeden önce alanların (isim, e-posta, konu, mesaj) kurallarına göre validation'ı yapılarak hata mesajları kullanıcıya zarif biçimde gösterildi. 
- **Render Optimizasyonu:** `key` prop'unun önemi dikkate alındı ve mappinglerde array içindeki eşsiz (unique) özellikler anahtar (key) olarak kullanıldı. Index kullanılmamasına özen gösterildi.
- **İleri Seviye Arayüz (Checkpoint #1):** Ekranda navigasyon için `Header` ve `Footer`, kişisel bilgiler için `Hero`, `About` ve `Skills`, listeleme için `ProjectList` ve anlık etkileşim için `ContactSection` var edilerek uygulamanın demo niteliği tamamlandı.

## Geliştirici
- **Ad Soyad:** Emine Naz Duran
- **Öğrenci No:** 235541093

## Kullanılan Teknolojiler
- React 18
- TypeScript
- Vite
- Tailwind CSS v4
- Fetch API & Modern ES6+ Modülleri
- React Hooks (`useState`, `useEffect`, `useMemo`)

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

Tarayıcınızda `http://localhost:5173` adresini açarak uygulamayı görebilirsiniz. Listeleme modülünü, kontrollü "İletişim" formunu (hata ve başarı senaryoları) demo edebilirsiniz.
