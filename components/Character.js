import { View, Text, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const Character = ({ character }) => {

    return (

        <View style={tw` bg-gray-700 mb-10 w-90 h-90 items-start rounded-xl overflow-hidden shadow-xl `}>
            <Image
                source={{
                    uri: character.image
                }}
                style={tw`h-50 w-full`}
            />
            <View style={tw`mt-10 ml-5`}>
                <Text style={tw`text-white font-bold text-3xl text-left `}> {character.name}</Text>
                <Text style={tw`text-white font-bold text-xl text-left`}> {character.status}</Text>
                
            </View>
        </View>
    );
};

export default Character;
