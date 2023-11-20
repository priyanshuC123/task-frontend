// SectionTwo.js
import React from 'react';
import './SectionTwo.css'; // Make sure to create a corresponding CSS file

const SectionTwo = () => {
  // Static data to represent doctors
  const doctors = [
    {
      id: 1,
      name: 'Dr. Ujjval Mehrotra',
      specialty: 'Dentist',
      experience: '10 years experience overall',
      location: 'Dalanwala, Dehradun • Face Mile Dentofacial Clinic',
      consultationFee: '₹200 Consultation fee at clinic',
      availability: 'Available Today',
      rating: '100%',
      patientStories: '17 Patient Stories',
      imageUrl: 'https://media.sciencephoto.com/image/f0265219/800wm', // Placeholder image URL
    },
    {
      id: 2,
      name: 'Dr. Mehak Aggarwal',
      specialty: 'Dentist',
      experience: '15 years experience overall',
      location: 'Cannaught Place, Dehradun • Dr. Mahak’s Dental Clinic',
      consultationFee: '₹300 Consultation fee at clinic',
      availability: 'Available Today',
      rating: '96%',
      patientStories: '54 Patient Stories',
      imageUrl: 'https://as1.ftcdn.net/v2/jpg/00/38/77/72/1000_F_38777249_2MZGgqmnACiUYMB20LsTvISdbwQfyc7r.jpg', // Placeholder image URL
    },
    // ... add more doctors as needed
  ];

  return (
    <div className="section-two-container">
      {doctors.map(doctor => (
        <div key={doctor.id} className="doctor-card">
          <img src={doctor.imageUrl} alt={doctor.name} className="doctor-image" />
          <div className="doctor-info">
            <h2>{doctor.name}</h2>
            <p className="specialty">{doctor.specialty}</p>
            <p className="experience">{doctor.experience}</p>
            <p className="location">{doctor.location}</p>
            <p className="consultation-fee">{doctor.consultationFee}</p>
            <p className="availability">{doctor.availability}</p>
            <div className="rating">
              <span className="rating-percentage">{doctor.rating}</span>
              <span className="patient-stories">{doctor.patientStories}</span>
            </div>
            <button className="appointment-button">Book Appointment</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionTwo;
