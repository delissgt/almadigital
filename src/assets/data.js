import componentsImg from './components.png';
import propsImg from './config.png';
import jsxImg from './jsx-ui.png';
import stateImg from './state-mgmt.png'

export const CORE_CONCEPTS = [
  {
    image: componentsImg.src,
    title: 'Components',
    description: 'The core UI building block - compose the user interface by combining multiple components.'
  },
  {
    image: jsxImg.src,
    title: 'JSX',
    description: 'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered',
  },
  {
    image: propsImg.src,
    title: 'Props',
    description: 'Make components configurable (and therefore reusable) by passing into data to them.'
  },
  {
    image: stateImg.src,
    title: 'STATE',
    description: 'React-managed data which, when changed, causes the component to re-render & the UI to update.',
  }
]