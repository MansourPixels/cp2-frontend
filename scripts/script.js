function toggleGaleria(btn) {
  const galeria = btn.parentElement.nextElementSibling;
  if (galeria.style.display === 'none' || galeria.style.display === '') {
    galeria.style.display = 'flex';
    btn.textContent = 'Ocultar fotos';
  } else {
    galeria.style.display = 'none';
    btn.textContent = 'Ver fotos';
  }
}