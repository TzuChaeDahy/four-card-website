import Card from "./Card";

function Cards() {
  const CardsInfo = [
    {
      title: "Supervisor",
      text: "Monitors activity to identify project roadblocks",
      borderColor: "border-project-cyan",
      alt: "Magnifier Icon",
    },
    {
      title: "Team Builder",
      text: "Scans our talent network to create the optimal team for your project",
      borderColor: "border-project-red",
      alt: "House and Website Icon",
    },
    {
      title: "Karma",
      text: "Regularly evaluates our talent to ensure quality",
      borderColor: "border-project-orange",
      alt: "Idea Lamp Icon",
    },
    {
      title: "Calculator",
      text: "Uses data from past projects to provide better delivery estimates",
      borderColor: "border-project-blue",
      alt: "PC Screen Icon",
    },
  ];

  const messagesMap = CardsInfo.map((cardContent, index) => {
    return (
      <Card
        borderColor={cardContent.borderColor}
        title={cardContent.title}
        cardKey={index}
        alt={cardContent.alt}
      >
        {cardContent.text}
      </Card>
    );
  });

  const CardsContainerStyles =
    "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-4";

  return <ul className={CardsContainerStyles}>{messagesMap}</ul>;
}

export default Cards;
