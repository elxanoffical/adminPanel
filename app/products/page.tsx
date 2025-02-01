import Image from "next/image";
import React from "react";
import search from "../assets/Search.svg";
import img from "../assets/Image.svg";

export default function Products() {
  return (
    <section className="border flex flex-col gap-6 border-black h-[100vh] w-full bg-white px-12 py-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-medium">Products</h1>
        <div className="flex items-center gap-4">
          <button className="text-[16px] font-medium py-2 px-5 bg-black text-neutral-100 rounded">
            Add products
          </button>
          <div className="flex gap-2">
            <Image src={search} alt="" />
            <input
              className="text-neutral-900 font-medium outline-none placeholder:text-neutral-300"
              type="text"
              placeholder="Search products"
            />
          </div>
        </div>
      </div>

      <table className="table-auto w-full bg-white">
        <thead>
          <tr className="text-neutral-500 text-sm h-[] leading-normal border-b border-t">
            <th className="py-[10px] px-6 text-left ">Name</th>
            <th className="py-[10px] px-6 text-left ">SKU</th>
            <th className="py-[10px] px-6 text-left ">Price</th>
            <th className="py-[10px] px-6 text-left ">Stock</th>
            <th className="py-[10px] px-6 text-left ">categories</th>
            <th className="py-[10px] px-6 text-left ">action</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-medium">
          <tr className="border-b border-gray-100 hover:bg-gray-100">
            <div className="flex">
              <Image src={img} alt=""/>
            <td className="py-[30px] px-6 text-left ">MOCKUP Black</td>
            </div>
            <td className="py-[30px] px-6 ">47514501</td>
            <td className="py-[30px] px-6 text-left ">$75.00</td>
            <td className="py-[30px] px-6 text-left ">In Stock</td>
            <td className="py-[30px] px-6 text-left ">T-shirt, Men</td>
            <td className="py-[30px] px-6 text-left ">...</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-100">
            <div className="flex">
              <Image src={img} alt=""/>
            <td className="py-[30px] px-6 text-left ">MOCKUP Black</td>
            </div>
            <td className="py-[30px] px-6 ">47514501</td>
            <td className="py-[30px] px-6 text-left ">$75.00</td>
            <td className="py-[30px] px-6 text-left ">In Stock</td>
            <td className="py-[30px] px-6 text-left ">T-shirt, Men</td>
            <td className="py-[30px] px-6 text-left ">...</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-100">
            <div className="flex">
              <Image src={img} alt=""/>
            <td className="py-[30px] px-6 text-left ">MOCKUP Black</td>
            </div>
            <td className="py-[30px] px-6 ">47514501</td>
            <td className="py-[30px] px-6 text-left ">$75.00</td>
            <td className="py-[30px] px-6 text-left ">In Stock</td>
            <td className="py-[30px] px-6 text-left ">T-shirt, Men</td>
            <td className="py-[30px] px-6 text-left ">...</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-100">
            <div className="flex">
              <Image src={img} alt=""/>
            <td className="py-[30px] px-6 text-left ">MOCKUP Black</td>
            </div>
            <td className="py-[30px] px-6 ">47514501</td>
            <td className="py-[30px] px-6 text-left ">$75.00</td>
            <td className="py-[30px] px-6 text-left ">In Stock</td>
            <td className="py-[30px] px-6 text-left ">T-shirt, Men</td>
            <td className="py-[30px] px-6 text-left ">...</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-100">
            <div className="flex">
              <Image src={img} alt=""/>
            <td className="py-[30px] px-6 text-left ">MOCKUP Black</td>
            </div>
            <td className="py-[30px] px-6 ">47514501</td>
            <td className="py-[30px] px-6 text-left ">$75.00</td>
            <td className="py-[30px] px-6 text-left ">In Stock</td>
            <td className="py-[30px] px-6 text-left ">T-shirt, Men</td>
            <td className="py-[30px] px-6 text-left ">...</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-100">
            <div className="flex">
              <Image src={img} alt=""/>
            <td className="py-[30px] px-6 text-left ">MOCKUP Black</td>
            </div>
            <td className="py-[30px] px-6 ">47514501</td>
            <td className="py-[30px] px-6 text-left ">$75.00</td>
            <td className="py-[30px] px-6 text-left ">In Stock</td>
            <td className="py-[30px] px-6 text-left ">T-shirt, Men</td>
            <td className="py-[30px] px-6 text-left ">...</td>
          </tr>
          
        </tbody>
      </table>
    </section>
  );
}
