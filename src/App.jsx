import Subtitle from "./layout/Subtitle";
import Text from "./components/Text";
import Content from "./components/Content";

function App() {
  return (
    <div>
      <Subtitle text="Reliable, efficient delivery" />
      <Text
        titleText="Powered by Technology"
        paragText="Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is sucessfull"
      />
      <Content />
    </div>
  );
}

export default App;
