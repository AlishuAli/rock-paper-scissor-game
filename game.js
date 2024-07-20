let j = 0
let user = 0;
let computer = 0;
const player = document.getElementById('player1');
const system = document.getElementById('comp');
const output = document.getElementById('output');
const buttons = document.querySelectorAll('.btn');
const hand = document.getElementById('pa');
const hands = document.getElementById('par');

buttons.forEach(button => {
button.addEventListener("click", function () {
if (j >= 10) {
    alert("finish");
    if (user >= computer) {
        alert("congrats!");
    } else {
        alert("loss!");
    }
    buttons.forEach(btn => btn.disabled = true);
    return;
}

output.innerHTML = "";
printValue(button.value);
const randomIndex = Math.floor(Math.random() * buttons.length);
const randomButtonValue = buttons[randomIndex].value;

setTimeout(() => {
    printValue(randomButtonValue);
    if (button.value === randomButtonValue) {
        user += 0;
        player.textContent = `player: ${user}`;
    } else if (
        (button.value === "Rock" && randomButtonValue === "Scissor") ||
        (button.value === "Paper" && randomButtonValue === "Rock") ||
        (button.value === "Scissor" && randomButtonValue === "Paper")
    ) {
        user += 1;
        player.textContent = `player: ${user}`;
    } else {
        computer += 1;
        system.textContent = `system: ${computer}`;
    }
    j += 1;
}, );

if (button.value === "Rock") {
        hand.style.backgroundImage = "url('../left.jpg')";
    } else if (button.value === "Paper") {
        hand.style.backgroundImage = "url('../left2.jpg')";
    } else if (button.value === "Scissor") {
        hand.style.backgroundImage = "url('../left3.jpg')";
    }

    if (randomButtonValue === "Rock") {
        hands.style.backgroundImage = "url('../right.jpg')";
    } else if (randomButtonValue === "Paper") {
        hands.style.backgroundImage = "url('../right2.jpg')";
    } else if (randomButtonValue === "Scissor") {
        hands.style.backgroundImage = "url('../right3.jpg')";
    }
});
});

function printValue(value) {
const p = document.createElement("p");
p.textContent = value;
output.appendChild(p);
}
