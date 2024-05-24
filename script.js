let Boxes = document.querySelectorAll("#cell");
let Btn = document.querySelector("#restartBtn");
let playerTurn = document.querySelector("#playerTurn");
let turnX = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],];
Boxes.forEach((box) =>{
    box.addEventListener("click" , () => {
        if (turnX) {
            box.innerText = "X";
            turnX = false;
            playerTurn.textContent = "Now it's Player O's turn!";
          } else {
            box.innerText = "O";
            turnX = true;
            playerTurn.textContent = "Now it's Player X's turn!";
          }
          box.disabled = true;
          checkWinner();

    });
});
Btn.addEventListener("click", () =>{
  window.location.reload();
});
const checkWinner = () =>{
  for(let patterns of winPatterns){
    let val1 = Boxes[patterns[0]].innerText;
    let val2 = Boxes[patterns[1]].innerText;
    let val3 = Boxes[patterns[2]].innerText;

    if(val1 != "" && val2 != "" && val3 != ""){
      if(val1===val2 && val2 ===val3){
        playerTurn.textContent = `The Winnwr is ${val1}`;
        Boxes.forEach((box) =>{
          box.disabled = true;
        })
      }
    }
  }
};