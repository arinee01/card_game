import {
    difficulty,
    hideWhatTheCard,
    ListnerClicksInGame,
    checkClick,
} from "./index";
import { checkClickInputs } from "./index";

import image from "./static/image.png";
import badImage from "./static/image (1).png";

const mainSection = document.createElement("section");
const cards = document.createElement("section");
let count = 0;
let miliseconds = 0;
let stopGame = false;

cards.classList.add("game__board");

randerFirstPage();
export function randerFirstPage() {
    const body = document.querySelector("body");
    stopGame = false;
    if (!body) {
        return;
    }
    body.appendChild(mainSection);

    mainSection.innerHTML = ` <main class="difficulty">
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
    checkClickInputs();
}

export function renderResult(result) {
    const body = document.querySelector("body");
    const main = document.querySelector("main");
    main?.classList.add("blur");
    stopGame = true;
    if (!body) {
        return;
    }
    mainSection.innerHTML =
        mainSection.innerHTML +
        `<div class="result">
    <img class="result__img" src="${
        result === true ? image : badImage
    }" alt="#">
    <p class="result__text">${
        result === true ? "Вы выиграли!" : "Вы проиграли!"
    }</p>
    <p class="result__timer_text">Затраченное время:</p>
    <p class="result__timer">${count >= 10 ? count : `0${count}`}.${
            miliseconds >= 10 ? miliseconds : `0${miliseconds}`
        }</p>
    <div class="result__button_box">
    <button class="result__button">Играть снова</button>
    </div>
</div>`;
    const button = document.querySelector(".result__button_box");

    button?.addEventListener("click", () => {
        body.removeChild(cards);
        count = 0;
        miliseconds = 0;
    });
    checkClick(button as HTMLButtonElement);
}

export function randerGameBoard(cardsForGame) {
    const body = document.querySelector("body");
    if (!body) {
        return;
    }
    body.appendChild(cards);
    cards.innerHTML = `${cardsForGame}`;

    mainSection.innerHTML = `<main class="game">
    <header class="game__header">
        <div class="game__header_timer">
            <div class="timer">
                <p class="timer__min">min</p>
                <p class="timer__sek">seс</p>
            </div>
            <p class="game__header_time" id="counter"></p>
        </div>
        <button class="game__header_button">Начать заново</button>
    </header>
</main>`;

    const rerenderTimer = () => {
        const counter = document.getElementById("counter");

        if (!counter) {
            return;
        }
        counter.innerHTML = `${count >= 10 ? count : `0${count}`}.${
            miliseconds >= 10 ? miliseconds : `0${miliseconds}`
        }`;
    };

    const countInterval = setInterval(() => {
        rerenderTimer();

        count += 1;

        if (stopGame) {
            clearInterval(countInterval);
        }
    }, 60000);

    const milisecondsInterval = setInterval(() => {
        rerenderTimer();

        if (miliseconds === 99) {
            miliseconds = 0;
        }
        miliseconds += 1;
        if (stopGame) {
            clearInterval(milisecondsInterval);
        }
    }, 1000);

    const hidCardsTimeout = setTimeout(hideWhatTheCard, 5000);
    const CliksInGameTimeout = setTimeout(ListnerClicksInGame, 5000);

    const button = document.querySelector(".game__header_button");
    button?.addEventListener("click", () => {
        body.removeChild(cards);
        clearInterval(countInterval);
        clearInterval(milisecondsInterval);
        clearTimeout(hidCardsTimeout);
        clearTimeout(CliksInGameTimeout);
        count = 0;
        miliseconds = 0;
    });

    checkClick(button as HTMLButtonElement);
}

let cardsForGame: string[] = [];

function perebor(cards, lengthArr) {
    const elem = Math.floor(Math.random() * lengthArr);
    cardsForGame.push(cards[elem]);
    cards.splice(elem, 1);
    return cardsForGame;
}

export function imia(cards) {
    let lengthArr: number = 0;
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
        let allCardsForGame: string[] = [];
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
