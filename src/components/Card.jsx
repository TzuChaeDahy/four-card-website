import Text from "../layout/Text";
import Title from "../layout/Title";

import Supervisor from "../images/icon-supervisor.svg";
import TeamBuilder from "../images/icon-team-builder.svg";
import Karma from "../images/icon-karma.svg";
import Calculator from "../images/icon-calculator.svg";

function Card({ title, children, cardKey, borderColor, alt }) {
  const imageImportSource = [Supervisor, TeamBuilder, Karma, Calculator];

  let gridLayout = "";

  switch (cardKey) {
    case 0:
      gridLayout = "lg:row-start-2";
      break;
    case 2:
      gridLayout = "lg:col-start-2 lg:row-start-3";
      break;
    case 3:
      gridLayout = "lg:row-start-2";
      break;
    default:
      gridLayout = "";
      break;
  }

  const cardContainerStyles = `max-w-sm p-5 border-t-4 rounded-md shadow-xl flex flex-col justify-between lg:row-span-2 ${gridLayout} ${borderColor}`;

  const iconStyles = "mt-5 sm:mt-10 ml-auto";

  return (
    <li key={cardKey} className={cardContainerStyles}>
      <div>
        <Title>{title}</Title>
        <Text>{children}</Text>
      </div>
      <img src={imageImportSource[cardKey]} alt={alt} className={iconStyles} />
    </li>
  );
}

export default Card;
