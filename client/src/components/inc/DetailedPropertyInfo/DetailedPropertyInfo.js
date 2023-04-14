import SlidingImages from "./SlidingImages";
import Info from "./Info"

function DetailedPropertyInfo() {
    const images = [
        'https://a0.muscache.com/im/pictures/miso/Hosting-740807800483774592/original/6491cdaf-0dfa-46ad-b93a-a3f05382cbb1.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-717383292590854818/original/b7582c33-4bc8-4247-bafd-f9f7a23fe471.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-740807800483774592/original/6491cdaf-0dfa-46ad-b93a-a3f05382cbb1.jpeg?im_w=720',
        
      ];
    const apartments = [
        {
          name: 'Luxury Apartment',
          address: '123 Main St, Anytown, USA',
          SquareFeet: '1346 sq ft',
          price: 3200,
          beds: 2,
          baths: 2,
          description: " This is a Good Apartment"

         
        },
    ]

    return (
    <div className='DetailedProperty'>
        
      <SlidingImages images={images}/>

    
      {apartments.map((apartment, index) => (
      <Info
          name={apartment.name}
          address={apartment.address}
          SquareFeet={apartment.SquareFeet}
          price = {apartment.price}
          beds = {apartment.beds}
          baths = {apartment.baths}
          description = {apartment.description}

        />  
      ))}             
    </div>

  
    );
  } 
  export default DetailedPropertyInfo;
  