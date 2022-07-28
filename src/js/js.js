alert("elo mordeczko witam na mojej stronie essa check");
const chuj = "ja";
console.log(`${chuj} jestem pedałem`);
console.log(`czego nie działa`);
console.log(`o działa `);
console.log(`zayyyeeebiiiście`);
const firstName = "Mateusz";
const age = 31;
let isHappy = false;
isHappy = true;
isHappy = "tak";
//important ' or ` or " it affects injections
console.log(
  `Witaj drogi odwiedzający, nazywam się ${firstName} i mam ${age} lata.`
);

/*used same js file to two html subpages and because of that i do encounter 
"Cannot set properties of null (setting 'innerHTML')" mistake
btw this is how u multiline comment in js :)
*/

//create variable point to place in document by class where youre gonna put innerHTML


const emptyParagraph = document.querySelector(".body__p");

emptyParagraph.innerHTML = `Nawet uzupełniłem treść javascriptem!`;

const trialParagrapghJS = document.querySelector(
  ".eek-summary_description--js"
);

trialParagrapghJS.innerHTML = `Trening podmianki innerhtmlem :)`;

function calculate(myNumber) {
  console.log(`Dostałam ${myNumber}`);
  return myNumber * 7;
}
const myResult = calculate(1);
console.log(myResult);

/*
Tu niżej 2 funkcje bo jak ktoś 34 lub inny wiek konczacy sie na
2/3/4 to sie mowi lata a jak nie to lat dlatego taka funckja
 */
function convertToString(age) {
  var agestring = age.toString();
  var agelength = agestring.length;
  //return agestring;
  return agestring[agelength - 1];
}

export function latlata(age) {
  var latlataAge = convertToString(age);
  if (latlataAge == 3 || latlataAge == 2 || latlataAge == 4) {
    return `lata`;
  } else {
    return `lat`;
  }
}

export function greet(age, firstName) {
  console.log(
    `Witaj drogi odwiedzający, nazywam się ${firstName} i mam ${age} ${latlata(
      age
    )}.`
  );
}

greet(12, "Jacek");
greet(2, "Grzesiek");
greet(4, "Ala");
greet(age, firstName);
console.log(`Próba funkcji ${convertToString(37548)}`);
//latlata(12)
greet(34, "pawel");
greet(32, "Jacek");
greet(58, "Jozek");

function createContent(querySelectorContent, content) {
  const element = document.querySelector(querySelectorContent);

  element.innerHTML = content;
}

createContent(".body__h2__mondayCodeSesh", "Podmiana funkcja nowa :)");

const calculate2 = (myNumber) => {
  myNumber = myNumber + 3;
  console.log(myNumber);
  return myNumber * 7;
};

calculate2(2);

const greet2 = (age, firstName) => {
  console.log(
    `Witaj drogi odwiedzający, nazywam się ${firstName} i mam ${age} ${latlata(
      age
    )}.`
  );
};

greet2(33, "Alicja");

const calc3 = (myNumber) => (myNumber + 3) * 7;

const calc3Result = calc3(2);
console.log(calc3Result);

/*
w obiekcie zmienne to properties a funckje to methods
*/
const deathStar = {
  diameter: 120000,
  fire: (target) => {
    console.log(`${target} destroyed `);
  },
  isOperating: true,
  levels: 357,
  name: "Death Star",
  population: 10000,
  isLightOn: true,
  commander: {
    name: "Darth Vader",
    age: 44,
  },
};
//wywolywanie elementow z obiektu
console.log(deathStar);
console.log(deathStar.name);
console.log(deathStar.commander);
console.log(deathStar.commander.name);
console.log(console);
console.log(typeof console);
console.log(typeof deathStar);
console.log(typeof deathStar.name);

//wywolanie metody fire obiektu deathStar

deathStar.fire("Rebel ship");

console.log(deathStar["name"]);

const showMeProperty = (myProperty) => {
  console.log(
    `Twoja wlasnosc to ${myProperty} jej wartość to: ${deathStar[myProperty]}`
  );
};

showMeProperty("levels");

//immutability zmiennych niezmiennosc wszechswiat wartosci
//numberOne i TWo wskazuja ta sama 42
//prymitywne wartosci const np sa niemutowalne
const numberOne = 42;
const numberTwo = 42;
const numerOne = "Maciek";
let nameTWo = "Stefan";
//Moge przepiac nameTwo z Stefana na Macka nie zmieniam Stefana
nameTWo = "Maciek";
//połaczenie do obiektu jest sztwyne const ale wewnatrz obiektu nie
//mozna przepinac
//mutowanie obiektow
const humanOne = {
  name: "Maciek",
  age: 32,
};
const humanTwo = {
  name: "Stefan",
  age: 32,
  address: {
    street: "Krosnienska",
    city: "Rzeszow",
  },
};
//wskazuje na ten sam obiekt co humanOne we wszechswiecie wartosci
const humanThree = humanOne;

//zmienia mi tez wiek dla humanOne bo wskazuja na ten sam obiekt
humanThree.age = 21;
humanThree.address = humanTwo.address;

//zagniezdzanie address obiekt w obiekcie
const humanFour = {
  name: "Jozek",
  age: humanOne.age,
  address: {
    street: "Warszawska",
    city: "Bialystok",
  },
};

//tu podpina nie na własnosc(property) obiektu age tylko na wartosc
//obiektu age czyli na 32 czyli jak zmienie age tylko tego obiketu
//to nie zmienie wskazan obiektow humanOne i humanThree

humanOne.address = "Staszica";

console.log(humanOne);
console.log(humanTwo);
console.log(humanThree);
console.log(humanFour);

const humanFive = {
  name: "Pawel",
  age: 37,
  address: {
    street: humanTwo.address.street,
    city: "Mielec",
  },
};
console.log(humanOne);
console.log(humanTwo);
console.log(humanThree);
console.log(humanFour);
console.log(humanFive);

//pobaw sie mutowalnosica i wkazaniami

if ("3" === `3`) {
  console.log("prawda");
} else {
  console.log("Falsz");
}

const switch_consolefunc = (myNumber) => {
  switch (myNumber) {
    case 7:
      console.log("jestem siodemka");
      break;
    case 9:
      console.log("jestem dziewiatka");
      break;
    default:
      console.log("Jestem czyms innym");
  }
};
//skrócony zapis
32 > 20 ? console.log("prawda") : console.log("nieprawda");
const result = 32 > 20 ? true : false;
console.log(result);

const buttonClicker = document.querySelector(".action--js1");
const button = document.querySelector(".action--js");
//console.log(button);

const myClick = () => {
  console.log("kliknales");
};
const Click = () => {
  const heading = document.querySelector(".main_heading--js");
  heading.innerHTML = `Witaj Drogi odwiedzający, nazywam się ${firstName} i mam ${age} lata.`;
  heading.classList.toggle('klasa-z-js');
  //add dodaje klase ale toggle umozliwia przeklikiwanie na zmiane
};

buttonClicker.addEventListener("mouseenter", myClick);

button.addEventListener("click", Click);

button.addEventListener("click",(e)=>{
  console.log(e);
});
//pobieram hamburgera za pomoca querySelectora
const hamburger  = document.querySelector('.hamburger--js');
//przypinam eventlistenera do hamburgera na klikniecie ktore wywola funkcje
//a funkcja polega na pobraniu naszej nawigacji i zmieniam klase na open
hamburger.addEventListener('click',()=>{
  const nav = document.querySelector('.navigation--js');
  nav.classList.toggle('navigation--open');
})