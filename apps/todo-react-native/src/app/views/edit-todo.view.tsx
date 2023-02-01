import React, { useState } from "react"
import { Modal, StyleSheet, TextInput, View, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { black } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import { Button } from "@react-native-material/core";
import ITodo from "../models/todo.model";


interface IEditTodoProps {
  isVisible: boolean
  onClose: () => void
  onSave: (data: any) => void
  data?: ITodo
}

const EditTodoView = (props: IEditTodoProps) => {

  const colors = ['#FFCCCB', '#FFFFE0', '#90EE90']
  const [colorIndex, setColorIndex] = useState(0)

  const title = props.data ? 'Edit Todo' : 'Add Todo'
  const [text, setText] = useState(props.data?.text || '')


  const onSave = () => {
    if (text.trim().length === 0) {
      props.onClose()
      return
    }
    if (props.data) {
      const newData = {
        ...props.data,
        text
      }
      props.onSave(newData)
    } else {
      const newData = {
        id: 'id-' + Math.floor(Math.random() * 10000000),
        text,
        done: false,
        color: colors[colorIndex],
      }
      props.onSave(newData)
    }
  }

  return (
    <Modal visible={props.isVisible} style={styles.modal} 
        animationType="slide" 
        transparent={true}
        >
      <KeyboardAvoidingView style={styles.container} >
      <Text style={styles.title}>{title}</Text>

        <View style={styles.content}>
          <Text style={styles.label}>ToDo Text:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setText}
            value={props.data?.text}
            multiline={true}
            numberOfLines={10}
            // keyboardType="numeric"
          />

          <Text style={styles.label}>ToDo Color:</Text>
          <View style={styles.colors} >
            <View style={[styles.color, {
              backgroundColor: colors[0],
              borderColor: 'black',
              borderWidth: colorIndex === 0 ? 4 : 0
            }]} 
              >
                 <TouchableOpacity 
                  style={{height: '100%', width:'100%'}}
                  onPress={() => setColorIndex(0)}>
                </TouchableOpacity>
                <Text style={styles.priorityText}>Crictical</Text>
              </View>
              
            <View style={[styles.color, {
              backgroundColor: colors[1],
              borderColor: 'black',
              borderWidth: colorIndex === 1 ? 4 : 0}]} 
              >
                <TouchableOpacity 
                  style={{height: '100%', width:'100%'}}
                  onPress={() => setColorIndex(1)}>
                </TouchableOpacity>
                <Text style={styles.priorityText}>Moderate Priority</Text>
              </View>
            <View style={[styles.color, {
              backgroundColor: colors[2],
              borderColor: 'black',
              borderWidth: colorIndex === 2 ? 4 : 0}]} 
            >
                 <TouchableOpacity 
                  style={{height: '100%', width:'100%'}}
                  onPress={() => setColorIndex(2)}>
                </TouchableOpacity>
                <Text style={styles.priorityText}>Least priority</Text>
              </View>
          </View>
        </View>

        <View style={styles.menu} >
         
                   <Button
      variant="outlined"
      title="Cancel"
      style={{position:'absolute', left: 20, bottom:20}} 
      onPress={() => props.onClose()}
    />
      
         
          
                 <Button 
        title="Save"
        style={{position:'absolute', right: 20, bottom: 20}} 
        onPress={onSave}
       />
       
        </View>
      </KeyboardAvoidingView>
    </Modal>
  )
}

export default EditTodoView


const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'rgba(0,0,0,0)',
  },
  container: {
    width: '100%', 
    height: '100%',
    paddingTop: 100,
    // backgroundColor: '#fff',
    backgroundColor: 'rgba(0,0,0,0.7)',
    flexDirection: 'column',
  },
  content: {
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    paddingBottom: 0,
    backgroundColor: '#fff',
  },
  menu: {
    display: 'flex',
    width: '100%', height: 60,
    paddingLeft: 30,
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff'
  },
  input: {
    height: 'auto',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  label: {
    padding: 10,
    paddingBottom: 0,
  },
  colors: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
  },
  color: {
    display: "flex",
    flexDirection: "row",
    width: 30, height: 30,
    marginRight: 20,
    borderRadius: 3,
    marginTop: 10,
    marginBottom: 10,
  },
  priorityText: {
    left: 60,
    position: 'absolute',

  },
  button: {
    height: 20,
    width: 100,
  },
  buttonText: {
    fontSize: 18,
    color: '#007fff'
  }
});