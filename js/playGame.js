const $screen = $('#start');
let $winScreen = $('#finish');
$winScreen.hide();
let $resetButton = $('.reset-button');
const $boxes = $('.boxes .box');
const $player1 = $('#player1');
const $player2 = $('#player2');
let winner = '';
let isWon = false;
let turnCounter = 0;
let count = 1;

//creates classes that allow are used to check
  //win conditions
for (let i = 0; i < $boxes.length; i++){
    $boxes[i].classList.add(count);
    count++;
}

//resets the game board
function resetBoard() {
    //reset game variables
    isWon = false;
    winner = '';
    turnCounter = 0;

    //reset grid
    $boxes.each(function() {
        $(this).removeClass('box-filled-1')
        .removeClass('box-filled-2');
    });

    setColors();
}//end reset board
//shows winner 
function showWinner() {
    $winMsg = $('.message');    

    if (winner === 'player1'){
        $winScreen.addClass('screen-win-one');
        $winMsg.text('Winner');
    } else if (winner === 'player2') {
        $winScreen.addClass('screen-win-two');
        $winMsg.text('Winner');
    } else if (winner === 'tie') {
        $winScreen.addClass('screen-win-tie');
        $winMsg.text("It's a tie!");
    }
   $winScreen.show();
}
//for player1, check for diagonal win
function checkDiag_1() {
    //let diag1 = [1, 5, 9];
    let diag1_1 = $('.1');
    let diag1_2 = $('.5');
    let diag1_3 = $('.9');
    //let diag2 = [3, 5, 7];
    let diag2_1 = $('.3');
    let diag2_2 = $('.5');
    let diag2_3 = $('.7');

    let checkDiag1 = () => {
        let diag1Check = true;
         //check first col
        if (!diag1_1.hasClass('box-filled-1')) {
            diag1Check = false;
        } else if (!diag1_2.hasClass('box-filled-1')) {
            diag1Check = false;
        } else if (!diag1_3.hasClass('box-filled-1')) {
            diag1Check = false;
        }

        return diag1Check;
    }
    
    let checkDiag2 = () => {
        let diag2Check = true;
         //check first col
        if (!diag2_1.hasClass('box-filled-1')) {
            diag2Check = false;
        } else if (!diag2_2.hasClass('box-filled-1')) {
            diag2Check = false;
        } else if (!diag2_3.hasClass('box-filled-1')) {
            diag2Check = false;
        }

        return diag2Check;
    }

    return checkDiag1() || checkDiag2();
}

//for player2 check for diagonal win
function checkDiag_2() {
    //let diag1 = [1, 5, 9];
    let diag1_1 = $('.1');
    let diag1_2 = $('.5');
    let diag1_3 = $('.9');
    //let diag2 = [3, 5, 7];
    let diag2_1 = $('.3');
    let diag2_2 = $('.5');
    let diag2_3 = $('.7');

    let checkDiag1 = () => {
        let diag1Check = true;
         //check first col
        if (!diag1_1.hasClass('box-filled-2')) {
            diag1Check = false;
        } else if (!diag1_2.hasClass('box-filled-2')) {
            diag1Check = false;
        } else if (!diag1_3.hasClass('box-filled-2')) {
            diag1Check = false;
        }

        return diag1Check;
    }

    let checkDiag2 = () => {
        let diag2Check = true;
         //check first col
        if (!diag2_1.hasClass('box-filled-2')) {
            diag2Check = false;
        } else if (!diag2_2.hasClass('box-filled-2')) {
            diag2Check = false;
        } else if (!diag2_3.hasClass('box-filled-2')) {
            diag2Check = false;
        }

        return diag2Check;
    }

    return checkDiag1() || checkDiag2();
}

