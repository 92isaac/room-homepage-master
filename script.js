let left = document.querySelector('.left');
let right = document.querySelector('.right');
let displayHeroImage = document.querySelector('.image .display')
let heroImages = document.querySelectorAll('.image .display-list img')
let display_index =0
let text_index = 0
let textWrapper = document.querySelector('.text-wrapper')
let heroTextContent = document.querySelectorAll('.text-list')
let menu = document.querySelector('.toogle .fa-bars')
let menu_list = document.querySelector('.navbar .nav')
let logo = document.querySelector('.navbar a.logo')

displayHeroImage.src = heroImages[display_index].src;
textWrapper.appendChild(heroTextContent[text_index])
let lastIndex = heroImages.length - 1;
console.log(lastIndex);
console.log(heroImages);

const checkIndexNext = () => {
  if (display_index > lastIndex) {
    display_index = 0;
  }
};


const checkIndexPrev = () => {
  if (display_index < 0) {
    display_index = lastIndex;
  }
};


right.addEventListener('click', () => {
  ++display_index;
  checkIndexNext();
  displayHeroImage.src = heroImages[display_index].src;
  console.log(display_index);
});


left.addEventListener('click', () => {
  --display_index;
  checkIndexPrev();
  displayHeroImage.src = heroImages[display_index].src;
  console.log(display_index);
});

menu.addEventListener(`click`, ()=>{
  menu.classList.toggle('fa-times')
  menu_list.classList.toggle('d-block')
  logo.classList.toggle('display-list')

})
