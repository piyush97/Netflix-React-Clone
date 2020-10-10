import React from 'react';
import Header from '../components/header';
import * as ROUTES from '../constants/routes';
import Logo from '../logo.svg';
interface Props {
    to?: any;
    children?: React.ReactNode
}

export const HeaderContainer: React.FC<Props> = ({ children }) => {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo alt="Netflix" src={Logo} />
                <Header.ButtonLink to={ROUTES.HOME}> Sign In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    );
};
