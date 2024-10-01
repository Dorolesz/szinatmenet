import './style.css'
import 'bootstrap/dist/css/bootstrap.css'

function updateGradient() {
  // Színek lekérése
  const color1 = document.getElementById('color1').value;
  const color2 = document.getElementById('color2').value;

  // Színátmenet alkalmazása a div elemre
  const gradientBox = document.getElementById('gradient-box');
  gradientBox.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
}

// Eseményfigyelők a színek változtatására
document.getElementById('color1').addEventListener('input', updateGradient);
document.getElementById('color2').addEventListener('input', updateGradient);

// Oldal betöltésekor frissítjük a színátmenetet
document.addEventListener('DOMContentLoaded', updateGradient);