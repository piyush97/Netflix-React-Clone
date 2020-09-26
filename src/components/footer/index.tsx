import React from 'react';
import { Container, Row } from './styles/footer';

interface Props {
    children?: object;
    restProps?: object;
}
const Footer = ({ children, ...restProps }: Props) => {
    return <Container {...restProps}>{children}</Container>;
};
Footer.Row = ({ children, ...restProps }: Props) => {
    return <Row {...restProps}>{children}</Row>;
};
export default Footer;
