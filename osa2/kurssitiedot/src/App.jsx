const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.kurssi}</h1>
    </div>
  );
};

const Part = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        {props.sisalto} {props.maara}
      </p>
    </div>
  );
};

const Content = (props) => {
  console.log(props);
  return (
    <div>
      {props.course.map((part) => (
        <Part key={part.id} sisalto={part.name} maara={part.exercises} />
      ))}
    </div>
  );
};

const Total = (props) => {
  const total = props.course.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <div>
      <p>
        <b>total of {total} exercises</b>
      </p>
    </div>
  );
};

const Course = (props) => {
  return (
    <div>
      <Header kurssi={props.course.name} />
      <Content course={props.course.parts} />
      <Total course={props.course.parts} />
    </div>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    id: 1,
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4,
      },
    ],
  };

  return (
    <div>
      <Course course={course} />
    </div>
  );
};

export default App;
