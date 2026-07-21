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

// Frame 6 Assets
import f6Bg from './assets/images/Frame_6/Background Back.png';
import f6MainObj from './assets/images/Frame_6/Main Object.png';
import f6Text1 from './assets/images/Frame_6/1. Text Object.png';
import f6Text2 from './assets/images/Frame_6/2. Text Object.png';
import f6Text3 from './assets/images/Frame_6/3. Text Object.png';
import f6Text4 from './assets/images/Frame_6/4. Text Object.png';
import f6Star1 from './assets/images/Frame_6/1. Bintang.png';
import f6Star2 from './assets/images/Frame_6/2. Bintang.png';
import f6Star3 from './assets/images/Frame_6/3. Bintang.png';
import f6FeatStar1 from './assets/images/Frame_6/1. Bintang Feature.png';
import f6FeatStar2 from './assets/images/Frame_6/2. Bintang Feature.png';
import f6FeatStar3 from './assets/images/Frame_6/3. Bintang Feature.png';
import f6FeatStar4 from './assets/images/Frame_6/4. Bintang Feature.png';
import f6Shadow from './assets/images/Frame_6/Shadow.png';
import f6Mirror from './assets/images/Frame_6/Mirror.png';
import f6Paper from './assets/images/Frame_6/Paper.png';
import f6Pen from './assets/images/Frame_6/Pen.png';
import f6Qr from './assets/images/Frame_6/QR.png';

// Frame 7
import f7Text1 from './assets/images/Frame_7/1. Text Object.png';
import f7Text2 from './assets/images/Frame_7/2. Text Object.png';
import f7Text3 from './assets/images/Frame_7/3. Text Object.png';
import f7Text4 from './assets/images/Frame_7/4. Text Object.png';

// Panel 1 Stars
import f7Star1 from './assets/images/Frame_7/1. Bintang.png';
import f7Star2 from './assets/images/Frame_7/2. Bintang.png';
import f7Star3 from './assets/images/Frame_7/3. Bintang.png';

// Panel 2-4 Stars (Features)
import f7FeatStar1 from './assets/images/Frame_7/1. Bintang Feature.png';
import f7FeatStar2 from './assets/images/Frame_7/2 Bintang Feature.png';
import f7FeatStar3 from './assets/images/Frame_7/3. Bintang Feature.png';
import f7FeatStar4 from './assets/images/Frame_7/4. Bintang Feature.png';

import f7MainObj from './assets/images/Frame_7/Objek Utama.png';
import f7KotakSuara from './assets/images/Frame_7/Kotak Suara.png';
import f7RectMirror from './assets/images/Frame_7/Rect Mirror.png';
import f7RedString from './assets/images/Frame_7/Red String.png';
import f7Sampaikan from './assets/images/Frame_7/Sampaikan.png';

// Frame 8
import f8Bg from './assets/images/Frame_8/Background.png';
import f8MainObj from './assets/images/Frame_8/Main Object.png';
import f8Star1 from './assets/images/Frame_8/1. Bintang Object.png';
import f8Star2 from './assets/images/Frame_8/2. Bintang Object.png';
import f8Star3 from './assets/images/Frame_8/3. Bintang Object.png';
import f8Star4 from './assets/images/Frame_8/4. Bintang Object.png';

// Frame 9 (Section 9) Assets
import f9P2Text1 from './assets/images/Frame_9/1. Main Text Object.png';
import f9P2Paper from './assets/images/Frame_9/Paper Object.png';
import f9P2Star1 from './assets/images/Frame_9/1. Bintang TL.png';
import f9P2Star2 from './assets/images/Frame_9/2. Bintang BR S.png';
import f9P2Star3 from './assets/images/Frame_9/3. Bintang BR B.png';
import f9P2Circle from './assets/images/Frame_9/Circle.png';
import f9P2Human from './assets/images/Frame_9/Human Subject.png';
import f9P2TextObj from './assets/images/Frame_9/Text Object.png';
import f9P2Badge1 from './assets/images/Frame_9/GERIGI TL.png';
import f9P2Badge2 from './assets/images/Frame_9/UKEX TR.png';
import f9P3Text2 from './assets/images/Frame_9/2. Main Text Object.png';
import f9P3Tweet1 from './assets/images/Frame_9/TweetGERIGI.png';
import f9P3Tweet2 from './assets/images/Frame_9/TweetUKEX.png';

// Frame 10
import f10Bg from './assets/images/Frame_10/Background.png';
import f10MainObj from './assets/images/Frame_10/Main Object.png';
import f10Star1 from './assets/images/Frame_10/1. Bintang Object.png';
import f10Star2 from './assets/images/Frame_10/2. Bintang Object.png';
import f10Star3 from './assets/images/Frame_10/3. Bintang Object.png';
import f10Star4 from './assets/images/Frame_10/4. Bintang Object.png';

// Frame 11
import f11Iphone from './assets/images/Frame_11/iPhone.png';
import f11Text1 from './assets/images/Frame_11/1. Text Object P2.png';
import f11Text2 from './assets/images/Frame_11/2. Text Object P2.png';
import f11Star1 from './assets/images/Frame_11/1. Bintang Feature.png';
import f11Star2 from './assets/images/Frame_11/2. Bintang Feature.png';
import f11Star3 from './assets/images/Frame_11/3. Bintang Feature.png';
import f11Star4 from './assets/images/Frame_11/4. Bintang Feature.png';

