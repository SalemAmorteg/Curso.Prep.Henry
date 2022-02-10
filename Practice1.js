function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length === 0) return console.log(0);
  if (arguments.length === 1) return console.log(arguments[0]);
  let multi = 1
  for (let i = 0; i < arguments.length; i++) {
    multi *= arguments[i];
  }
  console.log (multi);
} multiplicarArgumentos(2, 1, 10, 20);