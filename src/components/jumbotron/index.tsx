import React from 'react';
import { Container, Inner } from './styles/jumbotron';

interface Props {
    children?: object;
    direction?: string;
    restProps?: object;
}
const Jumbotron: React.FC<Props> = ({ direction = 'row' }) => {
    return (
        <Inner direction={direction}>
            <p>Hello</p>
        </Inner>
    );
};
export const JumbotronContainer: React.FC<Props> = ({ children, ...restProps }) => {
    return <Container {...restProps}>{children}</Container>;
};

export default Jumbotron;
