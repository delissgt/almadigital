'use client';
// import Image from 'next/image'
// import styles from './page.module.css'

// import reactImg from '/public/react-core-concepts.png'
import {PROJECT} from "../library/helpers/Paths";

import { useState } from 'react';
import {CORE_CONCEPTS, EXAMPLES} from "../assets/data";

import Header from "../components/Header/Header";
import CoreConcepts from "../components/CoreConcept/CoreConcept";
import TabButton from "../components/TabButton/TabButton";

export default function Home() {
  console.log("APP ")
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
      <>
        <div>
          <a href={PROJECT}>
            Projects
          </a>
        </div>

        <div>
          <Header />
          <main>
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
                      <CoreConcepts
                          key={conceptItem.title}
                          {...conceptItem}
                      />
                  ))
                }
              </ul>
            </section>
            <section id='examples'>
              <h2>Examples</h2>
              <menu>
                <TabButton
                    onSelect={() => handleSelect('components')}
                    isSelected={selectedTopic === 'components'}
                >
                  Components
                </TabButton>
                <TabButton
                    onSelect={() => handleSelect('jsx')}
                    isSelected={selectedTopic === 'jsx'}
                >
                  JSX
                </TabButton>
                <TabButton
                    onSelect={() => handleSelect('props')}
                    isSelected={selectedTopic === 'props'}
                >
                  Props
                </TabButton>
                <TabButton
                    onSelect={() => handleSelect('state')}
                    isSelected={selectedTopic === 'state'}
                >
                  State
                </TabButton>
              </menu>
              {tabContent}
            </section>

          </main>
        </div>
      </>

  )
}


// <main className={styles.main}>
//   <div className={styles.description}>
//     <p>
//       Get started by editing&nbsp;
//       <code className={styles.code}>src/app/page.js</code>
//     </p>
//     <div>
//       <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//       >
//         By{' '}
//         <Image
//             src="/vercel.svg"
//             alt="Vercel Logo"
//             className={styles.vercelLogo}
//             width={100}
//             height={24}
//             priority
//         />
//       </a>
//     </div>
//   </div>
//
//   <div className={styles.center}>
//     <Image
//         className={styles.logo}
//         src="/next.svg"
//         alt="Next.js Logo"
//         width={180}
//         height={37}
//         priority
//     />
//   </div>
//
//   <div className={styles.grid}>
//     <a
//         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//         className={styles.card}
//         target="_blank"
//         rel="noopener noreferrer"
//     >
//       <h2>
//         Docs <span>-&gt;</span>
//       </h2>
//       <p>Find in-depth information about Next.js features and API.</p>
//     </a>
//
//     <a
//         href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//         className={styles.card}
//         target="_blank"
//         rel="noopener noreferrer"
//     >
//       <h2>
//         Learn <span>-&gt;</span>
//       </h2>
//       <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
//     </a>
//
//     <a
//         href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//         className={styles.card}
//         target="_blank"
//         rel="noopener noreferrer"
//     >
//       <h2>
//         Templates <span>-&gt;</span>
//       </h2>
//       <p>Explore starter templates for Next.js.</p>
//     </a>
//
//     <a
//         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//         className={styles.card}
//         target="_blank"
//         rel="noopener noreferrer"
//     >
//       <h2>
//         Deploy <span>-&gt;</span>
//       </h2>
//       <p>
//         Instantly deploy your Next.js site to a shareable URL with Vercel.
//       </p>
//     </a>
//   </div>
// </main>
