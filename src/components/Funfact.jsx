import React from "react";
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';

function Funfact() {
  return (
    <section class="bg-slate-100 dark:bg-gray-900">
      <div class="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <div class="grid-cols-2 gap-8 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 flex justify-center items-center">
          <div className="gap-6 flex justify-center items-center">
            <div className="p-5 bg-gradient-to-b from-teal-400 to-emerald-500 rounded-full justify-start items-start gap-2.5 flex">
            <SchoolOutlinedIcon  style={{ fontSize: 50 }} className="text-white relative" /> 
            </div>
            <div className="flex-col justify-start items-start gap-2 inline-flex">
              <div className="text-zinc-900 text-[32px] font-semibold font-['Public Sans'] leading-10 tracking-tight">
                300
              </div>
              <div className="text-zinc-600 text-xl font-normal font-['Public Sans'] leading-7">
                Instructor
              </div>
            </div>
          </div>
          <div className="gap-6 flex justify-center items-center">
            <div className="p-5 bg-gradient-to-b from-violet-400 to-violet-600 rounded-full justify-start items-start gap-2.5 flex">
              <PeopleOutlineIcon style={{ fontSize: 50 }} className="text-white relative" /> 
            </div>
            <div className="flex-col justify-start items-start gap-2 inline-flex">
              <div className="text-green-950 text-[32px] font-semibold font-['Public Sans'] leading-10 tracking-tight">
                20,000+
              </div>
              <div className="text-zinc-600 text-xl font-normal font-['Public Sans'] leading-7">
                Student
              </div>
            </div>
          </div>
          <div className="gap-6 flex justify-center items-center">
            <div className="p-5 bg-gradient-to-b from-rose-300 to-rose-500 rounded-full justify-start items-start gap-2.5 flex">
              <VideocamOutlinedIcon style={{ fontSize: 50 }} className="text-white relative" /> 
            </div>
            <div className="flex-col justify-start items-start gap-2 inline-flex">
              <div className="text-green-950 text-[32px] font-semibold font-['Public Sans'] leading-10 tracking-tight">
                10,000+
              </div>
              <div className="text-zinc-600 text-xl font-normal font-['Public Sans'] leading-7">
                Video
              </div>
            </div>
          </div>
          <div className="gap-6 flex justify-center items-center">
            <div className="p-5 bg-gradient-to-b from-blue-300 to-cyan-400 rounded-full justify-start items-start gap-2.5 flex">
              <GroupsOutlinedIcon style={{ fontSize: 50 }} className="text-white relative" /> 
            </div>
            <div className="flex-col justify-start items-start gap-2 inline-flex">
              <div className="text-green-950 text-[32px] font-semibold font-['Public Sans'] leading-10 tracking-tight">
                1,00,000+
              </div>
              <div className="text-zinc-600 text-xl font-normal font-['Public Sans'] leading-7">
                User’s
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Funfact;