//for player 1, check for column win
function checkCols_1() {
    // let col1 = [1, 4, 7];
    let col1_1 = $('.1');
    let col1_2 = $('.4');
    let col1_3 = $('.7');
    // let col2 = [2, 5, 8];
    let col2_1 = $('.2');
    let col2_2 = $('.5');
    let col2_3 = $('.8');
    // let col3 = [3, 6, 9];
    let col3_1 = $('.3');
    let col3_2 = $('.6');
    let col3_3 = $('.9');

    let checkCol1 = () => {
        let col1Check = true;
         //check first col
        if (!col1_1.hasClass('box-filled-1')) {
            col1Check = false;
        } else if (!col1_2.hasClass('box-filled-1')) {
            col1Check = false;
        } else if (!col1_3.hasClass('box-filled-1')) {
            col1Check = false;
        }

        return col1Check;
    }

    let checkCol2 = () => {
        let col2Check = true;
        if (!col2_1.hasClass('box-filled-1')) {
            col2Check = false;
        } else if (!col2_2.hasClass('box-filled-1')) {
            col2Check = false;
        } else if (!col2_3.hasClass('box-filled-1')) {
            col2Check = false;
        }
        
        return col2Check;
    }

    let checkCol3 = () => {
        let col3Check = true;
        if (!col3_1.hasClass('box-filled-1')) {
            col3Check = false;
        } else if (!col3_2.hasClass('box-filled-1')) {
            col3Check = false;
        } else if (!col3_3.hasClass('box-filled-1')) {
            col3Check = false;
        }    
        return col3Check;
    }


    return checkCol1() || checkCol2() || checkCol3();
}

//for player2, check for column win
function checkCols_2() {
    // let col1 = [1, 4, 7];
    let col1_1 = $('.1');
    let col1_2 = $('.4');
    let col1_3 = $('.7');
    // let col2 = [2, 5, 8];
    let col2_1 = $('.2');
    let col2_2 = $('.5');
    let col2_3 = $('.8');
    // let col3 = [3, 6, 9];
    let col3_1 = $('.3');
    let col3_2 = $('.6');
    let col3_3 = $('.9');

    let checkCol1 = () => {
        let col1Check = true;
         //check first col
        if (!col1_1.hasClass('box-filled-2')) {
            col1Check = false;
        } else if (!col1_2.hasClass('box-filled-2')) {
            col1Check = false;
        } else if (!col1_3.hasClass('box-filled-2')) {
            col1Check = false;
        }

        return col1Check;
    }

    let checkCol2 = () => {
        let col2Check = true;
        if (!col2_1.hasClass('box-filled-2')) {
            col2Check = false;
        } else if (!col2_2.hasClass('box-filled-2')) {
            col2Check = false;
        } else if (!col2_3.hasClass('box-filled-2')) {
            col2Check = false;
        }
        
        return col2Check;
    }

    let checkCol3 = () => {
        let col3Check = true;
        if (!col3_1.hasClass('box-filled-2')) {
            col3Check = false;
        } else if (!col3_2.hasClass('box-filled-2')) {
            col3Check = false;
        } else if (!col3_3.hasClass('box-filled-2')) {
            col3Check = false;
        }    
        return col3Check;
    }


    return checkCol1() || checkCol2() || checkCol3();
}

//for player1,check for row win
function checkRows_1() {
//     let row1 = [1, 2, 3];
    let row1_1 = $('.1');
    let row1_2 = $('.2');
    let row1_3 = $('.3');
//     let row2 = [4, 5, 6];
    let row2_1 = $('.4');
    let row2_2 = $('.5');
    let row2_3 = $('.6');
//     let row3 = [7, 8, 9];
    let row3_1 = $('.7');
    let row3_2 = $('.8');
    let row3_3 = $('.9');

    let checkRow1 = () => {
        let row1Check = true;
         //check first col
        if (!row1_1.hasClass('box-filled-1')) {
            row1Check = false;
        } else if (!row1_2.hasClass('box-filled-1')) {
            row1Check = false;
        } else if (!row1_3.hasClass('box-filled-1')) {
            row1Check = false;
        }

        return row1Check;
    }

    let checkRow2 = () => {
        let row2Check = true;
         //check first col
        if (!row2_1.hasClass('box-filled-1')) {
            row2Check = false;
        } else if (!row2_2.hasClass('box-filled-1')) {
            row2Check = false;
        } else if (!row2_3.hasClass('box-filled-1')) {
            row2Check = false;
        }

        return row2Check;
    }

    let checkRow3 = () => {
        let row3Check = true;
         //check first col
        if (!row3_1.hasClass('box-filled-1')) {
            row3Check = false;
        } else if (!row3_2.hasClass('box-filled-1')) {
            row3Check = false;
        } else if (!row3_3.hasClass('box-filled-1')) {
            row3Check = false;
        }

        return row3Check;
    }

    return checkRow1() || checkRow2() || checkRow3();
}

