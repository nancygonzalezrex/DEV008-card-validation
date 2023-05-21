const validator = {
  isValid: (numeroTarjeta) => {
    // creamos una constante para saber si el valor numero tarjeta es igual 0
    // numeroTarjeta.length nos dice cuanto numeros tiene la tarjeta
    const isNumeroVacio = numeroTarjeta.length === 0
    // Preguntamos si esto es vacio
    if(isNumeroVacio){
      // returnamos false si es vacio
      return false
    }
    // creamos una constante y trasformamos numero tarjeta a un Array
    const obtenerNumeroOriginalArray = Array.from(numeroTarjeta);
    // creamos una constante e invertimos los numeros
    const reversarNumero = obtenerNumeroOriginalArray.reverse();
    // creamos una constante array para agregar elemento
    const doblarNumero = [];
    // Recoremos el array con metodo forEach donde obtenemos element y el index
    // element son los valores que estan dentro del array
    // index es la posicion de cada elemento que tenemos en el array
    reversarNumero.forEach((element, index) => {
      // condicional para saber si la posicion es impar
      if (index % 2 !== 0) {
        // creamos constante para multiplicar el element por 2 segun su posicion impar
        const elementImpar = element * 2;
        // Returna con el metodo push para agregar elemento al array creado doblarNumero = [];
        // metodo toString convierte numero a un string
        return doblarNumero.push(elementImpar.toString());
      }
      // agregar los elemento al array que no son impar
      doblarNumero.push(element);
    });
    // crear un array para saber suma total
    const arrayParaSumaTotal = [];

    // recorremos el array doblarNumero
    doblarNumero.forEach((numero) => {
      // creamos variable para sumar digito
      let sumarDigitos = 0;
      // creamos condicional si el numero es mayor a 9
      // si el numero es 10 entraria en el condicional
      if (numero > 9) {
        // creamos una constante para sumar los numero y convertimos el numero a un array
        const nuevoNumeroParaSumar = Array.from(numero);
        // recorremos este array para sumarlos entre si 
        nuevoNumeroParaSumar.forEach((digito) => {
          sumarDigitos += Number(digito);
        });
        // los agregamos al array con el metodo push
        return arrayParaSumaTotal.push(sumarDigitos);
      }
      // si el numero es menor a 9 lo agregamos al array para sumar total
      arrayParaSumaTotal.push(Number(numero));
    });
    // creamos variable para sumar
    let totalSuma = 0;
    // Recoremos el array con el resultado de todo el proceso para sumar
    arrayParaSumaTotal.forEach((element) => {
      // sumamos los elementos para obtener el valor total de las tarjetas
      totalSuma += element;
    });
    // creamos condicional para saber si la suma es divisible a 10 para saber si es valida
    if (totalSuma % 10 === 0) return true;
    // si no es divisible es falso
    else return false;
  },
  maskify: (numeroTarjeta) => {
    // Creamos variable trasnformando el valor numero tarjeta a un array
    const numeroTarjetaArray = Array.from(numeroTarjeta);
    // creamos una variable let para agregar los caracter #
    let numeroMarcarado = "";
    // Hacemos un ciclo for para recorrer desde 0 hasta la cantidad de numero tarjeta - 4 y ascendente
    for (let i = 0; i < numeroTarjetaArray.length - 4; i++) {
      // con esto a generamos #### hasta que termine el ciclo for
      numeroMarcarado += "#"
    }
    // metodo substr es para obtener algun detalle del string por ejemplo lo ultimo 4
    const ultimoCuatroNumero = numeroTarjeta.substr(numeroTarjetaArray.length - 4)
    // al numeroMarcado le agregamos los ultimos 4 numero de la tarjeta
    numeroMarcarado += ultimoCuatroNumero
    // Returna el numero tarjeta enmascarada #### #### ### 1234
    return numeroMarcarado
  },
};

export default validator;
