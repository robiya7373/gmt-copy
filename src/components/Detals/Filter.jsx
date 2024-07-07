// import React, { useState } from 'react';
// import {
//   Box,
//   Checkbox,
//   FormControlLabel,
//   FormGroup,
//   Slider,
//   TextField,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Typography,
// } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// const FilterSidebar = () => {
//   const [priceRange, setPriceRange] = useState([20000, 950000]);
//   const [selectedCountries, setSelectedCountries] = useState({
//     Australia: false,
//     Austria: false,
//     Belarus: true,
//     Belgium: false,
//     UK: false,
//     Germany: false,
//     Israel: false,
//     Spain: true,
//   });
//   const [condition, setCondition] = useState({
//     new: true,
//     demo: false,
//   });

//   const handlePriceChange = (event, newValue) => {
//     setPriceRange(newValue);
//   };

//   const handleCountryChange = (event) => {
//     setSelectedCountries({
//       ...selectedCountries,
//       [event.target.name]: event.target.checked,
//     });
//   };

//   const handleConditionChange = (event) => {
//     setCondition({
//       ...condition,
//       [event.target.name]: event.target.checked,
//     });
//   };

//   return (
//     <Box sx={{ width: 250, padding: 2 }}>
//       <Accordion defaultExpanded>
//         <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ color: '#088269' }}>
//           <Typography>Фильтр по товарам</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Accordion defaultExpanded>
//             <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ color: '#088269' }}>
//               <Typography>Цена</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Box>
//                 <Typography>
//                   От: {priceRange[0].toLocaleString()} До: {priceRange[1].toLocaleString()}
//                 </Typography>
//                 <Slider
//                   value={priceRange}
//                   min={20000}
//                   max={950000}
//                   onChange={handlePriceChange}
//                   valueLabelDisplay="auto"
//                   sx={{
//                     color: '#088269',
//                   }}
//                 />
//               </Box>
//             </AccordionDetails>
//           </Accordion>

//           <Accordion defaultExpanded>
//             <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ color: '#088269' }}>
//               <Typography>Страна</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <TextField
//                 label="Поиск по стране"
//                 variant="outlined"
//                 fullWidth
//                 margin="dense"
//                 sx={{
//                   '& .MuiOutlinedInput-root': {
//                     '& fieldset': {
//                       borderColor: '#088269',
//                     },
//                     '&:hover fieldset': {
//                       borderColor: '#088269',
//                     },
//                     '&.Mui-focused fieldset': {
//                       borderColor: '#088269',
//                     },
//                   },
//                   '& .MuiInputLabel-root.Mui-focused': {
//                     color: '#088269',
//                   },
//                 }}
//               />
//               <FormGroup>
//                 {Object.keys(selectedCountries).map((country) => (
//                   <FormControlLabel
//                     key={country}
//                     control={
//                       <Checkbox
//                         checked={selectedCountries[country]}
//                         onChange={handleCountryChange}
//                         name={country}
//                         sx={{
//                           color: '#088269',
//                           '&.Mui-checked': {
//                             color: '#088269',
//                           },
//                         }}
//                       />
//                     }
//                     label={country}
//                   />
//                 ))}
//               </FormGroup>
//             </AccordionDetails>
//           </Accordion>

//           <Accordion defaultExpanded>
//             <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ color: '#088269' }}>
//               <Typography>Состояние</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <FormGroup>
//                 <FormControlLabel
//                   control={
//                     <Checkbox
//                       checked={condition.new}
//                       onChange={handleConditionChange}
//                       name="new"
//                       sx={{
//                         color: '#088269',
//                         '&.Mui-checked': {
//                           color: '#088269',
//                         },
//                       }}
//                     />
//                   }
//                   label="Новый"
//                 />
//                 <FormControlLabel
//                   control={
//                     <Checkbox
//                       checked={condition.demo}
//                       onChange={handleConditionChange}
//                       name="demo"
//                       sx={{
//                         color: '#088269',
//                         '&.Mui-checked': {
//                           color: '#088269',
//                         },
//                       }}
//                     />
//                   }
//                   label="Демонстрационный"
//                 />
//               </FormGroup>
//             </AccordionDetails>
//           </Accordion>

