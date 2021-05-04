import React from 'react';
import faqs from '../data/faqData.json';
import FAQBox from '../components/faq-box';
import './faq.css';

const FAQ = (props) => (
    <section>
        <div className="wrap">
            <h2>FAQs</h2>
            {faqs.map((v) => (
                <FAQBox question={v.question} answer={v.answer} />
            ))}
        </div>
    </section>
);

export default FAQ;
