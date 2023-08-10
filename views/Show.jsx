import React from 'react'

function show(props) {
    const fruit = this.props.fruit
  return (
    <div>
       <h1> ShowPage </h1> 
       <h3> {""} The {fruit.name} is {fruit.color} </h3>
       <h1> The {fruit.name} is {fruit.color}</h1>
       <h1>  {fruit.readyToEat ? "It is Ready to eat ": " It is not ready to eat yet"} </h1>
       <h1 style={{color:'greenyellow'}}>{fruit.readyToEat ? "It's ripe":"It's not ripe"}</h1>
    </div>
  )
}



export default show;

///////////**************** */
// import React from 'react'

// function Show(props) {
//     const fruit = props.fruit
//   return (
//     <div>
//         <h1>ShowPage</h1>
//         <h3> The {fruit.name} is {fruit.color} </h3>
//         <h1 style={{color:'greenyellow'}}>{fruit.readyToEat ? "It's ripe":"It's not ripe"}</h1>
//     </div>
//   )
// }

// export default Show

/////** */