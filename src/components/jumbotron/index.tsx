import React from 'react';
import { Container, Inner, Pane, Subtitle, Title, Image } from './styles/jumbotron';

interface Props {
    children?: any;
    direction?: string;
    restProps?: any;
    src?: string;
    alt?: string;
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
export const JumbotronPane: React.FC<Props> = ({ children, ...restProps }) => {
    return <Pane {...restProps}>{children}</Pane>;
};
export const JumbotronTitle: React.FC<Props> = ({ children, ...restProps }) => {
    return <Title {...restProps}>{children}</Title>;
};
export const JumbotronSubtitle: React.FC<Props> = ({ children, ...restProps }) => {
    return <Subtitle {...restProps}>{children}</Subtitle>;
};
export const JumbotronImage: React.FC<Props> = ({ src, alt }) => {
    return <Image src={src} alt={alt} />;
};
export default Jumbotron;
