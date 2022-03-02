const formattedTimestamp = (timestamp) => {
  let formattedTimestamp = '';
  if (typeof timestamp === 'number') {
    formattedTimestamp = new Date(timestamp);
  } else {
    formattedTimestamp = new Date(timestamp.seconds * 1000);
  }
  const formatted = String(formattedTimestamp);
  
  return formatted.slice(0, formatted.lastIndexOf(':'));
};

export default formattedTimestamp;
