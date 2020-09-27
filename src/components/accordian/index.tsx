import React, { createContext, useState, useContext } from 'react';
import { Container, Inner, Title, Frame, Item, Header, Body } from './styles/accordian';

const ToggleContext = createContext();
interface Props {
    children?: any;
    restProps?: any;
}
const Accordian = ({ children, ...restProps }: Props) => {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    );
};
Accordian.Title = ({ children, ...restProps }: Props) => {
    return <Title {...restProps}>{children}</Title>;
};
Accordian.Frame = ({ children, ...restProps }: Props) => {
    return <Frame {...restProps}>{children}</Frame>;
};
Accordian.Item = ({ children, ...restProps }: Props) => {
    const [toggleShow, setToggleShow] = useState(false);
    return (
        <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
            <Item {...restProps}>{children}</Item>
        </ToggleContext.Provider>
    );
};
Accordian.Header = ({ children, ...restProps }: Props) => {
    const { toggleShow, setToggleShow } = useContext(ToggleContext);
    return (
        <Header onClick={() => setToggleShow((toggleShow) => !toggleShow)} {...restProps}>
            {children}
            {toggleShow ? (
                <img src="/images/icons/close-slim.png" alt="Close" />
            ) : (
                <img src="/images/icons/add.png" alt="Open" />
            )}
        </Header>
    );
};
Accordian.Body = ({ children, ...restProps }: Props) => {
    const { toggleShow } = useContext(ToggleContext);
    return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};
export default Accordian;
