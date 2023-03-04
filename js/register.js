import { displayToast } from './main.js'

const email = document.querySelector('.email')
const name = document.querySelector('.name')
const password = document.querySelector('.password')
const rePassword = document.querySelector('.re-password')
const check = document.querySelector('#check')
const form = document.querySelector('form')

// CRUD

check.onchange = () => {
  if (check.checked) {
    password.type = 'text'
    rePassword.type = 'text'
  } else {
    password.type = 'password'
    rePassword.type = 'password'
  }
}

const register = async () => {
  const options = {
    email: email.value,
    name: name.value,
    password: password.value,
  }

  if (!email.value) {
    displayToast('email is required', 'danger')
    return
  }
  if (!password.value) {
    displayToast('password is required', 'danger')
    return
  }
  if (password.value !== rePassword.value) {
    displayToast('password must match', 'danger')
    return
  }

  try {
    const { data } = await axios.post(
      `https://ola-todo-app.cyclic.app/api/v1/auth/register`,
      options
    )

    console.log(data)
    displayToast(data.message, 'success')
    location.href = '/pages/dashboard.html'
  } catch (error) {
    console.log(error.response.data.message)
    displayToast(error.response.data.message, 'danger')
  }
}

form.onsubmit = (e) => {
  e.preventDefault()
  register()
}
