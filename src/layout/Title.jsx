function Title({ children, center }) {
  let textCenter = "";

  if (center) {
    textCenter = "text-center";
  }

  const titleStyles = `text-xl font-bold text-project-gray-300 ${textCenter}`;

  return <h1 className={titleStyles}>{children}</h1>;
}

export default Title;
