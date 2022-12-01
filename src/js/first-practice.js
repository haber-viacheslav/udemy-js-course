// Операторы

// console.log('arr' + '-object');
// console.log(4 + '-object');
// console.log(4 + +'5');

// let incr = 10;
// let decr = 10;

// incr++;
// decr--;  -------- постфиксная форма, сначала возвращает старое значение, а только потом обновляет его на +-1

// --incr;  -------- префиксная форма, сразу обновляет значение на +-1 и возвращает новое значение
// --decr;

// console.log(incr++);
// console.log(decr--);

// console.log(incr);
// console.log(decr);

// console.log(5 % 2); // ---остаток от деления

// console.log(2 * 4 == '8'); // --- не строгое равенство
// console.log(2 * 4 === 8); // --- строгое равенство

// const isChaked = false;
// const isClose = false;

// console.log(isChaked && isClose);
// console.log(isChaked || !isClose);

/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

// -1-

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

// console.log(numberOfFilms);

// // -2-

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// for (let i = 0; i < 2; i += 1) {
//   const oneOfLastMovie = prompt('Один из последних просмотренных фильмов?');
//   const movieRate = prompt('На сколько оцените его?');
//   personalMovieDB.movies[oneOfLastMovie] = movieRate;
// }

// console.log(personalMovieDB);

// let i = 50;

// while (i < 60) {
//   console.log(i);
//   i += 1;
// }

// do {
//   console.log(i);
//   i += 1;
// } while (i < 60);

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }

// let result = '';
// const lengthStars = 7;

// for (let i = 1; i < lengthStars; i += 1) {
//   for (let j = 0; j < i; j += 1) {
//     result += '*';
//   }
//   result += '\n';
// }
// console.log(result);

let result = '';
const lengthStars = 7;

first: for (let i = 1; i < lengthStars; i += 1) {
  console.log(`First level ${i}`);

  for (let j = 0; j < i; j += 1) {
    console.log(`Second level ${j}`);
    for (let k = 0; k < j; k += 1) {
      if (k === 2) {
        break first;
      }
      console.log(`Third level ${k}`);
    }
  }
}
