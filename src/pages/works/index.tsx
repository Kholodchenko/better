import React from 'react'
// import './style.scss';
import { GoHorizontalRule } from "react-icons/go";
import dynamic from 'next/dynamic';
import HeadBlocks from '@/components/Header/mainPage/headBlocks';
import { Metadata } from 'next';
import Services from '@/components/Header/mainPage/mainServices/services';
import Works from '@/components/Header/mainPage/mainWorks/works';


export const metadata: Metadata = {
  title: "Главная",
  description: "",
};

export const WorkPage = () => {
  // const MainPlayer = dynamic(() => import('../components/ReactPlayer/mainPlayer'), { ssr: false });
  const MainPlayer = dynamic(() => import('../../components/ReactPlayer/mainPlayer'), {ssr: false});

  return (
    <div className='main-padding'>

    </div>
  );
}

export default WorkPage;
