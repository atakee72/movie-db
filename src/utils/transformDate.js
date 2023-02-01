const transformDate = (time) => {
  const date = new Date(time * 1000).toLocaleString();
  return date;
};

export default transformDate;