// Frame 11 P3
import f11P3Text1 from './assets/images/Frame_11/1. Text Object P3.png';
import f11P3Text2 from './assets/images/Frame_11/2. Text Object P3.png';
import f11P3Star1 from './assets/images/Frame_11/1. Bintang Feature P3 TR.png';
import f11P3Star2 from './assets/images/Frame_11/2. Bintang Feature P3 TL.png';
import f11P3Star3 from './assets/images/Frame_11/3. Bintang Feature P3 BR B.png';
import f11P3Star4 from './assets/images/Frame_11/4. Bintang Feature P3 BR S.png';

// Frame 11 P4
import f11P4Text1 from './assets/images/Frame_11/1. Text Object P4.png';
import f11P4Text2 from './assets/images/Frame_11/2. Text Object P4.png';
import f11P4Star1 from './assets/images/Frame_11/1. Bintang Feature P4 TR.png';
import f11P4Star2 from './assets/images/Frame_11/2. Bintang Feature P4 TL.png';
import f11P4Star3 from './assets/images/Frame_11/3. Bintang Feature P4 BL B.png';
import f11P4Star4 from './assets/images/Frame_11/4. Bintang Feature P4 BL S.png';

// Frame 11 P5
import f11Tablet from './assets/images/Frame_11/Tablet.png';
import f11P5Text1 from './assets/images/Frame_11/1. Text Object P5.png';
import f11P5Text2 from './assets/images/Frame_11/2. Text Object P5.png';
import f11P5Star1 from './assets/images/Frame_11/1. Bintang Feature P5 TR.png';
import f11P5Star2 from './assets/images/Frame_11/2. Bintang Feature P5 TL.png';

// Frame 11 P6
import f11P6Text1 from './assets/images/Frame_11/1. Text Object P6.png';
import f11P6Text2 from './assets/images/Frame_11/2. Text Object P6.png';
import f11P6Star1 from './assets/images/Frame_11/1. Bintang Feature  P6 TR.png';
import f11P6Star2 from './assets/images/Frame_11/2. Bintang Feature P6 TL.png';
import f11P6Star3 from './assets/images/Frame_11/4. Bintang Feature P6 BL B.png';
import f11P6Star4 from './assets/images/Frame_11/3. Bintang Feature P6 BL S.png';

// Frame 12
import f12Bg from './assets/images/Frame_12/Background.png';
import f12MainObj from './assets/images/Frame_12/Main Object.png';
import f12Star1 from './assets/images/Frame_12/1. Bintang TR B.png';
import f12Star2 from './assets/images/Frame_12/2. Bintang TR S.png';
import f12Star3 from './assets/images/Frame_12/3. Bintang BL S.png';
import f12Star4 from './assets/images/Frame_12/4. Bintang BL B.png';

// Frame 13
import f13Text1 from './assets/images/Frame_13/1. Text Object P2.png';
import f13Text2 from './assets/images/Frame_13/2. Text Object P2.png';
import f13Star1 from './assets/images/Frame_13/1. Bintang Feature TR.png';
import f13Star2 from './assets/images/Frame_13/2. Bintang Feature TL.png';
import f13Star3 from './assets/images/Frame_13/3. Bintang Feature BL B.png';
import f13Star4 from './assets/images/Frame_13/4. Bintang Feasture BL S.png';

// Frame 13 P3
import f13P3Text1 from './assets/images/Frame_13/1. Text Object P3.png';
import f13P3Text2 from './assets/images/Frame_13/2. Text Object P3.png';
import f13P3Star1 from './assets/images/Frame_13/1. Bintang Feature P3 TR.png';
import f13P3Star2 from './assets/images/Frame_13/2. Bintang Feature P3 TL.png';
import f13P3Star3 from './assets/images/Frame_13/3. Bintang Feature P3 BR B.png';
import f13P3Star4 from './assets/images/Frame_13/4. Bintang Feature P3 BR S.png';

// Frame 13 P4
import f13P4Text1 from './assets/images/Frame_13/1. Text Object P4.png';
import f13P4Text2 from './assets/images/Frame_13/2. Text Object P4.png';
import f13P4Star1 from './assets/images/Frame_13/1. Bintang Feature P4 TR.png';
import f13P4Star2 from './assets/images/Frame_13/2. Bintang Feature P4 TL.png';
import f13P4Star3 from './assets/images/Frame_13/3. Bintang Feature P4 BL B.png';
import f13P4Star4 from './assets/images/Frame_13/4. Bintang Feature P4 BL S.png';

// Frame 14
import f14ContactStar from './assets/images/Frame_14/Contact Star.png';
import f14Contact from './assets/images/Frame_14/Contact.png';
import f14Email from './assets/images/Frame_14/Email.png';
import f14Human from './assets/images/Frame_14/Human Subject.png';
import f14Insta from './assets/images/Frame_14/Instagram.png';
import f14Linkedin from './assets/images/Frame_14/LinkedIn.png';
import f14MeStar from './assets/images/Frame_14/Me Star.png';
import f14Me from './assets/images/Frame_14/Me.png';
import f14RotatingStar from './assets/images/Frame_14/Rotating Star.png';
import f14StarLeft from './assets/images/Frame_14/Star Left.png';
import f14StarRight from './assets/images/Frame_14/Star Right.png';
import f14Tiktok from './assets/images/Frame_14/TikTok.png';

