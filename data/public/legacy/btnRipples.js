const btnsRipple = document.querySelectorAll('.btn-ripples')

const addRipplesToBtns = (selectedClass = null) => {
  if (selectedClass !== null) {
    selectedClass.forEach(btn => {
      btn.addEventListener('click', function (e) {
        const rect = e.target.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const circle = document.createElement('span')
        circle.classList.add('btn-ripples__circle')
        circle.style.top = y + 'px'
        circle.style.left = x + 'px'

        this.appendChild(circle)

        setTimeout(() => {
          circle.remove()
        }, 500)
      })
    })
  }
}

addRipplesToBtns(btnsRipple)
