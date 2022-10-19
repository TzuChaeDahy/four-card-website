import Title from "../layout/Title";
import Parag from "../layout/Parag";

function Text({ titleText, paragText }) {
  return (
    <div>
      <Title text={titleText} />
      <Parag text={paragText} />
    </div>
  );
}

export default Text;
