import React from 'react'
import styled from 'styled-components'
const Wrap = styled.div`display:flex; align-items:center; gap:.75rem;
  .title{display:flex;flex-direction:column;line-height:1;font-weight:800;letter-spacing:.3px;}
  .title .top{font-size:1.05rem;} .title .bottom{font-size:.85rem;color:${({theme})=>theme.colors.primary};}
`
export default function BrandLogo(){
  return (
    <Wrap aria-label="LATAM Agregador Casino">
      <svg width="44" height="44" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#0E7490"/><stop offset="1" stopColor="#0B4D6D"/></linearGradient></defs>
        <circle cx="64" cy="64" r="54" stroke="url(#g)" strokeWidth="10" fill="none"/>
        <g stroke="url(#g)" strokeWidth="8" strokeLinecap="round"><path d="M64 18 V64 H110"/></g>
        <circle cx="64" cy="64" r="10" fill="url(#g)"/><circle cx="110" cy="64" r="7" fill="url(#g)"/><circle cx="64" cy="18" r="7" fill="url(#g)"/>
        <g fill="url(#g)"><rect x="26" y="28" width="16" height="16" rx="2"/><rect x="26" y="84" width="16" height="16" rx="2"/><rect x="86" y="96" width="16" height="16" rx="2"/></g>
      </svg>
      <div className="title"><span className="top">LATAM</span><span className="bottom">AGREGADOR CASINO</span></div>
    </Wrap>
  )
}
