/* Lista desordenada */
const productos = [
  { id: 1, producto: "Remera", valor: 2300 },
  { id: 2, producto: "Pantalon", valor: 4000 },
  { id: 3, producto: "Sueter", valor: 3000 },
  { id: 4, producto: "Zapatillas", valor: 10000 },
  { id: 5, producto: "Gorras", valor: 1000 },
  { id: 6, producto: "Relojes", valor: 5000 },
];

let muestra = document.getElementById("muestra");

let titulo = document.getElementById("titulo");

let h1 = document.createElement("h1");
h1.innerHTML = "Lista de precios";

let botonProductos = document.getElementById("btn-productos");
botonProductos.addEventListener("click", () => {

    titulo.appendChild(h1);

    for (const indice of productos) {

        let li = document.createElement("li");
      
        li.innerHTML = (indice.producto + ": " + indice.valor);
      
        muestra.appendChild(li);
      
    }
})




