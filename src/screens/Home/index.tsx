import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';

import { Profile } from '../../components/Profile';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';

import { styles } from './styles';

export function Home() {
    const [category, setCategory] = useState('');

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'LEANDRO VIADINHO 1',
                icon: null,
                owner: true
            },
            category: '1',
            date: '23/06 às 20h',
            description: 'Leandro de Yasuo, rumo ao ferro IV hoje!'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'LEANDRO VIADINHO 2',
                icon: null,
                owner: true
            },
            category: '1',
            date: '23/06 às 20h',
            description: 'Leandro de Yasuo, rumo ao ferro IV hoje!'
        },
        {
            id: '3',
            guild: {
                id: '1',
                name: 'LEANDRO VIADINHO 3',
                icon: null,
                owner: true
            },
            category: '1',
            date: '23/06 às 20h',
            description: 'Leandro de Yasuo, rumo ao ferro IV hoje!'
        }
    ]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }
    return (
        <View>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>


            <CategorySelect
                categorySelect={category}
                setCategory={handleCategorySelect}
            />

            <View style={styles.content}>
                <ListHeader
                    title="Partidas agendadas"
                    subtitle="Total 2"
                />

                <FlatList
                    data={appointments}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Appointment data={item} />
                    )}
                    ItemSeparatorComponent={() => <ListDivider />}
                    style={styles.matches}
                    showsVerticalScrollIndicator={false}
                />

            </View>
        </View>
    );
}