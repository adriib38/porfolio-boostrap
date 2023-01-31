

function setScroll(s){
  window.scroll({
    top: s,
    behavior: 'smooth'
  });
}

let btn_book = document.getElementById("btn-book");
btn_book.addEventListener('click', function(){
  console.log('BOOK!');
  
})