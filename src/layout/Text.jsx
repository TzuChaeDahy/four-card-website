function Text({ children, center }) {
  let textCenter = "";

  if (center) {
    textCenter = "text-center";
  }

  const textStyles = `text-project-gray-200 ${textCenter}`;

  return <p className={textStyles}>{children}</p>;
}

export default Text;
