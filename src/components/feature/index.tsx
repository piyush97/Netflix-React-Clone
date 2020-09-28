import React from 'react';
import { Container, SubTitle, Title } from './styles/feature';

interface Props {
    children?: any;
    restProps?: any;
}
const Feature = ({ restProps, children }: Props) => {
    return <Container {...restProps}>{children}</Container>;
};
Feature.Title = ({ restProps, children }: Props) => {
    return <Title {...restProps}>{children}</Title>;
};
Feature.SubTitle = ({ restProps, children }: Props) => {
    return <SubTitle {...restProps}>{children}</SubTitle>;
};

export default Feature;
