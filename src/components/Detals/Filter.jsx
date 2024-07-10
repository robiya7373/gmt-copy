import React, { useState } from 'react';
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Slider,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FilterSidebar = () => {
  const [priceRange, setPriceRange] = useState([20000, 950000]);
  const [selectedCountries, setSelectedCountries] = useState({
    Australia: false,
    Austria: false,
    Belarus: true,
    Belgium: false,
    UK: false,
    Germany: false,
    Israel: false,
    Spain: true,
  });
  const [condition, setCondition] = useState({
    new: true,
    demo: false,
  });

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleCountryChange = (event) => {
    setSelectedCountries({
      ...selectedCountries,
      [event.target.name]: event.target.checked,
    });
  };

  const handleConditionChange = (event) => {
    setCondition({
      ...condition,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Box sx={{ width: 250, padding: 2 }}>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ color: '#088269' }}>
          <Typography>Фильтр по товарам</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ color: '#088269' }}>
              <Typography>Цена</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                <Typography>
                  От: {priceRange[0].toLocaleString()} До: {priceRange[1].toLocaleString()}
                </Typography>
                <Slider
                  value={priceRange}
                  min={20000}
                  max={950000}
                  onChange={handlePriceChange}
                  valueLabelDisplay="auto"
                  sx={{
                    color: '#088269',
                  }}
                />
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ color: '#088269' }}>
              <Typography>Страна</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TextField
                label="Поиск по стране"
                variant="outlined"
                fullWidth
                margin="dense"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#088269',
                    },
                    '&:hover fieldset': {
                      borderColor: '#088269',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#088269',
                    },
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: '#088269',
                  },
                }}
              />
              <FormGroup>
                {Object.keys(selectedCountries).map((country) => (
                  <FormControlLabel
                    key={country}
                    control={
                      <Checkbox
                        checked={selectedCountries[country]}
                        onChange={handleCountryChange}
                        name={country}
                        sx={{
                          color: '#088269',
                          '&.Mui-checked': {
                            color: '#088269',
                          },
                        }}
                      />
                    }
                    label={country}
                  />
                ))}
              </FormGroup>
            </AccordionDetails>
          </Accordion>

          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ color: '#088269' }}>
              <Typography>Состояние</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={condition.new}
                      onChange={handleConditionChange}
                      name="new"
                      sx={{
                        color: '#088269',
                        '&.Mui-checked': {
                          color: '#088269',
                        },
                      }}
                    />
                  }
                  label="Новый"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={condition.demo}
                      onChange={handleConditionChange}
                      name="demo"
                      sx={{
                        color: '#088269',
                        '&.Mui-checked': {
                          color: '#088269',
                        },
                      }}
                    />
                  }
                  label="Демонстрационный"
                />
              </FormGroup>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ color: '#088269' }}>
              <Typography>Бренд</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {/* Add Brand Filter content here */}
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ color: '#088269' }}>
              <Typography>Назначение</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {/* Add Usage Filter content here */}
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ color: '#088269' }}>
              <Typography>Комплектация</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {/* Add Configuration Filter content here */}
            </AccordionDetails>
          </Accordion>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FilterSidebar;


