import { useEffect, useRef } from 'react';
import './App.scss';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import { scroller, Events } from 'react-scroll';

function App() {
  const sections = ['home', 'about', 'project', 'contact'];
  const pageContentRef = useRef(null);

  useEffect(() => {
    // Register react-scroll events
    Events.scrollEvent.register('begin', function() {

      if (pageContentRef.current) {
        pageContentRef.current.classList.add('js-scroll');
      }
    });
    
    Events.scrollEvent.register('end', function() {

      if (pageContentRef.current) {
        setTimeout(() => {
          pageContentRef.current.classList.remove('js-scroll');
        }, 50);
      }
    });

    const handleKeyDown = (e) => {
      const currentIndex = sections.findIndex(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentIndex === -1) return;

      let targetIndex = currentIndex;
      if (e.key === 'ArrowDown' && currentIndex < sections.length - 1) {
        targetIndex = currentIndex + 1;
      } else if (e.key === 'ArrowUp' && currentIndex > 0) {
        targetIndex = currentIndex - 1;
      } else {
        return;
      }

      const section = document.getElementById(sections[targetIndex]);
      const container = pageContentRef.current;
      
      if (section && container) {
        container.scrollTo({
          top: section.offsetTop - 15,
          behavior: 'smooth'
        });
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, [sections]);

  return (
    <div className="App">
      <Layout>
        <div id="page-content" className="page-content" ref={pageContentRef}>
          <section id="home"><Home /></section>
          <section id="about"><About /></section>
          <section id="project"><Project /></section>
          <section id="contact"><Contact /></section>
        </div>
      </Layout>
    </div>
  );
}

export default App;
