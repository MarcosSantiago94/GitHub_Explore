document.addEventListener('DOMContentLoaded', ()=> {

    let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {

    square.addEventListener('click', handleClick);
 })

})


function handleClick(event){

    console.log(event.target);

    let square = event.target;
    let postion = square.id;

    if(handleMove(postion)){
        updateSquares();

        setTimeout (() => {
            alert("O jogo acabou - O vencedor foi" + playerTime);

        }, 10);
        
    };

    updateSquares();
}

function updateSquares(){

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {

        let postion = square.id;
        let symbol = board[postion];

        if(symbol != ''){

            square.innerHTML = ` <div class='${symbol}'></div`
        }
    })
}
