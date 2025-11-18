import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

const NewContext = createContext();

export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (product) => {
    const exists = favorites.find((item) => item.id === product.id);

    if (exists) {
      setFavorites(favorites.filter((item) => item.id !== product.id));
    } else {
      setFavorites([...favorites, product]);
    }
  };

  const fetchNews = async () => {
    try {
      const res = await axios.get('https://dummyjson.com/carts');
      setNews(res.data.carts);
    } catch (err) {
      console.log('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <NewContext.Provider
      value={{
        news,
        loading,
        favorites,
        toggleFavorite,
      }}>
      {children}
    </NewContext.Provider>
  );
};

export const useNews = () => useContext(NewContext);
