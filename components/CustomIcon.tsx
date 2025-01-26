import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface CustomIconProps {
    name: string;
    size: number;
    color: string;
    type: string
}

const CustomIcon = ({ name, size, color, type }: CustomIconProps) => {
    switch (type) {
        case 'AntDesign':
            return <AntDesign name={name} size={size} color={color} />;
        case 'MaterialCommunityIcons':
            return <MaterialCommunityIcons name={name} size={size} color={color} />;
        case 'MaterialIcons':
            return <MaterialIcons name={name} size={size} color={color} />;
        default:
            return null;
    }
};

export default CustomIcon;
