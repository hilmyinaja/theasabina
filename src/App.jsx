import { useEffect } from 'react';
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

// Frame 2 (About Section) Assets
import aboutContent from './assets/images/Frame_2/Content.png';
import aboutSubject from './assets/images/Frame_2/Human Subject.png';
import aboutPic1 from './assets/images/Frame_2/Picture 1.png';
import aboutPic2 from './assets/images/Frame_2/Picture 2.png';

// Frame 3 (TOC Section) Assets
import tocTitle from './assets/images/Frame_3/Table of Contents.png';
import toc1 from './assets/images/Frame_3/1. Campaign Architect.png';
import toc2 from './assets/images/Frame_3/2. Social Media Brand Builder.png';
import toc3 from './assets/images/Frame_3/3. Visual Storyteller.png';
import toc4 from './assets/images/Frame_3/4. Brand Content Strategist.png';

// Frame 4 (Campaign Architect Section) Assets
import frame4Bg from './assets/images/Frame_4/Background.png';
import frame4MainObj from './assets/images/Frame_4/Main Object.png';
import frame4Star1 from './assets/images/Frame_4/1. Bintang.png';
import frame4Star2 from './assets/images/Frame_4/2. Bintang.png';
import frame4Star3 from './assets/images/Frame_4/3. Bintang.png';
import frame4Star4 from './assets/images/Frame_4/4. Bintang.png';

// Frame 5 (Product Details Section) Assets
import f5Text1 from './assets/images/Frame_5/1. Text Object.png';
import f5Text2 from './assets/images/Frame_5/2. Text Object.png';
import f5Text3 from './assets/images/Frame_5/3. Text Object.png';
import f5Product from './assets/images/Frame_5/Product Object.png';
import f5Star1 from './assets/images/Frame_5/1. Bintang.png';
import f5Star2 from './assets/images/Frame_5/2. Bintang.png';
import f5Star3 from './assets/images/Frame_5/3. Bintang.png';
import f5FeatStar1 from './assets/images/Frame_5/1. Bintang Feature.png';
import f5FeatStar2 from './assets/images/Frame_5/2. Bintang Feature.png';
import f5FeatStar3 from './assets/images/Frame_5/3. Bintang Feature.png';
import f5FeatStar4 from './assets/images/Frame_5/4. Bintang Feature.png';
import f5Reveal from './assets/images/Frame_5/Reveal Object.png';
import f5Dove from './assets/images/Frame_5/Dove Object.png';

