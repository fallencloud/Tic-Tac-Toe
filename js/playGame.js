const $screen = $('.screen');
const $boxes = $('.boxes .box');
const $player1 = $('#player1');
const $player2 = $('#player2');
let isWon = false;
let turnCounter = 0;


function showStart() {
    const $screen = $('.screen');
    $screen.fadeIn(2000);

    const $startButton = $('.button');
    $startButton.on('click', startGame);
}

function setColors() {
    //ready player 1
    if (turnCounter % 2 === 0) {
        $player1.addClass('active');
        $player2.removeClass('active');

        $boxes.on('mouseenter mouseleave', function (event) {
            $(this).toggleClass('box-filled-1');
        });

    } else {//ready player 2
        $player2.addClass('active');
        $player1.removeClass('active');
        $boxes.on('mouseenter mouseleave', function (event) {
            $(this).toggleClass('box-filled-2');
        });
    }
}
function takeTurn() {
    
}

function startGame() {
    $screen.fadeOut(2000);
    setColors();


   $boxes.on('click', function (event) {
        if (turnCounter % 2 === 0 ) {
            $(this).addClass('box-filled-1');
        } else {
            $(this).addClass('box-filled-2');
        }
        turnCounter++;
        setColors();
    });   
}

showStart();