import "./Button.css"

const OUTLINED = "outlined";
const CONTAINED = "contained";
const TEXT = "text";

type Props = {
  variant: "outlined" | "contained" | "text"
  text: string
}

const Button: React.FC<Props> = ({variant, text}) => {

  let btnStyle = "";
  switch(variant) {
    case CONTAINED: btnStyle = "btn-contained";break;
    case OUTLINED: btnStyle = "btn-outlined";break;
    default: btnStyle = "btn-text"
  }

  return (
    <button
      className={btnStyle !== "" ? btnStyle : "btn-text"}>
      {text}
    </button>
  )
}

export default Button;