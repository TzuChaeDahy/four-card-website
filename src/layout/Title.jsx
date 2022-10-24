function Title({ children, center }) {
  let textCenter = "";
  if (center) {
    textCenter = "text-center";
  }
  return (
    <h1 className={`text-xl font-bold text-project-gray-300 ${textCenter}`}>
      {children}
    </h1>
  );
}

export default Title;
