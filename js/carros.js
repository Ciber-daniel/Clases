class Vehiculo {

    cantidadDePuertas = 0
    año = 0
    marcaDeFabricante = ''
    inventor = ''
    velocidadMaxima = 0
    aceleracion = 0

    constructor(cantidadDePuertas,aceleracion,velocidadMaxima,año,marcaDeFabricante,inventor) {
        this.nombre = nombre
        this.cantidadDePuertas = cantidadDePuertas
        this.año = año
        this.marcaDeFabricante = marcaDeFabricante
        this.inventor = inventor
        this.velocidadMaxima = velocidadMaxima
        this.aceleracion = aceleracion
    }

    arrancar() {
        console.log(`El ${this.nombre} acaba de empezar su recorrido, con una aceleracion de 0kph - 100kph en tan solo ${this.aceleracion}s, un novedoso diseño de ${this.cantidadDePuertas} puertas. Fabricado en ${this.año} por ${this.marcaDeFabricante}. Fue diseñado por ${this.inventor}`)
    }

    despegue() {
        console.log(`El avion ${this.nombre} ha despegado, fue fabricado en ${this.año} por ${this.marcaDeFabricante} y diseñado por ${this.inventor}. Esta hermosa nave consigue una velocidad maxima de ${this.velocidadMaxima} a pesar de su peso de ${this.peso}`)
    } 

    navegar() {
        console.log(`Ya estoy ladillado, esto se llama ${this.nombre} es una lancha de alta velocidad que llega a ${this.velocidadMaxima} fabricada en ${this.año} por ${this.marcaDeFabricante}`)
    }
}


class porsche extends Vehiculo{
    constructor(nombre) {
        super(2,'3,2' ,312, 2019,'Porsche AG', 'Ferdinand Porsche')
        this.nombre = nombre
    }
}

class Avion extends Vehiculo {
    constructor(nombre,cantidadDeMotores,peso) {
        super('','','2.700kph',1997,'Sukhoi Corporation.','Tsibin LL')
        // super(,,  ,' km/h')
        this.nombre = nombre
        this.cantidadDeMotores = cantidadDeMotores
        this.peso = peso
    }         
}

class lancha extends Vehiculo {
    constructor(nombre) {
        super('','aceleracion',' 217 km/h ',2007,'AMG','')
        this.nombre = nombre
    }
}

const Porsche = new porsche('porsche').arrancar()
const Sukhoi = new Avion('Sukhoi Su-47',2, '16.380kg').despegue()
const Marauder_AMG = new lancha(`50' Marauder AMG`).navegar()
