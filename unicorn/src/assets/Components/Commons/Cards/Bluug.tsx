
import Zig from "../../../assets/images/withbg.jpg"

const Bluug = () => {
  return (
    <div className='h-[550px] text-center bg-[white] p-[100px]' >
        <p className='text-[#1239AC]'>Blog</p>
        <h3 className='text-[#474545] text-[30px]'>
            Take a look at our pricing and 
            select your Choice
        </h3>
        br
      <div className='flex justify-around'>
        <div className='h-[400px] w-[250px] border-solid rounded-[5px]  bg-[#D9D9D9] '>
            <div className='h-[250px] w-[100%]'
              
            >
                <img
              className='h-[100%] w-[100%] object-cover rounded-[5px]'
              src={Zig} />

            </div>

        </div>

        <div className='h-[400px] w-[250px] border-solid rounded-[5px] bg-[#D9D9D9] '>
        <div className='h-[250px] w-[100%]'
              
              >
                  <img
                className='h-[100%] w-[100%] object-cover rounded-[5px]'
                src={Zig} />
  
              </div>

        </div>

        <div className='h-[400px] w-[250px] border-solid rounded-[5px]  bg-[#D9D9D9] '>
        <div className='h-[250px] w-[100%]'
              
              >
                  <img
                className='h-[100%] w-[100%] object-cover rounded-[5px]'
                src={Zig} />
  
              </div>

        </div>


      </div>

      
      
    </div>
  )
}

export default Bluug
