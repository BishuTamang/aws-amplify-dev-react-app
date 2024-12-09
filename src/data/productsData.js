// src/data/productsData.js

const products = [
    {
      id: '1',
      name: 'Apple',
      images: ['https://example.com/apple.jpg'],
      description: 'Fresh and juicy apples.',
      price: 1.5,
      reviews: [
        { user: 'John', comment: 'Great quality!', rating: 5 },
        { user: 'Jane', comment: 'A bit pricey.', rating: 3 },
      ],
      suggestions: ['2', '3'],
      boughtTogether: ['2'],
    },
    {
      id: '2',
      name: 'Banana',
      images: ['https://example.com/banana.jpg'],
      description: 'Ripe bananas.',
      price: 0.5,
      reviews: [
        { user: 'Mike', comment: 'Delicious!', rating: 4 },
        { user: 'Anna', comment: 'Too ripe.', rating: 2 },
      ],
      suggestions: ['1', '3'],
      boughtTogether: ['4'],
    },
    {
        id: '4',
        name: 'Banana1111',
        images: ['https://example.com/banana.jpg'],
        description: 'Ripe bananas.',
        price: 0.5,
        reviews: [
          { user: 'Mike', comment: 'Delicious!', rating: 4 },
          { user: 'Anna', comment: 'Too ripe.', rating: 2 },
        ],
        suggestions: ['1', '3'],
        boughtTogether: ['3'],
      },
      {
        id: '3',
        name: 'Banana122',
        images: ['https://example.com/banana.jpg'],
        description: 'Ripe bananas.',
        price: 0.5,
        reviews: [
          { user: 'Mike', comment: 'Delicious!', rating: 4 },
          { user: 'Anna', comment: 'Too ripe.', rating: 2 },
        ],
        suggestions: ['1', '3'],
        boughtTogether: ['5'],
      },
      {
        id: '5',
        name: 'Banana12',
        images: ['https://example.com/banana.jpg'],
        description: 'Ripe bananas.',
        price: 0.5,
        reviews: [
          { user: 'Mike', comment: 'Delicious!', rating: 4 },
          { user: 'Anna', comment: 'Too ripe.', rating: 2 },
        ],
        suggestions: ['1', '3'],
        boughtTogether: ['5'],
      },
    // Add more products as needed
  ];
  
  export default products;


//   const products = [
//     {
//       id: '1', // string id
//       name: 'Product 1',
//       images: ['image1.jpg', 'image2.jpg'],
//       reviews: ['Review 1', 'Review 2'],
//       boughtTogether: ['Product 2', 'Product 3'],
//       suggestions: ['Suggested 1', 'Suggested 2'],
//     },
//     {
//       id: '2', // string id
//       name: 'Product 2',
//       images: ['image3.jpg', 'image4.jpg'],
//       reviews: ['Review 3', 'Review 4'],
//       boughtTogether: ['Product 1', 'Product 4'],
//       suggestions: ['Suggested 3', 'Suggested 4'],
//     },
//     // Add more products here
//   ];
  
//   export default products;
  
  