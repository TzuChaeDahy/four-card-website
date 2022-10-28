import Cards from "./components/Cards";
import Header from "./components/Header";

function App() {
  const mainContainerStyles =
    "flex flex-col justify-center items-center gap-10";
  return (
    <div className={mainContainerStyles}>
      <Header />
      <Cards />
    </div>
  );
}
export default App;
