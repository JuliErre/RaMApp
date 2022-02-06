import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import tw from 'tailwind-react-native-classnames';
import CharactersList from './CharactersList';
import { DataContext } from '../context/DataContext';


const Api = () => {
   const {addData, data} = useContext(DataContext);
    
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(res => res.json())
            .then(res => addData(res.results))
            .catch(err => console.log(err))

    }, [])

    return (
        <View >
           <CharactersList data = {data}/>
        </View>
    );
};

export default Api;
