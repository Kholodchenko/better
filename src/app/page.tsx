import React from 'react'
import './style.scss';
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

export default function Home() {
  const MainPlayer = dynamic(() => import('../components/ReactPlayer/mainPlayer'), { ssr: false });

  return (
    <div className='main-padding'>
      <div className='main-title'>
      архитектурное бюро, где каждая работа {<GoHorizontalRule />} <br/>
      результат поиска <span className="highlighted">лучшего</span> решения
      </div>
      <MainPlayer />
      <HeadBlocks />
      <Services />
      <Works />
    </div>
  );
}
