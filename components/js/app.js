let height = document.documentElement.getBoundingClientRect().height;

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function() {
  menu.style.height = `${height}px`;
  menu.classList.toggle('show-menu');
});

function closeMenu() {
  menu.style.minHeight = '100%';
  menu.classList.remove('show-menu');
};

//Menu links
const linkBtns = document.querySelectorAll('.menu-up');
const linksContainer = document.querySelectorAll('.menu-links-links');

linkBtns.forEach((linkBtn) => {
  linkBtn.addEventListener('click', (e) => {
    let currentContainer = e.currentTarget.parentElement.parentElement;
    currentContainer.classList.toggle('show-links');
  })
});

function instruction() {
  const instructionContainer = document.querySelector('.instruction-desc');
  const upBtn = document.querySelector('.hide');
  const downBtn = document.querySelector('.show');
  instructionContainer.classList.toggle('show-instruction')
  upBtn.classList.toggle('show-icon');
  downBtn.classList.toggle('hide-icon');
  
};
