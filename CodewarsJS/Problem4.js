/*Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, 
the third goes into team 1, and so on.*/
const rowWeights = (array) => {
    let team1 = 0;
    let team2 = 0;
    for (let i = 0; i < array.length; i++) {
      if (i % 2 === 0) { 
        team1 += array[i];
      } else { 
        team2 += array[i];
      }
    }
    return [team1, team2];
  }

console.log(rowWeights([13, 27, 49]));
/*The first element 62 is the total weight of team 1, 
and the second element 27 is the total weight of team 2.*/
console.log(rowWeights([50, 60, 70, 80]));
/*The first element 120 is the total weight of team 1, and the 
second element 140 is the total weight of team 2.*/

  