
import './index.css';
import AuthInputs from "../../../src/components/AuthInputs/AuthInputs";
import HeaderStyle from "../../../src/components/HeaderStyle/Header";

export default function CurseReactStylingComponents() {
  return(
      <>
        <HeaderStyle />
        <main>
          <AuthInputs/>
        </main>
      </>
  );
}