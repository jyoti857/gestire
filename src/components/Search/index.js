import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
// import {} from 'react-native-paper';

const Search = (props) => {
  const [search, setSearch] = useState("sasdja");
  return (
      <TextInput  style = {{
        backgroundColor: 'white',
        height: 70,
        width: "96%",
        marginTop: 90,
        marginLeft: 20,
        borderRadius: 10,
        color: "black", 
        fontSize:30,
        alignItems: 'center',
        paddingLeft:20
      }}
        value={search}
        onChangeText={(newText) => setSearch(newText)}
       
      />
  );
};

export default Search;
