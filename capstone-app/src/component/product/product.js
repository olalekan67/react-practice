import React from 'react'
import './product.css'
import shawarma from './food/shawarma.jfif'
import burger from './food/burger.jpg'
import fish from './food/fishbarbeque.jpg'
import friedRice from './food/friedrice.jpg'
import jollof from './food/jollofrice.jpg'
import pizza from './food/pizza.jfif'
import chicken from './food/grilledchicken.jpg'
import potato from './food/potato_pottage.jpg'
import poundedYam from './food/poundedyam.jfif'
import salad from './food/salad.jpg'
import semo from './food/semo.png'
import yam from './food/yamandegg.jpg'
function Product() {

  const foods = [
    {id:1, name: 'shawarma', image: shawarma, price: '$3'},
    {id:2, name: 'burger', image: burger, price: '$4'},
    {id:3, name: 'fish Barbeque', image: fish, price: '$5'},
    {id:4, name: 'fried Rice', image: friedRice, price: '$8'},
    {id:5, name: 'jollof', image: jollof, price: '$9'},
    {id:6, name: 'pizza', image: pizza, price: '$6'},
    {id:7, name: 'chicken', image: chicken, price: '$5'},
    {id:8, name: 'potato', image: potato, price: '$6'},
    {id:9, name: 'pounded Yam', image: poundedYam, price: '$10'},
    {id:10, name: 'salad', image: salad, price: '$3'},
    {id:11, name: 'semo with egusi', image: semo, price: '$9'},
    {id:12, name: 'yam', image: yam, price: '$7'}

  ]

  return (
    <div className='card-container'>
      {
        foods && foods.map((food) => 
        <div className='card-container'>
          <div className='card-div'>
            <img src={food.image} className='card-img' alt='' />
            <h3 className='card-title'>{food.name}</h3>
            <p className='card-price'>{food.price}</p>
          </div>
        </div>
        )
      }
    </div>
    
  )
}

export default Product