import React from "react";

function Show(props) {
  const fruit = props.fruit;

  const vegetables = props.vegetables;

  return (
    <div>
      <h1>ShowPage</h1>
      <h3>
        {" "}
        The {fruit.name} is {fruit.color}
      </h3>
      <h1 style={{color:'green'}}>{fruit.readyToEat ? " It's Ready to Eat" : "It is not ready yet"}</h1>
   </div>
  );

}

export default Show;