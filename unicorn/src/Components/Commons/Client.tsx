import Woman from "../../assets/assets/images/IMG-20231011-WA0007-1.jpg"


const Client = () => {
  return (
    <div className='bg-[1239AC] text-center pt-[100px] pb-[100px] items-center justify-center flex flex-col 
    
    md:h-[380px] md:p-3 
    '>
       <p  className='text-[white] sm:text-[25px]'>TESTIMONIANS</p>
        <h3 className='text-[#e1dada] text-[30px] sm-text-[35px] sm:font-semibold'>
            What Our Client Says About Us
        </h3>
        <br  className="sm:hidden md:hidden"/>
        <br />
        
        <div className='relative bg-[white] h-[400px] w-[70%] text-[#474545] flex justify-center items-center  text-center shadow-md rounded-[10px] p-[100px]
        sm:h-[600px] sm:w-[300px]  sm:p-5  sm:flex sm:flex-col sm:gap-3  sm:items-center sm:text-left sm:justify-center
        md:h-[200px] md:w-[600px] md:text-start md:p-3
        '>
          <div className=" h-[250px] w-[250px] scale-75 translate-x-4 skew-y-3  justify-center ">
             <img className="h-[100%] w-[100%]"
              src={Woman} alt="" />
        </div>
            <br className="sm:hidden " />
        <p className=" text-[20px] sm:text-[16px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempore quod consectetur quia necessitatibus, voluptatem assumenda quis, ab rem odit omnis harum nisi dicta repellat quaerat minus facere dolores, accusamus exercitationem vero non. Cupiditate assumenda fugiat laborum atque deleniti deserunt.
            <br />
            <br />
           <span className="text-[blue] text-[20] font-bold"> ______ Zainab Olatunji</span>
        </p>
       
        </div>
       

    </div>
  )
}

export default Client
