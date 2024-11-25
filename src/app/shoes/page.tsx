import React from 'react'

const Shoes = () => {

  const shoesData = [
    { id: 1, name: "Nike", price: 10000, description: 'Athletic shoes', image: '/Nike-shoes.jpg' },
    { id: 2, name: "Puma", price: 18000, description: 'Sports shoes', image: '/puma-shoe.jpg' },
    { id: 3, name: "On Cloud", price: 25000, description: 'Comfortable shoes', image: '/oncloud.jpg' },
    { id: 4, name: "Ndure", price: 8000, description: 'Luxurious shoes', image: '/ndure-shoes.jpg' },
    { id: 5, name: "Hoka", price: 11000, description: 'Light-weight,daily use', image: '/hoka.jpg' },
    { id: 6, name: "Adidas", price: 35000, description: 'Football boots', image: '/Adidas-shoes.jpg' },

  ]

  return (
    <div>
      <div className='shoes'>
        {shoesData.map((shoe) => (
          <div key={shoe.id} className='shoes-card'>
            <img src={shoe.image} alt={shoe.name} />
            <h3>{shoe.name}</h3>
            <p>{shoe.description}</p>
            <div className='price'>${shoe.price}</div>
            <button>Add to Cart</button>

          </div>
        ))}
      </div>

    </div>
  )
}

export default Shoes
