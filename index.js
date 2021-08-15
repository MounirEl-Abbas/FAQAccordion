let btn = document.getElementsByTagName('button')

let numOfBtns = btn.length

for (let i = 0; i < numOfBtns; i++){
btn[i].addEventListener('click', function(){
  let btnClicked = this

  if(btnClicked.nextElementSibling.clientHeight == 0){
    btnClicked.nextElementSibling.style.height ='100px'
    btnClicked.textContent = '-'
  }else if(btnClicked.nextElementSibling.clientHeight ==100){
    btnClicked.nextElementSibling.style.height ='0px'
    btnClicked.textContent = '+'
  }
})}