let tareas = ["Revisar emails"];

// 1. Agregar "Llamar al cliente" al INICIO
tareas.unshift("Llamar al cliente");

// 2. Agregar "Preparar informe" al INICIO
tareas.unshift("Preparar informe");

// 3. Retirar la última tarea que entró ("Preparar informe")
tareas.shift();

// 4. Retirar la siguiente ("Llamar al cliente")
tareas.shift();

console.log(tareas);