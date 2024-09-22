import { useState, useEffect } from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import CircularProgress from "@mui/material/CircularProgress";
import LayoutQuestao from "@/components/LayoutQuestao"; 

const Questao2_4 = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); 
  const [loading, setLoading] = useState(true); 

 
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        const data = await response.json();
        setCategories(data.categories);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

 
  const handleCategoryChange = (event) => {
    const categoryName = event.target.value;
    const category = categories.find((cat) => cat.strCategory === categoryName);
    setSelectedCategory(category);
  };

  return (
    <LayoutQuestao titulo="Questão 2.4 - Categorias de Pratos">
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
            <InputLabel id="category-select-label">
              Selecione uma categoria
            </InputLabel>
            <Select
              labelId="category-select-label"
              id="category-select"
              value={selectedCategory?.strCategory || ""}
              onChange={handleCategoryChange}
              label="Selecione uma categoria"
            >
              {categories.map((category) => (
                <MenuItem
                  key={category.idCategory}
                  value={category.strCategory}
                >
                  {category.strCategory}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}

        {/* Exibe os detalhes da categoria selecionada */}
        {selectedCategory && (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            marginTop="2rem"
          >
            {/* Exibe a imagem da categoria */}
            <img
              src={selectedCategory.strCategoryThumb}
              alt={`Imagem da categoria ${selectedCategory.strCategory}`}
              style={{
                width: "300px",
                marginBottom: "1rem",
                borderRadius: "8px",
              }}
            />

            {/* Exibe o nome da categoria */}
            <Typography variant="h6" style={{ marginBottom: "1rem" }}>
              Categoria: {selectedCategory.strCategory}
            </Typography>

            {/* Exibe a descrição da categoria */}
            <Typography
              variant="body1"
              style={{ textAlign: "center", maxWidth: "600px" }}
            >
              {selectedCategory.strCategoryDescription}
            </Typography>
          </Box>
        )}
      </Box>
    </LayoutQuestao>
  );
};

export default Questao2_4;
