import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { HoverEffect } from 'react-native-gesture-handler';

function Task(props) {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 10,
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: 'skyblue',
        opacity: 0.4,
        alignItems: 'center',
        borderRadius: 5,

        
    },
    itemText: {
        padding: 10,
        maxWidth: '80%',
    },
    circular: {
        width: 14,
        height: 14,
        borderRadius: 30,
        borderColor: 'skyblue',
        borderWidth: 2,
    },

})

export default Task