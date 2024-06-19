const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>
        {props.kurssi}
      </h1>
    </div>
  )
}

console.log("moi")

const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        {props.sisalto} {props.maara}
      </p>
    </div>
    
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part sisalto={props.course[0].name} maara={props.course[0].exercises}/>
      <Part sisalto={props.course[1].name} maara={props.course[1].exercises}/>
      <Part sisalto={props.course[2].name} maara={props.course[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Number of exercises {props.course[0].exercises + props.course[1].exercises + props.course[2].exercises}
      </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header kurssi={course.name}/>
      <Content course={course.parts}/>
      <Total course={course.parts}/>
    </div>
  )
}

export default App