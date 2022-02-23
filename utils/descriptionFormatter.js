export const descriptionFormatter = (description) => {
  if (description) {
    const descArr = description.split(' ').slice(0, 8).join(' ').trimStart();
    return `${descArr}...`;
  }
  return '';
};
