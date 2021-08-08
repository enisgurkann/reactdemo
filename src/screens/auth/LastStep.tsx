/* eslint-disable max-len */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { ButtonTypes } from '../../components/button/Button.types';
import { Checkbox } from '../../components/checkbox/Checkbox';
import { ButtonWrapper, Description, FormWrapper, Row, StyledButton } from './LastStep.styles';
import { Title } from './LoginForm.styles';
import { Modal } from '../../components/modal/Modal';
import { TextInput } from '../../components/input/TextInput';

export interface LastStepProps { 
  onSubmit(data: KvkkFormInputs): void;
  cancel(): void;
}

export type KvkkFormInputs = {
  isKVKKContractAccepted: boolean;
  isServiceContractAccepted: boolean;
  isEmailActive: boolean;
  isPhoneCallActive: boolean;
  isSmsActive: boolean;
  emailAdress?: string;
};

const KvkkContract = () => (
    <>
      <h1>AYGAZ AYKARGO DAĞITIM HİZMETLERİ ANONİM  ŞİRKETİ KİŞİSEL VERİLERİN KORUNMASI VE İŞLENMESİ AYDINLATMA METNİ</h1>
      <p>Kişisel verileriniz; 6698 sayılı Kişisel Verilerin Korunması Kanunu (“Kanun”) uyarınca veri sorumlusu olarak Aygaz Aykargo Dağıtım Hizmetleri Anonim Şirketi (“Aykargo” veya “Şirket”) tarafından aşağıda açıklanan kapsamda işlenebilecektir.</p>
      <p>Kişisel verilerinizin Şirketimiz tarafından işlenme amaçları konusunda detaylı bilgilere; https://aykargo.com.tr/kvk-politikasi adresinde yer alan Aygaz Aykargo Dağıtım Hizmetleri Anonim Şirketi Kişisel Verilerin Korunması ve İşlenmesi Politikası’ndan ulaşabilirsiniz.</p>
      <h2>1.Kişisel Verilerin Toplanması, İşlenmesi ve İşleme Amaçları</h2>
      <p>Toplanan kişisel verileriniz;</p>
      <ul>
        <li>Ürün ve hizmetlerden sizleri faydalandırmak ve ticari faaliyetleri gerçekleştirmek için gerekli çalışmaların iş birimleri tarafından yapılması ve ilgili iş süreçlerinin yürütülmesi,</li>
        <li>Aykargo tarafından sunulan ürün ve hizmetlerin beğenileriniz, kullanım alışkanlıklarınız ve ihtiyaçlarınıza göre özelleştirilerek size önerilmesi ve tanıtılması için gerekli olan aktivitelerin planlanması ve icrası,</li>
        <li>Müşterimiz olmanız halinde Aykargo’nun ticari ve/veya iş stratejilerinin planlanması ve icrası, Aykargo’nun ve Aykargo ile iş ilişkisi içerisinde olan ilgili kişilerin hukuki, teknik ve ticari-iş güvenliğinin temin ve Aykargo insan kaynakları politikaları ve süreçlerinin planlanması ve icra edilmesi  amaçlarıyla (“Amaçlar”) Kanun’un 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları dahilinde işlenebilecektir.</li>
      </ul>
      <h2>2. İşlenen Kişisel Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği</h2>
      <p> Toplanan kişisel verileriniz; yukarıda belirtilen amaçların gerçekleştirilmesi doğrultusunda, ürün ve hizmetlerin temini amacıyla yetkili bayilerimize, ödeme geri dönüşlerinin sağlanması amacıyla bankalara, yetkili servis hizmetlerinden faydalanmanız durumunda yetkili servislerimize, tedarikçilerimize, iştiraklerimize, kanunen yetkili kamu kurumlarına ve kanunen yetkili özel kişilere 6698 sayılı Kanun’un 8. ve 9. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları çerçevesinde aktarılabilecektir.</p>
      <h2>3. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi</h2>
      <p>Kişisel verileriniz; iştiraklerimiz, bayilerimiz ve iş ortaklarımız aracılığıyla veya doğrudan Şirketimiz tarafından internet sitelerimiz, tablet uygulamalarımız, çağrı merkezimiz, mobil uygulamalarımız, sosyal medya hesaplarımız, kısa mesaj servisleri, anlık mesajlaşma uygulamaları, elektronik posta hesaplarımız, faks numaralarımız, şifre içeren el ilanlarımız, bilgi formlarımız, anket formlarımız, servis formlarımız, açık internet kaynakları gibi bizimle temas kurduğunuz kanal üzerinden sözleşmenin kurulması ve ifası, ve ürün ve hizmetlerin beğenileriniz, kullanım alışkanlıklarınız ve ihtiyaçlarınıza göre özelleştirilerek size önerilmesi ve tanıtılması için açık rıza vermeniz halinde açık rıza hukuki sebeplerine dayalı olarak toplanmaktadır.</p>
      <h2>5. Kişisel Veri Sahibinin Kanun’un 11. maddesinde Sayılan Hakları</h2>
      <p>Kişisel veri sahibi olarak Kanun’un 11. maddesi uyarınca aşağıdaki haklara sahip olduğunuzu bildiririz:</p>
      <ul>
        <li>Kişisel veri işlenip işlenmediğini öğrenme,</li>
        <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,</li>
        <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
        <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,</li>
        <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme ve bu kapsamda yapılan işlemin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
        <li>Kanun ve ilgili diğer kanun hükümlerine uygun olarak işlenmiş olmasına rağmen, işlenmesini gerektiren sebeplerin ortadan kalkması hâlinde kişisel verilerin silinmesini veya yok edilmesini isteme ve bu kapsamda yapılan işlemin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
        <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme,</li>
        <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme haklarına sahiptir.</li>
      </ul>
      <p>Yukarıda sıralanan haklarınıza yönelik başvurularınızı,   Başvuru Formu adresinden ulaşabileceğiniz Aygaz Aykargo Dağıtım Hizmetleri Anonim Şirketi Veri Sahibi Başvuru Formu’nu doldurarak Şirketimize iletebilirsiniz. Talebinizin niteliğine göre en kısa sürede ve en geç otuz gün içinde başvurularınız ücretsiz olarak sonuçlandırılacaktır; ancak işlemin ayrıca bir maliyet gerektirmesi halinde Kişisel Verileri Koruma Kurulu tarafından belirlenecek tarifeye göre tarafınızdan ücret talep edilebilecektir.</p>
      <a>Aykargo Kişisel Verilerin Korunması ve İşlenmesi Politikası</a>
    </>
);

