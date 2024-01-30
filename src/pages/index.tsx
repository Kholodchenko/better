import React from 'react'
import './style.scss'
import { GoHorizontalRule } from "react-icons/go";
import dynamic from 'next/dynamic';
import HeadBlocks from '@/components/Header/mainPage/headBlocks';
import { Metadata } from 'next';
import Services from '@/components/Header/mainPage/mainServices/services';
import Works from '@/components/Header/mainPage/mainWorks/works';
import { Main } from '@/components/screens/MainPage/main';


export const metadata: Metadata = {
  title: "Главная",
  description: "Главная",
};

export default function Home() {
  return <Main />;
}
