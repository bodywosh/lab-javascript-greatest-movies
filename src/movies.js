// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArr) {
  return moviesArr.map(function(item){
    return item.director
  })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArr) {
    if(moviesArr.length === 0){
      return 0
    }
    return moviesArr.reduce(function(previousValue, currentValue, index, array){
      let cond = 0
      if(currentValue.genre.includes('Drama') && currentValue.director === 'Steven Spielberg'){
        cond = 1
      }
      return previousValue + cond
     }, 0 
    );
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArr) {
  if(moviesArr.length === 0){
    return 0
  }


  let sum = moviesArr.reduce(function(previousValue, currentValue, index, array){
    if(currentValue.score === undefined){
      return previousValue
    }
    return previousValue + currentValue.score
   }, 0 
  )/moviesArr.length

  return   Math.round(sum * 100) / 100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArr) {
  if(moviesArr.length === 0){
    return 0
  }
  if(moviesArr.filter(item => item.genre.includes('Drama')).length === 0){
    return 0
  }  

  let sum = moviesArr.reduce(function(previousValue, currentValue){
    if(currentValue.score === undefined){
      return previousValue
    }

    let cond = 0
    if(currentValue.genre.includes('Drama')){
      cond = currentValue.score
    }

    return previousValue + cond
   }, 0 
  )/moviesArr.filter(item => item.genre.includes('Drama')).length

  return   Math.round(sum * 100) / 100
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArr) {
  let sortedMovies = [...moviesArr]
  sortedMovies.sort(
    function(a,b){
      if(a.year === b.year){
        return a.title.localeCompare(b.title)
      }
      return a.year - b.year
    }
  )
  return sortedMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArr) {
  let sortedMovies = [...moviesArr]
  sortedMovies.sort(
    function(a,b){
      return a.title.localeCompare(b.title)
    }
  )
  const sortedTitles = sortedMovies.map(function(item){
    return item.title
  })
  return sortedTitles.slice(0, 20); 
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
