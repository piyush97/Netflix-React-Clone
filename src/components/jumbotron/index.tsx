import React from 'react';
import { Container, Inner, Pane, SubTitle, Title, Image, Item } from './styles/jumbotron';

interface Props {
    children?: any;
    direction?: string;
    restProps?: any;
    src?: string;
    alt?: string;
}
const Jumbotron = ({ direction, children }: Props) => {
    return (
        <Item>
            <Inner direction={direction}>{children}</Inner>
        </Item>
    );
};
Jumbotron.Container = ({ restProps, children }: Props) => {
    return <Container {...restProps}>{children}</Container>;
};
Jumbotron.Pane = ({ restProps, children }: Props) => {
    return <Pane {...restProps}>{children}</Pane>;
};
Jumbotron.Title = ({ restProps, children }: Props) => {
    return <Title {...restProps}>{children}</Title>;
};
Jumbotron.Subtitle = ({ restProps, children }: Props) => {
    return <SubTitle {...restProps}>{children}</SubTitle>;
};
Jumbotron.Image = ({ src, alt }: Props) => {
    return <Image src={src} alt={alt} />;
};
export default Jumbotron;
