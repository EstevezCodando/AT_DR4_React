import PerguntaResposta from "@/components/PerguntaResposta";
import LayoutQuestao from "@/components/LayoutQuestao";

const Questao1_1 = () => {
  return (
    <LayoutQuestao titulo="Questão 1.1">
      <PerguntaResposta
        pergunta="O que é React?"
        resposta="React é uma biblioteca JavaScript para construção de interfaces de usuário."
      />
    </LayoutQuestao>
  );
};

export default Questao1_1;
