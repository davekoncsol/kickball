

function addListeners() {
  let head = document.getElementsByClassName('commenthead')
  // console.log(thiss[0])
  for (var i = 0; i < head.length; i++) {
    head[i].addEventListener('click', click)
  }

  // thiss.forEach(t => {
  //   t.addEventListener('click', click)
  // })
  // thiss.addEventListener('click', click);

}

addListeners();

function click(evt) {
  evt.target.nextElementSibling.style.display = 'flex';

}

function click2() {

}