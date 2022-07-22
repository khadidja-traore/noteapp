import React from 'react'
import Topbar from '../topbar/Topbar'
import Footer from '../footer/Footer'
import './landingpage.css'

export default function Landingpage() {
  return (
    <div>

      <header>
        <nav class="nav-landingpage">
          <div class="topbar">
            <div className="topLeft">
              <a href="#" id="logo"> Note It Up </a>
            </div>
            
            <div className="topRight">
              <button className=""> Connexion </button>
              <button className=""> Inscription </button>
            </div>
          </div>
    
        </nav>

        <div className="hero">

          <h1>Ecrivez vos idées </h1>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum molestiae voluptatibus rerum. </p>

        </div>

      </header>

        <main>

          <section className="todos">
            <div className="img-container">
              <img src="https://pluspng.com/img-png/to-do-list-png-the-power-of-a-to-do-list-imodelafrica-1024.png" alt="" />
            </div>
            <div className='description'>
              <h4> Titre </h4>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi a nam non sequi atque eveniet aliquam, accusamus quo magnam id incidunt repellendus corrupti? Sapiente nisi officiis veritatis culpa ipsa.</p>
                <button> <a href=""> Decouvrir </a></button>
            </div>
          </section>


          <section class="notes">
            <div className='description'>
              <h4> Titre </h4>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi a nam non sequi atque eveniet aliquam, accusamus quo magnam id incidunt repellendus corrupti? Sapiente nisi officiis veritatis culpa ipsa.</p>
                <button> <a href=""> Decouvrir </a></button>
            </div>
            <div className="img-container">
              <img src="https://pluspng.com/img-png/to-do-list-png-the-power-of-a-to-do-list-imodelafrica-1024.png" alt="" />
            </div>
          </section>

        </main>
        
        <Footer />
    </div>
  )
}
