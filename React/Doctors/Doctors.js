import "./Doctors.css";

const doctorsList = [
  {
    id: 1,
    name: "Dr. John Smith",
    specialty: "Cardiologist",
    photo: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: 2,
    name: "Dr. Sarah Johnson",
    specialty: "Pediatrician",
    photo: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    id: 3,
    name: "Dr. Emily Davis",
    specialty: "Dermatologist",
    photo: "https://randomuser.me/api/portraits/women/33.jpg",
  },
];

function Doctors() {
  return (
    <div className="doctors-page">
      <h1>Meet Our Doctors</h1>
      <div className="doctors-grid">
        {doctorsList.map((doctor) => (
          <div key={doctor.id} className="doctor-card">
            <img src={doctor.photo} alt={doctor.name} />
            <h2>{doctor.name}</h2>
            <p>{doctor.specialty}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doctors;
