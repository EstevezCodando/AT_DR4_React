import PerguntaResposta from "@/components/PerguntaResposta";
import LayoutQuestao from "@/components/LayoutQuestao";

const Questao1_4 = () => {
  const pergunta = "Quais são as desvantagens de implementar um evento inline?";
  const resposta =
    "Os eventos inline misturam a lógica da aplicação com a estrutura da interface, o que pode dificultar a manutenção e a legibilidade do código. Além disso, essa abordagem limita a reutilização de código, não sendo adequada para projetos maiores.";

  return (
    <LayoutQuestao titulo="Questão 1.4 - Desvantagens de Eventos Inline">
      <PerguntaResposta pergunta={pergunta} resposta={resposta} />
    </LayoutQuestao>
  );
};

export default Questao1_4;
