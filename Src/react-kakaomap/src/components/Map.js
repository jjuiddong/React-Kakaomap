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
          center: new kakao.maps.Coords(523951.25, 1085073.75),
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
