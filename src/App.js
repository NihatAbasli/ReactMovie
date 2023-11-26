import { Card } from "./components/Card";
import { filmData } from "./components/Data";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="big-content">
        {filmData.map((item, index) => {
          return <Card key={index} Data={item} />;
        })}
      </div>
    </>
  );
}

export default App;
