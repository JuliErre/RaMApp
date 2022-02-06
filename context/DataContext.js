import { View, Text } from 'react-native';
import React,{createContext, useState} from 'react';

export const DataContext = createContext([]);

const DataContextProvider = ({children}) => {
    const [data, setData] = useState([]);

    function addData (data){
        setData(data);
    }
  return (
  <DataContext.Provider
  value = {{
    data,
    addData,
    }}    
  >
      {children}
  </DataContext.Provider>
  );
};

export default DataContextProvider;
