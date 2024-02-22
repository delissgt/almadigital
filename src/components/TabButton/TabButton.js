'use client';

// TabButton(props)
export default function TabButton({ children, onSelect }) {
  console.log("TAB")

  return(
      <li>
        <button onClick={onSelect}>{children}</button>
      </li>
  )
}