export const Toast = (message, type) => {
  const section = document.createElement('section')
  section.innerHTML = `<p>${message}</p>
  <div class=${type}></div>
  `
  section.classList.add('section')
  return section
}
