class Vehiculo {
  cantidadDePuertas = 0;
  año = 0;
  marcaDeFabricante = '';
  inventor = '';
  velocidadMaxima = 0;
  aceleracion = 0;

  constructor(
    nombre,
    cantidadDePuertas,
    aceleracion,
    velocidadMaxima,
    año,
    marcaDeFabricante,
    inventor
  ) {
    this.nombre = nombre;
    this.cantidadDePuertas = cantidadDePuertas;
    this.año = año;
    this.marcaDeFabricante = marcaDeFabricante;
    this.inventor = inventor;
    this.velocidadMaxima = velocidadMaxima;
    this.aceleracion = aceleracion;
  }

  arrancar() {
    console.log(
      `El ${this.nombre} acaba de empezar su recorrido, con una aceleracion de 0kph - 100kph en tan solo ${this.aceleracion}s, un novedoso diseño de ${this.cantidadDePuertas} puertas. Fabricado en ${this.año} por ${this.marcaDeFabricante}. Fue diseñado por ${this.inventor}`
    );
  }

  despegar() {
    console.log(
      `El avion ${this.nombre} ha despegado, fue fabricado en ${this.año} por ${this.marcaDeFabricante} y diseñado por ${this.inventor}. Esta hermosa nave consigue una velocidad maxima de ${this.velocidadMaxima}kph a pesar de su peso de ${this.peso}kg`
    );
  }

  navegar() {
    console.log(
      `Ya estoy ladillado, esto se llama ${this.nombre} es una lancha de alta velocidad que llega a ${this.velocidadMaxima}Kph fabricada en ${this.año} por ${this.marcaDeFabricante}`
    );
  }
}

class Porsche extends Vehiculo {
  constructor(nombre) {
    super(2, 3.2, 312, 2019, 'Porsche AG', 'Ferdinand Porsche');
    this.nombre = nombre;
  }
}

class AvionDeCombate extends Vehiculo {
  constructor(nombre, cantidadDeMotores, peso) {
    super(0, 0, 2700, 1997, 'Sukhoi Corporation.', 'Tsibin LL');
    this.nombre = nombre;
    this.cantidadDeMotores = cantidadDeMotores;
    this.peso = peso;
  }
}

class Lancha extends Vehiculo {
  constructor(nombre) {
    super(0, 0, 217, 2007, 'AMG', '');
    this.nombre = nombre;
  }
}

function setup() {
  new Porsche('porsche').arrancar();
  new AvionDeCombate('Sukhoi Su-47', 2, 16380).despegar();
  new Lancha(`50' Marauder AMG`).navegar();
}
setup();
