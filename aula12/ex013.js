var agora = new Date()
var diaSem = agora.getDate()
/*
Domingo
Segunda
Terça
Quarta
Quinta
Sexta
*/

console.log|(diaSem)

switch(diaSem) {
    case 1:
        console.log('Domingo')
        break
    case 2:
        console.log('Segunda')
        break
    case 3:
        console.log('Terça')
        break
    case 4:
        console.log('Quarta')
        break
    case 5:
        console.log('Quinta')
        break
    case 6:
        console.log('Sexta')
        break
    case 7:
        console.log('Sabado')
        break
}