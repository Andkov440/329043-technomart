var cart_link = document.querySelectorAll(".buy");
var cart_popup = document.querySelector(".cart-modal");
var cart_close = document.querySelector(".modal-content-close");
var cart = document.querySelector(".cart-btn");

var bookmarks = document.querySelector(".bookmarks-btn");
var bookmark = document.querySelectorAll(".bookmark");
var bookmarks_count = document.querySelector(".bookmarks-count");
var orders_count = document.querySelector(".orders-count");


var write_link = document.querySelector(".feedback");
var write_popup = document.querySelector(".write-us");
var write_close = document.querySelector(".modal-content-close");

var count_сart = 0;
var count_bookmarks = 0;

for(var i=0; i<cart_link.length; i++) {
  cart_link[i].addEventListener("click", function(event) {
    event.preventDefault();
    cart_popup.classList.add("cart-modal-show");
    cart.classList.add("cart-btn-full");
    orders_count.innerText = ++count_сart;

  });
}

for(var i=0; i<bookmark.length; i++) {
  bookmark[i].addEventListener("click", function(event) {
    event.preventDefault();
    bookmarks.classList.add("bookmarks-btn-full");
    bookmarks_count.innerText = ++count_bookmarks;
  });
}

cart_close.addEventListener("click", function(event) {
  event.preventDefault();
  cart_popup.classList.remove("cart-modal-show");
});



write_link.addEventListener("click", function(event) {
    event.preventDefault();
    write_popup.classList.add("write-us-show");
});

write_close.addEventListener("click", function(event) {
  event.preventDefault();
  write_popup.classList.remove("write-us-show");
});