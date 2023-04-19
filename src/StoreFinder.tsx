import React, { useState } from 'react';
import { BsSearch, BsGeoAlt } from 'react-icons/bs';
import './StoreFinder.css';

interface StoreFinderProps {
  onFormSubmit: (city: string, isNearby: boolean) => void;
}

const StoreFinder: React.FC<StoreFinderProps> = ({ onFormSubmit }) => {
  const [city, setCity] = useState('');
  const [isNearby, setIsNearby] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onFormSubmit(city, isNearby);
    setCity('');
    setIsNearby(false);
    setShowMessage(true);
  };

  return (
    <section>
      <div className="store-finder">
        <h2>JE CHERCHE MON MAGASIN</h2>
        <div className="form">
          <form onSubmit={handleFormSubmit}>
            <div className="input-container">
              <img className="star3" src="/star2.svg" alt="Star IMG" />
              <img className="gift1" src="/gift2.svg" alt="Gift IMG" />
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Indiquer une ville"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <button type="submit" className="search-btn">
                  <BsSearch size={24}/>
                </button>
              </div>
              <div className="mylocation-container">
                <input
                  type="text"
                  placeholder="Magasins autour de moi"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <button className="location-btn">
                  <BsGeoAlt size={33}/>
                </button>
              </div>
            </div>
          </form>
          {showMessage && <div style={{backgroundColor: "white"}}>Merci pour votre recherche !</div>} {/* afficher le message si showMessage est vrai */}
        </div>
      </div>
    </section>
  );
};

export default StoreFinder;
