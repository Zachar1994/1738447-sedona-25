document.querySelector(".header__btn-open").addEventListener("click", function() {
  document.querySelector(".header__nav-modified").classList.add("active");
})
document.querySelector(".header__toggle").addEventListener("click", function() {
  document.querySelector(".header__nav-modified").classList.remove("active");
})
