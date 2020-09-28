import React from 'react';
import { Header } from '../components';
export const Header: React.FC = () => {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo />
                <Header.Button />
            </Header.Frame>
        </Header>
    );
};
