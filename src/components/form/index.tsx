import React from 'react';
import { Container, Base, Error, Title, Text, TextSmall, Link, Input, Submit } from './styles/form';

interface Props {
    children?: React.ReactNode;
    restProps?: any;
    onSubmit?: any;
    method?: string;
    placeholder?: string;
    value?: string;
    onChange?: any;
    disabled?: boolean;
    type?: any;
    to?: string;
}

export default function Form({ children, ...restProps }: Props) {
    return <Container {...restProps}>{children}</Container>;
}
Form.Title = function FormTitle({ children, ...restProps }: Props) {
    return <Title {...restProps}>{children}</Title>;
};
Form.Error = function FormError({ children, ...restProps }: Props) {
    return <Error {...restProps}>{children}</Error>;
};
Form.Base = function FormBase({ children, ...restProps }: Props) {
    return <Base {...restProps}>{children}</Base>;
};
Form.Text = function FormText({ children, ...restProps }: Props) {
    return <Text {...restProps}>{children}</Text>;
};
Form.TextSmall = function FormTextSmall({ children, ...restProps }: Props) {
    return <TextSmall {...restProps}>{children}</TextSmall>;
};
Form.Link = function FormLink({ children, ...restProps }: Props) {
    return <Link {...restProps}>{children}</Link>;
};
Form.Input = function FormInput({ children, ...restProps }: Props) {
    return <Input {...restProps}>{children}</Input>;
};
Form.Submit = function FormSubmit({ children, ...restProps }: Props) {
    return <Submit {...restProps}>{children}</Submit>;
};
