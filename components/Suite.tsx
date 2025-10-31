import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { IconEngine, IconOdds, IconHub, IconPartner } from '../icons'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const Wrap = styled.section`padding:80px 0;position:relative;overflow:hidden;background:linear-gradient(180deg,#FFFFFF,#F7F8FB);.grid{display:grid;gap:16px;margin-top:24px;grid-template-columns:repeat(1,1fr);@media(min-width:820px){grid-template-columns:repeat(4,1fr);}}`
const Card = styled.div`position:relative;padding:20px;border-radius:16px;background:rgba(255,255,255,.7);border:1px solid rgba(15,23,42,.12);box-shadow:0 10px 28px rgba(15,23,42,.08);backdrop-filter:blur(12px);transition:transform .2s, box-shadow .2s; &:hover{transform:translateY(-3px);box-shadow:0 14px 36px rgba(15,23,42,.10);} h3{margin:10px 0 6px;font-size:16px} p{margin:0;color:#546176;font-size:14px} .ico{color:#0E7490;transition:transform .2s;} &:hover .ico{transform:rotate(8deg) scale(1.05);} `
export default function Suite(){const ref=useRef<HTMLDivElement>(null);useEffect(()=>{const el=ref.current;if(!el) return;gsap.from(el.querySelectorAll('.reveal'),{opacity:0,y:18,duration:.5,ease:'power2.out',stagger:.08,scrollTrigger:{trigger:el,start:'top 80%'}})},[])
  const items=[{title:'Casino Engine',desc:'Agregación de slots & live con segmentación.',icon:<IconEngine className="ico"/>},{title:'Odds / Sports',desc:'Feed, trading y settling multi-proveedor.',icon:<IconOdds className="ico"/>},{title:'Game Hub',desc:'Rutas unificadas, wallets externos, limits.',icon:<IconHub className="ico"/>},{title:'Partner Hub',desc:'Afiliados, tracking y pagos unificados.',icon:<IconPartner className="ico"/>},]
  return (<Wrap id="suite"><div className="container"><h2 style={{fontSize:'28px',fontWeight:800}}>Suite de productos</h2><p style={{marginTop:'6px',color:'#546176'}}>Arquitectura modular con APIs y webhooks. Observabilidad, auditoría y SLA empresarial.</p><div className="grid" ref={ref}>{items.map((it,i)=>(<Card className="reveal" key={i}>{it.icon}<h3>{it.title}</h3><p>{it.desc}</p></Card>))}</div></div></Wrap>)}
