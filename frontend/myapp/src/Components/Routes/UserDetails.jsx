import React from "react";
import MainHeader from "../Header/MainHeader";
import Footer from "../Footer/Footer";

const UserDetails = () => {
  return (
    <div className="w-[100%]">
      <MainHeader />
      <div className="w-[100%] flex">
        <div className="w-[100%] p-4 basis-[80%]">
          <div className="bg-[#2874F0] text-white rounded-lg pl-6">
            <h1 className="text-[2rem] font-semibold ">DELIVERY ADDRESS</h1>
          </div>

          <form className="flex flex-col gap-4 pl-9">
            <ul className="steps steps-vertical">
              <li className="step step-primary">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-[80%] border-2 h-[2.7rem] outline-none pl-3 rounded-2xl"
                />
              </li>
              <li className="step step-primary">
                <input
                  type="number"
                  placeholder="Your Pincode"
                  className="w-[80%] border-2 h-[2.7rem] outline-none pl-3 rounded-2xl"
                />
              </li>
              <li className="step step-primary">
                <input
                  type="text"
                  placeholder="Locality"
                  className="w-[80%] border-2 h-[2.7rem] outline-none pl-3 rounded-2xl"
                />
              </li>
              <li className="step step-primary">
                <input
                  type="number"
                  placeholder="Your Contact Number"
                  className="w-[80%] border-2 h-[2.7rem] outline-none pl-3 rounded-2xl"
                />
              </li>
              <li className="step step-primary">
                <input
                  type="number"
                  placeholder="Alternate Contact Number (Optional)"
                  className="w-[80%] border-2 h-[2.7rem] outline-none pl-3 rounded-2xl"
                />
              </li>

              <li className="step step-primary">
                <textarea
                  placeholder="Your Address !!!"
                  rows="4"
                  cols="50"
                  className="w-[80%] border-2 outline-none pl-3 pt-3 rounded-2xl"
                ></textarea>
              </li>
              <li className="step step-primary">
                <input
                  type="text"
                  placeholder="City/District/Town"
                  className="w-[80%] border-2 h-[2.7rem] outline-none pl-3 rounded-2xl"
                />
              </li>

              <li className="step step-primary">
                <input
                  type="text"
                  placeholder="Your State !!!"
                  className="w-[80%] border-2 h-[2.7rem] outline-none pl-3 rounded-2xl"
                />
              </li>

              <li className="step step-primary">
                <input
                  type="text"
                  placeholder="Landmark (Optional)"
                  className="w-[80%] border-2 h-[2.7rem] outline-none pl-3 rounded-2xl"
                />
              </li>
            </ul>

            <div className="pl-[2.3rem]">
              <button
                className="bg-[#FB641B] p-2 rounded-2xl text-white w-[20rem] "
                type="button"
              >
                SAVE AND DELIVER HERE
              </button>
            </div>
          </form>
        </div>

        <div className="basis-[20%] bg-black"></div>
      </div>
      <Footer />
    </div>
  );
};

export default UserDetails;
