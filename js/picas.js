let conditional = false;

function nUmberAleatory() {
  return Math.floor(Math.random() * 899) + 100;
}

let PlayerTwo = nUmberAleatory();
alert(nUmberAleatory());
let PlayerOne = parseInt(prompt("Ingresa un numero de 3 digitos por favor"));

function Compare(PlayerOne) {
  let livesPlayerOne = 0;
 
      
      if (parseInt(PlayerTwo) === parseInt(PlayerOne)) {
        console.log("le atinaste felicitaciones");
      } else {
        console.log("intentalo de nuevo");
        livesPlayerOne++;
        PicasTwo();
      if (livesPlayerOne < 5) {
        console.log("perdiste")

      } else (console.log("tienes" + (5 - livesPlayerOne)+"intentos"))
    }
  }

 Compare(PlayerOne)

 function PicasTwo(numbers) {
    PlayerTwo = "";
    twoPicas = parseInt(numbers.toString()[0]);
    livesPlayerOne--;
    return;
  }
  PlayerTwo = "";

  function picasOne(numbers) {
    PlayerOne = "";
    onePicas = parseInt(numbers.toString()[0]);
    livesPlayerOne--;
    return;
  }

  PlayerOne = "";

  function FijasTwo(numbers) {
    PlayerTwo = "";
    chainTwo = numbers.toString();
    fija = parseInt(chainTwo[chainTwo.length]);
    livesPlayerOne--;
    return;
  }


function FijasOne(numbers) {
  PlayerOne = "";
  chainOne = numbers.toString();
  Fija = parseInt(chainOne[chainOne.length - 1]);
  livesPlayerOne--;
  return;
}

alert("felicitaciones lo lograste");

PlayerTwo = alert("");
function PicasTwo(numbers) {
    PlayerTwo = "";
    twoPicas = parseInt(numbers.toString()[0]);
    livesPlayerOne--;
    return;
  }
  PlayerTwo = "";

  function picasOne(numbers) {
    PlayerOne = "";
    onePicas = parseInt(numbers.toString()[0]);
    livesPlayerOne--;
    return;
  }

  PlayerOne = "";

  function FijasTwo(numbers) {
    PlayerTwo = "";
    chainTwo = numbers.toString();
    fija = parseInt(chainTwo[chainTwo.length]);
    livesPlayerOne--;
    return;
  }


function FijasOne(numbers) {
  PlayerOne = "";
  chainOne = numbers.toString();
  Fija = parseInt(chainOne[chainOne.length - 1]);
  livesPlayerOne--;
  return;
}

alert("felicitaciones lo lograste");

alert(nUmberAleatory());
