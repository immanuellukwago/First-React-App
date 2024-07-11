import { ReactNode, useState } from "react";
import Alert from "./Alert";

interface Props {
  children?: ReactNode;
  onClick?: () => void;
}

const Button = ({ children }: Props) => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <p></p>
      {clicked && (
        <Alert onClick={() => setClicked(() => false)}>
          You Clicked The Button
        </Alert>
      )}
      <button
        className="btn btn-primary"
        onClick={() => setClicked(() => true)}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
