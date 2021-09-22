

//for (let i=0;i<7;i++){
//  document.querySelectorAll("button")[i].addEventListener("click", handleclick);
//}
//Instead of caaling this funtion outside, we can add it directly into the
//addEventListener as ananymous funtion
//document.querySelector("button").addEventListener("click", handleclick);

// i less than number of elements having class drum
for (var i=0 ; i<document.querySelectorAll(".drum").length ; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function (){

      //this.style.color="white";
      //console.log(this.innerHTML);
      //document.querySelectorAll(".drum")[i].toggle("color= white");
      //var audio = new Audio('sounds/tom-1.mp3');
      //audio.play();

      var buttonInnerHTML= this.innerHTML;


      makesound(buttonInnerHTML);


      buttonAnimation(buttonInnerHTML);

    //alert("I got clicked");
    }
  );
}

//function handleclick(){
//  alert("I got clicked");
//}


//var audio = new Audio('sounds/tom-1.mp3');
//audio.play();

addEventListener("keypress", function(event){

  makesound(event.key);


  buttonAnimation(event.key);

  //alert("key was pressed");

  //console.log(event);
});


function makesound(key){



  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play ();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play ();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play ();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play ();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play ();
      break;
    default: console.log();
      //alert("Click one of the given key!!");

  }
}


//button animation is timebased, It will remove any class added to the keyword
//after the inputted time
function buttonAnimation(currentkey){

  var activeButton= document.querySelector("."+currentkey);

  activeButton.classList.toggle("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);

}
