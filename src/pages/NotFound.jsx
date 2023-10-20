import notFoundImage from '../assets/illustration-realestate.svg';

function NotFound() {
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center gap-5 p-5">
        <img src={notFoundImage} alt="Image" className="img-fluid" />
        <h2>404 - Page Not Found</h2>
      </div>
    </>
  )
}

export default NotFound;