type typeCategory = 'profession' | 'course' | 'mba'

const generateLinkFromType = (type: typeCategory) => {
  const map = { profession: 'professions', course: 'courses', mba: 'mbas' }

  return map[type]
}

export default generateLinkFromType
