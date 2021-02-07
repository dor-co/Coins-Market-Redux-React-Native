import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import PDFReader from 'rn-pdf-reader-js';

export default function PdfReader() {
    return (
        <View style={styles.container}>
            <PDFReader
                style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
                source={{
                    uri: 'http://www.africau.edu/images/default/sample.pdf',
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
