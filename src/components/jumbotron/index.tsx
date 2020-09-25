import React from 'react';
import { Container, Inner } from './styles/jumbotron';

interface Props {
    children?: object;
    direction?: string;
    restProps?: object;
}
const Jumbotron: React.FC<Props> = ({ direction = 'row', children }) => {
    return (
        <Inner direction={direction}>
            <p>{children}</p>
        </Inner>
    );
};
export const JumbotronContainer: React.FC<Props> = ({ children, ...restProps }) => {
    return <Container {...restProps}>{children}</Container>;
};

export default Jumbotron;
