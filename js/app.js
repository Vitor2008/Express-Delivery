const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});



// Carregar botões de contato
$(document).ready(function () {
    contato.eventos.init();
})

contato.eventos = {

    init: () => {
       contato.metodos.carregarBotaoWhatsapp();
       contato.metodos.carregarBotaoPlanoMensal();
       contato.metodos.carregarBotaoPlanoSemestral();
       contato.metodos.carregarBotaoPlanoVitalicio();
       contato.metodos.carregarBotaoPlanoMensalMobile();
       contato.metodos.carregarBotaoPlanoSemestralMobile();
       contato.metodos.carregarBotaoPlanoVitalicioMobile();
    }

}


contato.metodos = {

    // carrega o link do botão de WhatsApp
    carregarBotaoWhatsapp: () => {

    var texto = 'Olá! vim através do site *Express Delivery*, e gostaria de realizar um orçamento.';

    let encode = encodeURI(texto);
    let URL = `https://wa.me/65984794759?text=${encode}`;

    $("#btnWhatsApp").attr('href', URL);

   },


    // carrega o link do WhatsApp dos botões de planos
    carregarBotaoPlanoMensal: () => {

        var texto = 'Olá! vim através do site *Express Delivery*, e gostaria de saber mais a respeito do *Plano Mensal*';
    
        let encode = encodeURI(texto);
        let URL = `https://wa.me/65984794759?text=${encode}`;
    
        $("#btnPlanoMensal").attr('href', URL);
    
       },

    carregarBotaoPlanoSemestral: () => {

        var texto = 'Olá! vim através do site *Express Delivery*, e gostaria de saber mais a respeito do *Plano Semestral*';
    
        let encode = encodeURI(texto);
        let URL = `https://wa.me/65984794759?text=${encode}`;
    
        $("#btnPlanoSemestral").attr('href', URL);
        
    },  
    
    carregarBotaoPlanoVitalicio: () => {

        var texto = 'Olá! vim através do site *Express Delivery*, e gostaria de saber mais a respeito do *Plano Vitalício*';
    
        let encode = encodeURI(texto);
        let URL = `https://wa.me/65984794759?text=${encode}`;
    
        $("#btnPlanoVitalicio").attr('href', URL);
        
    }, 




    // carrega o link do WhatsApp dos botões de planos para mobile
    carregarBotaoPlanoMensalMobile: () => {

        var texto = 'Olá! vim através do site *Express Delivery*, e gostaria de saber mais a respeito do *Plano Mensal*';
    
        let encode = encodeURI(texto);
        let URL = `https://wa.me/65984794759?text=${encode}`;
    
        $("#btnPlanoMensalMobile").attr('href', URL);
    
       },

    carregarBotaoPlanoSemestralMobile: () => {

        var texto = 'Olá! vim através do site *Express Delivery*, e gostaria de saber mais a respeito do *Plano Semestral*';
    
        let encode = encodeURI(texto);
        let URL = `https://wa.me/65984794759?text=${encode}`;
    
        $("#btnPlanoSemestralMobile").attr('href', URL);
        
    },  
    
    carregarBotaoPlanoVitalicioMobile: () => {

        var texto = 'Olá! vim através do site *Express Delivery*, e gostaria de saber mais a respeito do *Plano Vitalício*';
    
        let encode = encodeURI(texto);
        let URL = `https://wa.me/65984794759?text=${encode}`;
    
        $("#btnPlanoVitalicioMobile").attr('href', URL);
        
    }, 
}



