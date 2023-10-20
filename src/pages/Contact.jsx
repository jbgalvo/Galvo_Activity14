import { useEffect  } from 'react'

function Contact() {

  //Dynamically change title
  useEffect(() => {
    document.title = `Contact - React Routing(Activity 14)`;
  });

  return (
    <>
      <h1>Contact Component</h1>
    </>
  )
}

export default Contact;