import Text from "../layout/Text";
import Title from "../layout/Title";

import Supervisor from "../images/icon-supervisor.svg";
import TeamBuilder from "../images/icon-team-builder.svg";
import Karma from "../images/icon-karma.svg";
import Calculator from "../images/icon-calculator.svg";

function Card({ title, children, cardKey, color }) {
  const sources = [Supervisor, TeamBuilder, Karma, Calculator];
  let styles = "";

  switch (cardKey) {
    case 0:
      styles = "lg:row-start-2";
      break;
    case 2:
      styles = "lg:col-start-2 lg:row-start-3";
      break;
    case 3:
      styles = "lg:row-start-2";
      break;
    default:
      styles = "";
      break;
  }

  return (
    <li
      key={cardKey}
      className={`max-w-sm p-5 border-t-4 ${color} rounded-md shadow-xl flex flex-col justify-end ${styles} row-span-2`}
    >
      <Title>{title}</Title>
      <Text>{children}</Text>
      <img
        src={sources[cardKey]}
        alt="No value"
        className="mt-5 sm:mt-10 ml-auto"
      />
    </li>
  );
}

export default Card;
