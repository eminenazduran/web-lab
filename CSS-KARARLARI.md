# CSS Kararlari

## 1. Breakpoint Secimi
- **Neden 640px ve 1024px sectim?** 
  Mobile-first yaklasimini benimsedigim icin, varsayilan ekran darligini hesaba katarak en sık kullanilan kucuk telefon, tablet (640px+) ve laptop/masaustu (1024px+) cihazlarina gore en ideal kirilim noktalarini belirledim.
- **Icerigim bu noktalarda nasil degisiyor?** 
  Mobilde her sey alt alta ve ortali (ornegin header ve prolejer tek sutun). 640px'den itibaren `Hakkimda` alani yanyana geciyor, elementlerin margin-padding degerleri artiyor. 1024px'te ana icerik genisligi max-width ile sinirlaniyor ve projeler 3 sutun seklinde genisliyor.

## 2. Layout Tercihleri
- **Header icin neden Flexbox sectim?**
  Header icerisinde dikey merkezleme ve elemanlar arasindaki mesafeyi orantili ayarlamak (justify-content: space-between) icin tek eksen duzen saglayan en iyi arac Flexbox'tir. Mobilde de tek bir komutla flex yonunu degistirebilmek isimi kolaylastirmaktadir.
- **Proje kartlari icin neden Grid sectim?**
  Grid, iki boyutlu duzen (satir/sutun) hizalamada en iyisidir. Sutunlari grid-template-columns ile rahatca parcalara ayirabilir, aralarina eist bossluk birakabilirim.
- **auto-fit mi auto-fill mi kullandim, neden?**
  `auto-fit` kullandim cunku var olan bos alana mevcut kartlarin responsive bir sekilde yayilip sığdirilmasini daha pratik buldum. Boylelikle medya sorgusu olmadan bosalan sutunlari projeler ustlenerek tasarimi dengeleyebildi.

## 3. Design Tokens
- **Hangi renk paletini sectim ve neden?**
  Guvenilir ve teknolojik cagrisimlarindan dolayi "blue-indigo" ekseninde modern bir renk paleti sectim. Gozu yormamasi adina yuzey ve background olarak temiz bir "slate" beyaz/girisi belirleyici rol oynadi.
- **Spacing skalasini nasil belirledim?**
  `rem` birimleri ve CSS degiskenleri kullanarak aralarında dörder px fark barindiran orantili ve kolay anlasilabir bir bosluk (gap/padding/margin vb.) agi tanimladim. 4px, 8px, 16px, 24px.. gibi.
- **Fluid typography icin clamp degerlerini nasil ayarladim?**
  En kucuk yaziyi `0.8rem` (ortalama 12-14px), tercih edileni kismi dinamik `vw` birim ile (`0.9rem + 0.5vw` vs) verdim ve maksimuna da fonta gore `1.125rem`, `3.5rem` vs sirali enstumanlar atladim, boylece yazi aniden degil tarayici buyudukce orantili buyuyecek.

## 4. Responsive Stratejiler
- **Mobile-first yaklasimini nasil uyguladim?**
  Ana CSS kodlarimi kirilim noktalarini olusturmadan (hic media query koymadan) genel varsayilan kucul mobil cihazlara uygun kaleme aldim. Arindan `min-width: 640px` ve `1024px` query'leri ekleyerek gerekli eklemeleri sagladim.
- **Hangi elemanlar breakpoint'lerde degisiyor?**
  Navigasyon ogeleri, proje listeleme sutun durumlari (flex direction row'a, grid column auto vs. gecmesi), sayfanin padding limitleri, butonlarin sag/sola daralmasi gibi genislik acisindan alan talep eden alanlar degisiyor.
- **Gorsel boyutlari nasil yonettim?**
  Resim tasmasina izin vermemek adina genel `img` taniminda `max-width: 100%` seklinde genislik sagladim. Box icinde esnek form korumak adina `object-fit: cover` yapisini ve `aspect-ratio` kullandim.
