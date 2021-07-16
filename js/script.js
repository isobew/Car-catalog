let menu = [{img:"url('img/jeeprenegade.png')", nome:'Jeep Renegade', ano:2020, fabricante:'Fiat'},
            {img:"url('img/jeepcompass.png')", nome:'Jeep <br> Compass', ano:2018, fabricante:'Fiat'},
            {img: "url('img/jeepwrangler.png')", nome:'Jeep <br> Wrangler', ano:2020, fabricante:'Fiat'}]

let contagem = 0;
let carro = document.getElementById("foto");
let nome = document.getElementById("nome");
let ano = document.getElementById("modelo");
let fabricante = document.getElementById("fabricante");

function trocar(i) {
    carro.style.background = menu[i].img;
    carro.style.backgroundSize = "cover";
    document.getElementById("tabela").innerHTML = '<tr><th>Nome</th><th>Modelo</th><th>Fabricante</th></tr>'+
    '<tr><td id="nome">'+menu[i].nome+'</td><td id="modelo">'+menu[i].ano+'</td>'+
    '<td id="fabricante">'+menu[i].fabricante+'</td></tr>';
}

trocar(contagem);

function next(){
    contagem = contagem + 1;
    if(contagem == 3){ contagem = 0;}
    trocar(contagem);
}

function back(){
    contagem = contagem - 1;
    if(contagem == -1){ contagem = 2; }
    trocar(contagem);


}