import { useEffect, useState } from "react";
import axios from "axios";

export default function Genres(genreIds) {
  const [genreItems, setGenreItems] = useState([]);
  const genreBaseURl = "https://api.themoviedb.ord/3/genre/movie/list";
  useEffect(() => {
    axios(`${genreBaseURl}?api_key=${import.meta.env.VITE_APP_API_KEY}`)
      .then((res) => {
        setGenreItems(
          genreIds.map((item) =>
            res.data.genres.find((genre) => genre.id === item)
          )
        );
        console.log(res.data.genres);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {genreItems.map((item) => (
        <p key={item.name}>{item.name}</p>
      ))}
    </>
  );
}
