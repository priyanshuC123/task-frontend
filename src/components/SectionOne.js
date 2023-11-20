import React from 'react';
import './SectionOne.css'; // Make sure to create a corresponding CSS file

const SectionOne = () => {
  // Static data to represent categories
  const categories = [
    {
      id: 1,
      title: 'Dentist',
      description: 'Teething troubles? Schedule a dental checkup',
      imageUrl: 'https://t3.ftcdn.net/jpg/01/97/37/30/360_F_197373009_Mr2yNi8zxaYCpiIiP9gOB8QNDKqUpWo2.jpg', // Replace with your image path
    },
    {
      id: 2,
      title: 'Gynecologist/Obstetrician',
      description: 'Explore for women’s health, pregnancy and infertility treatments',
      imageUrl: 'https://media.istockphoto.com/id/898903840/photo/young-woman-patient-with-gynecologist-in-the-office.jpg?s=612x612&w=0&k=20&c=8Y_5s0lSezhE2OfCRrgSYsSDwdXb0WGDLBfif78zAT4=', // Replace with your image path
    },
    {
      id: 3,
      title: 'Dietitian/Nutrition',
      description: 'Get guidance on eating right, weight management and sports nutrition',
      imageUrl: 'https://media.istockphoto.com/id/1293734715/photo/nutritionist-and-client-discussing-balanced-nutrition-plan.jpg?s=612x612&w=0&k=20&c=PHDzERwFAEVTFEa6bHTCSykyWAnkuvfGt0amiumJz-I=', // Replace with your image path
    },
  ];

  return (
    <div className="section-one-container">
      <h1>Book an appointment for an in-clinic consultation</h1>
      <div className="categories-container">
        {categories.map(category => (
          <div key={category.id} className="category-card">
            <img src={category.imageUrl} alt={category.title} className="category-image" />
            <h2>{category.title}</h2>
            <p>{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionOne;
