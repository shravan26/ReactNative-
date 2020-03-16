import React from 'react';
import {View,FlatList,Text,StyleSheet} from 'react-native';
import ResultsDetail from '../components/ResultsDetail';

const ResultList = ({title , results}) => {
    return (
        <View>
            <Text style = {styles.title}>{title}</Text>
            <FlatList 
            showsHorizontalScrollIndicator = {false}
            horizontal
            data = {results}
            keyExtractor = {result => result.id}
            renderItem = {({item}) => {
                return <ResultsDetail result = {item} />
            }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    title : {
        fontSize : 18,
        fontWeight : "bold",
        marginLeft : 10,
        color : 'white'
    }
});

export default ResultList;