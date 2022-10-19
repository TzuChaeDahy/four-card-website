import Text from "../components/Text";

function Card({ img, borderColor, titleText, paragText }) {
  const requiredImage = require(`../images/icon-${img}.svg`);

  return (
    <div className={`border-t-4 ${borderColor} `}>
      <Text titleText={titleText} paragText={paragText} />
      <img src={requiredImage} alt="a" />
    </div>
  );
}

export default Card;
