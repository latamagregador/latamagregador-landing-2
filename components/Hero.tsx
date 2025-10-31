import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const Wrap = styled.section`
  --c1: #052f42; --c2:#0e7490; --c3:#032637;
  position:relative;overflow:hidden;min-height:72vh;display:flex;align-items:center;
  .animatedBg{
    position:absolute; inset:0; z-index:-2;
    background: radial-gradient(60% 60% at 20% 10%, rgba(14,116,144,.35), transparent 60%),
                linear-gradient(120deg, var(--c1), var(--c2), var(--c3));
    background-size: 200% 200%;
    animation: shift 16s ease-in-out infinite;
  }
  @keyframes shift{
    0%{ background-position: 0% 0%; }
    50%{ background-position: 100% 50%; }
    100%{ background-position: 0% 0%; }
  }
  position:relative;overflow:hidden;min-height:72vh;display:flex;align-items:center;
  .bgVideo{position:absolute;inset:0;z-index:-2;object-fit:cover;filter:saturate(1.05);transform:translateY(0);will-change:transform;}
  .overlay{position:absolute;inset:0;z-index:-1;background: radial-gradient(60% 60% at 30% 20%, rgba(14,116,144,.28), transparent 60%), linear-gradient(180deg, rgba(2,64,89,.55), rgba(2,64,89,.15) 38%, rgba(255,255,255,.0));}
  .glass{background:rgba(255,255,255,.6);border:1px solid rgba(15,23,42,.12);box-shadow:0 14px 36px rgba(15,23,42,.10);backdrop-filter:blur(10px);border-radius:16px;padding:1rem 1.2rem;display:inline-flex;}
  .network{position:absolute;right:-10vw;top:-8vw;width:60vw;height:60vw;opacity:.12;}
  .grain{position:absolute;inset:0;}
`
export default function Hero(){const videoRef=useRef<HTMLVideoElement>(null);useEffect(()=>{const v=videoRef.current;if(!v) return;const tween=gsap.to(v,{y:80,ease:'none',scrollTrigger:{trigger:v,start:'top top',end:'bottom top',scrub:true}});return()=>{tween.scrollTrigger?.kill();tween.kill()}},[])
  return (<Wrap id="hero"><div className="overlay"/><svg className="network" viewBox="0 0 400 400" fill="none"><g stroke="#0E7490" strokeOpacity=".7"><path d="M200 30 L340 115 L300 300 L100 340 L40 160 Z"/><circle cx="200" cy="30" r="6" fill="#0E7490"/><circle cx="340" cy="115" r="6" fill="#0E7490"/><circle cx="300" cy="300" r="6" fill="#0E7490"/><circle cx="100" cy="340" r="6" fill="#0E7490"/><circle cx="40" cy="160" r="6" fill="#0E7490"/></g></svg><div className="grain"/><div className="container" style={{position:'relative',zIndex:1}}><motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.7,ease:'easeOut'}}><div className="glass">One API • All Providers • LATAM Focus</div><h1 style={{marginTop:'18px',fontWeight:800,fontSize:'clamp(32px, 5vw, 56px)'}}>Conectamos LATAM con la <span style={{color:'#0E7490'}}>innovación global</span> del iGaming.</h1><p style={{maxWidth:'720px',marginTop:'12px',opacity:.9,fontSize:'18px'}}>Integra <b>slots</b>, <b>casino en vivo</b> y <b>sportsbook</b> con time‑to‑market acelerado, paneles en tiempo real y soporte bilingüe.</p><div style={{display:'flex',gap:'12px',marginTop:'20px'}}><motion.a whileHover={{scale:1.03}} whileTap={{scale:.98}} href="#proveedores" style={{background:'#0E7490',color:'#fff',padding:'12px 18px',borderRadius:'12px',fontWeight:700,boxShadow:'0 10px 28px rgba(14,116,144,.35)'}}>Ver integraciones</motion.a><motion.a whileHover={{scale:1.02}} href="#contacto" style={{border:'1px solid rgba(15,23,42,.15)',padding:'12px 18px',borderRadius:'12px',fontWeight:700,background:'rgba(255,255,255,.7)',backdropFilter:'blur(8px)'}}>Solicitar acceso</motion.a></div></motion.div></div></Wrap>)}
