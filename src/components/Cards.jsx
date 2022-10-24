import Card from "./Card";

function Cards() {
  const CardMessages = [
    {
      title: "Supervisor",
      text: "Monitors activity to identify project roadblocks",
    },
    {
      title: "Team Builder",
      text: "Scans our talent network to create the optimal team for your project",
    },
    {
      title: "Karma",
      text: "Regularly evaluates our talent to ensure quality",
    },
    {
      title: "Calculator",
      text: "Uses data from past projects to provide better delivery estimates",
    },
  ];

  const messagesMap = CardMessages.map((message, index) => {
    console.log(index);
    return (
      <Card title={message.title} cardKey={index}>
        {message.text}
      </Card>
    );
  });

  return <ul className="border border-red-600 grid gap-6">{messagesMap}</ul>;
}

export default Cards;
