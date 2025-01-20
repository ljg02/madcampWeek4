import React, { useEffect } from 'react';
import './KakaoMap.css';

const KakaoMap = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAOMAP_KEY}&autoload=false`;
    document.head.appendChild(script);
  
    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(33.450705, 126.570677),
          level: 3,
        };
        var map = new window.kakao.maps.Map(container, options); //지도 생성
        var markerPositions = [
          {
              title: '카카오', 
              latlng: new window.kakao.maps.LatLng(33.450705, 126.570677)
          },
          {
              title: '생태연못', 
              latlng: new window.kakao.maps.LatLng(33.450936, 126.569477)
          },
          {
              title: '텃밭', 
              latlng: new window.kakao.maps.LatLng(33.450879, 126.569940)
          },
          {
              title: '근린공원',
              latlng: new window.kakao.maps.LatLng(33.451393, 126.570738)
          }
        ];

        for (var i = 0; i < markerPositions.length; i ++) {
          var marker = new window.kakao.maps.Marker({
            map: map,
            position: markerPositions[i].latlng,
            title : markerPositions[i].title
          });
        }
      });
    };
  }, []);  

  return <div id="map" className="map-fullscreen"></div>;
};

export default KakaoMap;
