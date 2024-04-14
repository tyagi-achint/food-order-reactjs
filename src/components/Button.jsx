export default function Button({ children, textOnly, classes, ...props }) {
  let btnClass = textOnly ? "text-button" : "button";
  btnClass += " " + classes;

  return (
    <button className={btnClass} {...props}>
      {children}
    </button>
  );
}
