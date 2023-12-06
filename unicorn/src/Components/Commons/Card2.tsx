
import Afro from "../../assets/assets/images/afro-woman.jpg"
import Abso from "../../assets/assets/images/mirror .jpg"

const Card2 = () => {
  return (
    <div className='relative   h-[650px] bg-[white] flex items-center 
     sm:flex sm:flex-col sm:p-2 sm:min-h-[90vh]
     
     '>

      <div className="p-10  flex justify-between items-center
      sm:flex sm:flex-col sm:h-none sm:p-0  sm:pt-9 
      ">
        
      <div className='relative ml-5 h-[350px] w-[40%] sm:ml-[0px] sm:flex   sm:w-[100%] md:h-[350px] md:flex md:items-center md:w-[100%] md:ml-[0]'>
        <img
          className='h-[100%] w-[100%] object-cover rounded-[5px]
          sm:h-[250px] sm:w-[320px]
          '
          src={Afro} />
      </div>

      <div className='sm:bg-[#d6d4d4]  items-center h-[350px] w-[40%] ml-10 sm:w-[300px]  sm:ml-[0px] md:ml-0  sm:text-center  md:text-center lg:w-[50%]'>
         <h3 className='text-[black] text-[30px] text-left font-semibold leading-10
         sm:leading-11 sm:text-[40px] sm:p-[0] sm:font-bold sm:text-center 
         md:leading-10 md:text-[40px] md:font-bold md:text-center'> We are committed to give <br className="sm:hidden md:hidden" /> our best service</h3>
        <br  />
        
        <div className='h-[100px] w-[650px] flex text-left items-center border-l-[blue] shadow-lg border-r-0 border-t-0 border-b-0  border-4 sm:hidden md:hidden lg:h-[80px] lg:w-[470px]'>
          <p className='p-7 text-left sm:p-1 sm:text-[15px] md:text-center'>Local operation team on call 24 hours a day, available to
              work at a moment’s notice
          </p>
          
        </div>
        <br className="md:hidden sm:hidden" />
        <p className='text-[14px]   sm:hidden md:hidden '> Friendly bachelor entrance to on by.  Extremity as if breakfast agreement. Off now 
           mistress provided out  horrible opinions. Prevailed mr tolerably discourse assurance
           estimable applauded ro so.  Him everything melancholy uncommonly but solicitude
           inhabiting projection
        </p> 
        
        
        <div className="h-[100px] w-[650px lg:w-[400px]
        sm:bg-[white] sm:border-l-[blue] sm:shadow-md sm:border-r-0 sm:border-t-0 sm:border-b-0  sm:border-4
        shadow-md sm:h-[160px] sm:w-[100%]  sm:text-center sm:flex 
        md:h-[100px] md:w-[100%] md:text-left lg:hidden xl:hidden 2xl:hidden
        
          ">
          <p className='p-7 items-center sm:p-2
            sm:text-[23px] sm:items-center sm:flex sm:justify-center sm:font
           md:text-[15px] md:items-center md:flex md:p-1
           '>Local operation team on call 24 hours a day, available to
              work at a moment’s notice
          </p>
         
        </div>
        <br className="sm:hidden" />
         
          <br  />
          <div className=" flex gap-5 p-2 text-left ">
                <button className='text-[white] p-[5px] flex justify-center items-center rounded-[7px] h-[55px] w-[170px] bg-[#06278a]
                      sm:hidden md:hidden
              '>Contact Us</button>
              <div className="flex flex-col  h-[55px] text-[grey] w-[170px]  justify-center items-center border-l-2">
                <p>Get Free Estimate</p>
                <p className="text-[black] text-left">0901 090 0904</p>
              </div>    
          </div>
        
      </div>
      <br />

      <div className=" absolute left-28  flex items-center flex-col  bottom-14">
        <h3 className=" sm:hidden  text-[90px] font-bold text-[#06278a]">5</h3>
        <p className="sm:hidden font-semibold  m-0 p-0  text-[#4a4949]">Years Experiences </p>
      </div>
      <div className='absolute right-[780px] bottom-20  h-[250px] w-[250px] text-[#FFB400] border-8 rounded-full sm:hidden md:h-[450px] md:flex md:items-center md:w-[100%] md:ml-[0]
      
      '>
        <img
          className='h-[100%] w-[100%] object-cover rounded-full'
          src={Abso} />
      </div>
      </div>
      
      
    </div>
  )
}

export default Card2
