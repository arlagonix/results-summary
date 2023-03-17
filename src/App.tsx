// import "./App.scss";
import s from "./App.module.scss";
import SummaryCard from "./components/SummaryCard";

function App() {
  return (
    <>
      <h1 hidden>Results Summary</h1>
      <main className={s.card}>
        <div className={s.left}>
          <h2 className={s.leftHeader}>Your Result</h2>
          <div className={s.scoreContainer}>
            <p className={s.bigScoreNumber}>76</p>
            <p className={s.smallScoreNumber}>of 100</p>
          </div>
          <div className={s.bottomContainer}>
            <h3 className={s.great}>Great</h3>
            <p className={s.resultsDescription}>You scored higher than 65% of the people who have taken these tests</p>
          </div>
        </div>
        <div className={s.right}>
          <h2 className={s.rightHeader}>Summary</h2>
          <div className={s.summaryCardContainer}>
            <SummaryCard type="reaction" value={80} />
            <SummaryCard type="memory" value={92} />
            <SummaryCard type="verbal" value={61} />
            <SummaryCard type="visual" value={72} />
          </div>
          <a className={s.button} draggable={false}>
            Continue
          </a>
        </div>
      </main>
    </>
  );
}

export default App;
