import {CiHome} from "react-icons/ci"
import { FaArrowUpLong, FaArrowDownLong } from "react-icons/fa6";
import manypics from "../assets/manypics-removebg-preview.png"
import Chart from "../assets/chart.svg"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import UserAppointments from "../Components/Commons/UserAppointments";
import {useSelector} from "react-redux"


const data = [
	{ name: "Group A", value: 400 },
	{ name: "Group B", value: 300 },
	{ name: "Group C", value: 300 },
	{ name: "Group D", value: 200 },
	{ name: "Group E", value: 120 },
	{ name: "Group F", value: 510 },
	{ name: "Group G", value: 458 },
	{ name: "Group H", value: 230 },
];


const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
	cx,
	cy,
	midAngle,
	innerRadius,
	outerRadius,
	percent,
 }: any) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
	const x = cx + radius * Math.cos(-midAngle * RADIAN);
	const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return(
    <text
      x={x}
      y={y}
      fill='white'
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline= "central"
    >
     {` ${(percent * 100).toFixed(0)}%`}
    </text>
  )
 }
 
export const PieChartComp:React.FC = () => {
  return (
    <div>
       <div
			style={{
				width: "500px",
				height: "500px",
			}}>
			<ResponsiveContainer width='100%' height='100%'>
				<PieChart width={700} height={700}>
					<Pie
						data={data}
						cx='70%'
						cy='70%'
						labelLine={false}
						label={renderCustomizedLabel}
						outerRadius={150}
						fill='#8884d8'
						dataKey='value'>
						{data.map((entry: any, index) => (
							<>
								<div>{entry}</div>
								<Cell
									key={`cell-${index}`}
									fill={COLORS[index % COLORS.length]}
								/>
							</>
						))}
					</Pie>
				</PieChart>
			</ResponsiveContainer>
    </div>
    </div>
  )
}



const DashHome = () => {
    const sideBar = useSelector((state: any) => state.nav)
    const half = "pt-24 pl-[13%]";
    const full = "pt-24 pl-[8%]";
  return (
      <div className={sideBar ? `${half}`:`${full}`}>
      <div className="flex ">
        <div className="h-56 w-[90%] shadow-md flex items-center  m-10 rounded-md bg-[#7d55d6]">
          <div className="h-[60%] w-72 mx-auto rounded-md flex  items-center gap-5 pl-5 pt-5 border-2 border-solid  bg-[#A286E1]">
            <div className="h-14 m-5 w-14 bg-white border-2 rounded-md border-solid flex justify-center items-center text-4xl ">
              <CiHome />
            </div>
            <div>
              {" "}
              <p className="text-2xl font-bold text-gray-200">Our Service </p>
              <h1 className="text-2xl font-semibold  text-white ">
                500K users
              </h1>
            </div>
          </div>
          <div className="h-[60%] w-72 mx-auto rounded-md flex  items-center gap-5 pl-5 pt-5 border-2 border-solid  bg-[#A286E1]">
            <div className="h-14 m-5 w-14 bg-white border-2 rounded-md border-solid flex justify-center items-center text-4xl ">
              <CiHome />
            </div>
            <div>
              {" "}
              <p className="text-2xl font-bold text-gray-200">Our Service </p>
              <h1 className="text-2xl font-semibold  text-white ">
                500K users
              </h1>
            </div>
          </div>
          <div className="h-[60%] w-72 mx-auto rounded-md flex  items-center gap-5 pl-5 pt-5 border-2 border-solid  bg-[#A286E1]">
            <div className="h-14 m-5 w-14 bg-white border-2 rounded-md border-solid flex justify-center items-center text-4xl ">
              <CiHome />
            </div>
            <div>
              {" "}
              <p className="text-2xl font-bold text-gray-200">Our Service </p>
              <h1 className="text-2xl font-semibold  text-white ">
                500K users
              </h1>
            </div>
          </div>
        </div>
        {/* <div className="h-52 w-96 shadow-md m-10" ></div>
      <div className="h-52 w-96 shadow-md m-10" ></div> */}
      </div>

      <div className="h-40 w-[90%] flex justify-between mx-auto shadow-md">
        <div className="flex flex-col gap-3 p-5">
          <h5 className="text-base font-medium text-[#9c9ab6] ">
            New customers this month
          </h5>
          <p className="text-2xl text-[#2b2a3f] font-black">4.5k</p>
          <div className="h-10 w-24 bg-[#E8F4F1] text-[#06b48a] text-base flex justify-center gap-3 rounded-md cursor-pointer items-center">
            43% <FaArrowUpLong />
          </div>
        </div>

        <div className="flex h-full w-[35%] items-center">
          <img className="h-[50%]" src={manypics} alt="" />{" "}
          <p className="text-base text-[#2b2a3f] font-extrabold">
            Joined Today
          </p>
        </div>
      </div>

      <div className="h-[450px]  w-[95%] mx-auto m-0 flex items-center ">
        <img src={Chart} className="" alt="" />
        <div className="self-center pb-52">
      
          <PieChartComp />
        </div>
      </div>

      <div className="h-72 w-[90%] mx-auto shadow-lg flex flex-col gap-3 p-6">
        <p
          className="text-base font-semibold text-[#9c9ab6
]"
        >
          Revenue This Month
        </p>
        <h1 className="text-3xl font-black text-[#2b2a3f]">$16,500 </h1>

        <div className="h-10 w-24 bg-[#E8F4F1] text-[#ef2929] text-base flex justify-center gap-10 rounded-md cursor-pointer items-center">
          1.5% <FaArrowDownLong />
        </div>
        <div className="flex justify-between w-[90%] ">
          <p className="text-base ">$9500 more to reach goal</p>
          <p className="text-base text-[#6560f0] font-semibold">65%</p>
        </div>

        <div className="h-4 w-[90%] rounded-xl border-2 border-solid overflow-hidden">
          <div className="h-full w-[60%] bg-[#1239AC] rounded-lg"></div>
        </div>
        <br />
        <br />
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />

          <UserAppointments/>
    </div>
  );
};
export default DashHome;
