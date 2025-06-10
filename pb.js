let slideIndex = 0;

function mostrarAlerta() {
  alert("Mais informações em breve!");
}

function validarLogin(event) {
  event.preventDefault();
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  if (usuario === "" || senha === "") {
    alert("Preencha todos os campos.");
  } else {
    alert("Login realizado com sucesso!");
  }
}

function validarCadastro(event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (nome === "" || email === "" || senha === "") {
    alert("Preencha todos os campos.");
  } else {
    alert("Cadastro realizado com sucesso!");
  }
}

function mudarSlide(direcao) {
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;
  slideIndex += direcao;

  if (slideIndex >= totalSlides) slideIndex = 0;
  if (slideIndex < 0) slideIndex = totalSlides - 1;

  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

document.addEventListener('DOMContentLoaded', () => {
  setInterval(() => mudarSlide(1), 5000);
});