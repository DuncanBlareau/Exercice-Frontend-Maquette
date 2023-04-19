import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className='footer-container'>
        <div className="footer-left">
          <img src="/CTK-img@2x.png" alt="Centrakor Logo" />
        </div>
        <div className="footer-right">
          <h2>QUI SOMMES-NOUS ?</h2>
          <button><p>Découvrez Centrakor</p></button>
          <p>et suivez nos aventures sur<br/>les réseaux sociaux</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src="/social/Icon awesome-facebook-square@2x.png" alt="Facebook logo"></img>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img src="/social/Icon awesome-instagram@2x.png" alt="Instagram logo"></img>
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer">
              <img src="/social/Icon awesome-pinterest-square@2x.png" alt="Pinterest logo"></img>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer">
              <img src="/social/Icon simple-tiktok@2x.png" alt="Tiktok logo"></img>
            </a>
          </div>
        </div>
      </div>
      <img className="footerbottom" src="/fond_footer.jpg" alt="footer bottom" />
    </footer>
  );
};

export default Footer;
