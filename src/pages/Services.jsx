import { useEffect } from 'react'

function Services() {
  //Dynamically change title
  useEffect(() => {
    document.title = `Services - React Routing(Activity 14)`;
  });

  return (
    <>
      <h1>Services Component</h1>
    </>
  )
}

export default Services;