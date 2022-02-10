window.addEventListener('load', function () {

    let patterns = {
        notEmpty: /.+/,
        phone:/^\d{7,14}$/,
        email: /^.+@.+\..+$/
    }

            let form = document.querySelector('form');
            let inputs = form.querySelectorAll('.check');
            form.addEventListener('submit', checkForm);
            //---------------------------------------------
            form.addEventListener('focusin', function (e) {
                if (e.target.classList.contains('check')) { //вместо цикла воспользуемся всплытием.
                    e.target.classList.remove('err');
                }
            })

            function checkForm(e) {
                let err = false;
                    for (let i = 0; i < inputs.length; i++) {
                        let input = inputs[i];
                        input.value = input.value.trim(); // убираем пробелы слева и справа
                        let pattern = patterns[input.dataset.valid]; //ищем соответствующие паттерны по нашим data атрибутам в инпутах : data-valid = "ххх";

                        if (!pattern.test(input.value)) { //выполняем поиск НЕсопоставления регулярного выражения указанной строке из инпута. | true/false
                            input.classList.add('err');
                            err = true;
                        }
                }
                if(err) {
                    e.preventDefault();  //форма не отправится если есть несоответствия.
                }
            }
            });
