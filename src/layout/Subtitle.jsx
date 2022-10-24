function Subtitle({ children, center }) {
  let textCenter = "";
  if (center) {
    textCenter = "text-center";
  }
  return (
    <h3 className={`text-xl text-project-gray-200 ${textCenter}`}>
      {children}
    </h3>
  );
}

export default Subtitle;
