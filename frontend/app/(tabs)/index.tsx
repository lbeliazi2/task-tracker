// src/screens/TaskListScreen.tsx
import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    LayoutAnimation,
    UIManager,
    Platform,
    SafeAreaView,
} from 'react-native';
import TaskItem from "@/app/(tabs)/TaskItem";

if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const mockTasks = [
    { id: 1, title: 'Buy groceries', category: 'Personal' },
    { id: 2, title: 'Finish report', category: 'Work' },
    { id: 3, title: 'Book tickets', category: 'Personal' },
    { id: 4, title: 'Team meeting', category: 'Work' },
];

export default function TaskListScreen() {
    const [tasks, setTasks] = useState(mockTasks);

    const addTask = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const newTask = {
            id: Date.now(),
            title: 'New Task ' + (tasks.length + 1),
            category: tasks.length % 2 === 0 ? 'Personal' : 'Work',
        };
        setTasks([...tasks, newTask]);
    };

    const groupedTasks = tasks.reduce((acc, task) => {
        if (!acc[task.category]) acc[task.category] = [];
        acc[task.category].push(task);
        return acc;
    }, {} as Record<string, typeof tasks>);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={Object.keys(groupedTasks)}
                keyExtractor={(item) => item}
                renderItem={({ item: category }) => (
                    <View style={styles.categoryContainer}>
                        <Text style={styles.categoryTitle}>{category}</Text>
                        {groupedTasks[category].map((task) => (
                            <TaskItem key={task.id} title={task.title} />
                        ))}
                    </View>
                )}
                ListFooterComponent={
                    <TouchableOpacity onPress={addTask} style={styles.button}>
                        <Text style={styles.buttonText}>+ Add Task</Text>
                    </TouchableOpacity>
                }
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f0f4f7',
    },
    categoryContainer: {
        marginBottom: 16,
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    categoryTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#333',
    },
    button: {
        marginTop: 24,
        backgroundColor: '#1e90ff',
        padding: 16,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});