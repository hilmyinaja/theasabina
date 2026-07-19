import { useEffect, useState, useRef } from 'react';
import './App.css';
import pic1 from './assets/images/Frame_1/Picture 1.png';
import pic2 from './assets/images/Frame_1/Picture 2.png';
import pic3 from './assets/images/Frame_1/Picture 3.png';
import pic4 from './assets/images/Frame_1/Picture 4.png';
import pic5 from './assets/images/Frame_1/Picture 5.png';
import pic6 from './assets/images/Frame_1/Picture 6.png';
import obj1 from './assets/images/Frame_1/Object 1.png';
import obj2 from './assets/images/Frame_1/Object 2.png';
import obj3 from './assets/images/Frame_1/Object 3.png';
import obj4 from './assets/images/Frame_1/Object 4.png';
import titleName from './assets/images/Frame_1/Title Name.png';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const stickyRef = useRef(null);
  const customPictures = [pic1, pic2, pic3, pic4, pic5, pic6];
  const attachedObjects = {
    0: obj1, // Attach Object 1 to Picture 1
    2: obj2, // Attach Object 2 to Picture 3
    4: obj3, // Attach Object 3 to Picture 5
    5: obj4  // Attach Object 4 to Picture 6
  };

  const frames = {
    1: "https://api.builder.io/api/v1/image/assets/TEMP/7cbc119e1b99a0a001091aa0f809997bc97d2b0d?width=3840",
    2: "https://api.builder.io/api/v1/image/assets/TEMP/34be6d653dbaf8079749a548f8d104bed9d4cc87?width=3840",
    3: "https://api.builder.io/api/v1/image/assets/TEMP/45b9dd505d160ed72ba34dd7a51b561c6d8cdab5?width=3840",
    4: "https://api.builder.io/api/v1/image/assets/TEMP/d5f8d7797a81d45da06b3b6e061e68340100873d?width=3840",
    5: "https://api.builder.io/api/v1/image/assets/TEMP/843ad924e81b0b944e7ad1e9964417564ce3272e?width=3840",
    6: "https://api.builder.io/api/v1/image/assets/TEMP/ee96a2bf3e02ac86a02bd24bb67cc72584b4a059?width=3840",
    7: "https://api.builder.io/api/v1/image/assets/TEMP/0b154518af59abdad95fabfc10dfb56c07a58f09?width=3840",
    8: "https://api.builder.io/api/v1/image/assets/TEMP/a9589a50d432c2af1e96265e4b35da5cfc3f05d6?width=3840"
  };

  useEffect(() => {
    const handleScroll = () => {
      if (stickyRef.current) {
        const { top, height } = stickyRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate how far we've scrolled into the sticky container
        // stickyRef height is 300vh. Scroll distance available is 200vh.
        const scrollableDistance = height - windowHeight;
        
        if (top <= 0 && top >= -scrollableDistance) {
          const progress = Math.abs(top) / scrollableDistance;
          setScrollProgress(progress);
        } else if (top > 0) {
          setScrollProgress(0);
        } else {
          setScrollProgress(1);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate opacities for sticky frames (6, 7, 8)
  // progress 0 to 0.5: fade from Frame 6 to Frame 7
  // progress 0.5 to 1.0: fade from Frame 7 to Frame 8
  
  const frame7Opacity = scrollProgress <= 0.5 ? (scrollProgress * 2) : 1;
  const frame8Opacity = scrollProgress > 0.5 ? ((scrollProgress - 0.5) * 2) : 0;

  return (
    <div className="portfolio-container">
      {/* Custom Hero Carousel */}
      <section className="hero-section">
        
        {/* Header Text (Normal Document Flow) */}
        <div className="hero-header-text">
          <h1 className="hero-this-is">this is</h1>
          <div className="hero-title-container">
            <img src={titleName} alt="Title Name" className="hero-title" />
          </div>
          <div className="hero-subtitles">
            <h2 className="hero-subtitle-left">Marketing</h2>
            <h2 className="hero-subtitle-right">Creative Marketing Conseptor</h2>
          </div>
        </div>

        {/* Background Scrolling Pictures with Attached Objects */}
        <div className="hero-track-container">
          <div className="hero-picture-track">
            {customPictures.map((pic, idx) => (
              <div key={`pic-a-${idx}`} className="hero-picture-wrapper">
                <img src={pic} alt={`Picture ${idx+1}`} className="hero-picture" />
                {attachedObjects[idx] && (
                  <img src={attachedObjects[idx]} alt={`Object for pic ${idx+1}`} className="hero-attached-object" />
                )}
              </div>
            ))}
            {/* Duplicated for infinite scroll loop */}
            {customPictures.map((pic, idx) => (
              <div key={`pic-b-${idx}`} className="hero-picture-wrapper">
                <img src={pic} alt={`Picture ${idx+1} clone`} className="hero-picture" />
                {attachedObjects[idx] && (
                  <img src={attachedObjects[idx]} alt={`Object for pic ${idx+1} clone`} className="hero-attached-object" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standard Flow: Frames 3, 4, 5 */}
      <section className="standard-section">
        <img src={frames[3]} alt="Section 3" className="standard-image" />
        <img src={frames[4]} alt="Section 4" className="standard-image" />
        <img src={frames[5]} alt="Section 5" className="standard-image" />
      </section>

      {/* Sticky Scroll Section: Frames 6, 7, 8 */}
      <section ref={stickyRef} className="sticky-container">
        <div className="sticky-content">
          <img src={frames[6]} alt="Frame 6 Base" className="sticky-image base-layer" />
          
          <img 
            src={frames[7]} 
            alt="Frame 7 Overlay" 
            className="sticky-image overlay-layer" 
            style={{ opacity: frame7Opacity }}
          />
          
          <img 
            src={frames[8]} 
            alt="Frame 8 Overlay" 
            className="sticky-image overlay-layer" 
            style={{ opacity: frame8Opacity }}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
