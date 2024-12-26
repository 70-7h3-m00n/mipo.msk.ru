const scrollToBlock = (scrollToID: string) => {
  if (!scrollToID) return
  const targetElement = document.getElementById(scrollToID)
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' })
  } else {
    console.log(`Нет элемента ${scrollToID} в DOM`)
  }
}

export default scrollToBlock
