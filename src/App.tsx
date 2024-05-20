import './App.css';
import TodoList from './components/TodoList';


function App() {
  
  // Primative Types 
  let anyType; // doesn't have  a type aka is "any" type
  let fullName: string; 
  let year: number;
  let isCool: boolean; 
  
  anyType = 'hey whats up'
  anyType = 123
  anyType = false 
  
  fullName ='Alex Swiggum'
  year = 2024
  isCool = true
  
  // Object Types
  
  // array 
  let fruitArray: string[] = ['strawberry', 'banana', 'orange']
  // more dynamic arrays we can use the ... spread operator
  // let dynamicArray: [number, ...string[] ] = [1, 'apple', 'blueberry', 'peach']
  
  // object
  let fruit: {name: string, isExpired: boolean }
  
  fruit = {
    name: 'banana',
    isExpired: false,
  }
  
  let fruitObjectArray: {name: string, isExpired: boolean}[]
  
  fruitObjectArray = [fruit, fruit, fruit, fruit]
  
  
  // Type Aliases 
  type Fruit = {
    name: string,
    isExpired: boolean
  }
  
  let fruit2: Fruit = {
    name: 'orange',
    isExpired: true
  }
  
  // let fruitObjectArray2: Fruit[]
  
  
  // Union Types, using the | to assign multiple different types 
  // let fruit3: Fruit | null 
  
  // let nullType: null // null type we can assign
  // let undefinedType: undefined // typically undefined isn't assigned it's when we call upon a function and there isn't a return 
  
  
  // Functions in TypeScript
  // need to assign type of parameters & type of return
  const sayHello = (name: string): void => {
    alert(name.toUpperCase())
    // return name
  }
  
  // define the shape of our function that might have many shapes (aka function Overloading)
  
  //declaring the shape of our function
  function takeFruit(fruit: Fruit, color: string): void; 
  function takeFruit(fruit: Fruit | null): void; 
  
  // building out our function
  // | indicates Union type aka could be multiple types,
  // ? indicates an optional type aka could be there, could be not
  function takeFruit(param: Fruit | null, color?: string): void {
    // check to see what param is
    if (param) {
      if (color) console.log(color) 
      else console.log("Your fruit has no color :( ")
    } else {
      console.log("You don't have a fruit")
    }
  }
  
  
  // unknown type (better than an any type because it required type guarding)
  
  // differences between any type and unknown type
  // function calculateFruit(fruitList: any): void {
  //   console.log('You have this many fruits: ', fruitList.length)
  //   // any type NEVER helps you out!
  // }
  
  function calculateFruitAgain(fruitList: unknown): void {
    // unknown type requires type guarding before you can move 
    // further and do anything in your function
    if (Array.isArray(fruitList)){
        console.log('You have this many fruits: ', fruitList.length)
    } else {
      console.log("Can't calculate the # of fruit based on info")
    }
  }
  
 

  return (
    <div>
      <p>Full Name: {fullName}</p>
      <p>Year: {year}</p>
      <p>Is this person cool: {isCool}</p>
      <button onClick={ () => sayHello(fullName)}> Say Hello</button>
      <button onClick={() => takeFruit(fruit2, 'yellow')}>Take Fruit</button>
      <button onClick={ () => calculateFruitAgain(fruitObjectArray)}>How many fruit do you have?</button>
      <p>Fav Fruits:</p>
      {fruitArray.map((fruit, index) =>(
        <p key={index}>{fruit}</p>
      ))}
      <p>Fav Fruit Objects:</p>
      {fruitObjectArray.map((fruit, index) =>(
        <p key={index}>{fruit.name}</p>
      ))}
      
      <TodoList />
    </div>
  )
}

export default App
