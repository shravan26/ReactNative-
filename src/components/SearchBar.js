import React from 'react';
import { View,TextInput, StyleSheet } from "react-native"; 
import {FontAwesome} from '@expo/vector-icons'; 

const SearchBar = ({term , onTermChange,onTermSubmit}) => {
    return (
    <View style = {styles.background}>
        <FontAwesome name = "search" size = {35} style = {styles.searchIcon}  />
        <TextInput 
        autoCapitalize = "none"
        autoCorrect = {false}
        placeholder = "Search" 
        style = {styles.searchTextStyle}
        value = {term}
        onChangeText = {newTerm => onTermChange(newTerm)}
        onEndEditing = {onTermSubmit}/>
    </View> 
    );
};

const styles = StyleSheet.create({
    searchIcon : {
        alignSelf : 'center',
        marginHorizontal : 10
    },
    background : {
        backgroundColor : '#dbdbdb',
        height : 50,
        marginHorizontal : 10,
        borderRadius : 5,
        marginTop : 15,
        flexDirection : 'row',
    },
    searchTextStyle : {
        flex : 1,
        fontSize : 20
    }
});

export default SearchBar;