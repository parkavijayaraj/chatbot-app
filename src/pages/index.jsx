// src/pages/index.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CourseCard from '../components/CourseCard';

const courses = [
  { id: 1, title: 'JavaScript Basics', description: 'Learn the fundamentals of JavaScript.' },
  { id: 2, title: 'React for Beginners', description: 'Get started with React.' },
  { id: 3, title: 'Advanced Node.js', description: 'Master server-side development with Node.js.' },
];

export default function Home() {
  return (
    <div>
      <Header />
      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Welcome to the Learning Management System</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} title={course.title} description={course.description} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}