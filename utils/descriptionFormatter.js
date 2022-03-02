export const descriptionFormatter = (description) => {
  if (description) {
    const descArr = description.split(' ').slice(0, 5).join(' ').trimStart();
    return `${descArr}...`;
  }
  return '';
};
