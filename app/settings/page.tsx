import React from "react";

export default function Settings() {
  return (
    <section className="bg-white h-[588px] py-8 px-12">
      <div className="border-b mb-24 flex">
        <h1
          className="text-lg font-medium text-neutral-900"
        >
          Settings
        </h1>
      </div>
      <div className="flex flex-col gap-4 mb-[74px]">
        <div className="flex flex-col">
          <label className="text-neutral-600 text-[16px] font-medium" htmlFor="">Site Name</label>
          <input className="border rounded w-[30%] py-1" type="text" />
        </div>
        <div className="flex flex-col">
          <label className="text-neutral-600 text-[16px] font-medium" htmlFor="">Support Email</label>
          <input  className="border rounded w-[30%] py-1" type="text" />
        </div>
        <div className="flex flex-col">
          <label className="text-neutral-600 text-[16px] font-medium" htmlFor="">Monthly Order Goal</label>
          <input  className="border rounded w-[30%] py-1" type="text" />
        </div>
      </div>
      <div>
        <button className="py-2 px-6 bg-black text-neutral-100 font-medium rounded">Save Changes</button>
      </div>
    </section>
  );
}
