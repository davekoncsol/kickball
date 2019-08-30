

function addListeners() {
  let head = document.getElementsByClassName('commenthead')
  // console.log(thiss[0])
  for (var i = 0; i < head.length; i++) {
    head[i].addEventListener('click', click)
  }
  let hidebutton = document.getElementsByClassName('btn-hide-comments')
  // console.log(thiss[0])
  for (var i = 0; i < hidebutton.length; i++) {
    hidebutton[i].addEventListener('click', hideComments)
  }



}

addListeners();

function click(evt) {
  evt.target.nextElementSibling.style.display = 'flex';

}

function hideComments(evt) {
  console.log(evt.target.previousElementSibling)
  evt.target.parentElement.parentElement.style.display = 'none';
}