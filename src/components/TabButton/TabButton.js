'use client';

// TabButton(props)
export default function TabButton({ children, onSelect, isSelected }) {
  console.log("TAB")

  return(
      <li>
        <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
      </li>
  )
}