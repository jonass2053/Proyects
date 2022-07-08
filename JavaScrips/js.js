class Datos
{   
    constructor()
    {
        this.anchom;
        this.alltom;
        this.anchop;
        this.altop;

    }



}

const obj = new Datos();
function Calcular(anchom, alltom, anchop, altop)
{
    let temp;
    let valor1=anchom / anchop;
    let valor2= alltom/altop;
    let resultado1 = parseInt(valor1) * parseInt(valor2);
   
    temp=anchom;
    anchom=alltom;
    alltom=temp;
     valor1=anchom / anchop;
     valor2= alltom/altop;
    let resultado2=parseInt(valor1) * parseInt(valor2);
  

    if(resultado1>resultado2)
    {
        return resultado1;

    }
    else
    {
       return resultado2;
    }
    
}

function Ejecutar()
{
    let valor1=document.getElementById("textanchom").value;
    let valor2=document.getElementById("textaltom").value;
    let valor3=document.getElementById("textanchop").value;
    let valor4=document.getElementById("textaltop").value;
    if(valor1>0 && valor1!="" && valor2>0 && valor2!="" && valor3>0 && valor3!="" && valor4>0 && valor4!="")
    {
        let resultado=Calcular(valor1, valor2, valor3, valor4);
    
        const resultadopadre = document.getElementById("resultadopadre");
        const resultadohijo= document.getElementById("resultado");
        resultadohijo.style.color="red";
        resultadohijo.style.fontSize="50px"
        resultadohijo.innerHTML=resultado;
        
    }
    else
    {
        alert("Se ha producido un error por favor intentelo de nuevo...");
    }
    



}










