import { Pressable, StyleSheet, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';

type Props = {
    icons: keyof typeof MaterialIcons.glyphMap;
    label: string;
    onPress: () => void;
};

export default function IconButton({ icon, label, onPress }: Props) {
    return (
        <Pressable style={StyleSheet.iconButton} onPress={onPress}>
            <MaterialIcons name={icon} size={24} color="#fff" />
            <Text style={StyleSheet.iconButtonLabel}>{label}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    iconButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconButtonLabel: {
        color: '#fff',
        marginTop: 12,
    },
});