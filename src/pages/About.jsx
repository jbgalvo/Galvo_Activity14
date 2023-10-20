import { useEffect  } from 'react'
import reactLogo from '../assets/react.svg';

function About() {

  //Dynamically change title
  useEffect(() => {
    document.title = `About - Activity 14`;
  });

  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center gap-5 py-5">
        <img src={reactLogo} alt="Image" className="logo" />
        <h2 className="fs-1">About Page Component</h2>
      </div>
    </>
  )
}

export default About;