const getCategoryFromPrograms = programsArray => {
  return Array.from(
    new Map(
      programsArray.map(elem => {
        const studyField = elem['study_field']
        return [
          studyField.slug,
          { title: studyField.title, slug: studyField.slug }
        ]
      })
    ).values()
  )
}

export default getCategoryFromPrograms
