import {
    difficulty,
    hideWhatTheCard,
    ListnerClicksInGame,
    checkClick,
} from "./index.js";

export function randerFirstPage() {
    const body = document.querySelector("body");
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
}

export function randerGameBoard(cardsForGame) {
    console.log(`сложность ${difficulty}`);
    const body = document.querySelector("body");
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

let cardsForGame = [];

function perebor(cards, lengthArr) {
    console.log(cards.length);
    const elem = Math.floor(Math.random() * lengthArr);
    console.log(cards);
    cardsForGame.push(cards[elem]);
    console.log(cards[elem]);
    cards.splice(elem, 1);
    return cardsForGame;
}

export function imia(cards) {
    let lengthArr = "";
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
        let allCardsForGame = "";
        if (index === lengthArr - 1) {
            console.log(cardsForGame);
            allCardsForGame = [...cardsForGame, ...cardsForGame];
            console.log(allCardsForGame);
            randomize(allCardsForGame);
        }
    }
}

function randomize(array) {
    array.sort(() => Math.random() - 0.5);
    randerGameBoard(array.join(" "));
    cardsForGame = [];
}
