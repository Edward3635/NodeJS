window.addEventListener('load', function OnWindowLoaded() {

    let symbols = [ 'C', '/', '*', '←',
                    '7', '8', '9', '+',
                    '4', '5', '6', '-',
                    '1', '2', '3', '.',
                    '(', '0', ')', '='
                  ];

    let calcShape = document.getElementById('shape');

    let calcString = document.getElementById('inputVal');

    // Добавление кнопок к форме калькулятора
    symbols.forEach(function (sign) {
        let symbElement = document.createElement('div');
        symbElement.className = 'btn';
        symbElement.innerHTML = sign;
        calcShape.appendChild(symbElement);
    });

    document.querySelectorAll('#calc-wrap .btn').forEach(function (button) {
        // Добавляем действие, выполняемое при клике на любую кнопку
        button.addEventListener('click', onButtonClick);
    });

    function onButtonClick(cl) {
        if (cl.target.innerHTML === 'C') {
            calcString.innerHTML = '0';

        } else if (cl.target.innerHTML === '←') {
            calcString.innerHTML = calcString.textContent.substring(0, calcString.textContent.length - 1)

        }else if (cl.target.innerHTML === '=') {
            try{
                calcString.innerHTML = eval(calcString.innerHTML);
            } catch{
                calcString.innerHTML = "Something went wrong -_-";
            }
        } else if (calcString.innerHTML === '0') {
            calcString.innerHTML = cl.target.innerHTML;
        } else {
            calcString.innerHTML += cl.target.innerHTML;
        }
    }
});