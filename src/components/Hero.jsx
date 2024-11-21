import React from "react";
import perfil from "../img/perfil.png";
import "../styles/hero.css";

const Hero = () => {
    return (
        <section className="hero">
            <header className="hero-header">
                <div className="logo"></div>
                <nav className="navbar">
                    <a href="#home">Inicio</a>
                    <a href="#about">Sobre mi</a>
                    <a href="#skills">Habilidades</a>
                    <a href="#projects">Proyectos</a>
                    <a href="#contact">Contacto</a>
                </nav>
            </header>

            <div className="hero-content">
                <div className="text-content">
                    <p>Hola, mi nombre es</p>
                    <h1>Aaron Cuadrado</h1>
                    <h2>Desarrollador Web</h2>
                    <div className="social-icons">
                        <span>GitHub</span>
                        <span>Linkedin</span>
                        <span>Instagram</span>
                        <span>TikTok</span>
                    </div>
                    <div className="buttons">
                        <button className="btn-primary">Descargar CV</button>
                    </div>
                </div>
                <div className="image-content">
                    <img src={perfil} alt="Aaron Cuadrado" />
                </div>
            </div>
        </section>
    );
};

export default Hero;