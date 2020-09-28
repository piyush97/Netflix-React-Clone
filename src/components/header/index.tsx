import React from 'react';
import { Background, Logo, Container, ButtonLink } from './styles/header';
import { Link as ReachRouterLink } from '@reach/router';

interface Props {
    children?: any;
    restProps?: any;
    bg?: boolean;
    to?: any;
    alt?: string;
    src?: any;
}
const Header = ({ bg = true, children, ...restProps }: Props) => {
    return bg ? <Background {...restProps}>{children}</Background> : children;
};
Header.Frame = ({ restProps, children }: Props) => {
    return <Container {...restProps}>{children}</Container>;
};
Header.Button = ({ restProps, children }: Props) => {
    return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
Header.Logo = ({ restProps, to }: Props) => {
    return (
        <ReachRouterLink to={to}>
            {' '}
            <Logo {...restProps}></Logo>
        </ReachRouterLink>
    );
};

export default Header;
