import React from 'react';
import BaseText from './Base';

interface TextProps {
  children: React.ReactNode;
  size?: string;
  textStyle?: string;
  color?: string;
}

const Text = ({ children, size, textStyle, ...others }: TextProps) => (
  <BaseText size={size} textStyle={textStyle} {...others}>
    {children}
  </BaseText>
);

export default Text;
