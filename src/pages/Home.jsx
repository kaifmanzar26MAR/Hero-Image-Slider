import React, { useEffect, useState } from 'react'

const Home = () => {;
    const [filteredData,setFilteredData]=useState(null);
    const [productToDilsplay,setProductToDisplay]=useState(null);
    const totalData=[
        {
            id:1,
            index:1,
            image:'./p1.jpg',
            title:"Product Name",
            color:"red",
            bg_image:'./bg1.jpg',
            text:"xyz this prodcut textt will be good for the fashion according to you!"
        },
        {
            id:2,
            index:2,
            image:'./p2.jpg',
            title:"Product Name",
            color:"blue",
            bg_image:'./bg2.jpg',
            text:"xyz this prodcut textt will be good for the fashion according to you!"
        },
        {
            id:3,
            index:3,
            image:'./p3.jpg',
            title:"Product Name",
            color:"green",
            bg_image:'./bg3.jpg',
            text:"xyz this prodcut textt will be good for the fashion according to you!"
        },
        {
            id:4,
            index:4,
            image:'./p4.jpg',
            title:"Product Name",
            color:"black",
            bg_image:'./bg4.jpg',
            text:"xyz this prodcut textt will be good for the fashion according to you!"
        },
        {
            id:5,
            index:5,
            image:'./p5.jpg',
            title:"Product Name",
            color:"yellow",
            bg_image:'./bg1.jpg',
            text:"xyz this prodcut textt will be good for the fashion according to you!"
        },
        {
            id:6,
            index:6,
            image:'./p6.jpg',
            title:"Product Name",
            color:"purple",
            bg_image:'./bg2.jpg',
            text:"xyz this prodcut textt will be good for the fashion according to you!"
        },
        {
            id:7,
            index:7,
            image:'./p7.jpg',
            title:"Product Name",
            color:"gray",
            bg_image:'./bg3.jpg',
            text:"xyz this prodcut textt will be good for the fashion according to you!"
        },
    ]

    useEffect(()=>{
        if(!productToDilsplay){
            setProductToDisplay(totalData[0]);
            const data=totalData.filter((e)=>{
                return e.id.toString()!= totalData[0].id.toString();
            })
            console.log(data);
            setFilteredData(data)
        }else{
            let data=[];
            let datainital=[];
            let dataend=[];

            for(let i in totalData){
                let it=totalData[i];

                if(Number(it.index)<Number(productToDilsplay.index)){
                    dataend.push(it)
                }else if(Number(it.index)>Number(productToDilsplay.index)){
                    datainital.push(it)
                }
            }

            data=[...datainital,...dataend];
            console.log( "modigy", data);
            setFilteredData(data)
        }
    },[productToDilsplay]);

    useEffect(()=>{
        if(!productToDilsplay) return;

        const interval = setInterval(() => {
            setProductToDisplay(totalData[(productToDilsplay.index + 1)%totalData.length]);
        }, 3000);

        return () => clearInterval(interval);


    },[productToDilsplay, totalData])

  return (
    <div className='w-full '>
      <div className={`w-full h-[50vh] lg:h-screen  relative flex flex-row items-center justify-start `} >
        <img src={productToDilsplay?.bg_image} alt="backgournd" className='w-full z-0 h-full absolute top-0 transition-all'/>
        <div className='h-[90%] text-white aspect-square rounded-lg border-[1px] border-gray-600 backdrop-blur-sm shadow-sm shadow-gray-400 m-2'>
            <img src={productToDilsplay?.image} alt="image" className='h-full w-full object-cover' />
        </div>

        <div className='w-full transition-all h-full overflow-x-auto z-20 flex flex-col gap-y-5 p-4  items-center'>
        {
            filteredData?.map((e)=>{
                return(
                    <div key={e.id} onClick={()=>setProductToDisplay(e)} className='w-[500px] h-80 bg-red-500'> <img src={e.image} alt="" className='aspect-square w-full h-full object-cover'/></div>
                )
            })
        }
        </div>

      </div>
    
    </div>
  )
}

export default Home
