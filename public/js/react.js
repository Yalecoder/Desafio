var add = document.querySelector('.add');


    function closeOpen(){
        add.style.display = "none";
    }

    function openClose(){
        add.style.display = "flex";
    }

var membro = document.querySelectorAll(".nome");
var numero = document.querySelectorAll(".numero");
var search = document.querySelector('#search');
var teste = document.querySelector(".teste");

for(var i = 0; i < membro.length; i++){
    var vv = membro[i].innerText;
    console.log(vv);

    function mostrarResult(){
        if(search.value === vv){
            teste.innerText = vv;
            teste.style.display = "block";

            setTimeout(function (){
                teste.style.display = 'none';
            },10000)
        }else{
            teste.innerHTML = "Membro nao encontado";

            teste.style.display = "block";

            setTimeout(function (){
                teste.style.display = 'none';
            },3000)
        }

        search.value = '';
    }
}