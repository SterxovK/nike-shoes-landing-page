let slideIndex = 0;

let slider = document.getElementById('slider')

let slides = slider.getElementsByClassName('slide')

let slideControl = document.getElementById('slide-control')

let slideControlItems = slideControl.getElementsByClassName('slide-control-item')

slider.style.marginTop = '-' + slideIndex + '00vh'
slideControlItems[slideIndex].classList.add('active')

chooseProduct = (index) => {
  if (index === slideIndex) return

  slideIndex = index

  let currSlideControl = slideControl.querySelector('slide-control-item.active')

  slider.style.marginTop = '-' + slideIndex + '00vh'
  slideControlItems[slideIndex].classList.add('active')
};

Array.from(slideControlItems).forEach((el, index) => {
  el.onclick = function() {
    chooseProduct(index)
  }
});
