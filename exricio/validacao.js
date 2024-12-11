document.querySelector('form').addEventListener('submit', function (e) {
    const email = document.querySelector('#email').value;
    if (!email.includes('@')) {
        e.preventDefault();
        alert('Por favor, insira um e-mail válido.');
    }
});

const ul = document.querySelector('ul');
const button = document.createElement('button');
button.textContent = 'Adicionar Tarefa';
document.body.appendChild(button);

button.addEventListener('click', function () {
    const li = document.createElement('li');
    li.textContent = 'Nova Tarefa';
    ul.appendChild(li);
});

function calcular(operacao) {
    const num1 = parseFloat(prompt('Digite o primeiro número:'));
    const num2 = parseFloat(prompt('Digite o segundo número:'));
    let resultado;
    switch (operacao) {
        case 'adicao':
            resultado = num1 + num2;
            break;
        case 'subtracao':
            resultado = num1 - num2;
            break;
        case 'multiplicacao':
            resultado = num1 * num2;
            break;
        case 'divisao':
            resultado = num1 / num2;
            break;
        default:
            alert('Operação inválida!');
            return;
    }
    alert(`O resultado é: ${resultado}`);
}

const images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
let currentIndex = 0;

function changeImage() {
    document.querySelector('img').src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeImage, 3000);