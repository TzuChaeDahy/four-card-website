import Card from "../layout/Card";

function Content() {
  return (
    <div>
      <Card
        img="supervisor"
        borderColor="border-t-project-cyan"
        titleText="Supervisor"
        paragText="Monitors activity to identify project roadblocks"
      />
      <Card
        img="team-builder"
        borderColor="border-t-project-red"
        titleText="Team Builder"
        paragText="Scans our talent network to create the optimal team for your project"
      />
      <Card
        img="karma"
        borderColor="border-t-project-orange"
        titleText="Karma"
        paragText="Regurlarly evaluates our talent to ensure quality"
      />
      <Card
        img="calculator"
        borderColor="border-t-project-blue"
        titleText="Calculator"
        paragText="Uses data from past projects to provide better delivery estimates"
      />
    </div>
  );
}

export default Content;
