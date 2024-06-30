//4.1 Dado el siguiente array, utiliza.filter() para generar un nuevo array con los valores que sean mayor que 18
let ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
let mayores = ages.filter(age => age > 18)
//4.2 Dado el siguiente array, utiliza.filter() para generar un nuevo array con los valores que sean par.
ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
let pares = ages.filter(age => age % 2 === 0)

//4.3 Dado el siguiente array, utiliza.filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of Legends'.
let streamers = [
    { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
    { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
    { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
    { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

let streamersLeague = streamers.filter(streamer => streamer.gameMorePlayed === 'League of Legends')

//4.4 Dado el siguiente array, utiliza.filter() para generar un nuevo array con los streamers que incluyan el caracter 'u' en su propiedad.name.Recomendamos usar la funcion.includes() para la comprobación.
streamers = [
    { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
    { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
    { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
    { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

let streamersU = streamers.filter(streamer => streamer.name.includes('u'))

//4.5 utiliza.filter() para generar un nuevo array con los streamers que incluyan el caracter 'Legends' en su propiedad.gameMorePlayed.Recomendamos usar la funcion .includes() para la comprobación. Además, pon el valor de la propiedad.gameMorePlayed a MAYUSCULAS cuando.age sea mayor que 35.
let streamersLegends = streamers.filter(streamer => {
    if (streamer.gameMorePlayed.includes('Legends') && streamer.age > 35) {
        streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase()
    }
    return true
}
)
console.log(streamersLegends)