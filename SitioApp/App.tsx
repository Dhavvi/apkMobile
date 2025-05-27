import React from 'react';
import { View, StyleSheet } from 'react-native';
import EmojiList from './app/components/EmojiList';

export default function App() {
    const handleSelect = (image) => {
        console.log('Selected emoji:', image);
        // Handle the selected emoji (e.g., update state, send to server, etc.)
    };

    const handleCloseModal = () => {
        console.log('Modal closed');
        // Handle closing the modal
    };

    return (
        <View style={styles.container}>
            <EmojiList onSelect={handleSelect} onCloseModal={handleCloseModal} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});