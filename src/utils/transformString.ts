function toCapitalizeFirstLetter(text: string): string {
  return text[0].toUpperCase() + text.slice(1).toLowerCase();
}

export default toCapitalizeFirstLetter;
