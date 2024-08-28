import React, { useEffect, useRef } from "react";

const AnimateBackground = () => {
  const canvasRef = useRef(null);
  const ctx = useRef(null);
  const drops = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    ctx.current = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // English characters
    let english =
      "TronTronTronNormieTronTronTronNormieTronTronTronNormieTronTronTronNormieTronTronTronNormieTronTronTronNormieTronTronTronTronTron";
    english = english.split("");

    const font_size = 14;
    const columns = canvas.width / font_size;

    // Initialize drops array
    drops.current = [];
    for (let x = 0; x < columns; x++) {
      drops.current[x] = 1;
    }

    // Animation function
    const draw = () => {
      ctx.current.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.current.fillRect(0, 0, canvas.width, canvas.height);

      // Create gradient
      const gradient = ctx.current.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop(0, "red");
      gradient.addColorStop(1, "orange");

      ctx.current.fillStyle = gradient;
      ctx.current.font = `${font_size}px arial`;

      for (let i = 0; i < drops.current.length; i++) {
        const text = english[Math.floor(Math.random() * english.length)];
        ctx.current.fillText(text, i * font_size, drops.current[i] * font_size);

        if (
          drops.current[i] * font_size > canvas.height &&
          Math.random() > 0.975
        ) {
          drops.current[i] = 0;
        }

        drops.current[i]++;
      }
    };

    // Animation loop
    const intervalId = setInterval(draw, 33);

    // Cleanup on unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        height: "100vh",
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        display: "block",
        zIndex: 50,
        opacity: 0.8,
      }}
    />
  );
};

export default AnimateBackground;
