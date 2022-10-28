function Subtitle({ children, center }) {
  let textCenter = "";

  if (center === true) {
    textCenter = "text-center";
  }

  const subtitleStyles = `text-xl text-project-gray-200 ${textCenter}`;

  return <h3 className={subtitleStyles}>{children}</h3>;
}

export default Subtitle;
