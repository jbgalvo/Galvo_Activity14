import { useEffect  } from 'react'

function Home() {

  //Dynamically change title
  useEffect(() => {
    document.title = `Home - React Routing(Activity 14)`;
  });

  return (
    <>
      <h1>Home Component</h1>
    </>
  )
}

export default Home;