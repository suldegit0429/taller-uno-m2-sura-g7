let fila = ["Ana", "Luis", "Carlos", "Maria"];

// Luis (posición 1) se va → eliminar 1 elemento desde índice 1
fila.splice(1, 1);

// Jorge se coloca después de Ana → insertar en índice 1 sin eliminar
fila.splice(1, 0, "Jorge");

console.log(fila);