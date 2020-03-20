import React,{ useState , useEffect } from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

const SearchScreen = () => {
    const [term,setTerm] = useState('');
    const [searchApi , results , errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price; 
        });
    };

    return (
    <View style = {styles.appbg}>
        <SearchBar 
        term = {term} 
        onTermChange = {(newTerm) => setTerm(newTerm)}
        onTermSubmit = {() => searchApi(term)}/>
        {errorMessage ? <Text>{errorMessage}</Text> : null};
        <ScrollView>
            <ResultList results = {filterResultsByPrice('$')} title = "Cost Effective"/>
            <ResultList results = {filterResultsByPrice('$$')} title = "Bit pricier"/>
            <ResultList results = {filterResultsByPrice('$$$')} title = "Big Spender"/>
        </ScrollView>
    </View>
    );
};

const styles = StyleSheet.create({
    appbg : {
        backgroundColor : 'black',
        flex : 1,
    }
});

export default SearchScreen;