
let ancho2, alto2, pmaterial, textresultado, rdpulgadas, rdpies;
ancho2 = document.getElementById("text1");
alto2 = document.getElementById("text2");
pmaterial = document.getElementById("text3");
textresultado = document.getElementById("text4");
let lbltpies = document.getElementById("tpies");

rdpulgadas = document.querySelector('#rdpulgadas')
rdpies = document.querySelector('#rdpies')



const pmedidaenpies=(ancho, alto, precio)=>
{
    let tpies =parseFloat(ancho) * parseFloat(alto);
    lbltpies.innerHTML=`Total de pies: ${tpies}`;
    return parseFloat(tpies) * parseFloat(precio);
   
}

const pmedidaenpulgadas=(ancho, alto, precio)=>
{
    let tpies =(parseFloat(ancho) * parseFloat(alto))/144;
    lbltpies.innerHTML=`Total de pies: ${tpies}`;
    return parseFloat(tpies) * parseFloat(precio);

}

const limpiar=()=>
{
    ancho2.value="";
    alto2.value="";
}



const calcular2=()=>
{
    
    if(document.querySelector('#rdpies').checked)
    {
           textresultado.value ="$" + pmedidaenpies(ancho2.value, alto2.value, pmaterial.value); 
    }
    else if(document.querySelector('#rdpulgada').checked)
    {
        textresultado.value ="$" + pmedidaenpulgadas(ancho2.value, alto2.value, pmaterial.value); 

    }



}


//elementos a los cuales se le cambiara el color
let body = document.querySelector("body");
let h1 = document.querySelector("h1");
let footer = document.querySelector("footer");
let titulo=document.querySelector(".titulo");
let pheader = document.querySelector("p");
let white = document.querySelector("#white");
let h3=document.querySelector("h3");
let i = document.querySelectorAll("i");


// cambiar color a gris

let gray = document.querySelector("#gray");
gray.addEventListener("click", ()=>{

  
    body.style.backgroundColor="gray";
    h1.style.color="gray";
    footer.style.backgroundColor="gray";
    titulo.style.color="gray";

    


})
// cambiar color a black

let black = document.querySelector("#black");
black.addEventListener("click", ()=>{

    body.style.backgroundColor="black";
    h1.style.color="black";
    titulo.style.color="black"
    footer.style.backgroundColor="black";
    footer.style.color="white";
    
    




})
// cambiar color a color deafutl

let colordefault = document.querySelector("#colordefault");
colordefault.addEventListener("click", ()=>{

  
    
    body.style.backgroundColor="#015554";
    h1.style.color="#015554";
    titulo.style.color="#015554"
    footer.style.backgroundColor="#015554";
    pheader.style.color="white";
    h3.style.color="white";
    console.log(i);
    i.forEach(element => {
        element.style.color="white";

    });
    footer.style.color="white";


})


// cambiar color a a white

white.addEventListener("click", ()=>
{
    body.style.backgroundColor="white";
    footer.style.backgroundColor="white";
    pheader.style.color="#015554";
    h3.style.color="black";
    console.log(i);
    i.forEach(element => {
        element.style.color="black";

    });
    footer.style.color="black";

})





