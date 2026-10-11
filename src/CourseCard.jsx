function CourseCard({ course }) {
  return (
    <>
      <div>
        <h2>{course.Name}</h2>
        <p>{course.Description}</p>
      </div>
    </>
  );
}

export default CourseCard;
