const transformTitle = (movieTitle) => {
  let newTitle = "";

  const arr = movieTitle.split(" ");

    for (let i = 0; i < arr.length; i++) {
        newTitle = arr[0]; 
        newTitle = newTitle + "-" + arr[i];
    }
    return newTitle;
};

export default transformTitle;
