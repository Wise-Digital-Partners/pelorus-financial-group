import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

import ButtonSolid from "../Button/ButtonSolid";

const FAQs = ({ className, headingLevel, questionsAnswers }) => {
  const HeadingTag = headingLevel || "h2";

  return (
    <section className={`${className || "mb-16 md:mb-32"}`}>
      <div className="container">
        <div className="grid md:grid-cols-12 gap-y-12 md:gap-x-10 lg:gap-x-20">
          <div className="md:col-start-1 md:col-span-5">
            <HeadingTag className="font-body text-4xl ">
              Frequently Asked Questions
            </HeadingTag>
            <p className="text-sm text-gray-900">
              Get answers to the questions we get the most. You can also reach
              out to speak with someone on our team.
            </p>
            <ButtonSolid modal="modal-contact" text="Contact Us" />
          </div>

          <div className="md:col-end-13 md:col-span-7">
            <Accordion
              allowZeroExpanded={true}
              className="border-t border-solid border-black/30"
            >
              {questionsAnswers.map((faq, i) => {
                return (
                  <div key={i}>
                    <AccordionItem
                      className="border-b border-solid border-black/30 py-7"
                      uuid={i}
                    >
                      <AccordionItemButton className="flex items-center justify-between focus:outline-none">
                        <p className="font-semibold mb-0">{faq.question}</p>
                        <AccordionItemState>
                          {(state) => {
                            const icon = state.expanded
                              ? "fa-minus"
                              : "fa-plus";
                            return (
                              <i
                                className={`fal ${icon} text-xl text-primary-800 ml-6`}
                              ></i>
                            );
                          }}
                        </AccordionItemState>
                      </AccordionItemButton>
                      <AccordionItemPanel className="pt-4 animate-fadeIn">
                        <p className="mb-0">{faq.answer}</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </div>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
