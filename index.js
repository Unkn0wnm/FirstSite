function changeImage(){
const el = document.querySelector("img");
    const p = document.querySelector("p");
el.setAttribute('src',"https://static-cdn.jtvnw.net/jtv_user_pictures/13765295-0a4c-4464-825b-ad8c4bec048b-profile_image-150x150.png");
    el.setAttribute('height', "400px");
    el.setAttribute('width', "360px");
    if (p.innerHTML === "Você sabe demais, tome cuidado. Clique em \"Descobrir\" para verificar." || p.innerHTML === "Você acertou, porra!") {
        p.innerHTML = "Você acertou, porra!";
    } else {
        p.innerHTML = "Fracassado, desempregado.";
    }
}  

function submitAnswer(){
    const input = document.getElementById("input").value;
    const correctAnswer = "matheus";
    const p = document.querySelector("p");
    if (input.toLowerCase() === correctAnswer) {
        p.innerHTML = "Você sabe demais, tome cuidado. Clique em \"Descobrir\" para verificar.";
    } else {
        p.innerHTML = "Tente novamente!"
    }
}

function siteFeedback() {
    const el = document.getElementById("feedback");
    const p = document.getElementById("thanks");
    const feedbackValue = el.value;
    if (feedbackValue === "" || feedbackValue === "Escolha uma nota") {
        p.innerHTML = "Atribua uma nota, corno."
        return;
    }
    
    const numericValue = parseInt(feedbackValue, 10);
    
    if (numericValue === 10) {
        p.innerHTML = "Você tem muito bom gosto";
    } else if (numericValue >=7 && feedbackValue < 10) {
        p.innerHTML = "Você é um lixo de pessoa, a morte para você é pouco.";
    } else if (numericValue > 4 && feedbackValue < 7) {
        p.innerHTML = "Você deveria ter sido abortado, antes tivesse ido pelo ralo";
    } else {
        p.innerHTML = "Aproveite seus últimos momentos.";
    }
}
