import React, { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How often do you publish new articles?",
      answer:
        "We publish new articles daily to keep you updated with the latest news.",
    },
    {
      question: "Can I submit a news tip?",
      answer:
        "Yes! We encourage our readers to submit news tips through our contact form.",
    },
    {
      question: "Do you have a newsletter?",
      answer:
        "Absolutely! You can subscribe to our newsletter for daily updates directly to your inbox.",
    },
    {
      question: "How can I contribute to the blog?",
      answer:
        "We welcome guest contributions. Please contact us with your article ideas and credentials.",
    },
    {
      question: "Are your articles fact-checked?",
      answer:
        "Yes, all our articles go through a rigorous fact-checking process before publication.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              <h3>{faq.question}</h3>
              <span className="faq-arrow">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <p className="faq-answer">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