//           <Accordion>
//             <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ color: '#088269' }}>
//               <Typography>Бренд</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               {/* Add Brand Filter content here */}
//             </AccordionDetails>
//           </Accordion>

//           <Accordion>
//             <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ color: '#088269' }}>
//               <Typography>Назначение</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               {/* Add Usage Filter content here */}
//             </AccordionDetails>
//           </Accordion>

//           <Accordion>
//             <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ color: '#088269' }}>
//               <Typography>Комплектация</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               {/* Add Configuration Filter content here */}
//             </AccordionDetails>
//           </Accordion>
//         </AccordionDetails>
//       </Accordion>
//     </Box>
//   );
// };

// export default FilterSidebar;




import React, { useState } from 'react';
import {
  Box,
  TextField,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Slider,
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';
import tovar from '../../utils/tovarData'; // Import your product data

const ProductFilter = () => {
  const [priceRange, setPriceRange] = useState([20000, 950000]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [availability, setAvailability] = useState(true);

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleAvailabilityChange = (event) => {
    setAvailability(event.target.checked);
  };

  const filteredProducts = tovar
    .filter(
      (product) =>
        product.price.replace(' руб.', '').replace(' ', '') >= priceRange[0] &&
        product.price.replace(' руб.', '').replace(' ', '') <= priceRange[1] &&
        (product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.desc.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (availability ? product.position === 'В наличии' : true)
    )
    .sort((a, b) => {
      if (sortOption === 'priceAsc') {
        return (
          parseInt(a.price.replace(' руб.', '').replace(' ', '')) -
          parseInt(b.price.replace(' руб.', '').replace(' ', ''))
        );
      } else if (sortOption === 'priceDesc') {
        return (
          parseInt(b.price.replace(' руб.', '').replace(' ', '')) -
          parseInt(a.price.replace(' руб.', '').replace(' ', ''))
        );
      } else if (sortOption === 'titleAsc') {
        return a.title.localeCompare(b.title);
      } else if (sortOption === 'titleDesc') {
        return b.title.localeCompare(a.title);
      }
      return 0;
    });

  return (
    <Box sx={{ padding: 2 }}>
      <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }}>
        <TextField
          label="Поиск"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Select
          label="Сортировать по"
          value={sortOption}
          onChange={handleSortChange}
          displayEmpty
          variant="outlined"
          sx={{ minWidth: 200 }}
        >
          <MenuItem value="">Нет</MenuItem>
          <MenuItem value="priceAsc">Цена: по возрастанию</MenuItem>
          <MenuItem value="priceDesc">Цена: по убыванию</MenuItem>
          <MenuItem value="titleAsc">Название: по возрастанию</MenuItem>
          <MenuItem value="titleDesc">Название: по убыванию</MenuItem>
        </Select>
        <FormControlLabel
          control={
            <Checkbox
              checked={availability}
              onChange={handleAvailabilityChange}
            />
          }
          label="В наличии"
        />
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <Typography>
          Цена: {priceRange[0].toLocaleString()} - {priceRange[1].toLocaleString()} руб.
        </Typography>
        <Slider
          value={priceRange}
          min={20000}
          max={950000}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          sx={{ color: '#088269' }}
        />
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        {filteredProducts.map((product) => (
          <Card key={product.id} sx={{ width: 250 }}>
            <CardMedia
              component="img"
              height="140"
              image={product.image}
              alt={product.alt}
            />
            <CardContent>
              <Typography variant="h6">{product.title}</Typography>
              <Typography variant="body2">{product.desc}</Typography>
              <Typography variant="body2">{product.position}</Typography>
              <Typography variant="body2">{product.price}</Typography>
              <Typography
                variant="body2"
                sx={{
                  backgroundColor: product.labelClass,
                  color: '#fff',
                  padding: '2px 4px',
                  borderRadius: '4px',
                  display: 'inline-block',
                  marginTop: '8px',
                }}
              >
                {product.label}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ProductFilter;