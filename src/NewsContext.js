import React, { createContext, useEffect, useState } from 'react';
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "0cae9c9e37b241369e74b6c3b103c305";

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=tesla&from=2021-06-15&sortBy=publishedAt&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};