import { Link } from "react-router-dom";
import "./Home.css"
function Home() {
    return(
        <>
        <div className = "home">
            <div className = "home-content">
            <h1>Welcome To City Hospital</h1>
            <p>Your health is our priority. Quality care for everyone.</p>
            <Link to="/doctors" className="home-btn">
            Book Appointment
          </Link>
        </div>
      </div>

      {/* Info Section */}
      <div className="info-section">
        <h2>Health Awareness</h2>

        <div className="info-cards">
          <Link to="/messages/mental-health" className="info-card">
            <h3>Mental Health Matters</h3>
            <p>Your mental well-being is just as important as physical health.</p>
            <span>Read more →</span>
          </Link>

          <Link to="/messages/heart-care" className="info-card">
            <h3>Heart Care</h3>
            <p>Healthy heart leads to a healthier and longer life.</p>
            <span>Read more →</span>
          </Link>

          <Link to="/messages/doctor-consult" className="info-card">
            <h3>When to Consult a Doctor</h3>
            <p>Early diagnosis helps prevent serious complications.</p>
            <span>Read more →</span>
          </Link>

        </div>
        </div>
    </>
    )
}

export default Home;