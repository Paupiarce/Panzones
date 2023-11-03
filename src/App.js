

import React from "react";
import './App.css';
import background from "./video/video.mp4"; 
import gatogordo from './drops/gatogordo.jpg';
import gatogordo2 from './drops/gatogordo2.jpg';
import ranagorda from './drops/ranagorda.jpg';
import ranagorda2 from './drops/ranagorda2.jpg';
import ranagorda3 from './drops/ranagorda3.jpg';
import ranagorda4 from './drops/ranagorda4.jpg';
import instagram from './icons/instagram.png';
import ubicacion from './icons/ubicacion.png';
import email from './icons/email.png';
import copyright from './icons/copyright.png'
import uno from './tarjetas/uno.png';
import dos from './tarjetas/dos.png';
import tres from './tarjetas/tres.png';
import cuatro from './tarjetas/cuatro.png';
import cinco from './tarjetas/cinco.png';
import seis from './tarjetas/seis.png';
import siete from './tarjetas/siete.png';
import ocho from './tarjetas/ocho.png';
import nueve from './tarjetas/nueve.png';
import diez from './tarjetas/diez.png';
import once from './tarjetas/once.png';
import doce from './tarjetas/doce.png';
import trece from './tarjetas/trece.png';
import Footer from './footer';
import usuario from './icons/usuariouno.png'

function App() {
  
  return (
  <>
  <div className="App">
    <header>
    <h1>PANZONES</h1>
   
           <div className="menu">
           
          <ul className="nav">
          <img src={usuario} className="usuario"/>
          <li><a href="htmls/new-drops.html">NEW DROPS</a></li>
          <li><a href="htmls/productos.html">CATEGORÍAS </a>
             <ol>
                   <li><a href="htmls/new-drops.html">NEW DROPS</a></li>
                   <li><a href="#">ACCESORIOS</a></li>
                   <li><a href="#">REMERAS</a></li>
                   <li><a href="#">ABRIGOS</a></li>
                   <li><a href="#">PANTALONES</a></li>
             </ol>
          </li>
          <li><a href="#"><p className="FAQS">FAQS</p> </a>
             <ol>
                    <li><a href="#">CONTACTO</a></li>
                    <li><a href="#">COMO COMPRAR / FAQ'S</a></li>
                    <li><a href="#">POLITICA DE CAMBIO</a></li>
                    <li><a href="#">CUIDADO DE LAS PRENDAS</a></li>
             </ol>
          </li>
          </ul>


           </div>
           <div className="parrafos">
                    <img src="./icons" alt=""/>
                </div>
    </header>
   
    <video muted loop autoPlay>
        <source src={background} type="video/mp4"/>
    </video>  
            <br />    <br />    <br />    <br />    <br />    <br />    <br />
    <section className="imagenes"> 
    <div>
        <a href="/htmls/gato-gordo.html"><img src={gatogordo} alt=""/>
        <p>gato gordo</p>
        <p>$400</p>
    </a>
        </div>

        <div>
            <a href="htmls/gato-vago.html">
            <img src={gatogordo2} alt=""/>
            <p>gato vago </p>
            <p>$400</p>
            </a>
            </div>

          <div className="ranagorda">
            <a href="htmls/rana-redonda.html">
            <img src={ranagorda} alt=""/>
            <p>rana redonda</p>
            <p>$400</p>
        </a>
        </div>

          <div className="ranaenojada">
            <a href="/htmls/rana-enojada.html">
            <img src={ranagorda2} alt=""/>
            <p>rana enojada</p>
            <p>$400</p>
        </a>
        </div>
        
          <div>
            <a href="/htmls/rana-dormida.html">
            <img src={ranagorda3} alt=""/>
            <p>rana dormida</p>
            <p>$400</p>
        </a>
        </div>

          <div className="extremista">
            <a href="/htmls/rana-extremista.html" />
            <img src={ranagorda4} alt=""/>
            <p>rana con ganas de unirse a grupos extremistas radicales</p>
            <p>$400</p>
          </div>
          <div className="boton">
       <a href="htmls/new-drops.html"><input type="submit" value="VER TODOS"/></a>
    </div>  
    </section>
  </div>
  
  <div className="insta">
    <a href=""><img src={instagram} alt="" /></a>
</div>
<div className="parraf">
   <a href="/htmls/new-drops.html"><p>NEW DROPS</p></a>
    <a href="/htmls/productos.html"><p>Categorías</p></a>
    <a href="#"><p>FAQS</p></a>
</div>

<div className="email">
    <img src={email} alt=""  /> <p><a href="#">info@panzones.com.ar</a></p>
</div>

<div className="ubicacion">
    <img src={ubicacion} alt="" /><p>panzones 5934</p>
</div>

<div className="copyright">
    <img src={copyright} alt="" /><p>COPYRIGHT PANZONES - 2022</p>
</div>

<div className="pagos">
<img src={dos} alt="" />
<img src={tres} alt="" />
<img src={uno} alt="" />
<img src={cuatro} alt="" />
<img src={cinco} alt="" />
<img src={seis} alt="" />
<img src={siete} alt="" />
<img src={ocho} alt="" />
<img src={nueve} alt="" />
<img src={diez} alt="" />
<img src={once} alt="" />
<img src={doce} alt="" />
<img src={trece} alt="" />
</div>

{<Footer />}

  </>
  );
}

export default App;
