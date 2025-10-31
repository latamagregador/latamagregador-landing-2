import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { providers } from '../data/providers'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const Grid = styled.section`padding:80px 0;background:#fff;.hdr{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;flex-wrap:wrap;}
  .cards{display:grid;gap:18px;margin-top:24px;grid-template-columns:repeat(2, minmax(0,1fr));@media(min-width:640px){grid-template-columns:repeat(3,1fr);}@media(min-width:900px){grid-template-columns:repeat(4,1fr);}@media(min-width:1120px){grid-template-columns:repeat(5,1fr);}@media(min-width:1320px){grid-template-columns:repeat(6,1fr);}}`
const Card = styled.div`height:150px;border-radius:18px;padding:22px;background:rgba(255,255,255,.8);backdrop-filter:blur(8px);border:1px solid rgba(15,23,42,.12);box-shadow:0 10px 28px rgba(15,23,42,.08);display:flex;flex-direction:column;justify-content:center;align-items:center;transition:transform .18s, box-shadow .18s, border-color .18s;will-change:transform;
  img{max-height:56px;object-fit:contain;} span{display:block;margin-top:10px;font-size:13px;color:#526077;text-align:center;} &:hover{transform:translateY(-3px) scale(1.02);box-shadow:0 14px 36px rgba(15,23,42,.10);border-color:rgba(14,116,144,.25);}`
export default function ProvidersGrid(){const ref=useRef<HTMLDivElement>(null);useEffect(()=>{const el=ref.current;if(!el) return;gsap.from(el.querySelectorAll('.reveal-card'),{opacity:0,y:18,duration:.5,ease:'power2.out',stagger:.05,scrollTrigger:{trigger:el,start:'top 80%'}})},[])
  return (<Grid id="proveedores"><div className="container"><div className="hdr"><div><h2 style={{fontSize:'28px',fontWeight:800}}>Proveedores integrados</h2><p style={{marginTop:'6px',color:'#546176'}}>Fondo blanco, glassmorphism y logos embebidos. ({providers.length})</p></div><a href="#contacto" style={{border:'1px solid rgba(15,23,42,.15)',padding:'10px 14px',borderRadius:'12px',fontWeight:700}}>Solicitar listado completo</a></div><div className="cards" ref={ref}>{providers.map((p,i)=>(<Card key={i} className="reveal-card"><img src={p.src} alt={p.name}/><span>{p.name}</span></Card>))}</div></div></Grid>)}
