import React, { useEffect, useRef } from "react";
import HALO from "vanta/dist/vanta.halo.min";
import * as THREE from "three";

const VantaHaloEffect = () => {
  const isMobile = window.innerWidth <= 767;

  const vantaRef = useRef(null);
  useEffect(() => {
    const vantaEffect = HALO({
      el: vantaRef.current,
      THREE,
      backgroundColor: 0x000000,
      baseColor: 0xff0000,
      xColor: 0xffa500,
      yColor: 0xffff00,
      size: isMobile ? 2.5 : 5.0,
      amplitudeFactor: 0.1,
      speed: 0.1,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
      }}
    />
  );
};

export default VantaHaloEffect;
