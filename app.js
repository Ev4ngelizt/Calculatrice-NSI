const info = document.querySelector('.infos')

const allBtns = document.querySelectorAll('input[type=button]')
let calc = "";
let lastCalc = []; let lastStr = [];
let count= 0
function val(calcVal, str=calcVal){
    form.fenetre.value = form.fenetre.value + str 
    calc = calc + calcVal
    count = lastCalc.push(calcVal)
    count = lastStr.push(str)
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
		form.fenetre.value = form.fenetre.value.replace(lastStr[lastStr.length-1],'');
        calc = calc.replace(lastCalc[lastCalc.length-1], '');
        count = lastCalc.pop()
        count = lastStr.pop()
}
function suppr(){
    form.fenetre.value = "";
    calc = ""
    lastCalc = []
    lastStr = []
}

function shft(){
    document.getElementById("asin").value = "asin";
    document.getElementById("acos").value = "acos";
    document.getElementById("atan").value = "atan";
    document.getElementById("pie").value = "e";
    document.getElementById("sqln").value = "ln";
    document.getElementById("acos").setAttribute('onclick',"val('Math.acos', fcos.value)");
    document.getElementById("asin").setAttribute('onclick', "val('Math.asin', fsin.value)");
    document.getElementById("atan").setAttribute('onclick',"val('Math.atan', ftan.value)");
    document.getElementById("shift").setAttribute('onclick',"reshift()");
    document.getElementById("pie").setAttribute('onclick',"val('Math.E', vpie.value)");
    document.getElementById("sqln").setAttribute('onclick',"val('Math.log', sqrtln.value)");
}
function reshift(){
    document.getElementById("asin").value = "sin";
    document.getElementById("acos").value = "cos";
    document.getElementById("atan").value = "tan";
    document.getElementById("pie").value = "π";
    document.getElementById("sqln").value = "√";
    document.getElementById("acos").setAttribute('onclick',"val('Math.cos', fcos.value)");
    document.getElementById("asin").setAttribute('onclick',"val('Math.sin', fsin.value)");
    document.getElementById("atan").setAttribute('onclick',"val('Math.tan', ftan.value)");
    document.getElementById("shift").setAttribute('onclick',"shft()");
    document.getElementById("pie").setAttribute('onclick',"val('Math.PI', vpie.value)");
    document.getElementById("sqln").setAttribute('onclick',"val('Math.sqrt(', '√(')");
}
