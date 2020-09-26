import React from 'react';
import { Container } from './styles/footer';

interface Props {
    children?: object;
    restProps?: object;
}
const Footer = ({ children, ...restProps }: Props) => {
    return <Container {...restProps}>{children}</Container>;
};
export default Footer;
