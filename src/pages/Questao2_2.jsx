import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import CircularProgress from "@mui/material/CircularProgress";
import LayoutQuestao from "@/components/LayoutQuestao";

const Questao2_2 = ({ defaultCountry = "" }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();

        const sortedCountries = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );

        setCountries(sortedCountries);
        setLoading(false);

        if (defaultCountry) {
          const country = sortedCountries.find(
            (c) => c.name.common === defaultCountry
          );
          if (country) setSelectedCountry(country);
        }
      } catch (error) {
        console.error("Erro ao buscar países:", error);
        setLoading(false);
      }
    };
    fetchCountries();
  }, [defaultCountry]);

  const handleCountryChange = (event) => {
    const countryName = event.target.value;
    const country = countries.find((c) => c.name.common === countryName);
    setSelectedCountry(country);
  };

  return (
    <LayoutQuestao titulo="Questão 2.2 - Lista de Países">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginTop="2rem"
      >
        {loading ? (
          <CircularProgress />
        ) : (
          <FormControl variant="outlined" style={{ minWidth: 300 }}>
            <InputLabel id="country-select-label">Selecione um país</InputLabel>
            <Select
              labelId="country-select-label"
              id="country-select"
              value={selectedCountry?.name?.common || ""}
              onChange={handleCountryChange}
              label="Selecione um país"
            >
              {countries.map((country) => (
                <MenuItem key={country.cca3} value={country.name.common}>
                  {country.name.common}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}

        {selectedCountry && (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            marginTop="2rem"
          >
            <img
              src={selectedCountry.flags.svg}
              alt={`Bandeira de ${selectedCountry.name.common}`}
              style={{ width: "150px", marginBottom: "1rem" }}
            />

            <Typography variant="h6">
              País: {selectedCountry.name.common}
            </Typography>

            <Typography variant="body1">
              População: {selectedCountry.population.toLocaleString()}
            </Typography>

            <Typography variant="body1" style={{ marginTop: "0.5rem" }}>
              Língua(s): {Object.values(selectedCountry.languages).join(", ")}
            </Typography>
          </Box>
        )}
      </Box>
    </LayoutQuestao>
  );
};


Questao2_2.propTypes = {
  defaultCountry: PropTypes.string, 
};

export default Questao2_2;
