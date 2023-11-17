
// import Header from '../../components/Blocks/Header'
// import Header from "../../Components/Commons/Header";
// import Card1 from "../../components/Cards/Card1";
import Card1 from "../../Components/Commons/Cards/Card1";
// import Card2 from "../../components/Cards/Card2";
import Card2 from "../../Components/Commons/Cards/Card2";
// import Card3 from "../../components/Cards/Card3";
import Card3 from "../../Components/Commons/Cards/Card3";
// import PaymentCard from "../../components/Cards/PaymentCard";
import PaymentCard from "../../Components/Commons/Cards/PaymentCard";
// import Works from "../../components/Cards/Works";
import Works from "../../Components/Commons/Cards/Works";

//
// // import CountDown from "../../Components/Commons/Cards/CountDown";
// import Services from '../../components/Cards/Services'
// import Client from "../../components/Cards/Client";
import Client from "../../Components/Commons/Cards/Client";
import CountDown from "../../Components/Commons/Cards/CountDown";
import Timer from "../../Components/Blocks/Timer";
import Header from "../../Components/Blocks/Header";
import Services from "../../Components/Commons/Cards/Services";
import Footer from "../../Components/Blocks/Footer";
// import Card2 from "../../Components/Commons/Cards/Card2";
// import Blog from '../../components/Cards/Blog'

const Landing = () => {
  return (
    <div className="bg-[rgb(18,57,172)] w-[100%] min-h-[90vh]">
      {/* <Header /> */}
      <Timer />
      <Header/>
      <Card1 />
      <Card2 />
      <Card3 />
      <Works />
      <CountDown />
      <PaymentCard />
      <Client />
      <Services />
      <Footer/>
      {/* <Services /> */}

      {/* <Blog /> */}
    </div>
  );
};

export default Landing;
