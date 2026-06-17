function EresMayorDeEdad(edad){
    const Edad = parseInt(edad);

    if(isNaN(Edad)){    
        alert('Por favor ingresa una edad valida');
        return
    }

    if(Edad >= 18 && Edad < 65){
        alert('Eres mayor de edad')
    } else if(Edad >= 65){
        alert('Eres un adulto mayor')
    } else {
        alert('Eres menor de edad')
    }
}