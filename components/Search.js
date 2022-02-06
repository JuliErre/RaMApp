import { View, Text, TextInput } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import tw from "tailwind-react-native-classnames";
import { DataContext } from "../context/DataContext";
import Api from "./Api";
import CharactersList from "./CharactersList";

const Search = () => {
    const [text, setText] = useState(null);
    const { addData, data } = useContext(DataContext);
    const [name, setName] = useState(null);
    const filter = name => {
        var result = data.find(data=>{
            if(data.name.toLowerCase().includes(name.toLowerCase())){
                return data;
            }
        })
        addData(result )
    }

    const handleChanges = e =>{
        setText(e.target.value)
        filter(e.target.value)

    }
        return (
        <View style={tw`flex items-center justify-center m-10`}>
            <TextInput
                style={tw`bg-white w-72 h-14  rounded-2xl`}
                editable
                maxLength={30}
                placeholder='Search a character'
                onChangeText = {handleChanges}
            />
            
            {text ==null?
            <Api/>
            : <CharactersList data ={data}/>

            }

            
        </View>
    );
};

export default Search;
