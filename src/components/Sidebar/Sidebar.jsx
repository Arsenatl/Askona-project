import * as React from "react";
import "./Sidebar.css";
import Select1 from "../Select/Select1";
import { HiXMark } from "react-icons/hi2";

export default function Sidebar({ languageDel, setState }) {

  return (
    <div className="bg-white desktop:w-[604px] tablet:w-[604px] mobile:w-screen h-full">
      <div>
        <div className="said_top">
          <h2 className="text-[24px] font-[700]">{languageDel?.yetkazish}</h2>
          <button onClick={() => setState({ right: false })}>
            <HiXMark className="text-[#407CD3] text-2xl" />
          </button>
        </div>
        <div className="ourTop">
          <Select1 />
          <div className="border-y-[1px] border-gray-200 mt-5 py-5">
            <div className="flex items-center justify-between">
              <p>{languageDel?.uzbyetkazish}</p>
              <p>{languageDel?.pullik}</p>
            </div>
            <div className="flex items-center justify-between">
              <p>{languageDel?.mdhyetkazish}</p>
              <p className="text-end">{languageDel?.ulgurji}</p>
            </div>
          </div>
          <div className="lastdown">
            <h2 className="text-[24px] font-[700]">{languageDel?.olibketish}</h2>
            <div className="downlist">
              <p>
                {languageDel?.olibketishmumkin}
              </p>
              <p>
                {languageDel?.kelishibolish}
              </p>
              <ul>
                <li>{languageDel?.tasdiqlashkod}</li>
                <li>{languageDel?.buyurtmaraqam}</li>
                <li>
                  {languageDel?.vaqtkelish}
                </li>
              </ul>
              <div className="our4">
                <h2 className="text-[24px] font-[700]">{languageDel?.xizmatqoida}</h2>
                <p>
                  {languageDel?.chipta}
                </p>
                <p>{languageDel?.bayram}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
