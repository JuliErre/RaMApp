import { View, Text, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const Character = ({ character }) => {

    return (

        <View style={tw`pt-10 items-center  justify-center `}>
            <View>
                <Text style={tw`text-red-500 font-bold text-xl text-left`}>{character.name}</Text>
                <Text style={tw`text-blue-500 font-bold text-base text-left`}>{character.species}</Text>
            </View>
            <Image
                source={{
                    uri: character.image
                }}
                style={tw`rounded-full h-60 w-60`}
            />
        </View>
    );
};

export default Character;
