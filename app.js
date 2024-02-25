const info = document.querySelector('.infos')

const allBtns = document.querySelectorAll('input[type=button]')
let calc = "";
function val(calcVal, str=calcVal){
    form.fenetre.value = form.fenetre.value + str 
    calc = calc + calcVal
}

function calcule(){
    if(form.fenetre.value == ""){
        info.innerText = `Veuillez écrire une opération`;
        allBtns.forEach(btn => {
            btn.addEventListener('click', function(){
                info.innerText = ""
            })
        })
    }else {
        
        form.fenetre.value = eval(calc).toString().replace('.', ','); 
        calc = eval(calc)
        info.innerText = ""
    }
}
function remove(){
		form.fenetre.value = form.fenetre.value.slice(0, -1);
        calc = calc.slice(0, -1)
}
function suppr(){
    form.fenetre.value = "";
    calc = ""
}

function shft(){
    document.getElementById("asin").value = "asin";
    document.getElementById("acos").value = "acos";
    document.getElementById("atan").value = "atan";
    document.getElementById("acos").setAttribute('onclick',"val('Math.acos', fcos.value)");
    document.getElementById("asin").setAttribute('onclick', "val('Math.asin', fsin.value)");
    document.getElementById("atan").setAttribute('onclick',"val('Math.atan', ftan.value)");
    document.getElementById("shift").setAttribute('onclick',"reshift()");
}
function reshift(){
    document.getElementById("asin").value = "sin";
    document.getElementById("acos").value = "cos";
    document.getElementById("atan").value = "tan";
    document.getElementById("acos").setAttribute('onclick',"val('Math.cos', fcos.value)");
    document.getElementById("asin").setAttribute('onclick',"val('Math.sin', fsin.value)");
    document.getElementById("atan").setAttribute('onclick',"val('Math.tan', ftan.value)");
    document.getElementById("shift").setAttribute('onclick',"shft()");
}
