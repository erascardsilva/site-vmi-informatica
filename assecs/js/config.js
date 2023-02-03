let imgs = document.getElementById("img");
let img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel() {
    idx++;

    if (idx > img.length - 1) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 400}px)`;
}


function mensagemsaud() {

    let sauda1;
    const hora_1 = new Date();
    const horas = hora_1.getHours();


    if (horas < 6) {
        sauda1 = "Ótima madrugada, seja muito bem vindo(a) ao nosso site," +
            " a partir das 9hrs estaremos a sua disposição, navegue a vontade.."
    } else if (horas < 9) {
        sauda1 = "Bom dia, seja muito bem vindo(a) ao nosso site , a partir das 9 hrs estaremos " +
            " a sua disposição e podera nos chamar via WhasApp ou via Telefone....";
    } else if (horas < 12) {
        sauda1 = "Bom dia, seja muito bem vindo(a) ao nosso site , estamos a sua disposição, " +
            "qualquer dúvida é só nos charmar pelo WhasApp ou via Telefone....";
    } else if (horas < 18) {
        sauda1 = "Boa tarde, seja muito bem vindo(a) ao nosso site , qualquer dúvida é só " +
            " nos charmar pelo WhasApp ou via Telefone, estamos a sua disposição.....";
    } else if (horas < 19) {
        sauda1 = "Boa noite, estaremos disponiveis apenas amanhã, a partir das 9 hrs  " +
            " mais qualquer dúvida , deixa a mensagem no nosso WhatsApp, assim que possivel responderemos..";
    } else if (horas < 24) {
        sauda1 = "Boa noite, seja muito bem vindo(a) ao nosso site, amanhã " +
            " a partir das 9hrs estaremos a sua disposição , qualquer dúvida nos chame via WhatsApp....";
    }

    //let txt = document.getElementById("mensagem");
    let txt = document.querySelector('#mensagem');
    let texto = sauda1;
    txt.textContent = texto;


}

function showpag() {
    var pag = document.getElementById("pag");
    pag.classList.add("pag-content");

}

function showpagmobile() {
    var pag2 = document.getElementById("pag-mob");
    pag2.classList.add("pag-content-mobile");

}

function fechapag() {
    var element = document.getElementById("pag");
    element.classList.remove("pag-content");
}

function fechapagmobile() {
    var element2 = document.getElementById("pag-mob");
    element2.classList.remove("pag-content-mobile");
}


function f() {
    document.getElementsByClassName('dropdown')[0].classList.toggle('down');
    document.getElementsByClassName('arrow')[0].classList.toggle('gone');
    if (document.getElementsByClassName('dropdown')[0].classList.contains('down')) {
        setTimeout(function () {
            document.getElementsByClassName('dropdown')[0].style.overflow = 'visible'
        }, 500)
    } else {
        document.getElementsByClassName('dropdown')[0].style.overflow = 'hidden'
    }
}

mensagemsaud();
setInterval(carrossel, 1800);