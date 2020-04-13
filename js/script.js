class Animal {

    nombreAnimal = ''
    numeroDePatas = 0
    especie = ''
    nombre = ''


    constructor(nombreAnimal,numeroDePatas,especie) {
        this.nombreAnimal = nombreAnimal
        this.numeroDePatas = numeroDePatas
        this.especie = especie
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre}, un ${this.nombreAnimal} tengo ${this.numeroDePatas} patas, soy un ${this.especie}`)
    }
}

class Ave extends Animal {
    constructor(nombre) {
        super('Ave', 2 ,'ovipero')
        this.nombre = nombre;
    }
}

class Perro extends Animal {
    constructor(nombre) {
        super('Perro', 4, 'canino');
        this.nombre = nombre;
    }
}

const fifi = new Perro('Fifi');
fifi.saludar();

let animal = new Ave('Carlos')    
animal.saludar();

// class persona  {
//     constructor(edad,nombre) {
//         this.edad = edad
//         this.nombre = nombre
//     }
    
//     saludar () {
//         console.log(`Hola, soy ${this.nombre} y tengo ${this.edad}`)
//     }

//     despedir() {
//         console.log('Adios')
//     }
// }


// class PersonaImportante  extends persona{

//     constructor(edad,nombre,profesion) {
//         super(edad,nombre)
//         this.profesion = profesion
//     }


//     saludarPorProfesion() {
//         // this.saludar()
//         console.log(`Soy,${this.nombre} tengo ${this.edad} y trabajo de ${this.profesion}`)
//     }


//     Despedida() {
//         setTimeout(this.despedir,1000)
//     }
// }

// let personaImportante = new PersonaImportante(18, 'Daniel','developerJr')

// personaImportante.saludarPorProfesion()
// personaImportante.Despedida()