function App() {
  const customPictures = [pic1, pic2, pic3, pic4, pic5, pic6];
  const attachedObjects = {
    0: obj1, // Attach Object 1 to Picture 1
    2: obj2, // Attach Object 2 to Picture 3
    4: obj3, // Attach Object 3 to Picture 5
    5: obj4  // Attach Object 4 to Picture 6
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1 // Trigger earlier (when 10% visible)
    };

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // Special observer for the reveal objects so they can appear/disappear continuously
    const toggleObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.target.classList.contains('trigger-reveal')) {
          const revealWrapper = document.querySelector('.p-reveal-wrapper');
          if (revealWrapper) {
            if (entry.isIntersecting) revealWrapper.classList.add('active');
            else revealWrapper.classList.remove('active');
          }
        }
        if (entry.target.classList.contains('trigger-dove')) {
          const doveWrapper = document.querySelector('.p-dove-wrapper');
          if (doveWrapper) {
            if (entry.isIntersecting) doveWrapper.classList.add('active');
            else doveWrapper.classList.remove('active');
          }
        }
      });
    }, { threshold: 0.3 }); // Trigger when 30% of Panel is visible

    const triggerReveal = document.querySelector('.trigger-reveal');
    if (triggerReveal) toggleObserver.observe(triggerReveal);
    
    const triggerDove = document.querySelector('.trigger-dove');
    if (triggerDove) toggleObserver.observe(triggerDove);

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
      if (triggerReveal) toggleObserver.unobserve(triggerReveal);
      if (triggerDove) toggleObserver.unobserve(triggerDove);
    };
  }, []);

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

      {/* About Section (Frame 3 layout using Frame 2 assets) */}
      <section className="about-section">
        <div className="about-container reveal">
          {/* Main Background/Text Box */}
          <img src={aboutContent} alt="About Text Content" className="about-content-bg" />
          
          {/* Overlapping Subject on Left */}
          <div className="about-subject-wrapper">
            <img src={aboutSubject} alt="Thea Speaking" className="about-subject" />
          </div>
          
          {/* Overlapping Pictures on Right */}
          <div className="about-pic1-wrapper">
            <img src={aboutPic1} alt="Certificate Picture" className="about-pic1" />
          </div>
          <div className="about-pic2-wrapper">
            <img src={aboutPic2} alt="Presentation Picture" className="about-pic2" />
          </div>
        </div>
      </section>

      {/* TOC Section (Frame 3) */}
      <section className="toc-section">
        <div className="toc-container">
          <div className="toc-title-wrapper reveal">
            <img src={tocTitle} alt="Table of Contents" className="toc-title" />
          </div>
          
          <div className="toc-items">
            <div className="toc-item-wrapper toc-item-1 reveal">
              <img src={toc1} alt="1. Campaign Architect" className="toc-item" />
            </div>
            <div className="toc-item-wrapper toc-item-3 reveal">
              <img src={toc3} alt="3. Visual Storyteller" className="toc-item" />
            </div>
            <div className="toc-item-wrapper toc-item-2 reveal">
              <img src={toc2} alt="2. Social Media Brand Builder" className="toc-item" />
            </div>
            <div className="toc-item-wrapper toc-item-4 reveal">
              <img src={toc4} alt="4. Brand Content Strategist" className="toc-item" />
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Architect Section (Frame 4) */}
      <section className="campaign-section" style={{ backgroundImage: `url(${frame4Bg})` }}>
        <div className="campaign-container">
          <div className="campaign-main-wrapper reveal">
            <img src={frame4MainObj} alt="Campaign Architect Main Object" className="campaign-main-obj" />
            
            {/* Stars */}
            <img src={frame4Star1} alt="Star 1" className="campaign-star star-1" />
            <img src={frame4Star2} alt="Star 2" className="campaign-star star-2" />
            <img src={frame4Star3} alt="Star 3" className="campaign-star star-3" />
            <img src={frame4Star4} alt="Star 4" className="campaign-star star-4" />
          </div>
        </div>
      </section>

      {/* Dove Biotin Hairfall Section (Frame 5) */}
      <section className="product-section">
        {/* Sticky Background & Right Content */}
        <div className="product-sticky-layer">
          <div className="product-half product-bg-left" style={{ backgroundImage: `url(${frame4Bg})` }}></div>
            <div className="product-half product-bg-right">
              <div className="product-fixed-wrapper reveal">
                <img src={f5Product} alt="Product Display" className="product-obj" />
                
                {/* Dove Object lives in the sticky container, triggered by Panel 2 */}
                <div className="p-dove-wrapper reveal-zoom">
                  <div className="p-dove-float">
                    <img src={f5Dove} alt="Dove Object" className="p-dove-obj" />
                  </div>
                </div>

                {/* Reveal Object lives in the sticky container, triggered by Panel 3 */}
                <div className="p-reveal-wrapper reveal-zoom">
                  <div className="p-reveal-float">
                    <img src={f5Reveal} alt="Reveal Object" className="p-reveal-obj" />
                  </div>
                </div>
              </div>
            </div>
        </div>

        {/* Scrolling Content (Left Side) */}
        <div className="product-scroll-layer">
          <div className="product-scroll-left">
            
            {/* Panel 1 */}
            <div className="product-text-panel">
              <div className="product-text-wrapper reveal">
                <img src={f5Text1} alt="Dove Biotin Hairfall" className="product-text-obj" />
                <img src={f5Star1} alt="Star" className="p-star p-star-1" />
                <img src={f5Star2} alt="Star" className="p-star p-star-2" />
                <img src={f5Star3} alt="Star" className="p-star p-star-3" />
              </div>
            </div>

            {/* Panel 2 */}
            <div className="product-text-panel trigger-dove">
              <div className="product-text-wrapper reveal">
                <img src={f5Text2} alt="Feature 1" className="product-text-obj" />
                <img src={f5FeatStar1} alt="Star" className="p-fstar p-fstar-1" />
                <img src={f5FeatStar2} alt="Star" className="p-fstar p-fstar-2" />
                <img src={f5FeatStar3} alt="Star" className="p-fstar p-fstar-3" />
                <img src={f5FeatStar4} alt="Star" className="p-fstar p-fstar-4" />
              </div>
            </div>

            {/* Panel 3 */}
            <div className="product-text-panel trigger-reveal">
              <div className="product-text-wrapper reveal">
                <img src={f5Text3} alt="Feature 2" className="product-text-obj" />
                <img src={f5FeatStar1} alt="Star" className="p-fstar p-fstar-1" />
                <img src={f5FeatStar2} alt="Star" className="p-fstar p-fstar-2" />
                <img src={f5FeatStar3} alt="Star" className="p-fstar p-fstar-3" />
                <img src={f5FeatStar4} alt="Star" className="p-fstar p-fstar-4" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
