//3.1 Dado el siguiente array, devuelve un array con sus nombres utilizando.map().
let users = [
    { id: 1, name: 'Abel' },
    { id: 2, name: 'Julia' },
    { id: 3, name: 'Pedro' },
    { id: 4, name: 'Amanda' }
];
let nombres = users.map(user => user.name)
console.log(nombres)

//3.2 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad.name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.
users = [
    { id: 1, name: 'Abel' },
    { id: 2, name: 'Julia' },
    { id: 3, name: 'Pedro' },
    { id: 4, name: 'Amanda' }
];

let nombres2 = users.map(user => {
    if (user.name[0] === 'A') {
        return { ...user, name: 'Anacleto' }
    }
    return user
})
console.log(nombres2)

//3.3 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad.name y añade al valor de.name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.
const cities = [
    { isVisited: true, name: 'Tokyo' },
    { isVisited: false, name: 'Madagascar' },
    { isVisited: true, name: 'Amsterdam' },
    { isVisited: false, name: 'Seul' }
];
let ciudades = cities.map(city => {
    if (city.isVisited) {
        return { ...city, name: `${city.name} (Visitado)` }
    }
    return city
})
console.log(ciudades)