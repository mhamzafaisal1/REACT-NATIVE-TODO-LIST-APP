import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'



const Task = ({ task }) => {
    return (
        <View style={styles.item} >
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{task}</Text>
            </View>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.circle}></TouchableOpacity>
            </View>
        </View>
    )
}

export default Task

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: 'black',
        borderRadius: 5,
        marginRight: 15,


    },
    itemText: {
        maxWidth: "80%",
    },
    circle: {
        width: 12,
        height: 12,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 6,
    },

})