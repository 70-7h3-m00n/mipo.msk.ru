const getCasesRuStudyFieldString = (professionsQty: number) => {
  const num = professionsQty % 10

  if (professionsQty === 0) return 'направлений'

  if (professionsQty === 1) return 'направление'

  if (professionsQty > 1 && professionsQty < 5) return 'направления'

  if (professionsQty >= 5 && professionsQty < 20) return 'направлений'

  if (professionsQty > 20 && num === 0) return 'направлений'

  if (professionsQty > 20 && num === 1) return 'направление'

  if (professionsQty > 20 && num > 1 && num < 5) return 'направления'

  if (professionsQty > 20 && num >= 5) return 'направлений'

  return ''
}

export default getCasesRuStudyFieldString
