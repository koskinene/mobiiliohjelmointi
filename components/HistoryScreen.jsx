import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function HistoryScreen({ route, navigation }) {
    const { data } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <Text>History:</Text>
                <FlatList data={data} renderItem={({ item }) => <Text>{item.key}</Text>} keyExtractor={(item, index) => index} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 20
    },
    list: {
        width: '100%',
        alignItems: 'center',
    }
});
