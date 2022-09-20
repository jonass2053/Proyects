





let rows;
let colums;
let contador = 1;
let valor1, valor2, valor3, valor4;


const verificacion =()=>
{
    let pliego = document.getElementById("pliego");
    let arrFilas = document.getElementsByClassName("filapadre");
    let dimension = document.getElementById("dimension");
    if (arrFilas.length > 0) {
        console.log("entre");
        arrFilas[0].parentNode.remove();
        let pliego = document.createElement("div");
        pliego.id = "pliego";
        pliego.className = "pliego";
        dimension.appendChild(pliego);
    }
}


const crearCortes = (val1, val2, ancho, alto) => {
        verificacion();
       let pliego = document.getElementById("pliego");

        for (let index = 0; index < val2; index++) {
            let fila = document.createElement("div");
            fila.className = "row corte filapadre"
        

            for (let index = 0; index < val1; index++) {
                let col = document.createElement("div");
                col.className = "col corte colcorte "
                col.innerHTML = `<b>${contador}`;
                contador++;
                col.style.color = "white"
               
                col.style.width=`${ancho}0%`;
                col.style.height=`${alto}0%`;
              
                fila.appendChild(col);

            }
            pliego.appendChild(fila);


        


        }

        // eliminar cortes 



        // columnas





        contador = 1;
    


    


}

function Calcular(anchom, alltom, anchop, altop) {
    let temp;
     valor1 = anchom / anchop;
     valor2 = alltom / altop;

    let resultado1 = parseInt(valor1) * parseInt(valor2);

    temp = anchom;
    anchom = alltom;
    alltom = temp;
     valor3 = anchom / anchop;
     valor4 = alltom / altop;
    let resultado2 = parseInt(valor3) * parseInt(valor4);

    if (resultado1 > resultado2) {

        rows = parseInt(valor1);
        colums = parseInt(valor2);

        crearCortes(rows, colums, anchop, altop);



        console.log(`numero1 ${rows}, ${colums}`);

        return resultado1;




    }
    else {
        rows = parseInt(valor3);
        colums = parseInt(valor4);
        console.log(`numero1 ${rows}, ${colums}`);

        crearCortes(rows, colums);


        1
        return resultado2;

    }


}

function Ejecutar() {
    let valor1 = document.getElementById("textanchom").value;
    let valor2 = document.getElementById("textaltom").value;
    let valor3 = document.getElementById("textanchop").value;
    let valor4 = document.getElementById("textaltop").value;
    if (valor1 > 0 && valor1 != "" && valor2 > 0 && valor2 != "" && valor3 > 0 && valor3 != "" && valor4 > 0 && valor4 != "") {
        let resultado = Calcular(valor1, valor2, valor3, valor4);

        const resultadopadre = document.getElementById("resultadopadre");
        const resultadohijo = document.getElementById("resultado");
        resultadohijo.style.color = "green";
        resultadohijo.style.fontSize = "50px"
        resultadohijo.innerHTML = resultado;

    }
    else {
        alert("Se ha producido un error por favor intentelo de nuevo...");
    }




}








//let pliego  =document.getElementById("fila");




