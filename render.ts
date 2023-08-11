import {
    difficulty,
    hideWhatTheCard,
    ListnerClicksInGame,
    checkClick,
} from "./index";
import { checkClickInputs } from "./index";

import image from "./static/image.png";
import badImage from "./static/image (1).png";

export function randerFirstPage() {
    const body = document.querySelector("body");
    if (!body) {
        return
    }
    body.innerHTML = ` <main class="difficulty">
        <section class="difficulty__box">
            <p class="difficulty__box_text">
                Выбери <br />
                сложность
            </p>
            <article class="difficulty__box_difficulst">
                <div>
                    <input
                        type="radio"
                        value="1"
                        id="light__difficult"
                        name="choice"
                        class="difficulty__box_input"
                    />
                    <label
                        for="light__difficult"
                        class="difficulty__box_choice difficulty__box_light"
                        >1</label
                    >
                </div>
                <div>
                    <input
                        type="radio"
                        value="2"
                        id="mid__difficult"
                        name="choice"
                        class="difficulty__box_input"
                    />
                    <label
                        for="mid__difficult"
                        class="difficulty__box_choice difficulty__box_mid"
                        >2</label
                    >
                </div>
                <div>
                    <input
                        type="radio"
                        value="3"
                        id="hard__difficult"
                        name="choice"
                        class="difficulty__box_input"
                    />
                    <label
                        for="hard__difficult"
                        class="difficulty__box_choice difficulty__box_hard"
                        >3</label
                    >
                </div>
            </article>
            <button class="difficulty__box_button" disabled>Старт</button>
        </section>
    </main>`;
checkClickInputs()
}

export function renderResult(result) {
    const body = document.querySelector("body");
    const main = document.querySelector("main");
    main?.classList.add("blur");
    if (!body) {
        return
    }
    body.innerHTML =
        body.innerHTML +
        `<div class="result">
    <img class="result__img" src="${
        result === true ? image : badImage
    }" alt="#">
    <p class="result__text">${
        result === true ? "Вы выиграли!" : "Вы проиграли!"
    }</p>
    <p class="result__timer_text">Затраченное время:</p>
    <p class="result__timer">01.20</p>
    <div class="result__button_box">
    <button class="result__button">Играть снова</button>
    </div>
</div>`;
    const button = document.querySelector(".result__button_box");
    checkClick(button);
}

export function randerGameBoard(cardsForGame) {
    const body = document.querySelector("body");
    if (!body) {
        return
    }
    body.innerHTML = `<main class="game">
    <header class="game__header">
        <div class="game__header_timer">
            <div class="timer">
                <p class="timer__min">min</p>
                <p class="timer__sek">sek</p>
            </div>
            <p class="game__header_time">00.00</p>
        </div>
        <button class="game__header_button">Начать заново</button>
    </header>
    <section class="game__board">
        ${cardsForGame}
    </section>
</main>`;
    const button = document.querySelector(".game__header_button");
    checkClick(button);
    setTimeout(hideWhatTheCard, 5000);
    setTimeout(ListnerClicksInGame, 5000);
}

let cardsForGame : string[] = [];

function perebor(cards, lengthArr) {
    const elem = Math.floor(Math.random() * lengthArr);
    cardsForGame.push(cards[elem]);
    cards.splice(elem, 1);
    return cardsForGame;
}

export function imia(cards) {
    let lengthArr:number = 0;
    if (difficulty === "1") {
        lengthArr = 6;
    }
    if (difficulty === "2") {
        lengthArr = 12;
    }
    if (difficulty === "3") {
        lengthArr = 18;
    }

    for (let index = 0; index < lengthArr; index++) {
        perebor(cards, lengthArr);
        let allCardsForGame : string[] = [];
        if (index === lengthArr - 1) {
            allCardsForGame = [...cardsForGame, ...cardsForGame];
            randomize(allCardsForGame);
        }
    }
}

function randomize(array) {
    array.sort(() => Math.random() - 0.5);
    randerGameBoard(array.join(" "));
    cardsForGame = [];
}
