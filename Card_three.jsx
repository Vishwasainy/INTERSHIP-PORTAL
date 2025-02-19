// import React from 'react'
// import Slider from "react-slick";
// const Card_three = () => {
//    const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3
//   };
//   return (
//       <div className='max-w-[1240px] mx-auto py-14'>
//         <h1 className='text-4xl font-bold text-center cursor-pointer'>Our Achievers</h1>
         
//       <div className='max-w-[1240px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-5 px-[20px]'>
        
//         {Cards.map((d) => (
           
//           <div className='text-center shadow-lg'>
//                  <Slider {...settings}>
//             <img src={d.img} alt="" />

//             <h3>{ d.name}</h3>
//             <p>{d.Devloper}</p>
//             </Slider>
//              </div>
             
//              ))}
               
//                 </div>
      
             
//           </div>
          
   
//   )
// }

// const Cards = [
//   {
//     name: 'Alok kumar',
//     img: '/Photoes/Girl-1.jpg',
//      Devloper: 'Web Devloper'
//   },

//    {
//     name: 'Alok kumar',
//     img: '/Photoes/Girl-2.jpg',
//      Devloper: 'Web Devloper'
//   },
   
//     {
//     name: 'Alok kumar',
//     img: '/Photoes/Girl-3.jpg',
//      Devloper: 'Web Devloper'
//   },
    
//      {
//     name: 'Alok kumar',
//     img: '/Photoes/Girl-4.jpg',
//      Devloper: 'Web Devloper'
//   },
     
//   //     {
//   //   name: 'Alok kumar',
//   //   img: '/Images/Girl-1.jpg',
//   //    Devloper: 'Web Developer'
//   // },
// ]

// export default Card_three












import React from 'react'
import Slider from "react-slick";
const Card_three = () => {
   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div className="max-w-[1240px] mx-auto py-14">
      <h1
        className="text-4xl font-bold text-center cursor-pointer"
        data-aos="fade-up"
      >
        Our Achievers
      </h1>

      <div
        className="max-w-[1240px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-5 px-[20px] py-14 items-center justify-center"
        data-aos="fade-up"
      >
        {Cards.map((d) => (
          <div className="text-center shadow-lg overflow-hidden rounded-[10px]">
            <img
              src={d.img}
              alt=""
              className="hover:scale-110 duration-300 rounded"
            />

            <h3 className="text-[20px] font-bold mt-4">{d.name}</h3>
            <p className="mt-2 text-gray-500 mb-4">{d.Devloper}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const Cards = [
  {
    name: 'Alok kumar',
    img: '/Photoes/Girl-1.jpg',
     Devloper: 'Java Devloper'
  },

   {
    name: 'Alok kumar',
    img: '/Photoes/Girl-2.jpg',
     Devloper: 'UI Devloper'
  },
   
    {
    name: 'Alok kumar',
    img: '/Photoes/Girl-3.jpg',
     Devloper: 'PHP Expert'
  },
    
     {
    name: 'Alok kumar',
    img: '/Photoes/Girl-4.jpg',
     Devloper: 'Web Devloper'
  },
     
  //     {
  //   name: 'Alok kumar',
  //   img: '/Images/Girl-1.jpg',
  //    Devloper: 'Web Developer'
  // },
]

export default Card_three