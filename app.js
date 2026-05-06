// Tema único controlado por JS — inspirado no projeto neo, sem recriar a estrutura das páginas.
(function () {
  const themes = {
    nep: {
      bottomNav: '#eb9bff',
      texture: './img/rain.gif',
      background: './img/garden2.png',
      text: '#ffffff',
      accent: 'hsl(293, 100%, 73%)',
      subtitle: '#ffffff',
      cardBorder: 'rgb(255, 0, 255)',
      neon: '#7e1e96',
      overlay: 'rgba(0, 0, 0, 0.65)',
      cardBg: 'rgba(0, 0, 0, 0.90)',
      glow1: 'rgba(217, 92, 255, 0.4)',
      glow2: 'rgba(208, 108, 255, 0.25)',
      footerBorder: 'rgb(235, 136, 255)',
      footerText: '#ffffff',
      musicBorder: '#eb9bff',
      musicGlow: 'rgba(255, 164, 243, 0.5)'
    },
    manel: {
      background: './img/manel/NewStars.webp',
      text: '#e3f2fd',
      accent: '#ffffff',
      subtitle: '#ffffff',
      cardBorder: '#ffffff',
      neon: '#ffffff',
      overlay: 'transparent',
      cardBg: 'rgb(0, 0, 0)',
      glow1: 'rgba(255, 255, 255, 0.4)',
      glow2: 'rgba(255, 255, 255, 0.25)',
      footerBorder: '#ffffff',
      footerText: '#ffffff',
      musicBorder: 'rgba(255, 255, 255, 0.4)',
      musicGlow: 'rgba(255, 255, 255, 0.5)'
    },
    leozin: {
      background: './img/leozin/background_leozin.webp',
      text: '#e3f2fd',
      accent: '#ffffff',
      subtitle: '#ff0000',
      cardBorder: '#ff0000',
      neon: '#ff0000',
      overlay: 'transparent',
      cardBg: 'rgba(0, 0, 0, 0.85)',
      glow1: 'rgba(255, 0, 0, 0.4)',
      glow2: 'rgba(255, 0, 0, 0.25)',
      footerBorder: 'rgba(255, 80, 80, 0.25)',
      footerText: '#bb0f0f',
      musicBorder: 'rgba(255, 255, 255, 0.4)',
      musicGlow: 'rgba(255, 255, 255, 0.5)'
    },
    azazel: {
      background: './img/azazel/gaybg.jpg',
      text: '#e3f2fd',
      accent: '#ffffff',
      subtitle: '#ffffff',
      cardBorder: '#ffffff',
      neon: '#ffffff',
      overlay: 'transparent',
      cardBg: 'rgb(0, 0, 0)',
      glow1: 'rgba(255, 255, 255, 0.4)',
      glow2: 'rgba(255, 255, 255, 0.25)',
      footerBorder: '#ffffff',
      footerText: '#ffffff',
      musicBorder: 'rgba(255, 255, 255, 0.4)',
      musicGlow: 'rgba(255, 255, 255, 0.5)'
    },
     foquinha: {
      background: './img/moguinha/background_moguinha.jpg',
      text: '#e3f2fd',
      accent: '#ffffff',
      subtitle: '#ffffff',
      cardBorder: '#ffffff',
      neon: '#ffffff',
      overlay: 'transparent',
      cardBg: 'rgb(0, 0, 0)',
      glow1: 'rgba(255, 255, 255, 0.4)',
      glow2: 'rgba(255, 255, 255, 0.25)',
      footerBorder: '#ffffff',
      footerText: '#ffffff',
      musicBorder: 'rgba(255, 255, 255, 0.4)',
      musicGlow: 'rgba(255, 255, 255, 0.5)'
    },
         charles: {
      background: './img/charles/charlesbg.png',
      text: '#ffffff',
      accent: '#b700ff',
      subtitle: '#ffffff',
      cardBorder: '#ff00ff',
      neon: '#ff00f2',
      overlay: 'transparent',
      cardBg: 'rgb(0, 0, 0, 0.8)',
      glow1: 'rgba(255, 0, 255, 0.4)',
      glow2: 'rgba(234, 0, 255, 0.25)',
      footerBorder: '#ff00f2',
      footerText: '#ffffff',
      musicBorder: 'rgba(248, 45, 255, 0.4)',
      musicGlow: 'rgba(255, 0, 191, 0.5)'
    }
  };

  function setTheme(theme) {
    const root = document.documentElement;
    root.style.setProperty('--navcolor', theme.bottomNav);
    root.style.setProperty('--page-tex', `url("${theme.texture}")`);
    root.style.setProperty('--page-bg', `url("${theme.background}")`);
    root.style.setProperty('--text-color', theme.text);
    root.style.setProperty('--accent-color', theme.accent);
    root.style.setProperty('--subtitle-color', theme.subtitle);
    root.style.setProperty('--card-border', theme.cardBorder);
    root.style.setProperty('--neon-color', theme.neon);
    root.style.setProperty('--overlay-color', theme.overlay);
    root.style.setProperty('--card-bg', theme.cardBg);
    root.style.setProperty('--glow-color-1', theme.glow1);
    root.style.setProperty('--glow-color-2', theme.glow2);
    root.style.setProperty('--footer-border', theme.footerBorder);
    root.style.setProperty('--footer-text', theme.footerText);
    root.style.setProperty('--music-border', theme.musicBorder);
    root.style.setProperty('--music-glow', theme.musicGlow);
  }

  const profile = document.body.dataset.profile || 'nep';
  setTheme(themes[profile] || themes.nep);
})();
