

    
// tabuove inputy 
let tab_First_input=document.getElementById("First_input"); // lavy input 
let tab_Second_input = document.getElementById("Second_input"); // pravy input 

var tab_result_value=0;
//ziskanie_slect
let Selected = document.getElementById("option")
// vytvarenie local stroage 
let pole=JSON.parse(localStorage.getItem("calculator_storage"));
if (pole==null)
{ pole=[]} 

//zobrazenie aktualneho vysledku
var result_plate= document.getElementById("result_plate") 
for(let i=0;i<pole.length;i++)
{   
    result_plate.innerHTML+="<li>"+pole[i].priklad+"="+pole[i].vysledok+"</li>"
}

function button ()
{event.preventDefault()
pocitanie()
storage()
}
function pocitanie()
{
    switch (true)
    {
        case Selected.value =="+":
            {tab_result_value=parseFloat(tab_First_input.value)+parseFloat(tab_Second_input.value)
            document.getElementById("result").value=tab_result_value}
        break
        case Selected.value =="-":
            {tab_result_value=parseFloat(tab_First_input.value)-parseFloat(tab_Second_input.value)
            document.getElementById("result").value=tab_result_value}
        break
        case Selected.value =="*":
            {tab_result_value=parseFloat(tab_First_input.value)*parseFloat(tab_Second_input.value)
            document.getElementById("result").value=tab_result_value}
        break
        case Selected.value =="/":
            {tab_result_value=parseFloat(tab_First_input.value)/parseFloat(tab_Second_input.value)
            document.getElementById("result").value=tab_result_value}
        break
    }   
}

function storage ()
{//uloženie do storage 
let Spriklad =tab_First_input.value+Selected.value+tab_Second_input.value 
let Sresult =""+tab_result_value;
if(pole.length>=5)
{pole.shift()}
pole.push({priklad:Spriklad,vysledok:Sresult}) 
localStorage.setItem("calculator_storage",JSON.stringify(pole))

//zobrazenie zo storagu
result_plate.innerHTML=""
for(let i=0;i<pole.length;i++)
{   
    result_plate.innerHTML+="<li>"+pole[i].priklad+"="+pole[i].vysledok+"</li>"
}
}

