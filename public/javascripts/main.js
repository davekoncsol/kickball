function addListeners() {
  let head = document.getElementsByClassName('commenthead')
  // console.log(thiss[0])
  for(var i = 0; i < head.length; i++){
    head[i].addEventListener('click', click)
  }

  // thiss.forEach(t => {
  //   t.addEventListener('click', click)
  // })
  // thiss.addEventListener('click', click);

}

// addListeners();

function click(evt) {
 
let comment = document.getElementsByClassName('ul-div')

for(var i = 0; i < comment.length; i++){
  comment[i].addEventListener('click', click2)
  let child = evt.target.children;
  let bro = evt.target.nextElementSibling;
  console.log(child)

  console.log(bro)


 
  bro.style.display ="none";
}
}

function click2 (){

}

