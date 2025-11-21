let colaImpresion = ["doc1.pdf", "doc2.png", "doc3.jpg"];

// Se imprimió el primer documento → se elimina del INICIO
colaImpresion.shift();

// Llega un nuevo trabajo → añadir al FINAL
colaImpresion.push("doc4.txt");

// Se imprimió el siguiente documento → eliminar el nuevo primero
colaImpresion.shift();

console.log(colaImpresion);