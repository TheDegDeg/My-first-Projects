


var NumberOfButter = document.querySelectorAll(".drum").length ; 
console.log ( NumberOfButter);




for ( var i= 0; i< NumberOfButter; i++) {
    console.log(i);
  

    var bout = document.querySelectorAll(".drum");

  document.querySelectorAll(".drum")[i].addEventListener("click" , dothis) ; { 

 


  }  function dothis () { 

    var buttonHTML = this.innerHTML ;
    ButtonAnimation(buttonHTML);
      switch (buttonHTML) {
        case "K":
          var tom1 = new Audio ("sounds/tom-1.mp3");
          tom1.play();
          console.log(buttonHTML);
          break;
          case "H":
            var tom2 = new Audio ("sounds/tom-2.mp3");
            tom2.play();
            break;
            case "A":
              var tom3 = new Audio ( "sounds/tom-3.mp3");
              tom3.play();
              break;
              case "L":
                var tom4 = new Audio ("sounds/tom-4.mp3");
                tom4.play();
                break;
                case "I" : 
                var snare = new Audio ("sounds/snare.mp3");
                snare.play();
                break;
                case "L" :
                var kickbass = new Audio ("kick-bass/mp3");
                kickbass.play();
                break;

                default:
          break;
      }
    } 
  } 
  
  document.addEventListener( "keypress" , function(r){ 

console.log(r.key);
ButtonAnimation(r.key);
  
console.log(r.key)

  switch (r.key) {
    case "k":
          var tom1 = new Audio ("sounds/tom-1.mp3");
          tom1.play();
          break;
          case "h":
            var tom2 = new Audio ("sounds/tom-2.mp3");
            tom2.play();
            break;
            case "a":
              var tom3 = new Audio ( "sounds/tom-3.mp3");
              tom3.play();
              break;
              case "l":
                var tom4 = new Audio ("sounds/tom-4.mp3");
                tom4.play();
                break;
                case "i" : 
                var snare = new Audio ("sounds/snare.mp3");
                snare.play();
                break;
                case "l" :
                var kickbass = new Audio ("kick-bass/mp3");
                kickbass.play();
                break;

                default:
          break;
  }




} ) ;


function ButtonAnimation(currentkey){ 

var classy = document.querySelector("." +currentkey )
classy.classList.add("pressed");



setTimeout(function(){
  classy.classList.remove("pressed") ;
},100 );


}