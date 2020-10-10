'use strict';
const WIZARD_NAMES = [`Иван`, `Хуан Себасьян`, `Мария`, `Кристофор`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_SURNAMES = [` да Марья`, ` Верон`, ` Мирабелла`, ` Вальц`, ` Онопко`, ` Топольницкая`, ` Нионго`, ` Ирвинг`];
const WIZARD_COLOR_COAT = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const WIZARD_COLOR_EYES = [`black`, `red`, `blue`, `yellow`, `green`];

const userDialog = document.querySelector(`.setup`);
userDialog.classList.remove(`hidden`);
document.querySelector(`.setup-similar`).classList.remove(`hidden`);

const similarListElement = document.querySelector(`.setup-similar-list`);
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

// const wizardTotal = 4;


const getRandomNumber = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

/* for (let i = 0; i < wizardTotal; i++) {
  const wizardRandom = wizards + i;
  }; */

// вот массив. его нужно перенести в функцию формирования массива, что бы он создавался автоматически? или просто из массива сделать функцию в функцию?

const wizards = [
  {
    name: WIZARD_NAMES[getRandomNumber(0, WIZARD_NAMES.length)] + WIZARD_SURNAMES[getRandomNumber(0, WIZARD_SURNAMES.length)],
    coatColor: WIZARD_COLOR_COAT[getRandomNumber(0, WIZARD_COLOR_COAT.length)],
    eyesColor: WIZARD_COLOR_EYES[getRandomNumber(0, WIZARD_COLOR_EYES.length)],
  },

  {
    name: WIZARD_NAMES[getRandomNumber(0, WIZARD_NAMES.length)] + WIZARD_SURNAMES[getRandomNumber(0, WIZARD_SURNAMES.length)],
    coatColor: WIZARD_COLOR_COAT[getRandomNumber(0, WIZARD_COLOR_COAT.length)],
    eyesColor: WIZARD_COLOR_EYES[getRandomNumber(0, WIZARD_COLOR_EYES.length)],
  },

  {
    name: WIZARD_NAMES[getRandomNumber(0, WIZARD_NAMES.length)] + WIZARD_SURNAMES[getRandomNumber(0, WIZARD_SURNAMES.length)],
    coatColor: WIZARD_COLOR_COAT[getRandomNumber(0, WIZARD_COLOR_COAT.length)],
    eyesColor: WIZARD_COLOR_EYES[getRandomNumber(0, WIZARD_COLOR_EYES.length)],
  },

  {
    name: WIZARD_NAMES[getRandomNumber(0, WIZARD_NAMES.length)] + WIZARD_SURNAMES[getRandomNumber(0, WIZARD_SURNAMES.length)],
    coatColor: WIZARD_COLOR_COAT[getRandomNumber(0, WIZARD_COLOR_COAT.length)],
    eyesColor: WIZARD_COLOR_EYES[getRandomNumber(0, WIZARD_COLOR_EYES.length)],
  },
];

// console.log(wizards);

for (let i = 0; i < wizards.length; i++) {
  const wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = wizards[i].name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizards[i].coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizards[i].eyesColor;
  similarListElement.appendChild(wizardElement);
}
