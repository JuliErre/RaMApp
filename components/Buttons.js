import { View, Text, Button } from 'react-native';
import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import tw from 'twrnc';

const Buttons = () => {
    const { data, getData, info } = useContext(DataContext);

    return (
        <View style={tw`flex mb-10 flex-row justify-center items-center  `}>
            <View style = {tw`flex w-25 mr-3`} >

            {info.prev != null &&
                <Button
                
                title="prev"
                onPress={() => {
                    getData(info.prev)
                    console.log(data)
                }}
                color="#24282F"
                />
            }
            </View>
            <View style = {tw`w-25 mr-3`}>

            {info.next != null &&
                <Button
                title="Next"
                onPress={() => getData(info.next)}
                color="#24282F"
                />
            }
            </View>

        </View>
    );
};

export default Buttons;
