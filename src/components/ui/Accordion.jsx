import React, { useState } from 'react';
import { Card, CardContent, CardTitle } from './Card';

const Accordion = ({ items, children }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // If children are provided, render them (new API)
  if (children) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child) && child.type === AccordionItem) {
            return React.cloneElement(child, {
              isOpen: openIndex === index,
              onToggle: () => toggleAccordion(index),
              index: index,
            });
          }
          return child;
        })}
      </div>
    );
  }

  // If items are provided, render them (old API)
  if (items && items.length > 0) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {items.map((item, index) => (
          <Card
            key={index}
            variant={index % 2 === 0 ? 'light' : ''}
            style={{
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: openIndex === index ? 'translateY(-2px)' : 'none',
              boxShadow:
                openIndex === index
                  ? '6px 6px 0 0 #000000'
                  : '4px 4px 0 0 #000000',
            }}
            onClick={() => toggleAccordion(index)}
          >
            <CardContent>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: openIndex === index ? '1rem' : '0',
                }}
              >
                <CardTitle>
                  <h3
                    style={{
                      margin: 0,
                      fontSize: '1.25rem',
                      cursor: 'pointer',
                      userSelect: 'none',
                    }}
                  >
                    {item.question}
                  </h3>
                </CardTitle>
                <div
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    transform:
                      openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer',
                    userSelect: 'none',
                  }}
                >
                  {openIndex === index ? '−' : '+'}
                </div>
              </div>
              {openIndex === index && (
                <div
                  style={{
                    paddingTop: '1rem',
                    borderTop: '2px solid #000000',
                    animation: 'slideDown 0.3s ease-out',
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontSize: '1rem',
                      lineHeight: '1.6',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {item.answer}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  // If neither items nor children are provided, return null
  return null;
};

// AccordionItem component for the new API
const AccordionItem = ({ title, children, isOpen, onToggle, index }) => {
  return (
    <Card
      variant={index % 2 === 0 ? 'light' : ''}
      style={{
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isOpen ? 'translateY(-2px)' : 'none',
        boxShadow: isOpen ? '6px 6px 0 0 #000000' : '4px 4px 0 0 #000000',
      }}
      onClick={onToggle}
    >
      <CardContent>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: isOpen ? '1rem' : '0',
          }}
        >
          <CardTitle>
            <h3
              style={{
                margin: 0,
                fontSize: '1.25rem',
                cursor: 'pointer',
                userSelect: 'none',
              }}
            >
              {title}
            </h3>
          </CardTitle>
          <div
            style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer',
              userSelect: 'none',
            }}
          >
            {isOpen ? '−' : '+'}
          </div>
        </div>
        {isOpen && (
          <div
            style={{
              paddingTop: '1rem',
              borderTop: '2px solid #000000',
              animation: 'slideDown 0.3s ease-out',
            }}
          >
            {children}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// Attach AccordionItem to Accordion
Accordion.Item = AccordionItem;

export default Accordion;
