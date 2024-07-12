import ReactFacts from "./Components/ReactFacts"

const facts = [
  "Was released in 2013",
  "Was originally created by Jordan Walker",
  "Has over 100K stars on github",
  "Is maintained by facebook",
  "Provides thousands of enterprise applications including mobile apps"
];

let child = "Fun facts about React"

const App = () => {
  return (
    <>
      <div className="container">
      <ReactFacts children={child} facts={facts}>
        
        </ReactFacts>
      </div>
    </>
  )
}

export default App