const Contract = () => (
  <>
    <p><b>İNTERNET SİTESİ
    GİZLİLİK POLİTİKASI</b></p>
    <p>İşbu İnternet Sitesi Gizlilik
    Politikası’nın amacı, <b>Aygaz Aykargo Dağıtım Hizmetleri Anonim Şirketi
    (“Şirket”)</b> tarafından işletilmekte olan <a href="http://www.aykargo.com.tr">www.aykargo.com.tr</a>&nbsp;
    internet sitesi (“Site”) üzerinden temin edilen hizmetler sırasında Site
    kullanıcıları/üyeleri/ziyaretçileri (“Veri Sahibi”) tarafından Şirket ile
    paylaşılan veya Şirket’in Veri Sahibi’nin Site’yi kullanımı sırasında ürettiği
    kişisel verilerin kullanımına ilişkin koşul ve şartları tespit etmektir. Veri
    Sahibi, işbu İnternet Sitesi Gizlilik Politikası ile kişisel verilerinin
    işlenmesine ilişkin olarak aydınlatılmış olduğunu ve kişisel verilerinin burada
    belirtilen şekilde kullanımına muvafakat ettiğini beyan eder. </p>
    <p>Hangi Veriler İşlenmektedir? </p>
    <p>İşbu başlık altında, Şirket
    tarafından işlenen ve Kişisel Verilerin Korunması Kanunu uyarınca kişisel veri
    sayılan verilerin hangileri olduğu sıralanmıştır. Aksi açıkça belirtilmedikçe,
    işbu İnternet Sitesi Gizlilik Politikası kapsamında arz edilen hüküm ve
    koşullar kapsamında “kişisel veri” ifadesi aşağıda yer alan bilgileri
    kapsayacaktır. </p>
    <ul>
      <li>Kimlik Bilgileri (Ad, Soyad, Doğum Tarihi) </li>
      <li>İletişim Bilgisi (E-posta, Cep Telefonu) </li>
      <li>Müşteri İşlem Bilgisi (IP Adresi) </li>
      <li>Site İçi Hareketler </li>
    </ul>
    <p>
    İş, Staj Başvurusu Yapan Aday Bilgisi Şirket, Veri Sahibi’nin Site’yi kullanımı
    ile ilgili bilgileri teknik bir iletişim dosyası olan çerezleri (Cookie)
    kullanarak elde edebilmekte olup Site üzerinde sunulmakta olan hizmetlere
    erişim ve kullanım alışkanlıklarının tespit edilmesi için çerez yoluyla IP
    bilgileri toplanmaktadır. Kişisel Verilerin Korunması Kanunu Madde 3 ve 7
    uyarınca, geri döndürülemeyecek şekilde anonim hale getirilen veriler, anılan
    kanun hükümleri uyarınca kişisel veri olarak kabul edilmeyecek ve bu verilere
    ilişkin işleme faaliyetleri işbu İnternet Sitesi Gizlilik Politikası hükümleri
    ile bağlı olmaksızın gerçekleştirilecektir.</p>
    <p><b>Veriler Hangi Amaçlarla Kullanılmaktadır?</b></p>
    <p>Şirket, Veri Sahibi tarafından
    sağlanan kişisel verileri, üyelik işlemlerinin yapılması, üyelerin sipariş
    verebilmesi, üyelere özel Paro Kart ve hareket bilgilerinin gösterilmesi,
    üyelere özel kampanyalar hazırlanması, istatiksel raporlama yapılması, site içi
    işlem logları (5651 sayılı Kanun kapsamında) amacıyla ve ayrıca, bahsi geçen
    kişisel verileri sunduğu hizmetlerin iyileştirilmesi, hizmetin geliştirilmesi
    ve bu kapsamda Veri Sahibi’ne gerekli bilgilendirilmelerin yapılması ve sunduğu
    hizmetlerin doğasından kaynaklanan yükümlülüklerin yerine getirilmesi için
    işleyebilir. Söz konusu kişisel bilgiler Veri Sahibi ile temas kurmak veya Veri
    Sahibi’nin Site’deki tecrübesini iyileştirmek (mevcut hizmetlerin
    geliştirilmesi, yeni hizmetler oluşturulması ve kişiye özel hizmetler sunulması
    gibi) amacıyla kullanılabileceği gibi, Şirket raporlama ve iş geliştirme
    faaliyetleri kapsamında kullanılabilecek, Veri Sahibi’nin kimliği ifşa
    edilmeden çeşitli istatistiksel değerlendirmeler yapma, veri tabanı oluşturma
    ve pazar araştırmalarında bulunma amacıyla da kullanılabilecektir. Söz konusu
    bilgiler Şirket ve işbirliğinde olduğu kişiler tarafından doğrudan pazarlama
    yapmak amacıyla işlenebilecek, saklanabilecek, üçüncü kişilere iletilebilecek
    ve söz konusu bilgiler üzerinden çeşitli uygulama, ürün ve hizmetlerin
    tanıtımı, bakım ve destek faaliyetlerine ilişkin bildirimlerde bulunma amacıyla
    Veri Sahibi ile iletişime geçilebilecektir. Şirket ayrıca, Kişisel Verilerin
    Korunması Kanunu Madde 5 ve 8 uyarınca ve/veya ilgili mevzuattaki istisnaların
    varlığı halinde kişisel verileri Veri Sahibi’nin ayrıca rızasını almaksızın
    işleyebilecek ve üçüncü kişilerle paylaşabilecektir. Bu durumların başlıcaları
    aşağıda belirtilmiştir:</p>
    <ul>
      <li>Kanunlarda açıkça öngörülmesi, </li>
      <li> Fiili imkânsızlık nedeniyle rızasını açıklayamayacak durumda
      bulunan veya rızasına hukuki geçerlilik tanınmayan kişinin kendisinin ya da bir
      başkasının hayatı veya beden bütünlüğünün korunması için zorunlu olması,</li>
      <li>Veri Sahibi ile Şirket arasında herhangi bir sözleşmenin
      kurulması veya ifasıyla doğrudan doğruya ilgili olması kaydıyla, kişisel
      verilerin işlenmesinin gerekli olması</li>
      <li>Hukuki yükümlülüklerin yerine getirebilmesi için zorunlu olması, </li>
      <li>Veri Sahibi’nin kendisi tarafından alenileştirilmiş olması, </li>
      <li>Bir hakkın tesisi, kullanılması veya korunması için veri
      işlemenin zorunlu olması, </li>
      <li>Veri Sahibi’nin temel hak ve özgürlüklerine zarar vermemek
      kaydıyla,</li>
      <li>Şirket’in meşru menfaatleri için veri işlenmesinin zorunlu
      olması. </li>
    </ul>
    <p>Yukarıda da belirtildiği üzere Şirket, çerez (Cookie)
    kullanabilecek ve bu kapsamda veri işleyerek üçüncü kişiler tarafından sunulan
    analiz hizmetleri uyarınca sadece bu analiz hizmetlerinin gerektirdiği ölçüde
    kullanılması amacıyla üçüncü kişilere iletebilecektir. Bahsi geçen teknik
    iletişim dosyaları, ana bellekte saklanmak üzere Site’nin Veri Sahibi
    tarayıcısına (browser) gönderdiği küçük metin dosyalarıdır. Teknik iletişim
    dosyası bir web sitesi hakkında durum ve tercih ayarlarını saklayarak
    internetin kullanımını bu anlamda kolaylaştırır. Teknik iletişim dosyası,
    internet sitelerini zamansal oranlamalı olarak kaç kişinin kullandığını, bir
    kişinin herhangi bir internet sitesini hangi amaçla, kaç kez ziyaret ettiği ve
    ne kadar kaldığı hakkında istatistiksel bilgileri elde etmek ve kullanıcılar
    için özel tasarlanmış kullanıcı sayfalarından dinamik olarak reklam ve içerik
    üretilmesine yardımcı olmak üzere tasarlanmış olup, bu amaçlarla
    kullanılmaktadır. Teknik iletişim dosyası, ana bellekten başkaca herhangi bir
    kişisel veri almak için tasarlanmamıştır. Tarayıcıların pek çoğu başta teknik
    iletişim dosyasını kabul eder biçimde tasarlanmıştır, ancak kullanıcılar
    dilerse teknik iletişim dosyasının gelmemesi veya teknik iletişim dosyasının
    gönderildiğinde ikaz verilmesini sağlayacak biçimde tarayıcı ayarlarını her
    zaman için değiştirebilirler. Şirket ayrıca, online davranışsal reklamcılık ve
    pazarlama yapılabilmesi amacıyla Veri Sahibi’nin sitedeki davranışlarını
    tarayıcıda bulunan bir cookie (çerez) ile ilişkilendirme ve görüntülenen sayfa
    sayısı, ziyaret süresi ve hedef tamamlama sayısı gibi metrikleri temel alan
    yeniden pazarlama listeleri tanımlama hakkını haizdir. Daha sonra Veri
    Sahibi’ne Site’de ya da görüntülü reklam ağındaki diğer sitelerde ilgi
    alanlarına göre hedefe yönelik reklam içeriği gösterilebilir.</p>
    <p><b>Verilere Kimler Erişebilmektedir? </b></p>
    <p>Şirket, Veri Sahibi’ne ait kişisel verileri ve bu kişisel
    veriler kullanılarak elde ettiği yeni verileri, Veri Sahibi’ne karşı taahhüt
    ettiği edimlerin ifası amacıyla Şirket’in hizmetlerinden faydalandığı üçüncü
    kişilere, söz konusu hizmetlerin temini amacıyla sınırlı olmak üzere
    aktarılabilecektir. Şirket, Veri Sahibi deneyiminin geliştirilmesi (iyileştirme
    ve kişiselleştirme dâhil), Veri Sahibi’nin güvenliğini sağlamak, hileli ya da
    izinsiz kullanımları tespit etmek, operasyonel değerlendirme araştırılması,
    Site veya Şirket hizmetlerine ilişkin hataların giderilmesi ve işbu İnternet
    Sitesi Gizlilik Politikası’nda yer alan amaçlardan herhangi birisini
    gerçekleştirebilmek için SMS gönderimi yapanlar da dahil olmak üzere dış kaynak
    hizmet sağlayıcıları, barındırma hizmet sağlayıcıları (hosting servisleri),
    hukuk büroları, araştırma şirketleri, çağrı merkezleri gibi üçüncü kişiler ile
    paylaşabilecektir. Veri Sahibi, yukarıda belirtilen amaçlarla sınırlı olmak
    kaydı ile bahsi geçen üçüncü tarafların Veri Sahibi’nin kişisel verilerini
    dünyanın her yerindeki sunucularında saklayabileceğini, bu hususa peşinen
    muvafakat ettiğini kabul eder.</p>
    <p><b>Verilere Erişim Hakkı ve Düzeltme Talepleri </b></p>
    <p>Hakkında
    Veri Sahibi, Şirket’e başvurarak kendisiyle ilgili; </p>
    <ul>
      <li> Kişisel veri işlenip işlenmediğini öğrenme,
      </li>
      <li> Kişisel verileri işlenmişse buna ilişkin
      bilgi talep etme, </li>
      <li> Kişisel verilerin işlenme amacını ve
      bunların amacına uygun kullanılıp kullanılmadığını öğrenme, </li>
      <li> Yurt içinde veya yurt dışında kişisel
      verilerin aktarıldığı üçüncü kişileri bilme, </li>
      <li> Kişisel verilerin eksik veya yanlış
      işlenmiş olması halinde bunların düzeltilmesini isteme, </li>
      <li> İlgili mevzuatta öngörülen şartlar
      çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme, </li>
      <li> İlgili mevzuat uyarınca yapılan düzeltme,
      silme ve yok edilme işlemlerinin, kişisel verilerin aktarıldığı üçüncü kişilere
      bildirilmesini isteme,</li>
      <li>&nbsp; İşlenen verilerin münhasıran otomatik
      sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir
      sonucun ortaya çıkmasına itiraz etme, </li>
      <li> Kişisel verilerin kanuna aykırı olarak
      işlenmesi sebebiyle zarara uğraması halinde zararın giderilmesini talep etme,
      haklarına sahiptir. </li>
    </ul>
    <p>Veri
    Sahibi, yukarıda belirtilen taleplerini Site’de yer alan “Aygaz Aykargo Dağıtım
    Hizmetleri Anonim Şirketi Kişisel Verilerin Korunması ve İşlenmesi
    Politikası”nda belirtilen şekilde ve belirtilen adrese yazılı olarak
    iletebilecektir. Şirket, yukarıda yer alan talepler uyarınca, gerekçeli
    olumlu/olumsuz yanıtını, yazılı veya dijital ortamdan gerçekleştirebilir.
    Taleplere ilişkin gerekli işlemler için ücret alınmaması esastır. Bununla
    birlikte, işlemlerin bir maliyet gerektirmesi halinde, Kişisel Verilerin
    Korunması Kurulu tarafından, Kişisel Verilerin Korunması Kanunu Madde 13’e göre
    belirlenen tarife üzerinden ücret talep edilmesi mümkündür. Veri Sahibi, işbu
    İnternet Sitesi Gizlilik Politikası’na konu bilgilerinin tam, doğru ve güncel
    olduğunu, bu bilgilerde herhangi bir değişiklik olması halinde bunları derhal
    güncelleyeceğini taahhüt eder. Veri Sahibi’nin güncel bilgileri sağlamamış
    olması halinde Şirket’in herhangi bir sorumluluğu olmayacaktır. Veri Sahibi,
    herhangi bir kişisel verisinin Şirket tarafından kullanılamaması ile
    sonuçlanacak bir talepte bulunması halinde Şirket’in kendisine taahhüt ettiği
    hizmetlerden tam olarak faydalanamayabileceğini kabul ile bu kapsamda doğacak
    her türlü sorumluluğun kendisine ait olacağını beyan eder.</p>
    <p><b>Kişisel
    Verilerin Saklama Süresi </b></p>
    <p>Şirket,
    Veri Sahibi tarafından sağlanan kişisel verileri, sunduğu hizmetlerin
    mahiyetinden kaynaklanan yükümlülüklerin yerine getirilmesi amacıyla,
    hizmetlerin sağlandığı süre boyunca saklayacaktır. Buna ek olarak, Şirket, Veri
    Sahibi ile arasında doğabilecek herhangi bir uyuşmazlık durumunda, uyuşmazlık
    kapsamında gerekli savunmaların gerçekleştirilebilmesi amacıyla sınırlı olmak
    üzere ve ilgili mevzuat uyarınca belirlenen zamanaşımı süreleri boyunca kişisel
    verileri saklayabilecektir.</p>
    
    <p><b>Veri
    Güvenliğine İlişkin Önlemler ve Taahhütler </b></p>
    
    <p>Şirket,
    ilgili mevzuatta belirlenen veya işbu İnternet Sitesi Gizlilik Politikası’nda
    ifade edilen şartlarda,</p>
    <ul>
      <li>Kişisel verilerin hukuka aykırı olarak işlenmemesini, </li>
      <li>Kişisel verilere hukuka aykırı olarak erişilmemesini, ve</li>
      <li> Kişisel verilerin muhafazasını sağlamak amacıyla uygun güvenlik düzeyini temin etmeye yönelik gerekli teknik ve idari tedbirleri almayı, gerekli denetimleri yaptırmayı taahhüt eder. </li>
    </ul>
    <p>Şirket,
    Veri Sahibi hakkında elde ettiği kişisel verileri bu işbu İnternet Sitesi
    Gizlilik Politikası ve Kişisel Verilerin Korunması Kanunu hükümlerine aykırı
    olarak başkasına açıklayamaz ve işleme amacı dışında kullanamaz. Site üzerinden
    başka uygulamalara link verilmesi halinde, Şirket uygulamaların gizlilik
    politikaları ve içeriklerine yönelik herhangi bir sorumluluk taşımamaktadır.
    İnternet Sitesi Gizlilik Politikası’ndaki Değişiklikler Şirket, işbu İnternet
    Sitesi Gizlilik Politikası hükümlerini dilediği zaman değiştirebilir. Güncel
    İnternet Sitesi Gizlilik Politikası, Veri Sahibi’ne herhangi bir yöntemle
    sunulduğu tarihte yürürlük kazanır.</p>
  </>
)

