import { createGlobalStyle } from 'styled-components'

export const theme = {
  colors: {
    primary: '#0E7490',
    primaryDark: '#0B4D6D',
    ink: '#0F172A',
    bg: '#F7F8FB',
    glass: 'rgba(255,255,255,.6)',
    border: 'rgba(15,23,42,.12)'
  },
  shadow: {
    card: '0 10px 28px rgba(15,23,42,.08)',
    soft: '0 14px 36px rgba(15,23,42,.10)'
  },
  radius: '16px'
}

export const GlobalStyle = createGlobalStyle`
  :root { color-scheme: light; } *{ box-sizing:border-box; }
  html, body, #root{ height:100%; } body{ margin:0; font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
  background:${theme.colors.bg}; color:${theme.colors.ink}; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
  a{ color:inherit; text-decoration:none; } img{ display:block; max-width:100%; }
  .container{ width:min(1240px, 92%); margin:0 auto; } .grain{ position:absolute; inset:0;
    background-image:url('https://grainy-gradients.vercel.app/noise.svg'); background-size:200px; opacity:.05; pointer-events:none; }
  @media (prefers-reduced-motion: reduce){ *{ animation:none!important; transition:none!important; } }
`
