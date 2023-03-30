/*The problem is that we have 2 arrays of objects, in one are the sports and 
in the other the clubs, what we want to do is that when the search for the sport is 
done, it returns the origin and when the dojo is searched, it returns the city*/
let sport = [
    { name: "judo", origin: "Japon" },
    { name: "karate", origin: "China" },
];
let clubs = [
    { dojo: "Sensei VU", city: "Inmaculada" },
    { dojo: "Sensei Sato", city: "Tokio" }
];

let result = [];

const querySport = (sport, query) => {
    for (let i = 0; i < sport.length; i++) {
        if(sport.name[i] === query){
            return `Sport found! Your Origin is ${sport.origin[i]}.`;
        } else {
            return "Sport not found";
        }
    }
};

console.log(querySport("Karate"));
/*This exercise was invented, I'm still working on the solution*/



