import { Link } from 'react-router-dom';
import notFoundImage from '../assets/illustration-realestate.svg';

function NotFound() {
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center gap-5 py-5">
        <img src={notFoundImage} alt="Image" className="img-fluid" />
        <h2 className="fs-1">404 - Page Not Found</h2>
        <Link className="btn btn-primary" to="/">Back to Home</Link>
      </div>
    </>
  )
}

export default NotFound;