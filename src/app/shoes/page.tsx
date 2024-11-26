import React from 'react';
import Image from 'next/image';

const Shoes = () => {
  const shoesData = [
    {id: '1', name: 'Nike Alamy', description: 'Flexible Shoes', price: 350, image: '/image-1.jpeg'},
    {id: '2', name: 'Nike VIR', description: 'Jordan Shoes', price: 360, image: '/download (1).jpg'},
    {id: '3', name: 'Nike Rollred', description: 'Loin Shoes', price: 400, image: '/images (6).jpeg'},
    {id: '4', name: 'Nike Sprender Air', description: 'Jence Shoes', price: 250, image: '/images (14).jpeg'},
    {id: '5', name: 'Nike Fline', description: 'Jogging Shoes', price: 380, image: '/images (13).jpeg'},
    {id: '6', name: 'Nike Wakasoco', description: 'Classic Shoes', price: 290, image: '/images (12).jpeg'},
  ];

  return (
    <div>
      <div className='shoes'>
        {shoesData.map((shoe) => (
          <div key={shoe.id} className='shoes-card'>
            <Image src={shoe.image} alt={shoe.name} width={200} height={200} />
            <h3 className='name'>{shoe.name}</h3>
            <p>{shoe.description}</p>
            <div className='price'>${shoe.price}</div>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shoes;

