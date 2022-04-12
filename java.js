const openMenu = document.getElementById('hamburger');
const closeMenu = document.querySelector('.close');
const popUp = document.getElementById('header-nav');
const menuList = document.querySelectorAll('.list');

openMenu.addEventListener('click', () => {
    popUp.classList.add('show')
})
closeMenu.addEventListener('click', () => {
    popUp.classList.remove('show')
})
menuList.forEach((item) => {
    item.addEventListener('click', () => {
      popUp.classList.remove('show');
    });
  });

  