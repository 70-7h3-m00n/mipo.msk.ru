const closeFieldsTooltipOnOuterClick = (func: any) => {
  document.addEventListener('click', e => {
    const target: any = e.target
    const btnFieldsContainer:any = document.getElementById('btnFieldsContainer')
    if (target !== btnFieldsContainer && !btnFieldsContainer.contains(target)) {
      func()
    }
  })
}

export default closeFieldsTooltipOnOuterClick
