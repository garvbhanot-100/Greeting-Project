import { useState,useEffect } from "react";
import CourseCard from "./CourseCard";

const Courses = [
  {
    id: 1,
    Name: "React for Beginners",
    Description: "Learn React components and props.",
    Category: "Frontend",
    Duration: "4 weeks",
  },
  {
    id: 2,
    Name: "JavaScript Fundamentals",
    Description: "Learn variables, functions, arrays, and loops.",
    Category: "Programming",
    Duration: "5 weeks",
  },
  {
    id: 3,
    Name: "CSS Masterclass",
    Description: "Learn styling, Flexbox, Grid, and responsive layouts.",
    Category: "Frontend",
    Duration: "3 weeks",
  },
  {
    id: 4,
    Name: "HTML Essentials",
    Description: "Build web pages using semantic HTML.",
    Category: "Frontend",
    Duration: "2 weeks",
  },
  {
    id: 5,
    Name: "Python Programming",
    Description: "Learn Python syntax, conditions, and loops.",
    Category: "Programming",
    Duration: "6 weeks",
  },
  {
    id: 6,
    Name: "Data Structures",
    Description: "Understand arrays, stacks, queues, and linked lists.",
    Category: "Computer Science",
    Duration: "6 weeks",
  },
  {
    id: 7,
    Name: "Database Management",
    Description: "Learn SQL, tables, relationships, and queries.",
    Category: "Database",
    Duration: "4 weeks",
  },
  {
    id: 8,
    Name: "Node.js Fundamentals",
    Description: "Build server-side applications with Node.js.",
    Category: "Backend",
    Duration: "5 weeks",
  },
  {
    id: 9,
    Name: "React Router",
    Description: "Build multi-page React applications with routing.",
    Category: "Frontend",
    Duration: "2 weeks",
  },
  {
    id: 10,
    Name: "Git and GitHub",
    Description: "Learn version control, commits, branches, and repositories.",
    Category: "Tools",
    Duration: "2 weeks",
  },
  {
    id: 11,
    Name: "Computer Networks",
    Description: "Understand IP addresses, DNS, HTTP, and networking basics.",
    Category: "Computer Science",
    Duration: "4 weeks",
  },
  {
    id: 12,
    Name: "UI/UX Design",
    Description: "Learn wireframes, layouts, usability, and design principles.",
    Category: "Design",
    Duration: "3 weeks",
  },
  {
    id: 13,
    Name: "Tailwind CSS",
    Description: "Build modern interfaces using utility-first CSS.",
    Category: "Frontend",
    Duration: "2 weeks",
  },
  {
    id: 14,
    Name: "Express.js",
    Description: "Create APIs and backend routes with Express.",
    Category: "Backend",
    Duration: "3 weeks",
  },
  {
    id: 15,
    Name: "MongoDB Basics",
    Description: "Store and retrieve application data using MongoDB.",
    Category: "Database",
    Duration: "3 weeks",
  },
];



function Explore() {
  useEffect(()=>{
    document.title=`Explore Page`;
  },[])
  const [search, setSearch] = useState("");

  const filteredCourses = Courses.filter((course) => {
    return (
      course.Name.toLowerCase().includes(search.toLowerCase()) ||
      course.Description.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="explore-page">
      <h1>Explore Courses</h1>

      <input
        type="text"
        placeholder="Search courses..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <div className="courses-container">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <p>No courses found.</p>
        )}
      </div>
    </div>
  );
}

export default Explore;