import Title from "../layout/Title";
import Text from "../layout/Text";
import Subtitle from "../layout/Subtitle";

function Header() {
  const headingMessages = [
    {
      subtitle: "Reliable, efficient delivery",
    },
    {
      title: "Powered by Technology",
      text: "Our Artificial Intelligence powered tools use millions of project data point to ensure that your project is sucessfull",
    },
  ];

  return (
    <header>
      <Subtitle>{headingMessages[0].subtitle}</Subtitle>
      <Title>{headingMessages[1].title}</Title>
      <Text>{headingMessages[1].text}</Text>
    </header>
  );
}

export default Header;