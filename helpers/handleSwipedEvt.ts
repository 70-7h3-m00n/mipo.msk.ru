const handleSwipedEvt = ({ menuIsOpen, closeMenu }: any) => {
  document.addEventListener('swiped', evt => {
    const e: any = evt
    const swipedDown = e.detail.dir === 'right'
    menuIsOpen && closeMenu && swipedDown && closeMenu()
  })
}

export default handleSwipedEvt
