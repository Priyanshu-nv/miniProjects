const con = document.querySelector('#container');
const love = document.querySelector('i');

con.addEventListener('dblclick', () => {
  love.style.transform = 'translate(-50%, -50%) scale(1.3)';
  love.style.opacity = 0.85;

  setTimeout(() => {
    love.style.transform = 'translate(-50%, -50%) scale(0)';
  }, 800);
});
