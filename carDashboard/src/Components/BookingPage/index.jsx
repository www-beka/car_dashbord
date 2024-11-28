import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import Cards from "./Cards";
import topCars from "./base";

const filterOptions = createFilterOptions({
  matchFrom: "start",
  stringify: (option) => option.title,
});

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
      {topCars.map(({ title, type, manual, users, price }) => (
        <Cards title={title} type={type} manual={manual} users={users} price={price}  />
      ))}
    </>
  );
};

