import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class FavoriteList extends Component {

    render() {
        return (
            <View style={styles.pdfView}>
                <Text style={styles.title}>Favorite</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 35,
        marginTop: 40,
        marginBottom: 10,
        color: '#7b3790',
    },
    pdfView: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});