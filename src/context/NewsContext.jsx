import { createContext, useContext, useState } from "react";
import api from "../Config/axios";

const NewsContext = createContext();

const useNewsContext = () => {
  return useContext(NewsContext);
};

const NewsContextProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [loading,setLoading] = useState(false)
  const fetchNews = async (url='/everything?q=india') => {
    setLoading(true)
    try {
      const res = await api.get(
        `${url}&apiKey=${import.meta.env.VITE_API_KEY}`,
      );
      setLoading(false)
      return res.data;
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };
  const value = {
    news,
    setNews,
    fetchNews,
    loading,
  };

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};

export { useNewsContext, NewsContextProvider };
