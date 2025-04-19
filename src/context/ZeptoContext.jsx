import React, { createContext, useEffect, useState } from 'react';

// 1. Create the context
export const ZeptoContext = createContext();

export const ZeptoContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://674e84f1635bad45618eebc1.mockapi.io/api/v1/zeptoproducts')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ZeptoContext.Provider value={{ data, setData }}>
      {children}
    </ZeptoContext.Provider>
  );
};

export default ZeptoContextProvider;
