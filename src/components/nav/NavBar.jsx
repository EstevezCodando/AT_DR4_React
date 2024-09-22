import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./NavBar.css";

const Navbar = () => {
  return (
    <AppBar position="sticky" style={{ backgroundColor: "#1976d2" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          AT DR4
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <div className="nav-item">
          <Button color="inherit" className="nav-links">
            Parte 1
          </Button>
          <ul className="dropdown-menu">
            <li>
              <Link to="/questao1_1" className="nav-links">
                Questão 1.1
              </Link>
            </li>
            <li>
              <Link to="/questao1_2" className="nav-links">
                Questão 1.2
              </Link>
            </li>
            <li>
              <Link to="/questao1_3" className="nav-links">
                Questão 1.3
              </Link>
            </li>
            <li>
              <Link to="/questao1_4" className="nav-links">
                Questão 1.4
              </Link>
            </li>
          </ul>
        </div>

        <div className="nav-item">
          <Button color="inherit" component={Link} to="/parte2">
            Parte 2
          </Button>
          <ul className="dropdown-menu">
            <li>
              <Link to="/questao2_1" className="nav-links">
                Questão 2.1
              </Link>
            </li>
            <li>
              <Link to="/questao2_2" className="nav-links">
                Questão 2.2
              </Link>
            </li>
            <li>
              <Link to="/questao2_3" className="nav-links">
                Questão 2.3
              </Link>
            </li>
            <li>
              <Link to="/questao2_4" className="nav-links">
                Questão 2.4
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-item">
          <Button color="inherit" component={Link} to="/parte3">
            Parte 3
          </Button>
          <ul className="dropdown-menu">
            <li>
              <Link to="/questao3_1" className="nav-links">
                Questão 3.1
              </Link>
            </li>
            <li>
              <Link to="/questao3_2" className="nav-links">
                Questão 3.2
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-item">
          <Button color="inherit" component={Link} to="/parte4">
            Parte 4
          </Button>
          <ul className="dropdown-menu">
            <li>
              <Link to="/questao4_1" className="nav-links">
                Questão 4.1
              </Link>
            </li>
            <li>
              <Link to="/admin-ligado" className="nav-links">
                Admin Ligado
              </Link>
            </li>
            <li>
              <Link to="/admin-desligado" className="nav-links">
                Admin Desligado
              </Link>
            </li>
            <li>
              <Link to="/brasil-selecionado" className="nav-links">
                4.3 Brasil
              </Link>
            </li>
            <li>
              <Link to="/formulario-preenchido" className="nav-links">
                4.4 Formulario preenchido
              </Link>
            </li>
          </ul>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
