import React from 'react'
import styled from 'styled-components'
import BrandLogo from './BrandLogo'
const Bar = styled.header`position:sticky;top:0;z-index:50;background:rgba(255,255,255,.7);backdrop-filter:blur(8px);border-bottom:1px solid ${({theme})=>theme.colors.border};`
const Inner = styled.div`height:64px;display:flex;align-items:center;justify-content:space-between;`
const Nav = styled.nav`display:none;gap:1.5rem;align-items:center;a{font-size:.95rem;opacity:.8;transition:opacity .2s, transform .2s;}a:hover{opacity:1;transform:translateY(-1px);} @media (min-width:920px){display:flex;}`
const Cta = styled.a`display:none;@media (min-width:920px){display:inline-flex;}align-items:center;padding:.6rem 1rem;border-radius:12px;background:${({theme})=>theme.colors.primary};color:white;font-weight:600;box-shadow:${({theme})=>theme.shadow.card};transition:transform .2s, filter .2s;&:hover{transform:translateY(-1px) scale(1.02);filter:brightness(1.05);}`
export default function Header(){return (<Bar><div className="container"><Inner><BrandLogo/><Nav><a href="#suite">Suite</a><a href="#proveedores">Proveedores</a><a href="#equipo">Equipo</a><a href="#contacto">Contacto</a></Nav><Cta href="#contacto">Solicitar acceso</Cta></Inner></div></Bar>)}
