const msg = document.getElementById("msg");
const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector(".restart-btn");
let player = 1;

boxes.forEach((box) => {
  box.addEventListener("click", handleBoxClick);
});

function handleBoxClick(e) {
  const box = e.target;

  if (player === 1) {
    box.classList.add("circle");
    player = 2;
    msg.innerHTML = "Player 2's turn";
  } else {
    box.classList.add("cross");
    player = 1;
    msg.innerHTML = "Player 1's turn";
  }
}

resetBtn.addEventListener("click", () => {
  location.reload();
});
