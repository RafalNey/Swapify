export const descriptionFormatter = (description) => {
  if (description) {
    const descArr = description.split(' ').slice(0, 10).join(' ');
    return `${descArr}...`;
  }
  return '';
};