const LastStep: FC<LastStepProps> = ({ onSubmit, cancel }) => {
  const [isKvkkContractOpen, setIsKvkkContractOpen] = useState(false);
  const [isContractOpen, setIsContractOpen] = useState(false);
  const { control,  handleSubmit, watch } = useForm();
  const handleOpenKvkk = () => setIsKvkkContractOpen(true);
  const handleOpenContract = () => setIsContractOpen(true);
  const isEmailActive =  watch('isEmailActive');

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Title>Son bir adım</Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipisci
          rdiet est. Sed volutpat ultricies lectus, eu laoreet leo scelerisque ut. Proin elementum enim a
          dignissim accumsan.
        </Description>
        <Row>
          <Controller
            name="isKVKKContractAccepted"
            control={control}
            defaultValue={false}
            render={({ field: { value, onChange } }) => (
                <Checkbox
                  label={
                    <>
                      <a style={{ textDecoration: 'underline' }} onClick={handleOpenKvkk} href="javascript:void(0)">
                        KVKK Aydınlatma{' '}
                      </a>
                      <span>&#8203; metnini okudum.</span>
                    </>
                  }
                  checked={value}
                  onChange={(event) => onChange(event.target.checked)}
                />
              )}
          />
        </Row>
        <Row>
          <Controller
            name="isServiceContractAccepted"
            control={control}
            defaultValue={false}
            render={({ field: { value, onChange } }) => (
                <Checkbox label={
                  <>
                    <a style={{ textDecoration: 'underline' }} onClick={handleOpenContract} href="javascript:void(0)">
                    Hizmet Sözleşmesi’ni{' '}
                    </a>
                    <span>&#8203; okudum, onaylıyorum..</span>
                  </>
                } checked={value} onChange={(event) => onChange(event.target.checked)} />
            )}
          />
        </Row>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          at imperdiet est. Sed volutpat ultricies lectus, eu laoreet leo scelerisque ut. Proin elementum enim a
          dignissim accumsan.
        </Description>
        <Row>
          <Controller
            name="isEmailActive"
            control={control}
            defaultValue={false}
            render={({ field: { value, onChange } }) => <Checkbox label="E-Posta ile" checked={value} onChange={(event) => onChange(event.target.checked)} />}
          />
        </Row>
        {
          isEmailActive && (
            <Row>
              <Controller
                name="emailAddress"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextInput value={value} onChange={(event) => onChange(event)} label="Email" id="email" />
                )}
              />
            </Row>
          )
        }
        <Row>
          <Controller
            name="isPhoneCallActive"
            control={control}
            defaultValue={false}
            render={({ field: { value, onChange } }) => <Checkbox label="Telefon ile (Arama ve Çağrılar)" checked={value} onChange={(event) => onChange(event.target.checked)} />}
          />
        </Row>
        <Row>
          <Controller
            name="isSmsActive"
            control={control}
            defaultValue={false}
            render={({ field: { value, onChange } }) => <Checkbox label="SMS ile" checked={value} onChange={(event) => onChange(event.target.checked)} />}
          />
        </Row>
        <ButtonWrapper>
          <StyledButton buttonType={ButtonTypes.primary} label="DEVAM ET" onClick={handleSubmit(onSubmit)} />
          <StyledButton buttonType={ButtonTypes.secondary} label="VAZGEÇ" onClick={cancel}/>
        </ButtonWrapper>
      </form>
      <Modal handleClose={() => setIsKvkkContractOpen(false)} content={KvkkContract()} isModalOpen={isKvkkContractOpen} />
      <Modal handleClose={() => setIsContractOpen(false)} content={Contract()} isModalOpen={isContractOpen} />
    </FormWrapper>
  );
};

export default LastStep;
