'use client';
import TabButton from "./TabButton/TabButton";
import Section from "./Section";
import Tabs from "./Tabs";
import {useState} from "react";
import {EXAMPLES} from "../assets/data";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();


  function handleSelect(selectedButton) {
    console.log("Handle Select!", selectedButton);
    setSelectedTopic(selectedButton)
    console.log(selectedTopic);
  }

  let tabContent = <p>Please Select a Topic.</p>

  if(selectedTopic){
    tabContent = (
        <div id="tab-content" >
          <h3>{EXAMPLES[selectedTopic]['title']}</h3>
          <p>{EXAMPLES[selectedTopic]['description']}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic]['code']}</code>
          </pre>
        </div>
    )
  }

  return (
      <Section id='examples' title={"ExampleSs"}>
        <Tabs
            buttons={
              <>
                <TabButton
                    onClick={() => handleSelect('components')}
                    isSelected={selectedTopic === 'components'}
                >
                  Components
                </TabButton>
                <TabButton
                    onClick={() => handleSelect('jsx')}
                    isSelected={selectedTopic === 'jsx'}
                >
                  JSX
                </TabButton>
                <TabButton
                    onClick={() => handleSelect('props')}
                    isSelected={selectedTopic === 'props'}
                    compome
                >
                  Props
                </TabButton>
                <TabButton
                    onClick={() => handleSelect('state')}
                    isSelected={selectedTopic === 'state'}
                >
                  State
                </TabButton>
              </>
            }
        >
          {tabContent}
        </Tabs>

      </Section>

  )
}