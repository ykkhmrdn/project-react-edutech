import React from "react";
import Saly1 from "../assets/img/Saly-1.png";
import Saly2 from "../assets/img/Saly-2.png";
import Saly12 from "../assets/img/Saly-12.png";
import Saly26 from "../assets/img/Saly-26.png";

function Course() {
  return (
    <div className="w-[1440px] h-[646px] relative">
      <div className="left-[60px] top-0 absolute">
        <span className="text-zinc-800 text-[56px] font-semibold font-['Public Sans'] leading-[72px]">
          Most{" "}
        </span>
        <span className="text-blue-600 text-[56px] font-semibold font-['Public Sans'] leading-[72px]">
          Popular Course
        </span>
      </div>
      <div className="w-[328px] h-[418px] left-[44px] top-[166px] absolute">
        <div className="w-[312px] h-[403px] left-0 top-[15px] absolute opacity-25 bg-zinc-500 blur-[100px]" />
        <div className="w-[312px] h-[403px] py-4 left-[16px] top-0 absolute bg-white rounded-3xl justify-start items-start gap-2.5 inline-flex">
          <div className="flex-col justify-start items-center gap-4 inline-flex">
            <div className="flex-col justify-start items-start gap-4 flex">
              <img
                className="w-[280px] h-[207px] rounded-xl"
                src={Saly1}
                alt="Description"
              />
              <div className="w-[280px] h-7 text-neutral-700 text-xl font-medium font-['Public Sans'] leading-7">
                Various versions have evolved daf
              </div>
              <div className="justify-start items-center gap-[11px] inline-flex">
                <div className="justify-start items-center gap-3 flex">
                  <div className="justify-start items-start gap-1.5 flex">
                    <div className="w-6 h-6 relative" />
                    <div className="w-6 h-6 relative" />
                    <div className="w-6 h-6 relative" />
                    <div className="w-6 h-6 relative" />
                    <div className="w-6 h-6 relative" />
                  </div>
                </div>
                <div className="text-zinc-600 text-xl font-normal font-['Public Sans'] leading-7">
                  (15)
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-center gap-4 flex">
              <div className="w-[312px] h-[0px] border border-gray-200"></div>
              <div className="justify-start items-center gap-[168px] inline-flex">
                <div className="text-zinc-900 text-2xl font-semibold font-['Public Sans'] leading-loose tracking-tight">
                  $ 500
                </div>
                <div className="p-2.5 bg-gradient-to-b from-orange-300 to-orange-400 rounded-full justify-start items-start gap-2.5 flex">
                  <div className="w-6 h-6 relative" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[72px] h-9 left-[40px] top-[23px] absolute">
          <div className="w-[72px] h-9 left-0 top-0 absolute opacity-60 bg-white rounded-md" />
          <div className="left-[13px] top-[6px] absolute text-zinc-900 text-base font-medium font-['Public Sans'] leading-normal">
            HTML
          </div>
        </div>
      </div>
      <div className="w-[328px] h-[418px] left-[380px] top-[166px] absolute">
        <div className="w-[312px] h-[403px] left-0 top-[15px] absolute opacity-25 bg-zinc-500 blur-[100px]" />
        <div className="w-[312px] h-[403px] py-4 left-[16px] top-0 absolute bg-white rounded-3xl justify-start items-start gap-2.5 inline-flex">
          <div className="flex-col justify-start items-center gap-4 inline-flex">
            <div className="flex-col justify-start items-start gap-4 flex">
              <div className="w-[280px] h-[207px] relative bg-white rounded-xl">
                <div className="w-[281px] h-[210.75px] left-0 top-0 absolute bg-orange-400 bg-opacity-50" />
                <div className="w-[189.67px] h-[189.67px] left-[45.66px] top-[10.54px] absolute justify-center items-center inline-flex">
                  <img
                    className="w-[189.67px] h-[189.67px]"
                    src={Saly2}
                    alt=""
                  />
                </div>
              </div>
              <div className="w-[280px] h-7 text-neutral-700 text-xl font-medium font-['Public Sans'] leading-7">
                Various versions have evolved daf
              </div>
              <div className="justify-start items-center gap-[11px] inline-flex">
                <div className="justify-start items-center gap-3 flex">
                  <div className="justify-start items-start gap-1.5 flex">
                    <div className="w-6 h-6 relative" />
                    <div className="w-6 h-6 relative" />
                    <div className="w-6 h-6 relative" />
                    <div className="w-6 h-6 relative" />
                    <div className="w-6 h-6 relative" />
                  </div>
                </div>
                <div className="text-zinc-600 text-xl font-normal font-['Public Sans'] leading-7">
                  (20)
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-center gap-4 flex">
              <div className="w-[312px] h-[0px] border border-gray-200"></div>
              <div className="justify-start items-center gap-[168px] inline-flex">
                <div className="text-zinc-900 text-2xl font-semibold font-['Public Sans'] leading-loose tracking-tight">
                  $ 500
                </div>
                <div className="p-2.5 bg-gradient-to-b from-orange-300 to-orange-400 rounded-full shadow justify-start items-start gap-2.5 flex">
                  <div className="w-6 h-6 relative" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[78px] h-9 left-[40px] top-[23px] absolute">
          <div className="w-[78px] h-9 left-0 top-0 absolute opacity-60 bg-white rounded-md" />
          <div className="left-[13px] top-[6px] absolute text-zinc-900 text-base font-medium font-['Public Sans'] leading-normal">
            Design
          </div>
        </div>
      </div>
      <div className="w-[328px] h-[418px] left-[716px] top-[166px] absolute">
        <div className="w-[312px] h-[403px] left-0 top-[15px] absolute opacity-25 bg-zinc-500 blur-[100px]" />
        <div className="w-[312px] h-[403px] py-4 left-[16px] top-0 absolute bg-white rounded-3xl justify-start items-start gap-2.5 inline-flex">
          <div className="flex-col justify-start items-center gap-4 inline-flex">
            <div className="flex-col justify-start items-start gap-4 flex">
              <div className="w-[280px] h-[207px] relative bg-white rounded-xl">
                <div className="w-[280px] h-[209px] left-0 top-0 absolute bg-violet-300 bg-opacity-50" />
                <div className="w-[121.42px] h-[150.22px] left-[78.91px] top-[29.59px] absolute flex-col justify-center items-center inline-flex">
                  <img
                    className="w-[121.42px] h-[150.22px]"
                    src={Saly26}
                    alt=""
                  />
                </div>
              </div>
              <div className="w-[280px] h-7 text-neutral-700 text-xl font-medium font-['Public Sans'] leading-7">
                Various versions have evolved daf
              </div>
              <div className="justify-start items-center gap-[11px] inline-flex">
                <div className="justify-start items-center gap-3 flex">
                  <div className="justify-start items-start gap-1.5 flex">
                    <div className="w-6 h-6 relative" />
                    <div className="w-6 h-6 relative" />
                    <div className="w-6 h-6 relative" />
                    <div className="w-6 h-6 relative" />
                    <div className="w-6 h-6 relative" />
                  </div>
                </div>
                <div className="text-zinc-600 text-xl font-normal font-['Public Sans'] leading-7">
                  (102)
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-center gap-4 flex">
              <div className="w-[312px] h-[0px] border border-gray-200"></div>
              <div className="justify-start items-center gap-[168px] inline-flex">
                <div className="text-zinc-900 text-2xl font-semibold font-['Public Sans'] leading-loose tracking-tight">
                  $ 500
                </div>
                <div className="p-2.5 bg-gradient-to-b from-orange-300 to-orange-400 rounded-full justify-start items-start gap-2.5 flex">
                  <div className="w-6 h-6 relative" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[94px] h-9 left-[40px] top-[23px] absolute">
          <div className="w-[94px] h-9 left-0 top-0 absolute opacity-60 bg-white rounded-md" />
          <div className="left-[13px] top-[6px] absolute text-zinc-900 text-base font-medium font-['Public Sans'] leading-normal">
            Business
          </div>
        </div>
      </div>
      <div className="w-[328px] h-[418px] left-[1052px] top-[166px] absolute">
        <div className="w-[312px] h-[403px] left-0 top-[15px] absolute opacity-25 bg-zinc-500 blur-[100px]" />
        <div className="w-[312px] h-[403px] py-4 left-[16px] top-0 absolute bg-white rounded-3xl justify-start items-start gap-2.5 inline-flex">
          <div className="flex-col justify-start items-center gap-4 inline-flex">
            <div className="flex-col justify-start items-start gap-4 flex">
              <div className="w-[280px] h-[207px] relative bg-white rounded-xl">
                <div className="w-[279.32px] h-[209.49px] left-0 top-0 absolute bg-indigo-300" />
                <div className="w-[188.54px] h-[188.54px] left-[45.39px] top-[10.47px] absolute justify-center items-center inline-flex">
                  <img
                    className="w-[188.54px] h-[188.54px]"
                    src={Saly12}
                    alt=""
                  />
                </div>
              </div>
              <div className="w-[280px] h-7 text-neutral-700 text-xl font-medium font-['Public Sans'] leading-7">
                Various versions have evolved daf
              </div>
              <div className="justify-start items-center gap-[11px] inline-flex">
                <div className="justify-start items-center gap-3 flex">
                  <div className="justify-start items-start gap-1.5 flex">
                    <div className="w-6 h-6 relative" />
                    <div className="w-6 h-6 relative" />
                    <div className="w-6 h-6 relative" />
                    <div className="w-6 h-6 relative" />
                    <div className="w-6 h-6 relative" />
                  </div>
                </div>
                <div className="text-zinc-600 text-xl font-normal font-['Public Sans'] leading-7">
                  (102)
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-center gap-4 flex">
              <div className="w-[312px] h-[0px] border border-gray-200"></div>
              <div className="justify-start items-center gap-[168px] inline-flex">
                <div className="text-zinc-900 text-2xl font-semibold font-['Public Sans'] leading-loose tracking-tight">
                  $ 500
                </div>
                <div className="p-2.5 bg-gradient-to-b from-orange-300 to-orange-400 rounded-full justify-start items-start gap-2.5 flex">
                  <div className="w-6 h-6 relative" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[94px] h-9 left-[40px] top-[23px] absolute">
          <div className="w-[94px] h-9 left-0 top-0 absolute opacity-60 bg-white rounded-md" />
          <div className="left-[13px] top-[6px] absolute text-zinc-900 text-base font-medium font-['Public Sans'] leading-normal">
            Business
          </div>
        </div>
      </div>
      <div className="w-[108px] h-3 left-[666px] top-[634px] absolute justify-start items-start gap-3 inline-flex">
        <div className="w-3 h-3 bg-orange-300 rounded-full" />
        <div className="w-3 h-3 bg-zinc-300 rounded-full" />
        <div className="w-3 h-3 bg-zinc-300 rounded-full" />
        <div className="w-3 h-3 bg-zinc-300 rounded-full" />
        <div className="w-3 h-3 bg-zinc-300 rounded-full" />
      </div>
      <div className="w-11 h-11 p-2.5 left-0 top-[353px] absolute bg-white rounded-full justify-start items-start gap-2.5 inline-flex">
        <div className="w-6 h-6 relative" />
      </div>
      <div className="w-11 h-11 p-2.5 left-[1396px] top-[353px] absolute bg-gradient-to-b from-orange-300 to-orange-400 rounded-full shadow justify-start items-start gap-2.5 inline-flex">
        <div className="w-6 h-6 relative" />
      </div>
      <div className="left-[60px] top-[88px] absolute text-zinc-500 text-xl font-normal font-['Public Sans'] leading-7">
        Various versions have evolved over the years, sometimes by accident,
      </div>
    </div>
  );
}

export default Course;
