// Apply stored theme before stylesheet is parsed to avoid a flash
// of the wrong palette on load. Falls through to system preference
// (handled by the @media block in style.css) if nothing is stored.
try {
  const t = localStorage.getItem('theme');
  if (t === 'light' || t === 'dark') document.documentElement.dataset.theme = t;
} catch {}
