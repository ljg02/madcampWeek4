import React, { useEffect } from 'react';

const KakaoMap = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAOMAP_KEY}&autoload=false`;
    document.head.appendChild(script);
  
    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(37.566535, 126.9779692),
          level: 3,
        };
        new window.kakao.maps.Map(container, options);
      });
    };
  }, []);  

  return <div id="map" style={{ width: '100%', height: '600px' }} />;
};

export default KakaoMap;
