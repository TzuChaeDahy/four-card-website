import Text from "../layout/Text";
import Title from "../layout/Title";

import Supervisor from "../images/icon-supervisor.svg";
import TeamBuilder from "../images/icon-team-builder.svg";
import Karma from "../images/icon-karma.svg";
import Calculator from "../images/icon-calculator.svg";

function Card({ title, children, cardKey }) {
  const sources = [Supervisor, TeamBuilder, Karma, Calculator];

  return (
    <li key={cardKey} className="border border-blue-600">
      <Title>{title}</Title>
      <Text>{children}</Text>
      <img src={sources[cardKey]} alt="No value" />
    </li>
  );
}

export default Card;
