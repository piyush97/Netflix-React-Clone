import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';

interface Props extends RouteComponentProps {
    path?: string;
}
const Signin: React.FC<Props> = () => {
    return (
        <>
            <HeaderContainer>Sign In</HeaderContainer>
            <FooterContainer></FooterContainer>
        </>
    );
};
export default Signin;
