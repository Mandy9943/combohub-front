import { fetcher } from "@/utils/api";
import baseApiUrl from "@/utils/baseApiUrl";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import ReactMarkdown from "react-markdown";
import useSwr from "swr";
const FaqContent = () => {
  const { data: faq } = useSwr(
    `${baseApiUrl}/api/faq?populate=faqList`,
    fetcher
  );

  return (
    <>
      <div className="faq-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>FAQ</span>
            <h2>Preguntas Frecuentes</h2>
          </div>

          {faq && (
            <div className="faq-accordion">
              <Accordion preExpanded={["a"]}>
                {faq.data.attributes.faqList.map((faqInfo) => (
                  <AccordionItem key={faqInfo.id} uuid={faqInfo.uuid}>
                    <AccordionItemHeading>
                      <AccordionItemButton>{faqInfo.title}</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <ReactMarkdown>{faqInfo.text}</ReactMarkdown>
                    </AccordionItemPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FaqContent;
