export function kebabCaseToTitleCase(colorName) {
  const colorWithSpaces = colorName.replaceAll("-", " ");
  const colorTileCase = colorWithSpaces.replaceAll(/\b[a-z]/g, (match) => match.toUpperCase());
  return colorTileCase;
}
