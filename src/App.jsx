
import React, { useState } from 'react';
import './App.css';

import background1 from './assets/background1.webp';
import background2 from './assets/background2.webp';
import logo from './assets/logo.webp';
import product1 from './assets/product1.webp';
import product2 from './assets/product2.webp';
import product3 from './assets/product3.webp';
import product4 from './assets/product4.webp';
import member1 from './assets/member1.webp';
import member2 from './assets/member2.webp';
import member3 from './assets/member3.webp';
import member4 from './assets/member4.webp';
import lamp from './assets/lamp.webp';
import plant from './assets/plant.webp';
import leafcircle from './assets/leaf circle.webp';

import MenuIcon from '@mui/icons-material/Menu';
import ForestIcon from '@mui/icons-material/Forest';
import SpaIcon from '@mui/icons-material/Spa';
import RecyclingIcon from '@mui/icons-material/Recycling';
import ChairIcon from '@mui/icons-material/Chair';
import NatureIcon from '@mui/icons-material/Nature';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import PublicIcon from '@mui/icons-material/Public';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SavingsIcon from '@mui/icons-material/Savings';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden font-sans text-text-main bg-bg-light">
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm transition-all duration-300">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="flex items-center gap-3 group">
            <img src={logo} alt="Furnature Logo" loading="lazy" className="w-10 h-10 object-contain transition-transform group-hover:scale-110" />
            <span className="text-2xl font-bold text-primary font-serif tracking-wide">FURNATURE</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-text-main hover:text-primary font-medium transition-colors">Accueil</a>
            <a href="#mission" className="text-text-main hover:text-primary font-medium transition-colors">Notre Mission</a>
            <a href="#solution" className="text-text-main hover:text-primary font-medium transition-colors">Solution</a>
            <a href="#products" className="text-text-main hover:text-primary font-medium transition-colors">Produits</a>
            {/* <a href="#team" className="text-text-main hover:text-primary font-medium transition-colors">Équipe</a> */}
            <a href="#contact" className="text-text-main hover:text-primary font-medium transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-primary z-50 relative" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <CloseIcon sx={{ fontSize: '2rem' }} /> : <MenuIcon sx={{ fontSize: '2rem' }} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <a href="#home" onClick={toggleMobileMenu} className="text-2xl text-text-main hover:text-primary font-medium transition-colors">Accueil</a>
        <a href="#mission" onClick={toggleMobileMenu} className="text-2xl text-text-main hover:text-primary font-medium transition-colors">Notre Mission</a>
        <a href="#solution" onClick={toggleMobileMenu} className="text-2xl text-text-main hover:text-primary font-medium transition-colors">Solution</a>
        <a href="#products" onClick={toggleMobileMenu} className="text-2xl text-text-main hover:text-primary font-medium transition-colors">Produits</a>
        {/* <a href="#team" onClick={toggleMobileMenu} className="text-2xl text-text-main hover:text-primary font-medium transition-colors">Équipe</a> */}
        <a href="#contact" onClick={toggleMobileMenu} className="text-2xl text-text-main hover:text-primary font-medium transition-colors">Contact</a>
      </div>

      {/* 1. Hero Section */}
      <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gray-200 z-0">
           <img 
             src={background1} 
             alt="Hero Background" 
             loading="lazy"
             className="w-full h-full object-cover"
           />
        </div>
        
        {/* Overlay: soft green gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(47,97,58,0.9)] to-[rgba(87,161,106,0.7)] z-10"></div>

        <div className="container mx-auto px-6 relative z-20 flex flex-col md:flex-row items-center justify-between h-full py-20">
          {/* Content (Left Aligned) */}
          <div className="text-white md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight font-serif animate-fade-in-up">
              <span className="italic">FURNATURE</span>
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90 animate-fade-in-up delay-200">
              Votre espace, notre engagement
            </p>
            <button className="mt-8 px-8 py-4 bg-accent text-primary font-bold rounded-full hover:bg-white hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg cursor-pointer animate-fade-in-up delay-400">
              Découvrir le projet
            </button>
          </div>

          {/* Visual (Right Aligned) */}
          <div className="md:w-1/2 flex justify-center items-center relative mt-12 md:mt-0 animate-fade-in-up delay-600">
         
            {/* Circular logo container */}
            <div className="relative w-64 h-64 md:w-150 md:h-150 bg-white/80 backdrop-blur-sm rounded-full border-2 border-white/30 flex items-center justify-center shadow-2xl animate-float">
              <img 
                src={logo} 
                alt="Logo" 
                loading="lazy"
                className="w-120 h-120 object-contain rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem / Why This Matters */}
      <section id="mission" className="py-20 bg-bg-light">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-primary text-center mb-16 font-serif">Why This Matters</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-secondary/10 backdrop-blur-sm p-8 rounded-3xl border border-secondary/20 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                {/* Icon Placeholder: Environment */}
                <ForestIcon className="text-primary" sx={{ fontSize: '2rem' }} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 text-center font-serif">Environmental Impact</h3>
              <p className="text-text-main text-center leading-relaxed">
                Traditional furniture production contributes significantly to deforestation and carbon emissions. We aim to change that.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-secondary/10 backdrop-blur-sm p-8 rounded-3xl border border-secondary/20 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                {/* Icon Placeholder: Health */}
                <SpaIcon className="text-primary" sx={{ fontSize: '2rem' }} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 text-center font-serif">Health & Wellbeing</h3>
              <p className="text-text-main text-center leading-relaxed">
                Toxic chemicals in synthetic materials can affect indoor air quality. Our natural materials ensure a safer home.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-secondary/10 backdrop-blur-sm p-8 rounded-3xl border border-secondary/20 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                {/* Icon Placeholder: Waste */}
                <RecyclingIcon className="text-primary" sx={{ fontSize: '2rem' }} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 text-center font-serif">Waste Reduction</h3>
              <p className="text-text-main text-center leading-relaxed">
                Fast furniture creates mountains of waste. We design durable, recyclable pieces that last a lifetime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Solution / Project Summary (Slide 4) */}
      <section id="solution" className="relative py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
            <img src={background2} alt="Solution Background" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#4F8F5F]/30"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-[#2F5D3A] text-center mb-16 font-serif">LA SOLUTION</h2>

            {/* Two Column Layout */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-20">
                
                {/* Left Column: Brand Circle */}
                <div className="flex flex-col items-center">
                    <div className="relative w-85 h-85 rounded-full bg-[#e9e9e9] border-2 border-[#468556] flex flex-col items-center justify-center p-8 shadow-2xl">
                       
                        {/* Chair Icon */}
                        <img src={logo} alt="Chair Line Art" loading="lazy" className=" object-contain mb-4" />
                      
                    </div>
                </div>

                {/* Right Column: Description Circle */}
                <div className="flex flex-col items-center">
                    <div className="relative w-85 h-85 rounded-full bg-black border-2 border-[#4F8F5F] flex flex-col items-center justify-center p-10 text-center shadow-2xl">
                        {/* Leaf Side */}
                        <img src={leafcircle} alt="Leaf Decor" loading="lazy" className="absolute top-1/5 -right-0 transform -translate-y-21 w-max h-max  " />

                        <h3 className="text-[#4F8F5F] text-3xl font-serif mb-4">Furnature</h3>
                        <p className="text-white text-sm leading-relaxed">
                            La solution écologique, transforme des matériaux recyclés en meubles créatifs, contribuant ainsi à réduire la pollution et à promouvoir la durabilité.
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Row: Key Attributes */}
            <div className="text-center">
                <h3 className="text-3xl font-bold text-[#2F5D3A] mb-10 font-serif">Nous créons des meubles</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Stylés et chic */}
                    <div className="flex flex-col items-center p-4 rounded-xl bg-white/50 backdrop-blur-sm">
                        <ChairIcon className="text-primary mb-4" sx={{ fontSize: '4rem' }} />
                        <span className="font-bold text-[#1E1E1E]">Stylés et chic</span>
                    </div>
                    {/* Eco-friendly */}
                    <div className="flex flex-col items-center p-4 rounded-xl bg-white/50 backdrop-blur-sm">
                        <NatureIcon className="text-primary mb-4" sx={{ fontSize: '4rem' }} />
                        <span className="font-bold text-[#1E1E1E]">Eco-friendly</span>
                    </div>
                    {/* Durables */}
                    <div className="flex flex-col items-center p-4 rounded-xl bg-white/50 backdrop-blur-sm">
                        <AllInclusiveIcon className="text-primary mb-4" sx={{ fontSize: '4rem' }} />
                        <span className="font-bold text-[#1E1E1E]">Durables</span>
                    </div>
                    {/* Recyclable */}
                    <div className="flex flex-col items-center p-4 rounded-xl bg-white/50 backdrop-blur-sm">
                        <RecyclingIcon className="text-primary mb-4" sx={{ fontSize: '4rem' }} />
                        <span className="font-bold text-[#1E1E1E]">Recyclable</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 4. Features / How It Works (Slide 5) */}
      <section className="relative py-20">
         {/* Background */}
         <div className="absolute inset-0 z-0">
            <img src={background2} alt="Background" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#F5F3EE]/90"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2F5D3A] text-center mb-16 font-serif">CARACTÉRISTIQUES</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left Column: Market Characteristics */}
                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <PublicIcon className="text-primary flex-shrink-0" sx={{ fontSize: '2.4rem' }} />
                        <p className="text-[#1E1E1E] text-lg">Association professionnelle AMIA : a été créée pour promouvoir le « Made in Morocco »</p>
                    </div>
                    <div className="flex items-start gap-4">
                        <SwapHorizIcon className="text-primary flex-shrink-0" sx={{ fontSize: '2.4rem' }} />
                        <p className="text-[#1E1E1E] text-lg">Substitution aux importations : Le remplacement des importations suppose plus de productivité et de croissance pour les entreprises industrielles locales</p>
                    </div>
                    <div className="flex items-start gap-4">
                        <TrendingUpIcon className="text-primary flex-shrink-0" sx={{ fontSize: '2.4rem' }} />
                        <p className="text-[#1E1E1E] text-lg">Le marché marocain de l’ameublement est en croissance, avec une augmentation de 20% par an.</p>
                    </div>
                    <div className="flex items-start gap-4">
                        <ShoppingCartIcon className="text-primary flex-shrink-0" sx={{ fontSize: '2.4rem' }} />
                        <p className="text-[#1E1E1E] text-lg">Les Marocains consacrent 3% de leur revenu annuel aux achats de biens d’équipement, y compris les meubles</p>
                    </div>
                </div>

                {/* Right Column: Tendances du Marché */}
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-[#2F5D3A]/20 shadow-lg">
                    <div className="flex items-center gap-4 mb-6">
                        <StorefrontIcon className="text-primary" sx={{ fontSize: '2.8rem' }} />
                        <h3 className="text-2xl font-bold text-[#2F5D3A] font-serif">Tendances du Marché</h3>
                    </div>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3 text-lg text-[#1E1E1E]">
                            <ShoppingBagIcon className="text-secondary" sx={{ fontSize: '1.6rem' }} />
                            Croissance du commerce en ligne
                        </li>
                        <li className="flex items-center gap-3 text-lg text-[#1E1E1E]">
                            <SavingsIcon className="text-secondary" sx={{ fontSize: '1.6rem' }} />
                            Préférence pour des Produits Accessibles Financièrement
                        </li>
                        <li className="flex items-center gap-3 text-lg text-[#1E1E1E]">
                            <DesignServicesIcon className="text-secondary" sx={{ fontSize: '1.6rem' }} />
                            Design Moderne et unique
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* 5. Visual Preview (Slide 6) */}
      <section id="products" className="relative py-20 bg-[#D6F2C2]">
        {/* Decor */}
        <img src={lamp} alt="Lamp Left" loading="lazy" className="absolute top-0 left-10 w-34 opacity-50" />
        <img src={lamp} alt="Lamp Right" loading="lazy" className="absolute top-0 right-10 w-34 opacity-50" />
        <img src={plant} alt="Plant Decor" loading="lazy" className="absolute bottom-0 left-0 w-40 opacity-50" />

        <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2F5D3A] text-center mb-16 font-serif uppercase leading-relaxed">
                CARACTÉRISTIQUES ET SPÉSIFICATION <br/> DES PRODUIST FURNATURE
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Item 1 */}
                <div className="flex flex-col items-center group">
                    <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-lg mb-4">
                        <img src={product1} alt="Canapé et table basse" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1E1E1E] uppercase tracking-wide">CANAPÉ ET TABLE BASSE</h3>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col items-center group">
                    <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-lg mb-4">
                        <img src={product3} alt="Lit et tables de lit" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1E1E1E] uppercase tracking-wide">LIT ET TABLES DE LIT</h3>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col items-center group">
                    <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-lg mb-4">
                        <img src={product2} alt="Meuble télé" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1E1E1E] uppercase tracking-wide">MEUBLE TÉLÉ</h3>
                </div>

                {/* Item 4 */}
                <div className="flex flex-col items-center group">
                    <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-lg mb-4">
                        <img src={product4} alt="Table à manger" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1E1E1E] uppercase tracking-wide">Table à manger</h3>
                </div>
            </div>
        </div>
      </section>

      {/* 6. Team Section 
      <section id="team" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-primary text-center mb-16 font-serif">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full p-1 border-2 border-secondary mb-6 overflow-hidden">
                <img src={member1} alt="Team Member 1" loading="lazy" className="w-full h-full rounded-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-primary font-serif">BAROUDI OUMAIMA</h3>
              <p className="text-sm text-secondary font-medium uppercase tracking-wide mt-1">Master en Accompagnement Entrepreneurial</p>
              <p className="text-xs text-gray-500 mt-2">Licence Professionnelle en Entrepreneuriat et management des TPMEs</p>
              <p className="text-xs text-gray-500 mt-1">Diplôme en infographie</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full p-1 border-2 border-secondary mb-6 overflow-hidden">
                <img src={member3} alt="Team Member 2" loading="lazy" className="w-full h-full rounded-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-primary font-serif">MOUJAHID FARIDA</h3>
              <p className="text-sm text-secondary font-medium uppercase tracking-wide mt-1">Master en Accompagnement Entrepreneurial</p>
              <p className="text-xs text-gray-500 mt-2">Licence fondamentale en gestion des entreprises</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full p-1 border-2 border-secondary mb-6 overflow-hidden">
                <img src={member2} alt="Team Member 3" loading="lazy" className="w-full h-full rounded-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-primary font-serif">IMANE EL HABIBI IHLANE</h3>
              <p className="text-sm text-secondary font-medium uppercase tracking-wide mt-1">Master en Accompagnement Entrepreneurial</p>
              <p className="text-xs text-gray-500 mt-2">Licence professionnelle en vente et relation clientèle</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full p-1 border-2 border-secondary mb-6 overflow-hidden">
                <img src={member4} alt="Team Member 4" loading="lazy" className="w-full h-full rounded-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-primary font-serif">MUSTAFA KARIB</h3>
              <p className="text-sm text-secondary font-medium uppercase tracking-wide mt-1">Master en Accompagnement Entrepreneurial</p>
              <p className="text-xs text-gray-500 mt-2">Licence professionnelle en sciences économiques et gestion</p>
            </div>
          </div>
        </div>
      </section>
            */}



      {/* 7. Contact Section */}
      <section id="contact" className="py-20 bg-bg-light">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-primary mb-12 font-serif">Contactez-nous</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            
            {/* Email */}
            <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow w-full md:w-1/3">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                <EmailIcon sx={{ fontSize: '2.5rem' }} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Email</h3>
              <a href="mailto:yhayalmouri2000@gmail.com" className="text-text-main hover:text-primary transition-colors">
                yhayalmouri2000@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow w-full md:w-1/3">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                <PhoneIcon sx={{ fontSize: '2.5rem' }} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Téléphone</h3>
              <a href="tel:+212696671859" className="text-text-main hover:text-primary transition-colors">
                +212 696 671 859
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 9. Final Call-to-Action */}
      <section className="py-24 bg-bg-dark text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 font-serif">Votre espace, notre engagement</h2>
          <button className="px-10 py-5 bg-primary text-white font-bold text-lg rounded-full hover:bg-secondary transition-colors shadow-xl cursor-pointer">
            Découvrir le projet
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-10 text-white/80 text-center">
        <p>&copy; 2025 Furnature. All rights reserved by YAHYA LMOURI.</p>
      </footer>

    </div>
  );
}

export default App;
