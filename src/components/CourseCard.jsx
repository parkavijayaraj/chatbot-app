// src/components/CourseCard.js
import React from 'react';
import Button from './Button';

const CourseCard = ({ title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button className="bg-green-500 hover:bg-green-600">View Course</Button>
    </div>
  );
};

export default CourseCard;