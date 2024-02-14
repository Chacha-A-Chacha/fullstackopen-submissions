const Header = (props) => {
    console.log("header component")
    return (
            <h1>
                { props.course }
            </h1>
    )
}

const Part1  = (props) => {
    return(
        <p>
            { props.part1.name }  { props.part1.exercises }
        </p>
    )
}

const Part2  = (props) => {
    return(
        <p>
            { props.part2.name }  { props.part2.exercises }
        </p>
    )
}

const Part3  = (props) => {
    return(
        <p>
            { props.part3.name }  { props.part3.exercises }
        </p>
    )
}

const Content = (props) => {
    return(
        <div>
            <Part1 part1 = {props.parts[0]} />
            <Part2 part2 = { props.parts[0] } />
            <Part3 part3 = { props.parts[0] } />
        </div>
    )
}

const Total = (props) => {
    return(
        <p>Number of exercises { props.part1.exercises + props.part2.exercises + props.part3.exercises }</p>

    )
}

const App = () => {
    const course = "Half Stack application development"
    const parts = [
        {
            name: "Fundamentals of React",
            exercises: 10
        },
        {
            name: "Using state to pass data",
            exercises: 7
        },
        {
            name: "State of a component",
            exercises: 14
        }
    ]

    return(
        <div>
            <Header course = {course} />
            <Content parts = {parts}/>
            <Total parts = {parts}/>
        </div>
    )
}

export default App
