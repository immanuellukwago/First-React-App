import { ReactNode } from "react";

interface data {
    children: ReactNode;
}

const Alert = ({children}: data) => {
  return (
    <div className="alert alert-primary">{children}</div>
  );
}

export default Alert;