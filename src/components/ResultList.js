import React from 'react';
import {View,FlatList,Text,StyleSheet,TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from '../components/ResultsDetail';

const ResultList = ({title , results , navigation}) => {
    return (
        <View>
            <Text style = {styles.title}>{title}</Text>
            <FlatList 
            showsHorizontalScrollIndicator = {false}
            horizontal
            data = {results}
            keyExtractor = {result => result.id}
            renderItem = {({item}) => {
                return (
                <TouchableOpacity onPress = {() => navigation.navigate('Results')}>
                    <ResultsDetail result = {item} />
                </TouchableOpacity>
                );
            }}
            />
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

export default withNavigation(ResultList);