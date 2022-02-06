import { View, Text, FlatList } from 'react-native';
import React from 'react';
import Character from './Character';

const CharactersList = ({data}) => {
  return (
    <View>
      <FlatList
                data={data}
                renderItem={({ item }) => (
                    <Character  character={item} />
                )}
                keyExtractor={ item => item.id}
            />
    </View>
  );
};

export default CharactersList;
