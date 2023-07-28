import { difficulty } from "./index.js";

export function randerGameBoard() {
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
        <div class="game__board_card"></div>
        <div class="game__board_card"></div>
        <div class="game__board_card"></div>
        <div class="game__board_card"></div>
        <div class="game__board_card"></div>
        <div class="game__board_card"></div>
        <div class="game__board_card"></div>
        <div class="game__board_card"></div>
        <div class="game__board_card"></div>
        <div class="game__board_card"></div>
        <div class="game__board_card"></div>
        <div class="game__board_card"></div>
        <div class="game__board_card"></div>
        <div class="game__board_card"></div>
        <div class="game__board_card"></div>
        <div class="game__board_card"></div>
        <div class="game__board_card"></div>
        <div class="game__board_card"></div>
        <div class="game__board_card"></div>
        <div class="game__board_card"></div>
        <div class="game__board_card"></div>
        <div class="game__board_card"></div>
        <div class="game__board_card"></div>
        <div class="game__board_card"></div>
        <div class="game__board_card"></div>
        <div class="game__board_card"></div>
        <div class="game__board_card"></div>
        <div class="game__board_card"></div>
        <div class="game__board_card"></div>
        <div class="game__board_card"></div>
        <div class="game__board_card"></div>
        <div class="game__board_card"></div>
        <div class="game__board_card"></div>
        <div class="game__board_card"></div>
        <div class="game__board_card"></div>
        <div class="game__board_card"></div>
    </section>
</main>`;
    const button = document.querySelector(".game__header_button");
    checkClick(button);
}

function checkClick(button) {
    button.addEventListener("click", randerCardsBoard);
}

function randerCardsBoard() {
    const board = document.querySelector(".game__board");
    board.innerHTML = `        <div class="card-1"></div>
    <div class="card-2"></div>
    <div class="card-3"></div>
    <div class="card-4"></div>
    <div class="card-5"></div>
    <div class="card-6"></div>
    <div class="card-7"></div>
    <div class="card-8"></div>
    <div class="card-9"></div>
    <div class="card-10"></div>
    <div class="card-11"></div>
    <div class="card-12"></div>
    <div class="card-13"></div>
    <div class="card-14"></div>
    <div class="card-15"></div>
    <div class="card-16"></div>
    <div class="card-17"></div>
    <div class="card-18"></div>
    <div class="card-19"></div>
    <div class="card-20"></div>
    <div class="card-21"></div>
    <div class="card-22"></div>
    <div class="card-23"></div>
    <div class="card-24"></div>
    <div class="card-25"></div>
    <div class="card-26"></div>
    <div class="card-27"></div>
    <div class="card-28"></div>
    <div class="card-29"></div>
    <div class="card-30"></div>
    <div class="card-31"></div>
    <div class="card-32"></div>
    <div class="card-33"></div>
    <div class="card-34"></div>
    <div class="card-35"></div>
    <div class="card-36"></div>`;
}