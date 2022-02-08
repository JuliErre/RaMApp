import { View, Text } from 'react-native';
import React,{createContext, useState, useEffect} from 'react';

export const DataContext = createContext([]);

const DataContextProvider = ({children}) => {
    const [data, setData] = useState([]);
    const [info, setInfo] = useState([]);

    function addData (data){
        setData(data);
    }

    const getData = api => {

      
          fetch(api)
          .then((res) => res.json())
          .then((res) => {addData(res.results) 
            setInfo(res.info)})
          .catch((err) => console.log(err));
       }
   
  return (
  <DataContext.Provider
  value = {{
    data,
    info,
    addData,
    getData,
    
    }}    
  >
      {children}
  </DataContext.Provider>
  );
};

export default DataContextProvider;
