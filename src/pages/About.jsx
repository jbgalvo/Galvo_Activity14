import { useEffect  } from 'react'

function About() {

  //Dynamically change title
  useEffect(() => {
    document.title = `About - React Routing(Activity 14)`;
  });

  return (
    <>
      <h1>About Component</h1>
    </>
  )
}

export default About;