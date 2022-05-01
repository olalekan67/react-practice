import React from 'react'
import Card from '../card/card'
import pizza from '../product/food/pizza.jfif'



function Contact() {
  return (
    <div>
        <Card names={[{id:1, time:"Breakfast", image: pizza, mon: "7am - 11am", fri:"7am - 12pm", sat:"7am - 10am"}, {id:2, time:"Lunch", image: pizza, mon: "11am - 2pm", fri:"12pm - 2pm", sat:"10am - 1pm"}, {id:3, time:"Dinner", image: pizza, mon: "2pm - 7pm", fri:"2pm - 7pm", sat:"1pm - 7pm"}]}/>
    </div>
  )
}

export default Contact