// Pregunta 1
{
  const nota1 = 16;
  const nota2 = 17;
  const nota3 = 18;
  const nota4 = 14;

  const promedio = (nota1 + nota2 + nota3 + nota4) / 4;
  console.log("El promedio es: " + promedio);
}

// Pregunta 2
{
  const base = 5;
  const altura = 3;
  const area = base * altura;
  console.log("El área del rectángulo es: " + area);
}

// Pregunta 3
{
  const base = 7;
  const altura = 4;
  const area = (base * altura) / 2;
  console.log("El área del triángulo es: " + area);
}

// Pregunta 4
{
  const radio = 5;
  const pi = 3.14;
  const area = pi * radio ** 2;
  console.log("El área de la circunferencia es: " + area);
}

// Pregunta 5
{
  const arreglo = [2, 6, 1, 8];
  let suma = 0;

  for (let i = 0; i < arreglo.length; i++) {
    suma += arreglo[i];
  }

  const promedio = suma / arreglo.length;
  console.log("Promedio: " + promedio);
}

// Pregunta 6
{
  const arreglo = [1, 2, 5, 8, 9, 12, 2, 3];
  let suma = 0;

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 == 0) {
      suma += arreglo[i];
    }
  }

  console.log("Suma de pares: " + suma);
}

// Pregunta 7
{
  const library = [
    {
      author: "Bill Gates",
      title: "The Road Ahead",
      Status: true,
    },
    {
      author: "Steve Jobs",
      title: "Walter Isaacson",
      Status: true,
    },
    {
      author: "Suzanne Collins",
      title: "Mockingjay: The Final Book of The Hunger Games",
      Status: false,
    },
  ];

  for (let i = 0; i < library.length; i++) {
    if (library[i].Status == true) {
      console.log(library[i].title + " - " + library[i].author);
    }
  }
}

// Pregunta 8
{
  const arreglo1 = [2, 5, 2, 3, 7, 2];
  const arreglo2 = [1, 5, 3, 3];
  const arregloNuevo = [...arreglo1, ...arreglo2];

  console.log("ArregloNuevo:", arregloNuevo);

  if (arregloNuevo.length >= 10) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// Pregunta 9
{
  const arreglo1 = [2, 5, 2];
  const arreglo2 = [1, 5, 3];
  const arregloNuevo = [...arreglo1, ...arreglo2];

  for (let i = 0; i < arregloNuevo.length; i++) {
    arregloNuevo[i] = arregloNuevo[i] * 2;
  }

  console.log("ArregloNuevo:", arregloNuevo);
}

// Pregunta 10
{
  const nota = Number(prompt("Ingrese una calificación del 1 al 10:"));

  if (nota < 1 || nota > 10) {
    console.log("Error: la calificación debe estar entre 1 y 10");
  } else if (nota < 6) {
    console.log("reprobado");
  } else if (nota < 9) {
    console.log("regular");
  } else if (nota < 10) {
    console.log("bien");
  } else {
    console.log("excelente");
  }
}

// Pregunta 11
{
  const num1 = Number(prompt("Primer número (1 al 50):"));
  const num2 = Number(prompt("Segundo número (1 al 50):"));

  for (let i = 1; i <= 50; i++) {
    if (i == num1 || i == num2) {
      console.log("¡Lotería!");
    } else {
      console.log(i);
    }
  }
}

// Pregunta 12
{
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// Pregunta 13
{
  const tiempo = Number(prompt("¿Cuántos años tiene el trabajador?"));
  let bono;

  switch (tiempo) {
    case 1:
      bono = 100;
      break;
    case 2:
      bono = 200;
      break;
    case 3:
      bono = 300;
      break;
    case 4:
      bono = 400;
      break;
    case 5:
      bono = 500;
      break;
    default:
      if (tiempo > 5) {
        bono = 1000;
      } else {
        bono = 0;
      }
  }

  console.log("El bono es: $" + bono);
}

// Pregunta 15
{
  const palabras = ["manzana", "banana", "cereza", "uva", "fresa"];
  let masLarga = palabras[0];

  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length > masLarga.length) {
      masLarga = palabras[i];
    }
  }
  console.log("La palabra más larga es: " + masLarga);
}

// Pregunta 17
{
  const topping = prompt(
    "Elige topping (oreo, kitkat, brownie):",
  ).toLowerCase();
  let precio = 50;

  switch (topping) {
    case "oreo":
      precio += 10;
      break;
    case "kitkat":
      precio += 15;
      break;
    case "brownie":
      precio += 20;
      break;
    default:
      console.log("no tenemos este topping, lo sentimos.");
  }

  console.log("El precio del helado es: " + precio + " MXN");
}
