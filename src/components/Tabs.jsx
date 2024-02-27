export default function Tabs({children, buttons, ButtonsContainer = "menu"}) {
 // TODO export default function Tabs({children, buttons, ButtonsContainer}) {
 // ButtonsContainer = 'menu' SET DEFAULT VALUE
 // ButtonsContainer = Section SET DEFAULT VALUE


  // const ButtonsContainer = buttonsContainer;

  return(
      <>
        <ButtonsContainer>{buttons}</ButtonsContainer>
        {children}
      </>
  )

}