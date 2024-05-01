
import {  useState} from "react";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";
import {EXAMPLES} from "./data.js";



function App() {
  const [ selectedTopic, setSelectedTopic ] =useState('components');

  
  function handleSelect(selectedButton) {
    // component , jsx, props, state
    setSelectedTopic(selectedButton);
    //console.log(selectedTopic);
 }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts"> 
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept {...CORE_CONCEPTS[0]} />
          <CoreConcept {...CORE_CONCEPTS[1]}/>
          <CoreConcept  {...CORE_CONCEPTS[2]}/>
          <CoreConcept  {...CORE_CONCEPTS[3]}/>
        </ul>
        </section>
        <section id="examples">
        <h2> Exemples</h2>
        <menu>
          <TabButton onSelect={()=> handleSelect('components')}> Components </TabButton>
          <TabButton onSelect={()=> handleSelect('jsx')}> JSX </TabButton>
          <TabButton onSelect={()=> handleSelect('props')}> Props </TabButton>
          <TabButton onSelect={()=> handleSelect('state')}> State </TabButton>
        </menu>
       <div id="tab-content"> 
        <h3>{EXAMPLES[selectedTopic].title} </h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
          {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
       </div>
        </section>
      </main>
    </div>
  );
}


export default App;
