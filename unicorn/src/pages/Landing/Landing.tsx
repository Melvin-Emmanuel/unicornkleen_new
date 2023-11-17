import React from 'react'
import Timer from '../../Components/Blocks/Timer'
import Header from '../../Components/Blocks/Header'
import Card1 from '../../Components/Commons/Card1'
import Card2 from '../../Components/Commons/Card2'
import Card3 from '../../Components/Commons/Card3'
import PaymentCard from '../../Components/Commons/PaymentCard'
import Client from '../../Components/Commons/Client'
import Works from '../../Components/Commons/Works'
import CountDown from '../../Components/Commons/CountDown'
import Services from '../../Components/Commons/Services'
import Footer from '../../Components/Blocks/Footer'

const Landing:React.FC = () => {
  return (
    <div className='bg-[rgb(18,57,172)] w-[100%] min-h-[90vh]'>
       <Timer />
       <Header />
       <Card1 /> 
       <Card2 />
       <Card3 />
       <Services />
       <CountDown />
       <PaymentCard />
       <Client />
       <Works />
       <Footer />
      
    </div>
  )
}

export default Landing
