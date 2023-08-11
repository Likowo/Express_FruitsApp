import React from 'react'

function VeggiesShow(props) {
  const vegetables = props.vegetable
  return (
    <div>
<h1>ShowPage</h1>
<h3>
  {" "}
  The {vegetables.name} is {vegetables.color}
</h3>
<h1 style={{color:'light coral'}}>{vegetables.readyToEat ? " It is Ready to Eat" : "It is not ready yet"}</h1>
</div>
  )
}

export default VeggiesShow;