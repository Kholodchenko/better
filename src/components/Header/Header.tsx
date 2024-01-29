import { ButtonBlockNav, Head} from "./style"
import icon from "../../../public/better-logo-black.png"
import Image from 'next/image';
import './style.scss';
import { FC } from "react";
import React from "react";
import dynamic from "next/dynamic";

export const Header = () => {
  const HeadLogic = dynamic(() => import('../Header/headLogic'), { ssr: false });
  return (
    <>
      <div className="heading">
          <Image src={icon} alt="" width={100} height={30} />
          <div className="btn-block-nav">
          <HeadLogic />
        </div>
      </div>
    </>
  )
}
