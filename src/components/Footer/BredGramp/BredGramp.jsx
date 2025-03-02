import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { AiOutlinePlus } from 'react-icons/ai';
import { FiArrowUpRight } from 'react-icons/fi';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  border: 0,
  paddingBlock: '10px',
  backgroundColor: '#088269',
  '&:not(:last-child)': {
    borderBottom: `1px solid #fff`,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={<AiOutlinePlus />} {...props} />
))(({ expanded }) => ({
  backgroundColor: '#088269',
  color: '#fff',
  fontSize: '1.2rem',
  flexDirection: 'justify-between',
  '& .MuiAccordionSummary-expandIconWrapper': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: expanded ? '#088269' : '#088269',
    color: expanded ? '#fff' : '#fff',
    transition: 'transform 200ms',
    border: '1px solid #D5D1E1',
     },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(45deg)',
    backgroundColor:"#fff",
    color:"#088269",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  color: '#fff',
  backgroundColor: '#088269',
}));

export default function BredGramp() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="bg-[#088269] py-[60px] lg:py-[120px] mb-[60px] md:mb-[120px] lg:mb-[150px]">
      <div className="max-w-[1440px] mx-auto px-5 grid grid-cols-1 md:grid-cols-2">
        <div className="text-white">
          <p className="text-[18px] md:text-[20px] lg:text-[30px] font-medium leading-[120%] text-white mb-[50px]">
            Информация о компании
          </p>
        </div>
        <div className="md:border-t">
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography>
                <p className="text-[18px]">О компании</p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p className="text-[16px] bg-[#088269] p-4">
                  Но синтетическое тестирование, в своём классическом представлении, допускает
                  внедрение поэтапного и последовательного развития общества. В рамках спецификации
                  современных стандартов, сторонники тоталитаризма в науке будут функционально
                  разнесены.
                </p>
                <button className="mt-[40px] flex text-[14px] items-center gap-1">
                  Подробнее <FiArrowUpRight className="text-[16px]" />
                </button>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
              <Typography>
                <p className="text-[18px]">Преимущества сотрудников</p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p className="text-[16px] bg-[#088269] p-4">
                  Но синтетическое тестирование, в своём классическом представлении, допускает
                  внедрение поэтапного и последовательного развития общества. В рамках спецификации
                  современных стандартов, сторонники тоталитаризма в науке будут функционально
                  разнесены.
                </p>
                <button className="mt-[40px] flex text-[14px] items-center gap-1">
                  Подробнее <FiArrowUpRight className="text-[16px]" />
                </button>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
              <Typography>
                <p className="text-[18px]">Достижения компании</p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p className="text-[16px] bg-[#088269] p-4">
                  Но синтетическое тестирование, в своём классическом представлении, допускает
                  внедрение поэтапного и последовательного развития общества. В рамках спецификации
                  современных стандартов, сторонники тоталитаризма в науке будут функционально
                  разнесены.
                </p>
                <button className="mt-[40px] flex text-[14px] items-center gap-1">
                  Подробнее <FiArrowUpRight className="text-[16px]" />
                </button>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
              <Typography>
                <p className="text-[18px]">Карьерный рост</p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p className="text-[16px] bg-[#088269] p-4">
                  Но синтетическое тестирование, в своём классическом представлении, допускает
                  внедрение поэтапного и последовательного развития общества. В рамках спецификации
                  современных стандартов, сторонники тоталитаризма в науке будут функционально
                  разнесены.
                </p>
                <button className="mt-[40px] flex text-[14px] items-center gap-1">
                  Подробнее <FiArrowUpRight className="text-[16px]" />
                </button>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
