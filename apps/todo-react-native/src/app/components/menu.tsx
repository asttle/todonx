import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Button } from "@react-native-material/core";

interface IMenu {
  onAddTodo: () => void
  clearList: () => void
}


const Menu = (props: IMenu) => {  
  return (
    <View style={styles.container}>
      
        <Button
      variant="outlined"
      title="Clear All"
      style={{position:'absolute', left: 20, bottom:20}} 
      onPress={() => props.clearList()}
    />
      <Button 
        title="+ Add ToDo"
        style={{position:'absolute', right: 20, bottom: 20}} 
        onPress={() => props.onAddTodo()}/>
        
    </View>
  );
}

export default Menu

const styles = StyleSheet.create({
  container: {
    width: '100%', minHeight: 30, height: 'auto',
    color: 'black',
    // alignItems: 'center',
    // justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
  },
});