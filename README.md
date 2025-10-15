## 🛠️ Proje Notları ve Gelişim Süreci

Bu projeyi, React ile ilk API entegrasyonumu gerçekleştirmek ve State yönetimini pratik etmek amacıyla oluşturdum. Öğrenme sürecimi şeffafça paylaşmak adına, bu projede faydalandığım kaynakları ve kendi eklediğim özellikleri aşağıda belirttim:

### Öğrenme Kaynaklarım


| **Temel Yapı ve API Bağlantısı** | Projenin ilk temellerini ve API'dan veri çekme mantığını, **[[Enes Bayram](https://www.youtube.com/@EnesBayramm)]** adlı YouTube kanalındaki eğitim içeriği üzerinden öğrendim ve uyguladım. |
| **Kullanılan API** | Gerçek döviz kurlarını çekmek için **Free Currency API** servisini kullandım. |
| **Yardımcı Araçlar** | Kod yazarken takıldığım noktalarda, CSS düzenlemelerinde ve bazı fonksiyonel geliştirmelerde **Gemini gibi** yapay zeka aracından yardım alarak ilerledim. |

### Benim Eklediğim Özellikler

Video içeriğinde olmayan ve projeyi kendi başıma geliştirdiğim kısımlar:

* **Klavyeden Hesaplama Kolaylığı:** Kullanıcının butona tıklamasına gerek kalmadan, **miktar girişinde `Enter` tuşuna basarak** hesaplama yapabilme özelliğini projeye kendim ekledim.
* **Tüm Para Birimleri:** API'dan gelen tüm döviz birimlerini otomatik olarak çekip `selection` (seçim) kutucuklarına yerleştirdim, böylece sadece varsayılan kurlar yerine tüm birimler arasında dönüşüm yapılabiliyor.
* **Stil Farkı:** Uygulamanın görsel tasarımı için video içeriğinden tamamen farklı, kendime ait bir CSS düzenlemesi (arka plan görseli ve form stili) kullandım.
* **Axios Entegrasyonu:** API ile iletişim kurmak için, sadece tarayıcının yerleşik metodunu değil, sektörde çok kullanılan ve daha pratik olan **Axios kütüphanesini** projeye dahil ettim.
