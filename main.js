// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
let modal = document.getElementById('modal');
// Your JavaScript code goes here!
let likeBtns
function hideErrorBanner(){
  modal.setAttribute('class', 'hidden');
}

function assignLikeAction(){
  likeBtns = Array.from(document.querySelectorAll('li.like span.like-glyph'));
  likeBtns.forEach(btn => {
    btn.addEventListener('click', handleLike);
  });
}

function handleLike(event){
  mimicServerCall('url')
  .then(event => changeHeart(event))
  .catch(error => showError(error));
}  

function showError(error){
  modal.innerText = error;
  modal.classList.remove('hidden');
  window.setTimeout(hideErrorBanner, 5000);
}

function changeHeart(event){
  let likeBtn = event.target;
  if (likeBtn.innerHTML === EMPTY_HEART) {
    likeBtn.setAttribute('class', 'activated-heart');
    likeBtn.innerHTML = FULL_HEART;
  } else {
    // (likeBtn.innerHTML === FULL_HEART)
    likeBtn.removeAttribute('class', 'activated-heart');
    likeBtn.innerHTML = EMPTY_HEART;
  }
}
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}


hideErrorBanner();
assignLikeAction();