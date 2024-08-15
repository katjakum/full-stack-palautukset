const Header = (props) => {
    console.log(props);
    return (
      <div>
        <h2>{props.kurssi}</h2>
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

  export default Course;