function Text({ children, center }) {
  let textCenter = "";
  if (center) {
    textCenter = "text-center";
  }
  return <p className={`text-project-gray-200 ${textCenter}`}>{children}</p>;
}

export default Text;
