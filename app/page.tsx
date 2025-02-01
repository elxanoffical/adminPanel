import vector from './assets/dashboard/Vector.svg'
import chart from './assets/dashboard/Chart.svg'
import bar from './assets/dashboard/Bar.svg'
import doughnutChart from './assets/dashboard/Doughnut Chart.svg'
import Image from "next/image";

export default function Dashboard() {
  return (
    <div className=" flex flex-col gap-6 py-3 h-[100vh]">
      <div className=" flex gap-9">
        <div className=" flex flex-col gap-11 bg-white rounded p-6 w-[30%]">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-[6px]">
              <p className="text-[15px] font-semibold">Total Sales</p>
              <span className="text-[10px] tracking-wide font-medium text-neutral-500">
                THIS MONTH
              </span>
            </div>
            <div>
              <p className="text-xl font-bold">$ 4,235</p>
            </div>
          </div>
          <Image className='w-[100%]' src={vector} alt="" />
        </div>

        <div className=" flex flex-col gap-11 bg-white rounded p-6 w-[30%]">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-[6px]">
              <p className="text-[15px] font-semibold">Customers</p>
              <span className="text-[10px] tracking-wide font-medium text-neutral-500">
                THIS MONTH
              </span>
            </div>
            <div>
              <p className="text-xl font-bold">$ 2,571</p>
            </div>
          </div>
          <Image src={chart} alt="" />
        </div>

        <div className=" flex flex-col gap-16 bg-white rounded p-6 w-[30%]">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-[6px]">
              <p className="text-[15px] font-semibold">Orders</p>
              <span className="text-[10px] tracking-wide font-medium text-neutral-500">
                Monthly GOALS : 1,000
              </span>
            </div>
            <div>
              <p className="text-xl font-bold">734</p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-xs text-neutral-500 font-medium">266 Left</p>
            <Image src={bar} alt="" />
          </div>
        </div>
      </div>

      <div className="flex gap-9">
        <div className=" flex flex-col gap-6 w-[30%] h-[410px] rounded bg-white p-6">
          <div className="flex flex-col">
            <h1 className="text-[15px] font-semibold">Best Selling</h1>
            <p className="text-[10px] tracking-wide font-medium text-neutral-500">
              THIS MONTH
            </p>
          </div>
          <div className="border-b"></div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <p className="text-xl font-bold">$2,400</p> -
              <span className="text-[16px] text-neutral-500 font-medium">
                Total Sales
              </span>
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="border rounded-full flex items-center gap-1 px-2">
                <h1 className="text-[12px] font-medium text-neutral-500">
                  Classic Monochrome Tees
                </h1>
                -
                <span className="text-neutral-900 font-semibold text-[10px]">
                  $940 Sales
                </span>
              </div>
              <div className="border rounded-full flex items-center gap-1 px-2">
                <h1 className="text-[12px] font-medium text-neutral-500">
                  Monochromatic Wardrobe
                </h1>
                -
                <span className="text-neutral-900 font-semibold text-[10px]">
                  $790 Sales
                </span>
              </div>
              <div className="border rounded-full flex items-center gap-1 px-2">
                <h1 className="text-[12px] font-medium text-neutral-500">
                  Essential Neutrals
                </h1>
                -
                <span className="text-neutral-900 font-semibold text-[10px]">
                  $740 Sales
                </span>
              </div>
            </div>
          </div>
          <div>
            <Image src={doughnutChart} alt="" />
          </div>
        </div>

        <div className="  w-[611px] rounded bg-white">
          <div className="overflow-x-auto h-[400px]">
            <div className="py-6 px-6 flex items-center gap-5">
              <h1 className="text-[16px] font-semibold text-neutral-900">
                Recent Orders
              </h1>
              <button className="px-4 py-[2px] bg-neutral-100 text-neutral-500 rounded-full text-[14px]">
                View All
              </button>
            </div>
            <table className="table-auto w-full bg-white">
              <thead>
                <tr className=" text-gray-600 text-sm leading-normal border-b border-t">
                  <th className="py-[20px] px-6 text-left ">Item</th>
                  <th className="py-[20px] px-6 text-left ">Date</th>
                  <th className="py-[20px] px-6 text-left ">Total</th>
                  <th className="py-[20px] px-6 text-left ">Status</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-medium">
                <tr className="border-b border-gray-300 hover:bg-gray-100">
                  <td className="py-[20px] px-6 text-left ">
                    Mens Black T-Shirts
                  </td>
                  <td className="py-[20px] px-6 ">20 Mar, 2023</td>
                  <td className="py-[20px] px-6 text-left ">$75.00</td>
                  <td className="py-[20px] px-6 text-left ">Processing</td>
                </tr>
                <tr className="border-b border-gray-300 hover:bg-gray-100">
                  <td className="py-[20px] px-6 text-left ">
                    Essential Neutrals
                  </td>
                  <td className="py-[20px] px-6 ">19 Mar, 2023</td>
                  <td className="py-[20px] px-6 text-left ">$22.00</td>
                  <td className="py-[20px] px-6 text-left ">Processing</td>
                </tr>
                <tr className="border-b border-gray-300 hover:bg-gray-100">
                  <td className="py-[20px] px-6 text-left ">
                    Sleek and Cozy Black
                  </td>
                  <td className="py-[20px] px-6 ">7 Feb, 2023</td>
                  <td className="py-[20px] px-6 text-left ">$57.00</td>
                  <td className="py-[20px] px-6 text-left ">Completed</td>
                </tr>
                <tr className="border-b border-gray-300 hover:bg-gray-100">
                  <td className="py-[20px] px-6 text-left ">MOCKUP Black</td>
                  <td className="py-[20px] px-6 ">29 Jan, 2023</td>
                  <td className="py-[20px] px-6 text-left ">$30.00</td>
                  <td className="py-[20px] px-6 text-left ">Completed</td>
                </tr>
                <tr className=" hover:bg-gray-100">
                  <td className="py-[20px] px-6 text-left ">
                    Monochromatic Wardrobe
                  </td>
                  <td className="py-[20px] px-6 ">27 Jan, 2023</td>
                  <td className="py-[20px] px-6 text-left ">$27.00</td>
                  <td className="py-[20px] px-6 text-left ">Completed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
