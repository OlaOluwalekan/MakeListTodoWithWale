import { Toast } from './component.js'

export const displayToast = (message, type) => {
  const elem = document.body.appendChild(Toast(message, type))

  setTimeout(() => {
    elem.remove()
  }, 3000)
}
