import { View, Text, TextInput } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import tw from "twrnc";
import { DataContext } from "../context/DataContext";
import Api from "./Api";
import CharactersList from "./CharactersList";

const Search = () => {
    const [text, setText] = useState(null);
    const { addData, data } = useContext(DataContext);
   
    const filter = name => {
        var result = data.find(data=>{
            if(data.name.toLowerCase().includes(name.toLowerCase())){
                return data;
            }
        })
        addData(result)
    }


        return (
        <View></View>

            

            
       
    );
};

export default Search;
