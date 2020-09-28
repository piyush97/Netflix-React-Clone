import React from 'react';
import Header from '../components/header';
import * as ROUTES from '../constants/routes';
import Logo from '../logo.svg';
interface Props {
    to?: any;
}

export const HeaderContainer: React.FC<Props> = () => {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} alt="Netflix" src={Logo} />
                <Header.ButtonLink to={ROUTES.HOME}> Sign In</Header.ButtonLink>
            </Header.Frame>
        </Header>
    );
};
