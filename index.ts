import { cardsForRandom } from "./randomCards";
import { randerFirstPage, imia } from "./render";
import "./style.css";
import { renderResult } from "./render";

const gameCards: string[] = [];

export let difficulty: string = "";

export function checkClickInputs() {
    let choiceInputs = document.querySelectorAll(".difficulty__box_input");
    for (let choiceInput of choiceInputs) {
        choiceInput.addEventListener("click", function (e: Event) {
            if (!e.target) {
                return;
            }
            (difficulty = (e.target as HTMLInputElement).value),
                buttonDisabled(difficulty);
        });
    }
}

export function buttonDisabled(difficulty: string) {
    let choiceButton = document.querySelector(".difficulty__box_button");
    if (difficulty) {
        choiceButton?.removeAttribute("disabled");
        listnerChoiseButton();
    }
}

export function listnerChoiseButton() {
    let choiceButton = document.querySelector(".difficulty__box_button");
    choiceButton?.addEventListener("click", function () {
        let cardsForGame: string[] = cardsForRandom.slice();
        imia(cardsForGame);
    });
}

export function hideWhatTheCard() {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        card.classList.add("game__board_card");
    });
}

export function ListnerClicksInGame() {
    const cards = document.querySelectorAll(".card");

    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", function (event: Event) {
            cards[i].classList.remove("game__board_card");
            gameCards.push((event.target as HTMLElement).id);
            setTimeout(checkGameResult, 40);
        });
    }
}

export function checkGameResult() {
    if (!gameCards) {
        return;
    }
    if (!gameCards[1]) {
        return;
    }
    if (gameCards[1] === gameCards[0]) {
        renderResult(true);
        setTimeout(removeCards, 400);
    }
    if (gameCards[1] !== gameCards[0]) {
        renderResult(false);
        setTimeout(removeCards, 400);
    } else {
        return;
    }
}

export function removeCards() {
    gameCards.splice(0, 2);
}

export function checkClick(button: HTMLButtonElement) {
    button.addEventListener("click", function () {
        let cardsForGame = cardsForRandom.slice();
        randerFirstPage();
    });
}
