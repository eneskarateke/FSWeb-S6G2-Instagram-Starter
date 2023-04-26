import React from 'react';
import Yorumlar from '../Yorumlar/Yorumlar';
import BeğenBölümü from './BeğenBölümü';
import GönderiBaşlığı from './GönderiBaşlığı';

const Gönderi = props => {
  // 🔥 Bu bileşenin parentının aşağıdaki propları düzgün gönderdiğinden emin olun.
  const { gönderi, gonderiyiBegenme, gonderiyiBegen } = props;

  return (
    <div className='post-border'>
      <GönderiBaşlığı
        username={gönderi.username}
        thumbnailUrl={gönderi.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={gönderi.imageUrl}
        />
      </div>
      <BeğenBölümü gonderiyiBegen={() => gonderiyiBegen(gönderi.id)} 
      gonderiyiBegenme={() => gonderiyiBegenme(gönderi.id)}  begeniSayisi = {gönderi.likes} />
      {/* BeğenBölümü düzgün çalışması için ihtiyaç duyduğu tüm proplara sahip mi? */}
     
      {/* Yorumlar da proplara dikkat istiyor! */}
      <Yorumlar yorumlar={gönderi.comments} />
    </div>
  );
};

export default Gönderi;
