import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import LayoutQuestao from "@/components/LayoutQuestao";

const Questao2_3 = () => {
  const [produtos, setProdutos] = useState([]); // Lista de produtos
  const [filteredProdutos, setFilteredProdutos] = useState([]); // Produtos filtrados
  const [search, setSearch] = useState(""); // Estado de busca

  // Gera os 100 mpriemiros
  useEffect(() => {
    const produtosGerados = Array.from({ length: 100 }, () =>
      faker.commerce.productName()
    );
    setProdutos(produtosGerados);
    setFilteredProdutos(produtosGerados); // todos sao exibidos
  }, []);

  // Filtra os nomes de acordo com que é digitado
  const handleInputChange = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearch(searchValue);
    setFilteredProdutos(
      produtos.filter((produto) =>
        produto.toLowerCase().startsWith(searchValue)
      )
    );
  };

  return (
    <LayoutQuestao titulo="Questão 2.3 - Filtrar Produtos">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginTop="2rem"
      >
        {/* Input para buscar produtos */}
        <TextField
          label="Busque por um produto"
          variant="outlined"
          value={search}
          onChange={handleInputChange}
          style={{ marginBottom: "1rem", width: "300px" }}
        />

        {/* Exibição da lista de produtos filtrados */}
        <List style={{ maxHeight: "300px", overflow: "auto", width: "300px" }}>
          {filteredProdutos.map((produto, index) => (
            <ListItem key={index}>
              <Typography variant="body1">{produto}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </LayoutQuestao>
  );
};

export default Questao2_3;
