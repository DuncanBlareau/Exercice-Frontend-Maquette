import React, { useState } from 'react';
import './App.css';
import Carousels from './Carousels';
import StoreFinder from './StoreFinder';
import Footer from './Footer';

function App() {
  const [showVideo, setShowVideo] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleImageClick = () => {
    setShowVideo(true);
  };

  const handleFormSubmit = (city: string, isNearby: boolean) => {
    setShowMessage(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-left">
          <img className="star" src="/star.svg" alt="Star IMG" />
          <img className="gift" src="/gift.svg" alt="Gift IMG" />
          <img className="flake" src="/flake.svg" alt="Flake IMG" />
          <img className="title" src="/CTK-logo.svg" alt="Title SVG" />
          <h1>Nos coups de coeur à prix magiques !</h1>
          <button>
            <img className="shop" src="/magasins.svg" alt="Magasins SVG" />
            <p>JE TROUVE MON MAGASIN</p>
          </button>
        </div>
        <div className="header-right">
          <div className="video-container">
            <img className="tv" src="/Vu-TV-icon.svg" alt="TV SVG" />
          {showVideo ? (
                <video controls autoPlay>
                  <source src="/Video - Landing page.mp4" type="video/mp4" />
                </video>
            ) : (
              <img
                src="/posterIMG.jpg"
                alt="Poster IMG"
                onClick={handleImageClick}
              />
            )}
          </div>
        </div>
      </header>

      <Carousels 
      bottleImages={[
        "/packshots/Bouteille_iso_01.png",
        "/packshots/Bouteille_iso_02.png",
        "/packshots/Bouteille_iso_03.png",
        "/packshots/Bouteille_iso_04.png",
        "/packshots/Bouteille_iso_05.png",
        "/packshots/Bouteille_iso_06.png",
        "/packshots/Bouteille_iso_07.png",
        "/packshots/Bouteille_iso_08.png"
      ]} 
      chairImages={[
        "/packshots/Fauteuil_Patchwork-Blc.png",
        "/packshots/Fauteuil_Patchwork-Coul.png"
      ]} />
      <StoreFinder onFormSubmit={handleFormSubmit} />
      <Footer/>
    </div>
  );
}

export default App;
