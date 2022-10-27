import Card from "./Card";

function Cards() {
  const CardMessages = [
    {
      title: "Supervisor",
      text: "Monitors activity to identify project roadblocks",
      color: "border-project-cyan",
    },
    {
      title: "Team Builder",
      text: "Scans our talent network to create the optimal team for your project",
      color: "border-project-red",
    },
    {
      title: "Karma",
      text: "Regularly evaluates our talent to ensure quality",
      color: "border-project-orange",
    },
    {
      title: "Calculator",
      text: "Uses data from past projects to provide better delivery estimates",
      color: "border-project-blue",
    },
  ];

  const messagesMap = CardMessages.map((message, index) => {
    return (
      <Card color={message.color} title={message.title} cardKey={index}>
        {message.text}
      </Card>
    );
  });

  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-4">
      {messagesMap}
    </ul>
  );
}

export default Cards;
