import styles from "../styles/components/LandingPage.module.scss";

export default function LandingPage() {
  return (
    <div className={styles.landingPageContainer}>
      <h1>Metodo de Pomodoro</h1>
      <p>
        Criado nos anos 80 pelo então universitário italiano Francesco Cirillo,
        o Método Pomodoro se resume em separar 25 minutos para fazer uma
        determinada tarefa Cirillo teve esta ideia durante os primeiros anos da
        universidade. Para cronometrar o tempo, ele pegou um alarme de cozinha
        em formato de tomate. Daí vem o nome “Pomodoro”, que significa tomate em
        italiano.
      </p>
      <img src="/work-time.svg" />
      <h2>Como funciona o Pomodoro</h2>
      <p>
        A técnica se baseia na ideia de que dividindo o nosso fluxo de trabalho
        em blocos de concentração intensa, conseguimos melhorar a agilidade do
        cérebro e estimular nosso foco. Em outras palavras, melhoramos nossa
        gestão do tempo e ficamos mais eficientes. Você se concentra por um
        determinado tempo sem distrações, e ao final do ciclo você descansa. Por
        exemplo: 25 minutos de foco e 5 minutos de descanso. Portanto, para
        colocá-la em prática você vai precisar de:
      </p>
      <ul>
        <li>Timer ou cronometro para fazer a contagem regressiva</li>
        <li>Uma lista de tarefas ("To-do-list")</li>
      </ul>
      <p>
        O <span>Pomolevel</span> elevou essa técnica ao próximo nível, dando a
        você a oportunidade de completar desafios a cada ciclo finalizado! Assim
        você ganha experiência, sobe de level e deixa o método de Pomodoro muito
        mais interessante e divertido!
      </p>
    </div>
  );
}
