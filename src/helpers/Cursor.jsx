import React, { useEffect, useRef } from 'react';

function CursorDestello() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateCursor = () => {
      let dx = mouseX - cursorX;
      let dy = mouseY - cursorY;
      
      cursorX += dx * 0.1;
      cursorY += dy * 0.1;
      
      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;
      
      requestAnimationFrame(animateCursor);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animateCursor();

    // Efecto de interacción
    const elementos = document.querySelectorAll('a, button, [data-hover]');
    elementos.forEach(elem => {
      elem.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2)';
      });
      elem.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
      });
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      elementos.forEach(elem => {
        elem.removeEventListener('mouseenter', () => {});
        elem.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return <div ref={cursorRef} className="cursor-destello" />;
}

export default CursorDestello;