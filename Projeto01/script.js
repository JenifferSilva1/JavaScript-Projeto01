// classe = engloba tudo
function sendMail() {
    // variáveis que conectam com o site da API
    // uma array com outras variáveis dentro, sendo essa a única que passa
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        tel: document.getElementById("tel").value,
        message: document.getElementById("message").value
    };

// valores que não mudarão com o tempo
// identificação do service e template que criei no site da API
const serviceID = "service_hzat4vg";
const templateID = "template_y4kwywt"

// Manda para o site tudo isso
// emailjs = objeto = específico
// o . entre ele e sen siginifica que estou unindo um objeto e um comportamento(ação. Todo objeto tem um comportamento.). Dentro desse comportamento, passo 3 variáveis, e se der certo, res = reseta os campos.
// função dentro de outra função =  função recursiva (alguma que vou usar até acabar)
emailjs.send(serviceID, templateID, params)
// começa a validação para saber se deu certo
    .then(
        res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("tel").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message sent successfully");
        })
        // => = receba. | try catch - tente fazer algo, se não conseguir apresente o erro
    .catch((err) => console.log(err));
}

