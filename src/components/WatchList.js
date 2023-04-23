import { useContext } from "react";
import { WatchListContext } from "../store/WatchListContext";

function WatchList() {
  const { watchList } = useContext(WatchListContext);

  return (
    <div>
      {watchList.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  );
}

export default WatchList;
