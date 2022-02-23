export const formatErrorMsg = (errMsg) => {
  return `Error: ${errMsg
    .replace(/-/g, ' ')
    .slice(errMsg.lastIndexOf('/') + 1, -2)}`;
};