//for player2, check for row win
function checkRows_2() {
//     let row1 = [1, 2, 3];
    let row1_1 = $('.1');
    let row1_2 = $('.2');
    let row1_3 = $('.3');
//     let row2 = [4, 5, 6];
    let row2_1 = $('.4');
    let row2_2 = $('.5');
    let row2_3 = $('.6');
//     let row3 = [7, 8, 9];
    let row3_1 = $('.7');
    let row3_2 = $('.8');
    let row3_3 = $('.9');

    let checkRow1 = () => {
        let row1Check = true;
            //check first col
        if (!row1_1.hasClass('box-filled-2')) {
            row1Check = false;
        } else if (!row1_2.hasClass('box-filled-2')) {
            row1Check = false;
        } else if (!row1_3.hasClass('box-filled-2')) {
            row1Check = false;
        }

        return row1Check;
    }

    let checkRow2 = () => {
        let row2Check = true;
            //check first col
        if (!row2_1.hasClass('box-filled-2')) {
            row2Check = false;
        } else if (!row2_2.hasClass('box-filled-2')) {
            row2Check = false;
        } else if (!row2_3.hasClass('box-filled-2')) {
            row2Check = false;
        }

        return row2Check;
    }

    let checkRow3 = () => {
        let row3Check = true;
            //check first col
        if (!row3_1.hasClass('box-filled-2')) {
            row3Check = false;
        } else if (!row3_2.hasClass('box-filled-2')) {
            row3Check = false;
        } else if (!row3_3.hasClass('box-filled-2')) {
            row3Check = false;
        }

        return row3Check;
    }

    //if any one of these is true, return true
    return checkRow1() || checkRow2() || checkRow3();
}

//shows the start screen and triggers the main game
function showStart() {
    $screen.fadeIn(2000);

    const $startButton = $('.start-button');
    $startButton.on('click', startGame);
}

//looks for win conditions and updates isWon
function checkStatus() {
    if (turnCounter %2 === 0) {
        if(checkCols_1() || checkRows_1() || checkDiag_1()) {
           winner = 'player1';
           isWon = true;
        } else if (turnCounter === 8) {
            winner = 'tie';
            isWon = true;
        }
    } else if (turnCounter % 2 !== 0) {
       if(checkCols_2() || checkRows_2() || checkDiag_2()) {
           winner = 'player2';
           isWon = true;
        }
    } else {
        isWon = true;
        winner = 'tie';
    } 

    return isWon;
}

//adds the correct class if a box is clicked
function takeTurn(box) {
    if (turnCounter % 2 === 0 ) {
        if (!box.hasClass('box-filled-2') && !box.hasClass('box-filled-1')) {
            box.addClass('box-filled-1');
        } else if (box.hasClass('box-filled-1') || box.hasClass('box-filled-2')){
            turnCounter--;
        }
    } else if (turnCounter %2 !== 0) {
        if (!box.hasClass('box-filled-1') && !box.hasClass('box-filled-2')){
            box.addClass('box-filled-2');
        } else if (box.hasClass('box-filled-2') || box.hasClass('box-filled-1')) {
            turnCounter--
        }
    }
}

function setColors() {
    //ready player 1
    if (turnCounter % 2 === 0) {
        $player1.addClass('active');
        $player2.removeClass('active');

        $boxes.hover(function() {
            $(this).addClass('hover-1')
            .removeClass('hover-2')
        }, function() {
            $(this).removeClass('hover-1')
        });
    } else if (turnCounter % 2 !== 0) {//ready player 2
        $player2.addClass('active');
        $player1.removeClass('active');
        
        $boxes.hover(function() {
            $(this).addClass('hover-2')
            .removeClass('hover-1')
        }, function() {
            $(this).removeClass('hover-2')
        });
    }
}
function startGame() {
    $screen.fadeOut(2000);
    setColors();

    $boxes.on('click', function (event) {
        takeTurn($(this));
        isWon = checkStatus();
        if (isWon) {
            showWinner();
            resetBoard();
            setColors();
        } else {
            turnCounter++;
            setColors();
        }
     });  

     $resetButton.on('click', function (event) {
        $winScreen.removeClass('screen-win-one')
          .removeClass('screen-win-two')
          .removeClass('screen-win-tie');
        $winScreen.fadeOut('slow');
     });

}

showStart();