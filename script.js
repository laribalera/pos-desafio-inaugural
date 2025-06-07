function sendForm(event) {
    event.preventDefault();

    const url = 'https://fsdt-contact.onrender.com/contact';
    const form = {
        "names": [
            document.getElementById('nome1').value,
            document.getElementById('nome2').value,
            document.getElementById('nome3').value,
            document.getElementById('nome4').value,
            document.getElementById('nome5').value
        ],
        "message": document.getElementById('mensagem').value
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
    })
        .then(response => response.json())
        .then(json => {
            alert("mensagem enviada com sucesso!");
            console.log("resposta:", json);

            document.getElementById('nome1').value = "";
            document.getElementById('nome2').value = "";
            document.getElementById('nome3').value = "";
            document.getElementById('nome4').value = "";
            document.getElementById('nome5').value = "";
            document.getElementById('mensagem').value = "";
        })
        .catch(error => {
            console.error("erro na requisição:", error);
        });
}
