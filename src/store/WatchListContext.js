import { createContext, useState } from "react";

export const WatchListContext = createContext();

export const WatchListProvider = ({ children }) => {
  const [watchList, setWatchList] = useState([]);

  const addToWatchlist = (item) => {
    if (!watchList.includes(item)) {
      setWatchList([...watchList, item]);
    }
  };

  const removeFromWatchList = (item) => {
    setWatchList(watchList.filter((movie) => movie.id !== item.id));
  };

  return (
    <WatchListContext.Provider
      value={{
        watchList,
        addToWatchlist,
        removeFromWatchList,
      }}
    >
      {children}
    </WatchListContext.Provider>
  );
};
