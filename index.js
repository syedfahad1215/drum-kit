//selecting the total keys from lenth 0 to 6

let numberOfkeys = document.querySelectorAll(".drum").length;

let identifier;

const eventHandler = ()=>{

  switch (identifier) {
    case "a":
      let audio1 = new Audio("sounds/tom-1.mp3");
        audio1.play();
    break;
  
    case "s":
      let audio2 = new Audio("sounds/tom-2.mp3");
      audio2.play();
    break;
  
    case "d":
      let audio3 = new Audio("sounds/tom-3.mp3");
      audio3.play();
    break;
  
    case "f":
      let audio4 = new Audio("sounds/tom-4.mp3");
      audio4.play();
    break;
  
    case "j":
      let audio5 = new Audio("sounds/snare.mp3");
      audio5.play();
    break;
  
    case "k":
      let audio6 = new Audio("sounds/kick-bass.mp3");
      audio6.play();
    break;
  
    case "l":
      let audio7 = new Audio("sounds/crash.mp3");
      audio7.play();
    break;
  }
}

//To handle the click event 

for(let i=0; i<numberOfkeys; i++){
  document.querySelectorAll('.drum')[i].addEventListener("click", function(){
    
    identifier = this.innerHTML

    eventHandler()

    addAnimation()
      
  })
    
}

//To handle the keyboard events

document.addEventListener('keydown', function (event) {
  
  identifier = event.key;

  eventHandler()

  addAnimation()

})

const addAnimation=()=>{
  
  let a = document.querySelector("."+identifier)
  a.classList.add("pressed")

  setTimeout( function(){
    a.classList.remove("pressed")
  },500)
}