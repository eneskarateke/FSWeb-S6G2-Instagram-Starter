import React from 'react';
import Gönderi from './Gönderi';
import './Gönderiler.css';

const Gönderiler = (props) => {
  // 🔥 Gönderiler'in ebeveyninin doğru değişkenleri doğru şekilde ilettiğine emin olun!
  const { gonderiyiBegenme, gonderiyiBegen, gonderiler } = props;

  return (
    <div  className='posts-container-wrapper'>
       {gonderiler.map((gönderi) => (
      <Gönderi
      key={gönderi.id}
        gönderi={gönderi}
        gonderiyiBegen={gonderiyiBegen}
        gonderiyiBegenme={gonderiyiBegenme}
      />
      ) )}
      {/* gönderiler dizisini işleyip her döngüde bir Gönderi bileşeni çağırın*/}
      {/* Gönderi'nin çağırılmasında hangi propları kullanmanız gerektiğine dikkat edin! */}
    </div>
  );
};

export default Gönderiler;
