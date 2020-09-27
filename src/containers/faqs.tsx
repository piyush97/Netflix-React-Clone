import React from 'react';
import faqsData from '../fixtures/faqs.json';
import Accordian from '../components/accordian';
import OptInForm from '../components/opt-in-form';

interface Props {}

export const FaqsContainer: React.FC<Props> = () => {
    return (
        <Accordian>
            <Accordian.Title>Frequently Asked Questions</Accordian.Title>
            {faqsData.map((item) => (
                <Accordian.Item>
                    <Accordian.Header>{item.header}</Accordian.Header>
                    <Accordian.Body>{item.body}</Accordian.Body>
                </Accordian.Item>
            ))}
            <OptInForm>
                <OptInForm.Input placeholder="Email Address" />
                <OptInForm.Button>Try it now</OptInForm.Button>
                <OptInForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptInForm.Text>
            </OptInForm>
        </Accordian>
    );
};
