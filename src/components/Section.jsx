export default function Section({title, children, ...props}) {
  console.log("props", props)

  return (
      <section {...props}>
        <h2>{title}</h2>
        {children}
      </section>
  )
}