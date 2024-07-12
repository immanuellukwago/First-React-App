import { ReactNode } from "react"

interface Props {
    children?: ReactNode;
    facts: string[];
}

const ReactFacts = ({children, facts}: Props) => {
  return (
    <>
        <div>
            <h1>
            {children}
            </h1>
            <ul>
                {facts.map(fact, index)}
            </ul>
        </div>
    </>
  );
}

export default ReactFacts