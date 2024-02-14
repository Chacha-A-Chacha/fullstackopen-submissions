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
            { props.part1 }  { props.exercise1 }
        </p>
    )
}

const Part2  = (props) => {
    return(
        <p>
            { props.part2 }  { props.exercise2 }
        </p>
    )
}

const Part3  = (props) => {
    return(
        <p>
            { props.part3 }  { props.exercise3 }
        </p>
    )
}

const Content = (props) => {
    return(
        <div>
            <Part1 part1 = { props.part1 } exercise1 = { props.exercise1} />
            <Part2 part2 = { props.part2 } exercise2 = { props.exercise2} />
            <Part3 part3 = { props.part3 } exercise3 = { props.exercise3} />
        </div>
    )
}

const Total = (props) => {
    return(
        <p>Number of exercises { props.exercises1 + props.exercises2 + props.exercises3 }</p>

    )
}

const App = () => {
    const course = "Half Stack application development"
    const part1 = {
        name: "Fundamentals of React",
        exercises: 10
    }
    const part2 = {
        name: "Using state to pass data",
        exercises: 7
    }
    const part3 = {
        name: "State of a component",
        exercises: 14
    }

    return(
        <div>
            <Header course = {course} />
            <Content part1 ={part1} part2 ={part2} part3 ={part3} 
                            exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3}
            />
            <Total exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3}/>
        </div>
    )
}

export default App
