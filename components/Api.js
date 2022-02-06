import { View, Text, FlatList, TextInput } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import tw from "tailwind-react-native-classnames";
import CharactersList from "./CharactersList";
import { DataContext } from "../context/DataContext";

const Api = () => {
    const { addData, data } = useContext(DataContext);
    const [filterCharacters, setFilterCharacters] = useState([]);
    const [text, setText] = useState([]);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then((res) => res.json())
            .then((res) => addData(res.results))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        let searchCharacters = data.filter((data) =>
            data.name.toString().toLowerCase().includes(text.toString().toLowerCase())
        );
        setFilterCharacters(searchCharacters);
    }, [text]);

    return (
        <>
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
            <View>
                {text.length == 0 ? (
                    <CharactersList data={data} />
                ) : (
                    <CharactersList data={filterCharacters} />
                )}
            </View>
        </>
    );
};

export default Api;
