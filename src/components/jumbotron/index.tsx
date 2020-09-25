import React from 'react';
import { Container, Inner, Pane, SubTitle, Title, Image } from './styles/jumbotron';

interface Props {
    children?: any;
    direction?: string;
    restProps?: any;
    src?: string;
    alt?: string;
}
const Jumbotron = ({ direction, children }: Props) => {
    return (
        <Inner direction={direction}>
            <p>{children}</p>
        </Inner>
    );
};
export const JumbotronContainer = ({ restProps, children }: Props) => {
    return <Container {...restProps}>{children}</Container>;
};
export const JumbotronPane = ({ restProps, children }: Props) => {
    return <Pane {...restProps}>{children}</Pane>;
};
export const JumbotronTitle = ({ restProps, children }: Props) => {
    return <Title {...restProps}>{children}</Title>;
};
export const JumbotronSubtitle = ({ restProps, children }: Props) => {
    return <SubTitle {...restProps}>{children}</SubTitle>;
};
export const JumbotronImage = ({ src, alt }: Props) => {
    return <Image src={src} alt={alt} />;
};
export default Jumbotron;
