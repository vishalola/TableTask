import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function FAQItem(props) {
  return (
        <Accordion className="!shadow-none !bg-transparent font-medium sm:text-lg  outlin !border-none border-b  !border-b-slate-200 !py-2">
          <AccordionSummary
          className=""
            expandIcon={<ExpandMoreIcon />}
          >
              {props.question}
          </AccordionSummary>
          <AccordionDetails className="!border-none !shadow-none overflow-hidden text-sm text-gray-500  sm:text-base">
            {props.answer}
          </AccordionDetails>
      </Accordion>
  );
}
