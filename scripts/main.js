
// open and close servicelist when widnow <= 415px
let serviceList = document.querySelector('.service-list-wrapper')
let buttonToToggle = document.querySelector('.service-list-mobile-icon')

buttonToToggle.addEventListener('click', () => {
  serviceList.classList.toggle('show-service-list')
})
// end ---------------------------------------------------

