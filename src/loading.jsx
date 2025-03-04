import React from 'react';
import style from '../src/loading.module.css';
import image from '../src/assets/loaderrr.png'
const Loading = () => {
  return (
    <div className={style.container}>
      <img src={image} alt="load" className={style.image2} />
    </div>
  );
};

export default Loading;

