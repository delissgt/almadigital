import {CORE_CONCEPTS} from "../assets/data";
import CoreConcept from "./CoreConcept/CoreConcept";

export default function CoreConcepts() {
  return (
      <section id="core-concepts">
        <h2>Core Concepts!</h2>
        {/*{['hello', 'world', '!']}*/}
        {/*{[<p>HELLO</p>, <p>WORLD</p>]}*/}
        <ul>
          {/*<CoreConcepts*/}
          {/*    title={CORE_CONCEPTS[0].title}*/}
          {/*    description={CORE_CONCEPTS[0].description}*/}
          {/*    image={CORE_CONCEPTS[0].image}*/}
          {/*/>*/}
          {/*<CoreConcepts {...CORE_CONCEPTS[3]} />*/}

          {
            CORE_CONCEPTS.map((conceptItem) => (
                <CoreConcept
                    key={conceptItem.title}
                    {...conceptItem}
                />
            ))
          }
        </ul>
      </section>
  )
}