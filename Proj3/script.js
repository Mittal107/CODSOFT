let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }

    })
})




const matrixRain = document.getElementById('matrixRain');

        function createMatrixChar() {
            const char = document.createElement('span');
            char.className = 'matrix-char';
            char.textContent = Math.floor(Math.random() * 10); // Use numbers 0-9
            char.style.left = Math.random() * 100 + 'vw';
            char.style.animationDuration = Math.random() * 2 + 1 + 's';
            return char;
        }

        function generateMatrixRain() {
            const numChars = 100;
            for (let i = 0; i < numChars; i++) {
                matrixRain.appendChild(createMatrixChar());
            }
        }

        generateMatrixRain();