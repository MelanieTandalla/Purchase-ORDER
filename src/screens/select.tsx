import React, { useState } from 'react';
import {Picker} from '@react-native-picker/picker';
import { StyleSheet } from 'react-native';

const select = () => {
    const [selectedLanguage, setSelectedLanguage] = useState();
  return (
        <Picker
            style={styles.select}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue) =>
                setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="html" value="js" />
        </Picker>
  );
};

const styles = StyleSheet.create({
    select: {
      width: '93%',
      alignSelf: 'center',
      borderRadius: 400,
      borderColor: '#085A86',
      backgroundColor: 'white',
      color:'black',
      marginTop:40,
    },
  });


export default select;