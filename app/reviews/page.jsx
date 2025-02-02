import React from "react";
import Image from "next/image";
import search from "../assets/Search.svg";
import customers from "../assets/customers.svg";

export default function Reviews() {
  return (
    <section className=" flex flex-col gap-6 h-[100vh] w-full bg-white px-12 py-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-medium">Reviews</h1>
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <Image src={search} alt="" />
            <input
              className="text-neutral-900 font-medium outline-none placeholder:text-neutral-300"
              type="text"
              placeholder="Search reviews"
            />
          </div>
        </div>
      </div>

      <table className="table-auto w-full bg-white">
        <thead>
          <tr className="text-neutral-500 text-sm  leading-normal border-b border-t">
            <th className="py-[10px] px-6 text-left ">Name</th>
            <th className="py-[10px] px-6 text-left ">Review</th>
            <th className="py-[10px] px-6 text-left ">action</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-medium">
          <tr className="border-b border-gray-100 hover:bg-gray-100">
            <div className="flex">
              <Image src={customers} alt="" />
              <td className="py-[30px] px-6 text-left ">Esther Howard</td>
            </div>
            <td className="py-[30px] px-6 ">Completed the task and added the required documentation, can someone please ....</td>
            <td className="py-[30px] px-6 text-left ">...</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-100">
            <div className="flex">
              <Image src={customers} alt="" />
              <td className="py-[30px] px-6 text-left ">Esther Howard</td>
            </div>
            <td className="py-[30px] px-6 ">Completed the task and added the required documentation, can someone please ....</td>
            <td className="py-[30px] px-6 text-left ">...</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-100">
            <div className="flex">
              <Image src={customers} alt="" />
              <td className="py-[30px] px-6 text-left ">Esther Howard</td>
            </div>
            <td className="py-[30px] px-6 ">Completed the task and added the required documentation, can someone please ....</td>
            <td className="py-[30px] px-6 text-left ">...</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-100">
            <div className="flex">
              <Image src={customers} alt="" />
              <td className="py-[30px] px-6 text-left ">Esther Howard</td>
            </div>
            <td className="py-[30px] px-6 ">Completed the task and added the required documentation, can someone please ....</td>
            <td className="py-[30px] px-6 text-left ">...</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-100">
            <div className="flex">
              <Image src={customers} alt="" />
              <td className="py-[30px] px-6 text-left ">Esther Howard</td>
            </div>
            <td className="py-[30px] px-6 ">Completed the task and added the required documentation, can someone please ....</td>
            <td className="py-[30px] px-6 text-left ">...</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-100">
            <div className="flex">
              <Image src={customers} alt="" />
              <td className="py-[30px] px-6 text-left ">Esther Howard</td>
            </div>
            <td className="py-[30px] px-6 ">Completed the task and added the required documentation, can someone please ....</td>
            <td className="py-[30px] px-6 text-left ">...</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
