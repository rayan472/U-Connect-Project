import React from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

const TextComponent = ({ text, fontSize = "16px", color = "#000" }) => {
    return <Text>{text}</Text>;
};

export default TextComponent;
