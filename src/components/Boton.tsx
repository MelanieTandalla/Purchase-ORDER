import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native';
import { styles } from '../themes/pruchaserdertheme';


interface Props {
    texto: string;
    color?: string;
}

export const BotonesFinal = ({ texto, color = '#0A8EBC' }: Props) => {
    return (
        <TouchableOpacity>
            <View style={{
                ...styles.boton,
                backgroundColor: color,
            }}>
                <Text style={{
                    ...styles.botonTexto,
                    color: (color === '#000000') ? 'white' : 'black',
                }}>{texto}</Text>
            </View>
        </TouchableOpacity>
    );
};