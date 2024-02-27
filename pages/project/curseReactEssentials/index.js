import "./globals.css";

import Header from "../../../src/components/Header/Header";
import CoreConcepts from "../../../src/components/CoreConcepts";
import Examples from "../../../src/components/Examples";


export default function CurseReactEssentials () {
  return(
      <>
        <Header />
        <main>
          <CoreConcepts />
          <Examples />
        </main>
      </>
  )

}