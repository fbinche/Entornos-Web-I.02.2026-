document.addEventListener("DOMContentLoaded", () => {
    const tabla = document.querySelector(".table");

    if (!tabla) return;

    // Agregar encabezado
    const theadRow = tabla.querySelector("thead tr");
    const th = document.createElement("th");
    th.textContent = "Promedio Final";
    theadRow.appendChild(th);

    // Recorrer filas
    const filas = tabla.querySelectorAll("tbody tr");

    filas.forEach(fila => {
        const celdas = fila.querySelectorAll("td");

        let parcial = obtenerNota(celdas[5]); // Evaluación Parcial
        let final = obtenerNota(celdas[9]);   // Evaluación Final

        let promedio = (parcial * 0.4) + (final * 0.6);

        const td = document.createElement("td");
        td.textContent = promedio.toFixed(2);

        if (promedio >= 13) {
            td.style.color = "green";
            td.style.fontWeight = "bold";
        } else {
            td.style.color = "red";
            td.style.fontWeight = "bold";
        }

        fila.appendChild(td);
    });

    function obtenerNota(celda) {
        if (!celda) return 0;

        let texto = celda.textContent.trim().toUpperCase();

        if (texto === "" || texto === "NA" || texto === "NR" || texto === "00") {
            return 0;
        }

        return parseFloat(texto) || 0;
    }
});