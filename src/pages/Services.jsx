import { useEffect  } from 'react'
import reactLogo from '../assets/react.svg';

function Services() {

  //Dynamically change title
  useEffect(() => {
    document.title = `Home - Activity 14`;
  });

  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center gap-5 py-5">
        <img src={reactLogo} alt="Image" className="logo" />
        <h2 className="fs-1">Services Page Component</h2>
      </div>
    </>
  )
}

export default Services;