let mazo = ["As", "Rey", "Reina", "Jota"];

// 1. Barajar el mazo invirtiendo el orden
mazo.reverse();

// 2. Sacar la carta de arriba (primer elemento)
let cartaSacada = mazo.shift();

console.log("Carta sacada:", cartaSacada);
console.log("Mazo restante:", mazo);
