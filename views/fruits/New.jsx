import React from "react";

function New() {
  <nav>
  <a href="/fruits/new">Create a New Fruit</a>
  </nav>;
  return (
    <div>
      <form action="/fruits" method="POST">
        Name: <input type="text" name="name" />
        <br />
        Color: <input type="text" name="color" />
        <br />
        Is Ready To Eat: <input type="checkbox" name="readyToEat" />
        <br />
        <input type="submit" name="" value="Create Fruit" />
      </form>
    </div>
  );
}


export default New;
