import { createContext, useState } from "react";

const FavoritesContext = createContext({});

const FavoritesContextProvider = (props) => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("ID")) || []
  );
  const handleAddStorage = (id) => {
    const favorites = localStorage.getItem("ID");
    if (!favorites) {
      localStorage.setItem("ID", JSON.stringify([id]));
      setFavorites([id]);
    } else {
      let array = JSON.parse(favorites);
      array = [...array, id];
      console.log(array);
      localStorage.setItem("ID", JSON.stringify(array));
      setFavorites(array);
    }
  };

  const handleRemoveStorage = (id) => {
    const favorites = localStorage.getItem("ID");
    const array = JSON.parse(favorites);
    const index = array.findIndex((index) => index === id);
    array.splice(index, 1);
    localStorage.setItem("ID", JSON.stringify(array));
    setFavorites(array);
  };

  const isFavorite = (id) => {
    const favorite = JSON.parse(localStorage.getItem("ID"));
    if (favorite) {
      const checkFav = favorite.find((favori) => favori === id);
      return checkFav;
    } else {
      return false;
    }
  };
  const value = {
    isFavorite,
    favorites,
    setFavorites,
    handleAddStorage,
    handleRemoveStorage,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesContext, FavoritesContextProvider };
