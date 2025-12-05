document.getElementById("formContato").addEventListener("submit", enviarWhatsApp);

function enviarWhatsApp(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (nome === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const numero = "55XXXXXXXXXXX";  

    const texto = `Olá! Meu nome é ${nome}.\n\nMensagem:\n${mensagem}`;
    const textoCodificado = encodeURIComponent(texto);

    window.open(`https://wa.me/${numero}?text=${textoCodificado}`, "_blank");
}
