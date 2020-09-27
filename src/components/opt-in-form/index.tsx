import React from 'react';
import { Container, Text, Input, Button, Break } from './styles/opt-in-form';

interface Props {
    children?: any;
    restProps?: any;
    placeholder?: string;
}
const OptInForm = ({ children, ...restProps }: Props) => {
    return <Container {...restProps}>{children}</Container>;
};
OptInForm.Input = ({ ...restProps }: Props) => {
    return <Input {...restProps} />;
};
OptInForm.Button = ({ children, ...restProps }: Props) => {
    return (
        <Button {...restProps}>
            {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
        </Button>
    );
};
OptInForm.Text = ({ children, ...restProps }: Props) => {
    return <Text {...restProps}>{children}</Text>;
};
OptInForm.Break = ({ children, ...restProps }: Props) => {
    return <Break {...restProps} />;
};
export default OptInForm;
