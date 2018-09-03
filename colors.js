//variables
var squares = Array.from(document.querySelectorAll('.square'));
var title = document.querySelector('h1');
var newGame = document.querySelector('.new');
var message = document.querySelector('.text');
var head = document.querySelector('.header');
var easy = document.querySelector('#easy');
var hard = document.querySelector('#hard');
var secondRow = document.querySelector('.second');

//default setup
reset(squares);
newGame.addEventListener('click', function () {
  reset(squares);
});

function generateColors(element) {
  var random1 = Math.floor(Math.random() * 255);
  var random2 = Math.floor(Math.random() * 255);
  var random3 = Math.floor(Math.random() * 255);
  element.style.background = 'rgb(' + random1 + ', ' + random2 + ', ' + random3 + ')';
}

function reset(array) {
  array.map(function (square) {
    generateColors(square);
  });
  title.innerHTML = array[Math.floor(Math.random() * array.length)].style.background;
  message.innerHTML = '';
  head.style.background = '#3F6DA2';
}

//game logic
for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', function () {
    if (this.style.background === title.innerHTML) {
      message.innerHTML = 'Correct!';
      squares.map(element => element.style.background = title.innerHTML);
      head.style.background = title.innerHTML;
      return;
    } else {
      this.style.background = '#1D1D1D';
      message.innerHTML = 'Try Again';
    }
  });
}

//difficulty modes
easy.addEventListener('click', function() {
  this.classList.add("selected");
  hard.classList.remove("selected");
  for (var i = 3; i < squares.length; i++) {
    squares[i].classList.add("hidden");
  };
  var newArr = squares.slice(0,3);
  reset(newArr);
  })

hard.addEventListener('click', function() {
  this.classList.add("selected");
  easy.classList.remove("selected");
  for (var i = 3; i < squares.length; i++) {
    squares[i].classList.remove("hidden");
  };
  reset(squares);
  })
