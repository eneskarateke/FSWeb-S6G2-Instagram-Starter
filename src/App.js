/* 
  Buradan başlayın ve iç içe geçmiş bileşenlere doğru ilerleyin.
  Projedeki tüm dosyalara kod eklenmesi gerekmez.
  Nerelerde değişiklik yapmanız gerektiğini anlamak için her dosyayı inceleyin.
*/

// State hook u import edin
import React,{useState} from 'react';

// Gönderiler (çoğul!) ve AramaÇubuğu bileşenlerini import edin, çünkü bunlar App bileşeni içinde kullanılacak
// sahteVeri'yi import edin
import './App.css';
import Gönderiler from "./bileşenler/Gönderiler/Gönderiler"
import AramaÇubuğu from "./bileşenler/AramaÇubuğu/AramaÇubuğu"
import sahteVeri from "./sahte-veri"


const App = () => {
  // Gönderi nesneleri dizisini tutmak için "gonderiler" adlı bir state oluşturun, **sahteVeri'yi yükleyin**.
  // Artık sahteVeri'ye ihtiyacınız olmayacak.
  // Arama çubuğunun çalışması için , arama kriterini tutacak başka bir state'e ihtiyacımız olacak.
	const [gonderiler, setGonderiler] = useState(sahteVeri)
  const gonderiyiBegen = gonderiID => {
    /*
      Bu fonksiyon, belirli bir id ile gönderinin beğeni sayısını bir artırma amacına hizmet eder.

      Uygulamanın durumu, React ağacının en üstünde bulunur, ancak iç içe geçmiş bileşenlerin stateleri değiştirememesi adil olmaz!
      Bu fonksiyon, belirli bir gönderinin beğeni sayısını artırılmasına olanak sağlamak amacıyla iç içe geçmiş bileşenlere aktarılır.

	  "setGonderi" yi çağırın ve state ine "posts.map" çağrısını iletin.
      `map` içine iletilen callback aşağıdaki mantığı gerçekleştirir:
        - gönderinin idsi "gonderiID" ile eşleşirse, istenen değerlerle yeni bir gönderi nesnesi döndürün.
        - aksi takdirde, sadece gönderi nesnesini değiştirmeden döndürün.
     */
        setGonderiler(gonderiler.map((gonderi) => {
          if (gonderi.id === gonderiID) {
            return { ...gonderi, likes: gonderi.likes + 1 }; 
          }
          return gonderi; 
        }));
      };
      const gonderiyiBegenme = gonderiID => {
       
            setGonderiler(gonderiler.map((gonderi) => {
              if (gonderi.id === gonderiID) {
                return { ...gonderi, likes: gonderi.likes -1 }; 
              }
              return gonderi; 
            }));
          };

  return (
    <div  key ={gonderiler.id} className='App'>
    <AramaÇubuğu /> 
    <Gönderiler gonderiler = {gonderiler} gonderiyiBegenme={gonderiyiBegenme} gonderiyiBegen={gonderiyiBegen}/> 
    </div>
  );
};

export default App;
