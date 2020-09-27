import React from 'react';
import faqsData from '../fixtures/faqs.json';
import Accordian from '../components/accordian/index';

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
        </Accordian>
    );
};
