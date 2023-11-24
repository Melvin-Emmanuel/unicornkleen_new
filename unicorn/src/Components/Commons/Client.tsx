import Woman from "../../assets/assets/images/images (2).jpeg"

const Client = () => {
  return (
    <div className='bg-[1239AC] text-center pt-[100px] pb-[100px] items-center justify-center flex flex-col 
    sm:h-[400px] sm:p-5 
    md:h-[380px] md:p-3 
    '>
       <p  className='text-[white]'>TESTIMONIANS</p>
        <h3 className='text-[#e1dada] text-[30px]'>
            What Our Client Says
        </h3>
        <br  className="sm:hidden md:hidden"/>
        <br />
        <div className='relative bg-[white] h-[400px] w-[70%] text-[#474545] flex justify-center items-center  text-center shadow-md rounded-[10px] p-[100px]
        sm:h-[260px] sm:w-[300px] sm:text-start sm:p-3
        md:h-[200px] md:w-[600px] md:text-start md:p-3
        '>
            <br />
        <p className=" text-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempore quod consectetur quia necessitatibus, voluptatem assumenda quis, ab rem odit omnis harum nisi dicta repellat quaerat minus facere dolores, accusamus exercitationem vero non. Cupiditate assumenda fugiat laborum atque deleniti deserunt.
            <br />
            ______ Zainab Olatunji
        </p>
       
        </div>
        <div className="absolute h-[250px] w-[250px] scale-75 translate-x-4 skew-y-3  left-20 top-26">
             <img className="h-[100%] w-[100%]"
              src={Woman} alt="" />
        </div>

    </div>
  )
}

export default Client
