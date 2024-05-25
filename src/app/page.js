import LocalStorage from "@/components/LocalStorage/LocalStorage";
import OrdersDataCards from "@/components/OrdersDataCards/OrdersDataCards";
import PieChartWithCustomizedLabel from "@/components/PieChartWithCustomizedLabel/PieChartWithCustomizedLabel";
import SimpleBarChart from "@/components/SimpleBarChart/SimpleBarChart";
import TwoSimplePieChart from "@/components/TwoSimplePieChart/TwoSimplePieChart";
import { getAllUser } from "@/utils/getAllUser";
import { getOrders } from "@/utils/getOrders";
import { useRouter } from "next/navigation";
import React from "react";

const page = async() => {
  const users= await getAllUser()
  const orders = await getOrders()
  console.log(orders)
  // const user = localStorage.getItem("email");   
  // <LocalStorage></LocalStorage>
  const router = useRouter()
  if(!user){
    router.push('/login')
  }
  return (
    <div className="max-w-screen-xl mx-auto mt-2 md:mt-4">
      <div className="grid gap-8 grid-cols-1 md:grid-cols-12">
        <div className="col-span-1 md:col-span-7">
          <div className="stats shadow w-full">
            <div className="flex-row md:flex w-full">
            <div className="stat bg-gradient-to-r from-cyan-300">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Downloads</div>
              <div className="stat-value">31K</div>
              <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat bg-gradient-to-r from-indigo-300">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">New Users</div>
              <div className="stat-value">4,200</div>
              <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div className="stat bg-gradient-to-r from-red-300">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">New Registers</div>
              <div className="stat-value">1,200</div>
              <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>
            </div>
          </div>
          <br />
          <OrdersDataCards></OrdersDataCards>
        </div>
        <div className="col-span-1 md:col-span-5 mx-2 md:mx-0 max-h-screen">
          <div className="h-[100%] md:h-[50%]">
        <h2 className="mb-2 text-2xl font-bold">Revenue</h2>
        <SimpleBarChart></SimpleBarChart>
          </div>
          <h2 className="text-2xl mt-10 md:mt-4 font-bold">Top Seals People</h2>
        <div className="mt-4 flex justify-center h-[30%]">
          <TwoSimplePieChart></TwoSimplePieChart>
          <TwoSimplePieChart></TwoSimplePieChart>

        </div>
        
        </div>
        
      </div>
      
      </div>
  );
};

export default page;
