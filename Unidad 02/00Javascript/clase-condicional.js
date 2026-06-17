/*
Condicionales
*/


//if


let edad = 18

if(edad >=18){
    console.log('Eres mayor de edad')
}


//else

let edad2 = 16

if(edad2 >=18){
    console.log('Eres mayor de edad')
}else{
    console.log('Eres menor de edad')
}

//else if

let edad3 = 70

if(edad3 >=18 && edad3 < 65){
    console.log('Eres mayor de edad')
} else if(edad3 >= 65){
    console.log('Eres un adulto mayor')
} else {
    console.log('Eres menor de edad')
}

//switch

let dia = 'Lunes'

switch(dia){
    case 'Lunes':
        console.log('Hoy es lunes')
        break
    case 'Martes':
        console.log('Hoy es martes')
        break
    case 'Miercoles':
        console.log('Hoy es miercoles')
        break
    default:
        console.log('No es un dia valido')
}   

//ternario

let edad4 = 20
let mensaje = edad4 >= 18 ? 'Eres mayor de edad' : 'Eres menor de edad'
console.log(mensaje)






