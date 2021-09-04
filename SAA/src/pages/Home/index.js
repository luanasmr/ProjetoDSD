import React from "react";
import Styled from 'components/Home/styled.js';
const Map = () => {
  const innerRef = useRef();

  const getLocation = () => {
      innerRef.current && innerRef.current.getLocation();
  };

  return (
     <mapa/>
  );
};

export default Map;