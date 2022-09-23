
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