// Videos
import gerexVideo from './assets/videos/gerex.mov';
import mabacupVideo from './assets/videos/mabacup.mov';
import astraVideo from './assets/videos/astra.mp4';
import dove3Video from './assets/videos/dove3.mp4';
import dovehVideo from './assets/videos/doveh.mp4';
import heritierVideo from './assets/videos/heritier.mp4';
import reverseasVideo from './assets/videos/reverseas.mp4';
import kriwilVideo from './assets/videos/kriwil.mp4';

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

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          if (!entry.target.classList.contains('reveal-repeat')) {
            observer.unobserve(entry.target);
          }
        } else {
          if (entry.target.classList.contains('reveal-repeat')) {
            entry.target.classList.remove('active');
          }
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

        // Frame 6 triggers
        if (entry.target.classList.contains('trigger-mirror')) {
          const wrapper = document.querySelector('.p-mirror-wrapper');
          if (wrapper) {
            if (entry.isIntersecting) wrapper.classList.add('active');
            else wrapper.classList.remove('active');
          }
        }
        if (entry.target.classList.contains('trigger-paper-pen')) {
          const wrapper = document.querySelector('.p-paperpen-wrapper');
          if (wrapper) {
            if (entry.isIntersecting) wrapper.classList.add('active');
            else wrapper.classList.remove('active');
          }
        }
        if (entry.target.classList.contains('trigger-qr')) {
          const wrapper = document.querySelector('.p-qr-wrapper');
          if (wrapper) {
            if (entry.isIntersecting) wrapper.classList.add('active');
            else wrapper.classList.remove('active');
          }
        }
        if (entry.target.classList.contains('trigger-v1')) {
          const wrapper = document.querySelector('.v-redstring-wrapper');
          if (wrapper) {
            if (entry.isIntersecting) wrapper.classList.add('active');
            else wrapper.classList.remove('active');
          }
        }
        if (entry.target.classList.contains('trigger-v2')) {
          const wrapper = document.querySelector('.v-rectmirror-wrapper');
          if (wrapper) {
            if (entry.isIntersecting) wrapper.classList.add('active');
            else wrapper.classList.remove('active');
          }
        }
        if (entry.target.classList.contains('trigger-v3')) {
          const wrapper1 = document.querySelector('.v-kotak-wrapper');
          const wrapper2 = document.querySelector('.v-sampaikan-wrapper');
          if (entry.isIntersecting) {
            if (wrapper1) wrapper1.classList.add('active');
            if (wrapper2) wrapper2.classList.add('active');
          } else {
            if (wrapper1) wrapper1.classList.remove('active');
            if (wrapper2) wrapper2.classList.remove('active');
          }
        }
      });
    }, { threshold: 0.3 }); // Trigger when 30% of Panel is visible

    // Dynamic scroll snap toggler for Sections 5, 6, and 7
    const snapToggleObserver = new IntersectionObserver((entries) => {
        let isSnapping = false;
        const allSections = document.querySelectorAll('.product-section, .puzzle-section, .voice-section, .campaign9-p2-section, .campaign11-section, .campaign11-p3-section, .campaign11-p4-section, .campaign11-p5-section, .campaign11-p6-section, .campaign13-section, .campaign13-p3-section, .campaign13-p4-section, .campaign14-section');
        allSections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        const screenCenter = window.innerHeight / 2;
        
        if (rect.top <= screenCenter && rect.bottom >= screenCenter) {
          isSnapping = true;
        }
      });
      
      if (isSnapping) {
        document.documentElement.style.scrollSnapType = 'y mandatory';
      } else {
        document.documentElement.style.scrollSnapType = 'none';
      }
    }, { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] });

    const snapSections = document.querySelectorAll('.product-section, .puzzle-section, .voice-section, .campaign9-p2-section, .campaign11-section, .campaign11-p3-section, .campaign11-p4-section, .campaign11-p5-section, .campaign11-p6-section, .campaign13-section, .campaign13-p3-section, .campaign13-p4-section, .campaign14-section');
    snapSections.forEach(sec => snapToggleObserver.observe(sec));

    const triggerReveal = document.querySelector('.trigger-reveal');
    if (triggerReveal) toggleObserver.observe(triggerReveal);

    const triggerDove = document.querySelector('.trigger-dove');
    if (triggerDove) toggleObserver.observe(triggerDove);

    const triggerMirror = document.querySelector('.trigger-mirror');
    if (triggerMirror) toggleObserver.observe(triggerMirror);

    const triggerPaperPen = document.querySelector('.trigger-paper-pen');
    if (triggerPaperPen) toggleObserver.observe(triggerPaperPen);

    const triggerQr = document.querySelector('.trigger-qr');
    if (triggerQr) toggleObserver.observe(triggerQr);

    const triggerV1 = document.querySelector('.trigger-v1');
    if (triggerV1) toggleObserver.observe(triggerV1);

    const triggerV2 = document.querySelector('.trigger-v2');
    if (triggerV2) toggleObserver.observe(triggerV2);

    const triggerV3 = document.querySelector('.trigger-v3');
    if (triggerV3) toggleObserver.observe(triggerV3);

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
      if (triggerReveal) toggleObserver.unobserve(triggerReveal);
      if (triggerDove) toggleObserver.unobserve(triggerDove);
      if (triggerMirror) toggleObserver.unobserve(triggerMirror);
      if (triggerPaperPen) toggleObserver.unobserve(triggerPaperPen);
      if (triggerQr) toggleObserver.unobserve(triggerQr);
      if (triggerV1) toggleObserver.unobserve(triggerV1);
      if (triggerV2) toggleObserver.unobserve(triggerV2);
      if (triggerV3) toggleObserver.unobserve(triggerV3);
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
                <img src={pic} alt={`Picture ${idx + 1}`} className="hero-picture" />
                {attachedObjects[idx] && (
                  <img src={attachedObjects[idx]} alt={`Object for pic ${idx + 1}`} className="hero-attached-object" />
                )}
              </div>
            ))}
            {/* Duplicated for infinite scroll loop */}
            {customPictures.map((pic, idx) => (
              <div key={`pic-b-${idx}`} className="hero-picture-wrapper">
                <img src={pic} alt={`Picture ${idx + 1} clone`} className="hero-picture" />
                {attachedObjects[idx] && (
                  <img src={attachedObjects[idx]} alt={`Object for pic ${idx + 1} clone`} className="hero-attached-object" />
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
            <a href="#section4" className="toc-item-wrapper toc-item-1 reveal">
              <img src={toc1} alt="1. Campaign Architect" className="toc-item" />
            </a>
            <a href="#section10" className="toc-item-wrapper toc-item-3 reveal">
              <img src={toc3} alt="3. Visual Storyteller" className="toc-item" />
            </a>
            <a href="#section8" className="toc-item-wrapper toc-item-2 reveal">
              <img src={toc2} alt="2. Social Media Brand Builder" className="toc-item" />
            </a>
            <a href="#section12" className="toc-item-wrapper toc-item-4 reveal">
              <img src={toc4} alt="4. Brand Content Strategist" className="toc-item" />
            </a>
          </div>
        </div>
      </section>

      {/* Campaign Architect Section (Frame 4) */}
      <section id="section4" className="campaign-section" style={{ backgroundImage: `url(${frame4Bg})` }}>
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
              <div className="product-text-wrapper reveal reveal-repeat">
                <img src={f5Text1} alt="Dove Biotin Hairfall" className="product-text-obj" />
                <img src={f5Star1} alt="Star" className="p-star p-star-1" />
                <img src={f5Star2} alt="Star" className="p-star p-star-2" />
                <img src={f5Star3} alt="Star" className="p-star p-star-3" />
              </div>
            </div>

            {/* Panel 2 */}
            <div className="product-text-panel trigger-dove">
              <div className="product-text-wrapper reveal reveal-repeat">
                <img src={f5Text2} alt="Feature 1" className="product-text-obj" />
                <img src={f5FeatStar1} alt="Star" className="p-fstar p-fstar-1" />
                <img src={f5FeatStar2} alt="Star" className="p-fstar p-fstar-2" />
                <img src={f5FeatStar3} alt="Star" className="p-fstar p-fstar-3" />
                <img src={f5FeatStar4} alt="Star" className="p-fstar p-fstar-4" />
              </div>
            </div>

            {/* Panel 3 */}
            <div className="product-text-panel trigger-reveal">
              <div className="product-text-wrapper reveal reveal-repeat">
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

      {/* Frame 6 Section */}
      <section className="puzzle-section">
        {/* Sticky Background & Right Content */}
        <div className="puzzle-sticky-layer">
          <div className="puzzle-half puzzle-bg-left" style={{ backgroundImage: `url(${f6Bg})` }}></div>
          <div className="puzzle-half puzzle-bg-right">
            <div className="puzzle-fixed-wrapper">
              <img src={f6Shadow} alt="Shadow" className="puzzle-shadow" />
              <img src={f6MainObj} alt="Puzzle Main Display" className="puzzle-obj" />

              {/* Popups */}
              <div className="p-mirror-wrapper reveal-zoom">
                <div className="p-popup-float">
                  <img src={f6Mirror} alt="Mirror" className="p-mirror-obj p-popup-obj" />
                </div>
              </div>
              <div className="p-paperpen-wrapper reveal-zoom">
                <div className="p-popup-float">
                  <img src={f6Paper} alt="Paper" className="p-paper-obj p-popup-obj" />
                  <img src={f6Pen} alt="Pen" className="p-pen-obj p-popup-obj" />
                </div>
              </div>
              <div className="p-qr-wrapper reveal-zoom">
                <div className="p-popup-float">
                  <img src={f6Qr} alt="QR" className="p-qr-obj p-popup-obj" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scrolling Content (Left Side) */}
        <div className="puzzle-scroll-layer">
          <div className="puzzle-scroll-left">

            {/* Panel 1 */}
            <div className="product-text-panel">
              <div className="product-text-wrapper reveal reveal-repeat">
                <img src={f6Text1} alt="Feature 1 Title" className="product-text-obj" />
                <img src={f6Star1} alt="Star" className="p-star p-star-1" />
                <img src={f6Star2} alt="Star" className="p-star p-star-2" />
                <img src={f6Star3} alt="Star" className="p-star p-star-3" />
              </div>
            </div>

            {/* Panel 2 */}
            <div className="product-text-panel trigger-mirror">
              <div className="product-text-wrapper reveal reveal-repeat">
                <img src={f6Text2} alt="Feature 1 Details" className="product-text-obj" />
                <img src={f6FeatStar1} alt="Star" className="p-fstar p-fstar-1" />
                <img src={f6FeatStar2} alt="Star" className="p-fstar p-fstar-2" />
                <img src={f6FeatStar3} alt="Star" className="p-fstar p-fstar-3" />
                <img src={f6FeatStar4} alt="Star" className="p-fstar p-fstar-4" />
              </div>
            </div>

            {/* Panel 3 */}
            <div className="product-text-panel trigger-paper-pen">
              <div className="product-text-wrapper reveal reveal-repeat">
                <img src={f6Text3} alt="Feature 2" className="product-text-obj" />
                <img src={f6FeatStar1} alt="Star" className="p-fstar p-fstar-1" />
                <img src={f6FeatStar2} alt="Star" className="p-fstar p-fstar-2" />
                <img src={f6FeatStar3} alt="Star" className="p-fstar p-fstar-3" />
                <img src={f6FeatStar4} alt="Star" className="p-fstar p-fstar-4" />
              </div>
            </div>

            {/* Panel 4 */}
            <div className="product-text-panel trigger-qr">
              <div className="product-text-wrapper reveal reveal-repeat">
                <img src={f6Text4} alt="Feature 3" className="product-text-obj" />
                <img src={f6FeatStar1} alt="Star" className="p-fstar p-fstar-1" />
                <img src={f6FeatStar2} alt="Star" className="p-fstar p-fstar-2" />
                <img src={f6FeatStar3} alt="Star" className="p-fstar p-fstar-3" />
                <img src={f6FeatStar4} alt="Star" className="p-fstar p-fstar-4" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Voice Section (Frame 7) */}
      <section className="voice-section">
        {/* Sticky Background & Right Content */}
        <div className="voice-sticky-layer">
          <div className="voice-half voice-bg-left"></div>
          <div className="voice-half voice-bg-right checkerboard-bg">
            <div className="voice-fixed-wrapper reveal">
              <img src={f7MainObj} alt="Voice Main Display" className="voice-obj" />

              {/* Popups */}
              <div className="v-kotak-wrapper reveal-zoom">
                <div className="p-popup-float">
                  <img src={f7KotakSuara} alt="Kotak Suara" className="v-kotak-obj p-popup-obj" />
                </div>
              </div>
              <div className="v-sampaikan-wrapper reveal-zoom">
                <div className="p-popup-float">
                  <img src={f7Sampaikan} alt="Sampaikan" className="v-sampaikan-obj p-popup-obj" />
                </div>
              </div>
              <div className="v-rectmirror-wrapper reveal-zoom">
                <div className="p-popup-float">
                  <img src={f7RectMirror} alt="Rect Mirror" className="v-rectmirror-obj p-popup-obj" />
                </div>
              </div>
              <div className="v-redstring-wrapper reveal-zoom">
                <div className="p-popup-float">
                  <img src={f7RedString} alt="Red String" className="v-redstring-obj p-popup-obj" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scrolling Content (Left Side) */}
        <div className="voice-scroll-layer">
          <div className="voice-scroll-left">

            {/* Panel 1 */}
            <div className="product-text-panel">
              <div className="product-text-wrapper reveal reveal-repeat">
                <img src={f7Text1} alt="Feature 1" className="product-text-obj" />
                <img src={f7Star1} alt="Star" className="p-star p-star-1" />
                <img src={f7Star2} alt="Star" className="p-star p-star-2" />
                <img src={f7Star3} alt="Star" className="p-star p-star-3" />
              </div>
            </div>

            {/* Panel 2 */}
            <div className="product-text-panel trigger-v1">
              <div className="product-text-wrapper reveal reveal-repeat">
                <img src={f7Text2} alt="Feature 2" className="product-text-obj" />
                <img src={f7FeatStar1} alt="Star" className="p-fstar p-fstar-1" />
                <img src={f7FeatStar2} alt="Star" className="p-fstar p-fstar-2" />
                <img src={f7FeatStar3} alt="Star" className="p-fstar p-fstar-3" />
                <img src={f7FeatStar4} alt="Star" className="p-fstar p-fstar-4" />
              </div>
            </div>

            {/* Panel 3 */}
            <div className="product-text-panel trigger-v2">
              <div className="product-text-wrapper reveal reveal-repeat">
                <img src={f7Text3} alt="Feature 3" className="product-text-obj" />
                <img src={f7FeatStar1} alt="Star" className="p-fstar p-fstar-1" />
                <img src={f7FeatStar2} alt="Star" className="p-fstar p-fstar-2" />
                <img src={f7FeatStar3} alt="Star" className="p-fstar p-fstar-3" />
                <img src={f7FeatStar4} alt="Star" className="p-fstar p-fstar-4" />
              </div>
            </div>

            {/* Panel 4 */}
            <div className="product-text-panel trigger-v3">
              <div className="product-text-wrapper reveal reveal-repeat">
                <img src={f7Text4} alt="Feature 4" className="product-text-obj" />
                <img src={f7FeatStar1} alt="Star" className="p-fstar p-fstar-1" />
                <img src={f7FeatStar2} alt="Star" className="p-fstar p-fstar-2" />
                <img src={f7FeatStar3} alt="Star" className="p-fstar p-fstar-3" />
                <img src={f7FeatStar4} alt="Star" className="p-fstar p-fstar-4" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Closing Section (Frame 8) */}
      <section id="section8" className="campaign8-section" style={{ backgroundImage: `url(${f8Bg})` }}>
        <div className="campaign-container">
          <div className="campaign-main-wrapper reveal">
            <img src={f8MainObj} alt="Closing Object" className="campaign-main-obj" />
            <img src={f8Star1} alt="Star" className="campaign8-star c8-star-1" />
            <img src={f8Star2} alt="Star" className="campaign8-star c8-star-2" />
            <img src={f8Star3} alt="Star" className="campaign8-star c8-star-3" />
            <img src={f8Star4} alt="Star" className="campaign8-star c8-star-4" />
          </div>
        </div>
      </section>

      {/* Section 9 Panel 2 (Frame 39) */}
      <section className="campaign9-p2-section">
        <div className="c9-p2-container">
          
          <div className="c9-p2-left reveal">
            <div className="c9-p2-text-wrapper">
              <img src={f9P2TextObj} alt="Main Text" className="c9-p2-main-text" />
              <img src={f9P2Paper} alt="Paper" className="c9-p2-paper" />
              <img src={f9P2Star1} alt="Star" className="c9-p2-star c9-p2-star-1" />
              <img src={f9P2Star2} alt="Star" className="c9-p2-star c9-p2-star-2" />
              <img src={f9P2Star3} alt="Star" className="c9-p2-star c9-p2-star-3" />
            </div>
          </div>

          <div className="c9-p2-right reveal">
            <div className="c9-p2-human-wrapper">
              <img src={f9P2Circle} alt="Pink Circle" className="c9-p2-circle" />
              <img src={f9P2Human} alt="Human Subject" className="c9-p2-human" />
              <img src={f9P2Text1} alt="Text Object" className="c9-p2-text-obj" />
              <div className="c9-p2-badge-wrapper c9-p2-badge-1">
                <img src={f9P2Badge1} alt="GERIGI Badge" className="c9-p2-badge-img" />
              </div>
              <div className="c9-p2-badge-wrapper c9-p2-badge-2">
                <img src={f9P2Badge2} alt="UKEX Badge" className="c9-p2-badge-img" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Section 10 (Frame 10) */}
      <section id="section10" className="campaign10-section" style={{ backgroundImage: `url(${f10Bg})` }}>
        <div className="campaign-container">
          <div className="campaign-main-wrapper reveal">
            <img src={f10MainObj} alt="Closing Object" className="campaign-main-obj" />
            <img src={f10Star1} alt="Star" className="campaign10-star c10-star-1" />
            <img src={f10Star2} alt="Star" className="campaign10-star c10-star-2" />
            <img src={f10Star3} alt="Star" className="campaign10-star c10-star-3" />
            <img src={f10Star4} alt="Star" className="campaign10-star c10-star-4" />
          </div>
        </div>
      </section>

      {/* Section 11 (Frame 11) */}
      <section className="campaign11-section">
        <div className="c11-container">
          
          <div className="c11-left reveal">
            <div className="c11-iphone-wrapper">
              <img src={f11Iphone} alt="iPhone mockup" className="c11-iphone" />
              <video 
                className="c11-iphone-video" 
                controls
                playsInline
              >
                <source src={astraVideo} />
              </video>
            </div>
          </div>

          <div className="c11-right reveal">
            <div className="c11-text-wrapper">
              <img src={f11Text2} alt="Purple Paper" className="c11-purple-paper" />
              <img src={f11Text1} alt="Pink Ribbon" className="c11-pink-ribbon" />
              <img src={f11Star1} alt="Star" className="c11-star c11-star-1" />
              <img src={f11Star2} alt="Star" className="c11-star c11-star-2" />
              <img src={f11Star3} alt="Star" className="c11-star c11-star-3" />
              <img src={f11Star4} alt="Star" className="c11-star c11-star-4" />
            </div>
          </div>

        </div>
      </section>

      {/* Section 11 Panel 3 (Frame 23) */}
      <section className="campaign11-p3-section">
        <div className="c11-p3-container">
          
          <div className="c11-p3-left reveal">
            <div className="c11-p3-text-wrapper">
              <img src={f11P3Text2} alt="Purple Paper" className="c11-p3-purple-paper" />
              <img src={f11P3Text1} alt="Purple Ribbon" className="c11-p3-purple-ribbon" />
              <img src={f11P3Star1} alt="Star" className="c11-p3-star c11-p3-star-1" />
              <img src={f11P3Star2} alt="Star" className="c11-p3-star c11-p3-star-2" />
              <img src={f11P3Star3} alt="Star" className="c11-p3-star c11-p3-star-3" />
              <img src={f11P3Star4} alt="Star" className="c11-p3-star c11-p3-star-4" />
            </div>
          </div>

          <div className="c11-p3-right reveal">
            <div className="c11-iphone-wrapper">
              <img src={f11Iphone} alt="iPhone mockup" className="c11-iphone" />
              <video 
                className="c11-iphone-video" 
                controls
                playsInline
              >
                <source src={dove3Video} />
              </video>
            </div>
          </div>

        </div>
      </section>

      {/* Section 11 Panel 4 (Frame 24) */}
      <section className="campaign11-p4-section">
        <div className="c11-p4-container">
          
          <div className="c11-p4-left reveal">
            <div className="c11-iphone-wrapper">
              <img src={f11Iphone} alt="iPhone mockup" className="c11-iphone" />
              <video 
                className="c11-iphone-video" 
                controls
                playsInline
              >
                <source src={dovehVideo} />
              </video>
            </div>
          </div>

          <div className="c11-p4-right reveal">
            <div className="c11-p4-text-wrapper">
              <img src={f11P4Text2} alt="Pink Paper" className="c11-p4-pink-paper" />
              <img src={f11P4Text1} alt="Blue Ribbon" className="c11-p4-blue-ribbon" />
              <img src={f11P4Star1} alt="Star" className="c11-p4-star c11-p4-star-1" />
              <img src={f11P4Star2} alt="Star" className="c11-p4-star c11-p4-star-2" />
              <img src={f11P4Star3} alt="Star" className="c11-p4-star c11-p4-star-3" />
              <img src={f11P4Star4} alt="Star" className="c11-p4-star c11-p4-star-4" />
            </div>
          </div>

        </div>
      </section>

      {/* Section 11 Panel 5 (Frame 25) */}
      <section className="campaign11-p5-section">
        <div className="c11-p5-container">
          
          <div className="c11-p5-left reveal">
            <div className="c11-p5-text-wrapper">
              <img src={f11P5Text2} alt="Blue Paper" className="c11-p5-blue-paper" />
              <img src={f11P5Text1} alt="Purple Ribbon" className="c11-p5-purple-ribbon" />
              <img src={f11P5Star1} alt="Star" className="c11-p5-star c11-p5-star-1" />
              <img src={f11P5Star2} alt="Star" className="c11-p5-star c11-p5-star-2" />
              {/* Reusing P3 bottom stars since P5 only provided top stars */}
              <img src={f11P3Star3} alt="Star" className="c11-p5-star c11-p5-star-3" />
              <img src={f11P3Star4} alt="Star" className="c11-p5-star c11-p5-star-4" />
            </div>
          </div>

          <div className="c11-p5-right reveal">
            <div className="c11-tablet-wrapper">
              <img src={f11Tablet} alt="Tablet mockup" className="c11-tablet" />
              <video 
                className="c11-tablet-video" 
                controls
                playsInline
              >
                <source src={gerexVideo} />
              </video>
            </div>
          </div>

        </div>
      </section>

      {/* Section 11 Panel 6 (Frame 26) */}
      <section className="campaign11-p6-section">
        <div className="c11-p6-container">
          
          <div className="c11-p6-left reveal">
            <div className="c11-tablet-wrapper">
              <img src={f11Tablet} alt="Tablet mockup" className="c11-tablet" />
              <video 
                className="c11-tablet-video" 
                controls
                playsInline
              >
                <source src={mabacupVideo} />
              </video>
            </div>
          </div>

          <div className="c11-p6-right reveal">
            <div className="c11-p6-text-wrapper">
              <img src={f11P6Text2} alt="Pink Paper" className="c11-p6-pink-paper" />
              <img src={f11P6Text1} alt="Purple Ribbon" className="c11-p6-purple-ribbon" />
              <img src={f11P6Star1} alt="Star" className="c11-p6-star c11-p6-star-1" />
              <img src={f11P6Star2} alt="Star" className="c11-p6-star c11-p6-star-2" />
              <img src={f11P6Star3} alt="Star" className="c11-p6-star c11-p6-star-3" />
              <img src={f11P6Star4} alt="Star" className="c11-p6-star c11-p6-star-4" />
            </div>
          </div>

        </div>
      </section>

      {/* Section 12 (Frame 12) */}
      <section id="section12" className="campaign12-section" style={{ backgroundImage: `url(${f12Bg})` }}>
        <div className="campaign-container">
          <div className="campaign-main-wrapper reveal">
            <img src={f12MainObj} alt="Main Object" className="campaign-main-obj" />
            <img src={f12Star1} alt="Star" className="campaign12-star c12-star-1" />
            <img src={f12Star2} alt="Star" className="campaign12-star c12-star-2" />
            <img src={f12Star3} alt="Star" className="campaign12-star c12-star-3" />
            <img src={f12Star4} alt="Star" className="campaign12-star c12-star-4" />
          </div>
        </div>
      </section>

      {/* Section 13 (Frame 13) */}
      <section className="campaign13-section">
        <div className="c13-container">
          
          <div className="c13-left reveal">
            <div className="c13-iphone-wrapper">
              <img src={f11Iphone} alt="iPhone mockup" className="c13-iphone" />
              <video 
                className="c13-iphone-video" 
                controls
                playsInline
              >
                <source src={heritierVideo} />
              </video>
            </div>
          </div>

          <div className="c13-right reveal">
            <div className="c13-text-wrapper">
              <img src={f13Text2} alt="Purple Paper" className="c13-purple-paper" />
              <img src={f13Text1} alt="Pink Ribbon" className="c13-pink-ribbon" />
              <img src={f13Star1} alt="Star" className="c13-star c13-star-1" />
              <img src={f13Star2} alt="Star" className="c13-star c13-star-2" />
              <img src={f13Star3} alt="Star" className="c13-star c13-star-3" />
              <img src={f13Star4} alt="Star" className="c13-star c13-star-4" />
            </div>
          </div>

        </div>
      </section>

      {/* Section 13 Panel 3 (Frame 29) */}
      <section className="campaign13-p3-section">
        <div className="c13-p3-container">
          
          <div className="c13-p3-left">
            <div className="c13-p3-text-wrapper">
              <img src={f13P3Text2} alt="Purple Paper" className="c13-p3-purple-paper" />
              <img src={f13P3Text1} alt="Purple Ribbon" className="c13-p3-purple-ribbon" />
              <img src={f13P3Star1} alt="Star" className="c13-p3-star c13-p3-star-1" />
              <img src={f13P3Star2} alt="Star" className="c13-p3-star c13-p3-star-2" />
              <img src={f13P3Star3} alt="Star" className="c13-p3-star c13-p3-star-3" />
              <img src={f13P3Star4} alt="Star" className="c13-p3-star c13-p3-star-4" />
            </div>
          </div>

          <div className="c13-p3-right">
            <div className="c13-iphone-wrapper">
              <img src={f11Iphone} alt="iPhone mockup" className="c13-iphone" />
              <video 
                className="c13-iphone-video" 
                controls
                playsInline
              >
                <source src={reverseasVideo} />
              </video>
            </div>
          </div>

        </div>
      </section>

      {/* Section 13 Panel 4 (Frame 30) */}
      <section className="campaign13-p4-section">
        <div className="c13-p4-container">
          
          <div className="c13-p4-left">
            <div className="c13-iphone-wrapper">
              <img src={f11Iphone} alt="iPhone mockup" className="c13-iphone" />
              <video 
                className="c13-iphone-video" 
                controls
                playsInline
              >
                <source src={kriwilVideo} />
              </video>
            </div>
          </div>

          <div className="c13-p4-right">
            <div className="c13-p4-text-wrapper">
              <img src={f13P4Text2} alt="Purple Paper" className="c13-p4-purple-paper" />
              <img src={f13P4Text1} alt="Pink Ribbon" className="c13-p4-pink-ribbon" />
              <img src={f13P4Star1} alt="Star" className="c13-p4-star c13-p4-star-1" />
              <img src={f13P4Star2} alt="Star" className="c13-p4-star c13-p4-star-2" />
              <img src={f13P4Star3} alt="Star" className="c13-p4-star c13-p4-star-3" />
              <img src={f13P4Star4} alt="Star" className="c13-p4-star c13-p4-star-4" />
            </div>
          </div>

        </div>
      </section>

      {/* Section 14 (Frame 31) */}
      <section className="campaign14-section">
        <div className="c14-container reveal">
          
          <div className="c14-center">
            <img src={f14RotatingStar} alt="Rotating Star" className="c14-rotating-star" />
            <img src={f14Human} alt="Human Subject" className="c14-human" />
          </div>

          <div className="c14-floating-elements">
            <div className="c14-title-left">
              <img src={f14Contact} alt="Contact" className="c14-contact-img" />
              <img src={f14ContactStar} alt="Star" className="c14-contact-star" />
            </div>
            
            <div className="c14-title-right">
              <img src={f14Me} alt="Me" className="c14-me-img" />
              <img src={f14MeStar} alt="Star" className="c14-me-star" />
            </div>

            <div className="c14-social-left">
              <a href="https://instagram.com/theasabinaa" target="_blank" rel="noopener noreferrer" style={{ pointerEvents: 'auto' }}>
                <img src={f14Insta} alt="Instagram" className="c14-social-img" />
              </a>
              <a href="https://tiktok.com/@athenaterazono" target="_blank" rel="noopener noreferrer" style={{ pointerEvents: 'auto' }}>
                <img src={f14Tiktok} alt="TikTok" className="c14-social-img c14-tiktok" />
              </a>
              <img src={f14StarLeft} alt="Star" className="c14-star-left" />
            </div>

            <div className="c14-social-right">
              <a href="mailto:annisatheasabina@gmail.com" style={{ pointerEvents: 'auto' }}>
                <img src={f14Email} alt="Email" className="c14-social-img" />
              </a>
              <a href="https://linkedin.com/in/theasabina" target="_blank" rel="noopener noreferrer" style={{ pointerEvents: 'auto' }}>
                <img src={f14Linkedin} alt="LinkedIn" className="c14-social-img c14-linkedin" />
              </a>
              <img src={f14StarRight} alt="Star" className="c14-star-right" />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

export default App;

