import React, { useState } from 'react';
import {
    Container,
    Group,
    Background,
    Dropdown,
    Picture,
    Link,
    Search,
    Profile,
    FeatureCallOut,
    SearchIcon,
    SearchInput,
    ButtonLink,
    PlayButton,
    Text,
    Feature,
    Logo,
} from './styles/header';
interface Props {
    children?: any
    bg?: boolean;
    searchTerm?: any;
    setSearchTerm?: any;
    src?: string;
    alt?: string;
    to?: any;
}
export default function Header({ bg = true, children, ...restProps }: Props) {
    return bg ? (
        <Background data-testid="header-bg" {...restProps}>
            {children}
        </Background>
    ) : (
            children
        );
}
Header.Frame = function HeaderFrame({ children, ...restProps }: Props) {
    return <Container {...restProps}>{children}</Container>;
};
Header.Group = function HeaderGroup({ children, ...restProps }: Props) {
    return <Group {...restProps}>{children}</Group>;
};
Header.Logo = function HeaderLogo({ alt, src, ...restProps }: Props) {
    return <Logo {...restProps} />;
};
Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }: Props) {
    const [searchActive, setSearchActive] = useState(false);
    return (
        <Search {...restProps}>
            <SearchIcon onClick={() => setSearchActive((searchActive) => !searchActive)} data-testid="search-click">
                <img src="/images/icons/search.png" alt="Search" />
            </SearchIcon>
            <SearchInput
                value={searchTerm}
                onChange={({ target }) => setSearchTerm(target.value)}
                placeholder="Search films and series"
                active={searchActive}
                data-testid="search-input"
            />
        </Search>
    );
};
Header.Profile = function HeaderProfile({ children, ...restProps }: Props) {
    return <Profile {...restProps}>{children}</Profile>;
};
Header.Feature = function HeaderFeature({ children, ...restProps }: Props) {
    return <Feature {...restProps}>{children}</Feature>;
};
Header.Picture = function HeaderPicture({ src, ...restProps }: Props) {
    return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};
Header.Dropdown = function HeaderDropdown({ children, ...restProps }: Props) {
    return <Dropdown {...restProps}>{children}</Dropdown>;
};
Header.TextLink = function HeaderTextLink({ children, ...restProps }: Props) {
    return <Link {...restProps}>{children}</Link>;
};
Header.PlayButton = function HeaderPlayButton({ children, ...restProps }: Props) {
    return <PlayButton {...restProps}>{children}</PlayButton>;
};
Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }: Props) {
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};
Header.Text = function HeaderText({ children, ...restProps }: Props) {
    return <Text {...restProps}>{children}</Text>;
};
Header.ButtonLink = function HeaderButtonLink({ children, to, ...restProps }: Props) {
    return (
        <ButtonLink to={to} {...restProps}>
            {children}
        </ButtonLink>
    );
};
