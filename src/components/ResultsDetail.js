import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ResultsDetail = ({result}) => {
    return (
        <View style = {styles.viewStyle}>
            <Image style = {styles.imageStyle} source = {{uri : result.image_url}}/>
            <Text style = {styles.name}> {result.name}</Text>
            <Text style = {styles.details}> Rating : {result.rating} , Reviews : {result.review_count} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle : {
        height : 100, 
        width : 250,
        marginHorizontal : 10,
        borderRadius : 5,
    },
    name : {
        marginLeft : 10,
        fontWeight : "bold",
        color : 'white'
    },
    details : {
        color : 'grey',
        marginHorizontal : 10
    },
    viewStyle : {
        marginVertical : 10,
        borderColor : 'black',
        borderWidth : 0.5,
        backgroundColor: 'black'
    }
});

export default ResultsDetail;