// 5-)
function sumaPares(arrayNumerico) {
    let totalSuma;
    arrayNumerico.array.forEach(element => {
        if (element % 2 == 0) {
            totalSuma += element;
        }
    });

    return totalSuma;
}


// 6-)
function eliminarDuplicados(array) {
    return array.filter((element, index) => array.indexOf(element) === index);
}

// 7-)
function ordenarPorEdad(array) {
    return array.sort((objeto1, objeto2) => objeto1.edad - objeto2.edad);
}

// 8-)
function contarPropiedades(objeeto) {
    return Object.keys(objeeto).length;
}

// 9-)
function sumarPropiedadesNumericas(objeto) {
    let suma = 0;
    let keys = Object.keys(objeto);

    keys.forEach(llave => {
        if (typeof objecto[llave] == 'number') {
            suma++;
        }
    })
    return suma;
}

// 10-)
function filtrarPorPropiedad(array, propiedad) {
    let nuevoArrayFiltrado = [];
    array.forEach(objeto => {
        let keys = Object.keys(objeto);
        keys.forEach(key => {
            if (key == propiedad) {
                nuevoArrayFiltrado.push(objeto);
            }

        })
    })
    return nuevoArrayFiltrado;
}

// 11-) 
function calcularPromedio(arrayNumerico){
    let suma = 0;
    let cantNumeros = arrayNumerico.length;
    arrayNumerico.forEach(numero => {
        suma += numero;
    })

    return suma / cantNumeros;
}


// 12-)
function filtrarPorLongitud(arrayPalabras, longitud){
    let nuevoArray;
    arrayPalabras.forEach(palabra =>{
        if(palabra.length == longitud){
            nuevoArray.push(palabra);
        }
    })

    return nuevoArray;
}

// 13-)
function esPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // 14-)
  function invertirCadena(cadena){
    return cadena.split('').reverse().join('');
  }

// 15-)
  function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}