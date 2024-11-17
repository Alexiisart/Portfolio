import React, { useState, useRef, useEffect, useCallback } from 'react';
import Body from '../components/Body';
import AboutMe from '../components/AboutMe';
import Nav from '../components/Nav';
import { Outlet, useLocation } from 'react-router-dom';

const ScrollContainer = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useRef(null);
  const location = useLocation();

  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      const scrollPosition = containerRef.current.scrollTop;
      const windowHeight = window.innerHeight;
      const newActiveSection = Math.floor(scrollPosition / windowHeight);
      setActiveSection(prevActiveSection => 
        prevActiveSection !== newActiveSection ? newActiveSection : prevActiveSection
      );
      setIsScrolled(scrollPosition > 200);
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [handleScroll]);

  const isHomePage = location.pathname === '/';

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Nav isScrolled={isScrolled} />
      <div className="scroll-container" ref={containerRef} style={{ flex: 1, overflow: 'auto' }}>
        {isHomePage ? (
          <>
            <Body isActive={activeSection === 0} />
            <AboutMe isActive={activeSection === 1} />
          </>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default React.memo(ScrollContainer);
