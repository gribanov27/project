const numberOfFilmes = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilmes,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов', ''),
//         b = prompt('На сколько его оцените', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }
let i = 0;
while (i < 2) {
    const a = prompt('Один из последних просмотренных фильмов', ''),
            b = prompt('На сколько его оцените', '');
    i++;
if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('done');
} else {
    console.log('error');
    i--;
}
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
} else {
    console.log("Ошибка");
}

console.log(personalMovieDB);

