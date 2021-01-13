// function addition(nbr1,nbr2) {
//     console.log(nbr1+nbr2)
// }
// addition(2,10)
// function Soustraction(nbr1,nbr2) {
//     console.log(nbr1-nbr2)
// }
// Soustraction(2,10)
// function Multiplication(nbr1,nbr2) {
//     console.log(nbr1*nbr2)
// }
// Multiplication(2,10)
// function Division(nbr1,nbr2) {
//     console.log(nbr1/nbr2)
// }
// Division(2,10)
// function Modulo(nbr1,nbr2) {
//     console.log(nbr1%nbr2)
// }
// Modulo(2,10)
// function Racinecarrée(x= Math.sqrt(nbr1))=> {
//     console.log(x)
// }
// Racinecarrée(10)
// function Exposant(nbr1,nbr2) {
//     console.log(nbr1/nbr2)
// }
// Exposant(2,10)
// let racineCarrée = nbr1 => {return Math.sqrt(nbr1)}
// console.log(racineCarrée(100))
// let exposant = (nbr1,nbr2) => {return Math.pow(nbr1,nbr2)}
// console.log(exposant(7,3))
// let capit = string => {return nom.charAt(0).toUpperCase() + nom.substring(1).toLowerCase()}
// nom = prompt('votre nom')
// console.log(capit(nom))

let nbr1 = parseInt(prompt('un nombre ?'))
let ope = prompt('+ - / *')
let nbr2 = parseInt(prompt('un nombre ?'))
let calcul = (a, b, c) => {
    console.log(a)
    console.log(b)
    console.log(c)

    switch (b) {
        case '-':
            return a - c
        case '+':
            return a + c
        case '/':
            return a / c
        case '*':
            return a * c
        default:
        return alert("error")
    }
}
console.log(calcul(nbr1, ope, nbr2))

