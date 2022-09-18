const movies = require("./data");

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  const rawList = moviesArray.map((movie) => movie.director);

  const cleanList = rawList.filter((director, index) => {
    return rawList.indexOf(director) === index;
  });
  return cleanList;
}
console.log(getAllDirectors(movies));
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
//function howManyMovies(moviesArray) {}
//const howManyMovies2 = () => { }

// const howManyMovies2 = (moviesArray) => {
//   const steven = moviesArray.filter((movieItem) => {
//     movieItem.director === "Steven Spielberg";
//   });
// };

function howManyMovies(moviesArray) {
  const steven = moviesArray.filter(
    (movie) => movie.director === "Steven Spielberg"
  );
  const dramaMovies = steven.filter((movie) => movie.genre.includes("Drama"));
  return dramaMovies;
}
console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
  const scoreList = moviesArray.map((movie) => movie.score);

  const averageScore = scoreList.reduce(
    (acumulator, current) => acumulator + current
  );
  const totalAverageScore = averageScore / scoreList.length;
  return totalAverageScore.toFixed(2);
}
console.log(`Average score for all Movies`);
console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const scoreDramaMovies = movies.filter((movie) =>
    movie.genre.includes("Drama")
  );

  const dramaList = scoreDramaMovies.map((movie) => movie.score);

  const dramaScore = dramaList.reduce(
    (acumulator, current) => acumulator + current
  );

  const dramaAverageScore = dramaScore / dramaList.length;
  return dramaAverageScore.toFixed(2);
}

console.log(`Average score for Drama Movies`);
console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const orderedList = moviesArray.sort((a, b) => a.year - b.year);
  return orderedList;
}
console.log(`Ordered by year ascending`);
console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return moviesArray
    .map((movie) => movie.title)
    .sort()
    .slice(0, 20);
}
console.log(`First 20 movies ordered by title`);
console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
