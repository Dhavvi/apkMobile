import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native'; 
import { useTarefas } from '../hooks/useTarefas'; 
import React from 'react';

export default function ToDoList(){
    const { tarefas, novaTarefa, setNovaTarefa, adicionarTarefa, removerTarefa} = useTarefas();

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Lista de Compras</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite um item da feira..."
                    value={novaTarefa}
                    onChangeText={setNovaTarefa}
                />
                <Button
                    color={'#56B521'}
                    title="Adicionar"
                    onPress={adicionarTarefa}
                />
            </View>

            <FlatList
                data={tarefas}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <View style={styles.tarefaContainer}>
                        <Text style={styles.tarefaTexto}>{item.texto}</Text>
                        <TouchableOpacity onPress={() => removerTarefa(item.id)}>
                            <Text style={styles.remover}>X</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({ 
    container: { flex: 1, padding: 20, backgroundColor: '#EDF2C9' }, 
    titulo: {fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#DC5F87'}, 
    inputContainer: { flexDirection: 'row', marginBottom: 10}, 
    input: { flex: 1, borderWidth: 1, borderColor: '#2B282B', padding: 10, borderRadius: 5, marginRight: 10}, 
    tarefaContainer: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', padding: 15, 
    marginBottom: 5, borderRadius: 5, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 3, elevation: 2}, 
    tarefaTexto: { fontSize: 16}, 
    remover: { fontSize: 18, color: '#DC5F87', fontWeight: 'bold'},
});
