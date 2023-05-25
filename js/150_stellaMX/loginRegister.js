const directoryTheme = drupalSettings.path.themeUrl

window.addEventListener('DOMContentLoaded', () => {
    eventListeners()
})

async function eventListeners() {
    // Funcionalidad de lasanimaciones AOS
    AOS.init({
        once: true,
    });

    // Validar Registro
    bouncerForm()

    // Mostrar contraseña
    showPassword()
}

function showPassword() {
    const eyeBtns = document.querySelectorAll('.containerPassword__eye');
    eyeBtns.forEach( eyeBtn => {
        eyeBtn.addEventListener('click', e => {
            e.preventDefault();
            if(!eyeBtn.classList.contains('eyeOff')) {
                eyeBtn.nextElementSibling.querySelector('input').type = 'text';
                eyeBtn.classList.add('eyeOff');
                return;
            }
            eyeBtn.nextElementSibling.querySelector('input').type = 'password';
            eyeBtn.classList.remove('eyeOff');
        })

    })
}

// Register Form
const bouncerForm = () => {

    // Habilitar selects de fecha
    const contentDay = document.querySelector('.contentDay select')
    const contentMonth = document.querySelector('.contentMonth select')
    if (contentDay) {
        contentDay.addEventListener('change', () => {
            contentDay.closest('.contentDay').nextElementSibling.classList.remove('disabled');
        })
    }
    if(contentMonth) {
        contentMonth.addEventListener('change', () => {
            contentMonth.closest('.contentMonth').nextElementSibling.classList.remove('disabled');
        })
    }

    // Quitar el autocomplete
    const formInputs = [...document.querySelectorAll('.paB_form input[type="text"]')];
    if(formInputs) {
        formInputs.forEach((data, indice)=>{
            data.setAttribute('autocomplete', 'off');
        });
    }

    // Hailitar btn submit sí todos los campos están llenos
    const arrInputs = [...document.querySelectorAll('.paB_form input')];
    const arrSelects = [...document.querySelectorAll('.paB_form select')];
    if(arrInputs) {
        arrInputs.forEach( input => {
            if(input.classList.contains('onlyText')) {
                input.removeAttribute('onkeypress')
            }
            input.addEventListener('input', e => {
                // Agregar linea de color verde
                if(input.value.length >= 2) {
                    input.classList.add('textSuccess');
                } else {
                    input.classList.remove('textSuccess');
                }

                // Array Input, Select y Submit
                const arrInputs = [...input.closest('.paB_form').querySelectorAll('input')]
                const arrSelects = [...input.closest('.paB_form').querySelectorAll('select')]
                const btnSubmit = input.closest('.paB_form').querySelector('.form-submit')

                // Validar lo values
                const validInput = arrInputs.some( inputValue => inputValue.value === '');
                const validSelect = arrSelects.some( selectValue => selectValue.value === '');

                // Habilitar el btn
                if(!validInput && !validSelect) {
                    btnSubmit.classList.remove('disabled')
                } 
            })
        })
    }
    if(arrSelects) {
        arrSelects.forEach( select => {
            select.addEventListener('change', e => {
                // Agregar linea de color verde
                if(select.value !== '') {
                    select.classList.add('textSuccess');
                } else {
                    select.classList.remove('textSuccess');
                }

                // Array Input, Select y Submit
                const arrInputs = [...select.closest('.paB_form').querySelectorAll('input')]
                const arrSelects = [...select.closest('.paB_form').querySelectorAll('select')]
                const btnSubmit = select.closest('.paB_form').querySelector('.form-submit')

                // Validar lo values
                const validInput = arrInputs.some( inputValue => inputValue.value === '');
                const validSelect = arrSelects.some( selectValue => selectValue.value === '');

                // Habilitar el btn
                if(!validInput && !validSelect) {
                    btnSubmit.classList.remove('disabled')
                } 
            })
        })
    }

    function validNumb(num) {
        const allowRegex  = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/;
        if(allowRegex.test(num.value) === false) return false;
        return true;
    }

    const arrOnlyText = [...document.querySelectorAll('.onlyText')];
    if(arrOnlyText.length > 0) {
        arrOnlyText.forEach(onlyText => {
            onlyText.addEventListener('input', e => {
                if(!validNumb(onlyText)) {
                    e.preventDefault();
                    onlyText.value = onlyText.value.substr(0, onlyText.value.length - 1);
                }
            })
        })
    }

    Bouncer('.paB_form', {
        patterns: {
            email: /^[a-z0-9!#$%&'*/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
        },
        customValidations: {
            emailVerified: function (field) {
                if (field.name == 'email') {
                    let array_email = field.value.split("@");
                    const res = emails.find( (m) => m === array_email[1]);
                    return res === undefined ? false : true;
                }
            },
            id: function (field) {
                if (field.name == 'indentity') {
                    const value = field.value
                    if(value.length < 7  || value.length > 20) {
                        return true;
                    }
                }
            },
            patternId: function (field) {
                if (field.name == 'indentity') {
                    const value = field.value
                    const pattern = new RegExp(
                        "^[a-zA-Z0-9\-]+$",
                    );
                    if (!pattern.test(value)) return true;
                }
            },
            inputPhone: function (field) {
                if (field.name == 'phone') {
                    const value = field.value
                    if(value.length < 7 || value.length > 10) {
                        return true;
                    }
                }
            },
            onlyLetter: (field) => {
                if (field.name == 'name' || field.name == 'lastname') {
                    const value = field.value;
                    const pattern = new RegExp(
                        "^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$",
                        "i"
                    );
                    if (!pattern.test(value)) return true;
                }
            },
            onlyNumbers: (field) => {
                if (field.name == 'phone') {
                    const value = field.value;
                    const pattern = new RegExp(
                        "^[0-9]+$"
                    );
                    if (!pattern.test(value)) return true;
                }
            },
            inputConfirmPassword: function (field) {
                if (field.name == 'confirm_pass') {
                    const value = field.value;
                    const pass = document.querySelector('.containerPassword input[name="pass"');
                    if(value !== pass.value) {
                        return true;
                    }
                }
            },
			ageVerified: function (field) {
                if (field.name == 'day' || field.name == 'month' || field.name == 'year') {
                    let day = document.querySelector('select[name="day"]')
                    let month = document.querySelector('select[name="mounth"]')
                    let year = document.querySelector('select[name="year"]')
					if(year.value == '2005' && day.value !== '' && month.value !== ''){
						var today = new Date();
						var birthDate = new Date(`${year.value}/${month.value}/${day.value}`);
						var age = (today.getFullYear() - birthDate.getFullYear());
						var m = (today.getMonth() - birthDate.getMonth());
						if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
						  age--;
						}
						if(age < 18){
							return true;
						}
					  
					}
				}
			},
			validateDate: function (field) {
				if (field.name == 'day' || field.name == 'month' || field.name == 'year') {
					let year = document.querySelector('#edit-year');
					let month = document.querySelector('#edit-mounth');
					let day = document.querySelector('#edit-day');
                    if(year.value !== '' && day.value !== '' && month.value !== '') {
                        let date = month.value > 0 && month.value < 13 && year.value > 0 && year.value < 32768 && day.value > 0 && day.value <= (new Date(year.value, month.value, 0)).getDate();
                        if(date == false){
                            return true
                        }
                    }
				}
			},
            validateDistrit: function (field) {
                if (field.name == 'distrit') {
                    const value = field.value;
                    if(value == 'selected' || value == '') {
                        return true;
                    }
                }
            }
        },
        messages: {
            missingValue: {
                checkbox: 'Debes aceptar términos y condiciones y política de protección de datos.',
                default: (e) => {
                    if (e.name == 'name') return 'Ingresa tu Nombre'
                    else if (e.name == 'lastname') return 'Ingresa tu Apellido'
                    else if (e.name == 'email') return 'Ingresa tu correo'
                    else if (e.name == 'gender') return 'Ingresa tu Apellido'
                    else return 'Este campo es obligatorio'
                }
            },
            emailVerified : 'Por favor ingrese un email válido',
            id: 'El documento debe tener mínimo 7 dígitos',
            inputPhone: 'Este campo debe tener entre 7 y 10 dígitos',
            inputConfirmPassword: 'Las contraseñas no coinciden',
			ageVerified: 'Debes ser mayor de edad para registrarte',
			validateDate: 'Fecha inválida',
            onlyLetter: 'Este campo solo recibe letras',
            onlyNumbers: 'Este campo solo recibe números',
            validateDistrit: 'Seleccione una opción válida',
            patternMismatch: {
                email: 'Ingresa un correo electrónico válido'
            },
        }
    })
    document.addEventListener('bouncerShowError', function (event) {
        const field = event.target;
        let parent = event.target.closest('.js-form-item');
        if(field.closest('.containerDate__body')) {
            const containerDate = field.closest('.containerDate__body');
            const containerField = field.closest('.js-form-item');
            const msgErrorField = [...containerDate.querySelectorAll('.error-message')]
            msgErrorField.forEach( error => {
                if(containerField.querySelector('.error-message')) {
                    containerField.removeChild(error);
                }
                containerDate.classList.add('errorParent');
                containerDate.appendChild(msgErrorField[msgErrorField.length-1])
            })
        } else {
            parent.classList.add('errorParent')
            if(parent.nextElementSibling && parent.nextElementSibling.classList.contains('error-input')) {
                parent.nextElementSibling.classList.add('hidden')
            }
        }
    }, false);
}