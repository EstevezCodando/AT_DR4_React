import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "@/components/nav/NavBar";
import FormularioSimples from "./pages/Questao3_1";
import Home from "@/pages/Home";
import Questao1_1 from "@/pages/Questao1_1";
import Questao1_2 from "@/pages/Questao1_2";
import Questao1_3 from "@/pages/Questao1_3";
import Questao1_4 from "@/pages/Questao1_4";
import Questao2_1 from "@/pages/Questao2_1";
import Questao2_2 from "@/pages/Questao2_2";
import Questao2_3 from "@/pages/Questao2_3";
import Questao2_4 from "@/pages/Questao2_4";
import Questao3_1 from "@/pages/Questao3_1";
import Questao3_2 from "@/pages/Questao3_2";
import Questao4_1 from "@/pages/Questao4_1";
import "@/global.css"; // Estilos globais

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/questao1_1" element={<Questao1_1 />} />
            <Route path="/questao1_2" element={<Questao1_2 />} />
            <Route path="/questao1_3" element={<Questao1_3 />} />
            <Route path="/questao1_4" element={<Questao1_4 />} />
            <Route path="/questao2_1" element={<Questao2_1 />} />
            <Route path="/questao2_2" element={<Questao2_2 />} />
            <Route path="/questao2_3" element={<Questao2_3 />} />
            <Route path="/questao2_4" element={<Questao2_4 />} />
            <Route path="/questao3_1" element={<Questao3_1 />} />
            <Route path="/questao3_2" element={<Questao3_2 />} />
            <Route path="/questao4_1" element={<Questao4_1 />} />
          
            <Route
              path="/admin-ligado"
              element={<Questao2_1 defaultChecked={true} />}
            />
            <Route
              path="/admin-desligado"
              element={<Questao2_1 defaultChecked={false} />}
            />
            <Route
              path="/brasil-selecionado"
              element={<Questao2_2 defaultCountry="Brazil" />}
            />

            <Route
              path="/formulario-preenchido"
              element={
                <FormularioSimples
                  initialData={{
                    nome: "Jean Michael Estevez Alvarez",
                    email: "jeanalvarez@al.infnet.edu.br",
                    telefone: "21969446560",
                  }}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
