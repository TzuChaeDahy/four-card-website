import Title from "../layout/Title";
import Text from "../layout/Text";
import Subtitle from "../layout/Subtitle";

function Header() {
  const headingTitles = {
    title: "Powered by Technology",
    text: "Our Artificial Intelligence powered tools use millions of project data point to ensure that your project is sucessfull",
  };
  const headingSubtitle = "Reliable, efficient delivery";

  const headerStyles = "max-w-lg";

  return (
    <header className={headerStyles}>
      <Subtitle center={true}>{headingSubtitle}</Subtitle>
      <Title center={true}>{headingTitles.title}</Title>
      <Text center={true}>{headingTitles.text}</Text>
    </header>
  );
}

export default Header;
