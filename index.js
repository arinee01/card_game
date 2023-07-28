const choiceInputs = document.querySelectorAll(".difficulty__box_input");
const choiceButton = document.querySelector(".difficulty__box_button");

import { randerGameBoard } from "./render.js";

export let difficulty = "";

for (let choiceInput of choiceInputs) {
    choiceInput.addEventListener("click", function (e) {
        (difficulty = e.target.value), buttonDisabled(difficulty);
    });
}

function buttonDisabled(difficulty) {
    if (difficulty) {
        choiceButton.removeAttribute("disabled");
    }
}

choiceButton.addEventListener("click", randerGameBoard);