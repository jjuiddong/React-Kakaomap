import React, { useEffect } from "react";
import styled from "styled-components";

const MapBlock = styled.div`
  width: 100%;
  height: 500px;
  background-color: black;
`;

const Map = () => {
  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=" + API_KEY + "&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      const { kakao } = window;
      kakao.maps.load(() => {
        let el = document.getElementById("map");
        let map = new kakao.maps.Map(el, {
          center : new kakao.maps.LatLng(33.450701, 126.570667),
        });

        var linePath = [
          new kakao.maps.LatLng(33.452344169439975, 126.56878163224233),
          new kakao.maps.LatLng(33.452739313807456, 126.5709308145358),
          new kakao.maps.LatLng(33.45178067090639, 126.5726886938753) 
      ];

        let _polyline = new kakao.maps.Polyline({
          map: map,
          path: linePath,
          strokeWeight: 5,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeStyle: 'solid'
        });

      });
    };
  }, []);

  return (
    <MapBlock>
      <div id="map" style={{ width: "100%", height: "100%" }}></div>
    </MapBlock>
  );
};

export default Map;
