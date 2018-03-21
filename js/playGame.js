const $screen = $('.screen');
const $boxes = $('.boxes .box');
const $player1 = $('#player1');
const $player2 = $('#player2');
let isWon = false;
let turnCounter = 0;
let count = 1;

// for (let i = 0; i < $boxes.length; i++){
//     $boxes[i].classList.add(count);
//     count++;
// }

// function checkDiag() {
//     let diag1 = [1, 5, 9];
//     let diag2 = [3, 5, 7];
// }

// function checkCols() {
//     let col1 = [1, 4, 7];
//     let col2 = [2, 5, 8];
//     let col3 = [3, 6, 9];
// }

// function checkRows() {
//     let row1 = [1, 2, 3];
//     let row2 = [4, 5, 6];
//     let row3 = [7, 8, 9];
// }




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

        $boxes.hover(function() {
            $(this).css("background-image", "url(../img/o.svg)")
            .css("background-color","#FFA000");
        }, function() {
            $(this).css("background", "#EFEFEF")
            .css("background-image", "none")
        });
    } else {//ready player 2
        $player2.addClass('active');
        $player1.removeClass('active');
        $boxes.on('mouseenter mouseleave', function (event) {
            $(this).toggleClass('box-filled-2');
        });
    }
}

function startGame() {
    $screen.fadeOut(2000);
    setColors();


   $boxes.on('click', function (event) {
       if (turnCounter % 2 === 0 ) {
                if (!$(this).hasClass('box-filled-2') && !$(this).hasClass('box-filled-1')) {
                    $(this).addClass('box-filled-1');
                } else if ($(this).hasClass('box-filled-2')){
                    $(this).removeClass('box-filled-2');
                    $(this).addClass('box-fileld-1');
                }
        } else {
            if (!$(this).hasClass('box-filled-1') && !$(this).hasClass('box-filled-2')){
                $(this).addClass('box-filled-2');
            }
        }
        turnCounter++;
        setColors();
        
    });   
}

showStart();