import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";

const filterOptions = createFilterOptions({
  matchFrom: "start",
  stringify: (option) => option.title,
});

const Cards = ({title, year}) => {
    return (
      <>
          <div className="cards">
              <h1>{title}</h1>
              <h1>{year}</h1>
          </div>
      </>
    )
  }

export const Booking = () => {
  return (
    <>
      <h1>Booking</h1>

      <Autocomplete
        options={topCars}
        getOptionLabel={(option) => option.title}
        filterOptions={filterOptions}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Custom filter" />
        )}
      />
        {topCars.map(({title, year}) => (
            <Cards title={title} year={year}/>
        ))}
        
    </>
  );
};

const topCars = [
    { title: 'Toyota Corolla', year: 2021 },
    { title: 'Honda Civic', year: 2020 },
    { title: 'Ford Mustang', year: 2022 },
    { title: 'Chevrolet Camaro', year: 2019 },
    { title: 'Tesla Model 3', year: 2023 },
    { title: 'BMW 3 Series', year: 2021 },
    { title: 'Audi A4', year: 2020 },
    { title: 'Mercedes-Benz C-Class', year: 2022 },
    { title: 'Volkswagen Golf', year: 2019 },
    { title: 'Porsche 911', year: 2023 },
    { title: 'Subaru Outback', year: 2021 },
    { title: 'Hyundai Elantra', year: 2020 },
    { title: 'Kia Soul', year: 2022 },
    { title: 'Mazda CX-5', year: 2023 },
    { title: 'Nissan Altima', year: 2019 },
    { title: 'Jeep Wrangler', year: 2021 },
    { title: 'Dodge Charger', year: 2020 },
    { title: 'Lexus RX', year: 2023 },
    { title: 'Ferrari 488 GTB', year: 2022 },
    { title: 'Lamborghini Huracan', year: 2023 },
    { title: 'Volvo XC90', year: 2021 },
    { title: 'Land Rover Range Rover', year: 2022 },
    { title: 'Jaguar F-Type', year: 2020 },
    { title: 'Mini Cooper', year: 2019 },
    { title: 'Chrysler 300', year: 2021 },
    { title: 'Acura TLX', year: 2022 },
    { title: 'Infiniti Q50', year: 2020 },
    { title: 'Cadillac Escalade', year: 2023 },
    { title: 'Mitsubishi Outlander', year: 2021 },
    { title: 'Peugeot 208', year: 2020 },
    { title: 'Toyota Supra', year: 2022 },
    { title: 'Chevrolet Corvette', year: 2021 },
    { title: 'Ford Explorer', year: 2020 },
    { title: 'Tesla Model S', year: 2023 },
    { title: 'Audi Q7', year: 2022 },
    { title: 'BMW X5', year: 2021 },
    { title: 'Honda Accord', year: 2020 },
    { title: 'Hyundai Tucson', year: 2022 },
    { title: 'Nissan GT-R', year: 2023 },
    { title: 'Mazda MX-5 Miata', year: 2019 },
    { title: 'Jeep Grand Cherokee', year: 2021 },
    { title: 'Kia Telluride', year: 2023 },
    { title: 'Toyota Highlander', year: 2020 },
    { title: 'Ford F-150', year: 2022 },
    { title: 'Chevrolet Silverado', year: 2021 },
    { title: 'GMC Sierra', year: 2023 },
    { title: 'Volvo XC60', year: 2022 },
    { title: 'Land Rover Defender', year: 2021 },
    { title: 'Porsche Macan', year: 2022 },
    { title: 'BMW i8', year: 2020 },
    { title: 'Jaguar XE', year: 2021 },
    { title: 'Mercedes-Benz E-Class', year: 2022 },
    { title: 'Audi R8', year: 2023 },
    { title: 'Lexus IS', year: 2020 },
    { title: 'Dodge Challenger', year: 2021 },
    { title: 'Ferrari SF90 Stradale', year: 2023 },
    { title: 'Lamborghini Aventador', year: 2022 },
    { title: 'Toyota Prius', year: 2021 },
    { title: 'Subaru Impreza', year: 2022 },
    { title: 'Honda CR-V', year: 2020 },
    { title: 'Mitsubishi Eclipse Cross', year: 2021 },
    { title: 'Peugeot 3008', year: 2022 },
    { title: 'Renault Clio', year: 2020 },
    { title: 'Fiat 500', year: 2021 },
    { title: 'Citroën C3', year: 2022 },
    { title: 'Volkswagen Passat', year: 2023 },
    { title: 'Chevrolet Tahoe', year: 2021 },
    { title: 'Ford Edge', year: 2020 },
    { title: 'Mazda6', year: 2022 },
    { title: 'Hyundai Kona', year: 2023 },
    { title: 'Kia Stinger', year: 2021 },
    { title: 'Nissan Pathfinder', year: 2022 },
    { title: 'Subaru Forester', year: 2023 },
    { title: 'Mercedes-Benz GLE', year: 2021 },
    { title: 'Audi A6', year: 2020 },
    { title: 'BMW 5 Series', year: 2022 },
    { title: 'Tesla Model Y', year: 2023 },
    { title: 'Toyota RAV4', year: 2022 },
    { title: 'Chevrolet Equinox', year: 2021 },
    { title: 'Honda HR-V', year: 2020 },
    { title: 'Jeep Cherokee', year: 2023 },
    { title: 'Ford Escape', year: 2022 },
    { title: 'Mazda CX-9', year: 2021 },
    { title: 'Volvo V60', year: 2022 },
    { title: 'Land Rover Discovery', year: 2023 },
    { title: 'Porsche Taycan', year: 2022 },
  ];
  
