import { buttonDisabled } from './App';
import { describe, it, expect } from '@jest/globals';
describe('buttonDisabled', () => {
    it('should return false if difficulty is passed as parameter', () => {
      const result = buttonDisabled('easy');
      expect(result).toBe(false);
    });
  });
  import { ListnerClicksInGame } from './App';

describe('ListnerClicksInGame', () => {
  it('should remove clicked card from the DOM and add it to gameCards array', () => {
    const card = document.createElement('div');
    const gameCards = [];
    ListnerClicksInGame(card, gameCards);
    card.click();
    expect(gameCards).toContain(card);
  });
});
import { checkGameResult } from './App';

describe('checkGameResult', () => {
  it('should call renderResult(true) and remove matching cards from gameCards array', () => {
    const card1 = { id: 1, value: 'A' };
    const card2 = { id: 2, value: 'A' };
    const gameCards = [card1, card2];
    const renderResult = jest.fn();
    checkGameResult(gameCards, renderResult);
    expect(gameCards).not.toContain(card1);
    expect(gameCards).not.toContain(card2);
    expect(renderResult).toHaveBeenCalledWith(true);
  });
});
import { removeCards } from './App';

describe('removeCards', () => {
  it('should remove first two cards from gameCards array', () => {
    const card1 = { id: 1, value: 'A' };
    const card2 = { id: 2, value: 'B' };
    const card3 = { id: 3, value: 'C' };
    const gameCards = [card1, card2, card3];
    removeCards(gameCards);
    expect(gameCards).not.toContain(card1);
    expect(gameCards).not.toContain(card2);
    expect(gameCards).toContain(card3);
  });
});
import { shuffleCards } from './App';

describe('shuffleCards', () => {
  it('should shuffle the order of cards in the array', () => {
    const cards = [1, 2, 3, 4, 5];
    const shuffledCards = shuffleCards(cards);
    expect(shuffledCards).not.toEqual(cards);
  });
});