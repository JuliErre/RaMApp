import { View, Text, FlatList } from 'react-native';
import React from 'react';
import Character from './Character';
import tw from "twrnc";

const CharactersList = ({data}) => {
  return (
    <View style={tw`  h-full`} >

      {
        data.map((character=> <Character key={character.id} character={character}/>))
      }
      {/*<FlatList style={tw` `}
                data={data}
                renderItem={({ item }) => (
                    <Character  character={item} />
                )}
                keyExtractor={ item => item.id}
                numColumns={1}
            />*/}
    </View>
  );
};

export default CharactersList;
