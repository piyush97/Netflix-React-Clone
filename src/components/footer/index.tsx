import React from 'react';
import { Column, Container, Link, Row, Title, Text, Break } from './styles/footer';

interface Props {
    children?: React.ReactNode
    restProps?: any;
    href?: string;
}
const Footer = ({ children, ...restProps }: Props) => {
    return <Container {...restProps}>{children}</Container>;
};
Footer.Row = ({ children, ...restProps }: Props) => {
    return <Row {...restProps}>{children}</Row>;
};
Footer.Column = ({ children, ...restProps }: Props) => {
    return <Column {...restProps}>{children}</Column>;
};
Footer.Link = ({ children, ...restProps }: Props) => {
    return <Link {...restProps}>{children}</Link>;
};
Footer.Title = ({ children, ...restProps }: Props) => {
    return <Title {...restProps}>{children}</Title>;
};
Footer.Text = ({ children, ...restProps }: Props) => {
    return <Text {...restProps}>{children}</Text>;
};
Footer.Break = ({ children, ...restProps }: Props) => {
    return <Break {...restProps}>{children}</Break>;
};
export default Footer;
