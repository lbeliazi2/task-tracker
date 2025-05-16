// src/components/TaskItem.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface TaskItemProps {
    title: string;
}

export default function TaskItem({ title }: TaskItemProps) {
    return (
        <View style={styles.container}>
            <Feather name="check-circle" size={20} color="#1e90ff" style={styles.icon} />
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#eef6fd',
        padding: 12,
        borderRadius: 8,
        marginBottom: 6,
    },
    icon: {
        marginRight: 8,
    },
    title: {
        fontSize: 16,
        color: '#333',
    },
});
