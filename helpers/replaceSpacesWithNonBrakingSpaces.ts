const replaceSpacesWithNonBrakingSpaces = (str: string) =>
  str.replace(/ /g, '\u00A0')

export default replaceSpacesWithNonBrakingSpaces
