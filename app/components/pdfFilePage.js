import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PdfReader from './PdfReader';

export default class pdfFilePage extends Component {
    
    render() {
        return (
            <View style={styles.pdfView}>
                <Text style={styles.title}>PDF</Text>
                <PdfReader />
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
})