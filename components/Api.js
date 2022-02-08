import { View, Text, FlatList, TextInput, ScrollView, Button } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import tw from "twrnc";
import CharactersList from "./CharactersList";
import { DataContext } from "../context/DataContext";
import Buttons from "./Buttons";

const Api = () => {
    const { addData, data, getData,info } = useContext(DataContext);
    const [filterCharacters, setFilterCharacters] = useState([]);
    const [text, setText] = useState([]);
    const Api = "https://rickandmortyapi.com/api/character";
   
   
    useEffect(() => {
        getData(Api);
        
    }, []);

    useEffect(() => {
        let searchCharacters = data.filter((data) =>
            data.name.toString().toLowerCase().includes(text.toString().toLowerCase())
        );
        setFilterCharacters(searchCharacters);
    }, [text]);

    

    return (
        <ScrollView >
            <View style={tw`flex items-center justify-center m-10`}>
                <TextInput
                    style={tw`bg-white w-72 h-14  rounded-2xl`}
                    editable
                    maxLength={30}
                    placeholder="Search a character"
                    onChangeText={(name) => {
                        setText(name);
                    }}
                    />
            </View>
                    <Buttons/>
            <View>
                {text.length == 0 ? (
                    <CharactersList data={data} />
                    ) : (
                        <CharactersList data={filterCharacters} />
                        )}
            </View>
        </ScrollView>
        
    );
};

export default Api;
