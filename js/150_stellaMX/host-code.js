window.addEventListener('load', () => {
  handleInput()
  validateForm()
})

function handleInput() {
  const inputs = document.querySelectorAll('#form-code input')

  inputs?.forEach((input, index) => {
    if (index === 0) input.focus()

    input.addEventListener('click', () => {
      input.select()
    })

    input.addEventListener('keydown', (e) => {
      if (e.key == 'Backspace') {
        e.target.value = ''
        if (e.target.previousElementSibling) {
          e.preventDefault();
          const prevInput = e.target.previousElementSibling
          prevInput?.focus()
          prevInput?.select()
        }
      }
    })

    input.addEventListener('input', (e) => {
      if (input.value.length === 0) {
        if (input.previousElementSibling) {
          const prevInput = input.previousElementSibling
          prevInput?.focus()
        }
      }

      if (input.nextElementSibling) {
        if (e.inputType === 'deleteContentBackward') return
        const nextInput = input.nextElementSibling
        nextInput?.focus()
        nextInput?.select()
      }
    })
  })
}

function validateForm() {
  const inputs = document.querySelectorAll('#form-code input')
  // const btnSend = document.querySelector('')

  if (inputs.length > 0) {
    inputs[inputs.length - 1].addEventListener('input', e => {
      let code = []

      inputs.forEach(input => {
        input.value.length && code.push(input.value)
      })

      if (code.length !== inputs.length) {
        const errorText = document.querySelector('.SA_code-error')
        errorText.classList.add('SA_code-error--show')
        return
      }

      const errorText = document.querySelector('.SA_code-error')
      errorText.classList.remove('SA_code-error--show')
      console.log('código completo', code);
    })
  }

}