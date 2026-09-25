import React from 'react';
import './ClassDetails.css'; 

import SalsaPhoto from '../../../assets/images/salsaphoto.jpg';
import BachataPhoto from '../../../assets/images/bachataphoto.jpg';
import KizombaPhoto from '../../../assets/images/kizomba.jpg'; 
import MixPhoto from '../../../assets/images/salsabachata2.jpg';


function ClassDetails() {
  return (
    <section className="classes-showcase-section" id="clase">
      <h2 className="section-heading-dark">Stiluri de dans</h2>
      <div className="classes-card-container">
        
        {}
        <a href="/salsa" className="class-showcase-card-link">
          <div className="class-showcase-card">
            <div className="card-image-placeholder">
              <img 
                src={SalsaPhoto} 
                alt="Cuplu dansând salsa"
                loading="lazy" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            <div className="card-info">
              <h3>Salsa</h3>
              <p>De la primii pași la coregrafii complexe. Disponibil pe 3 categorii: începător, intermediar, avansat.</p>
              <span className="class-tag">VEZI CURSURILE DE SALSA</span>
            </div>
          </div>
        </a>

        {}
        <a href="/bachata" className="class-showcase-card-link">
          <div className="class-showcase-card">
            <div className="card-image-placeholder">
              <img 
                src={BachataPhoto} 
                alt="Cuplu dansând bachata"
                loading="lazy" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            <div className="card-info">
              <h3>Bachata</h3>
              <p>Dansul social care pune accentul pe conexiunea cu partenerul, fluiditate și senzualitate.</p>
              <span className="class-tag">VEZI CURSURILE DE BACHATA</span>
            </div>
          </div>
        </a>

        {}
        <a href="/kizomba" className="class-showcase-card-link">
          <div className="class-showcase-card">
            <div className="card-image-placeholder">
              <img 
                src={KizombaPhoto} 
                alt="Cuplu dansând kizomba"
                loading="lazy" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            <div className="card-info">
              <h3>Kizomba</h3>
              <p>Ritm lent de care te vei îndrăgosti.</p> 
              <span className="class-tag">VEZI CURSURILE DE KIZOMBA</span>
            </div>
          </div>
        </a>

        {}
        <a href="/curs-mixt" className="class-showcase-card-link">
          <div className="class-showcase-card">
            <div className="card-image-placeholder">
              {}
              <img 
                src={MixPhoto} 
                alt="Cuplu dansând salsa și bachata"
                loading="lazy" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            <div className="card-info">
              <h3>Salsa & Bachata</h3>
              <p>Nu te poți hotărî? Încearcă-le pe ambele.</p>
              <span className="class-tag">VEZI CURSUL MIXT</span>
            </div>
          </div>
        </a>

      </div>
    </section>
  );
}

export default ClassDetails;