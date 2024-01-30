import { GoHorizontalRule } from "react-icons/go"
import MainPlayer from "../../ReactPlayer/mainPlayer"
import HeadBlocks from "../../Header/mainPage/headBlocks"
import Services from "../../Header/mainPage/mainServices/services"
import Works from "../../Header/mainPage/mainWorks/works"
import './style.scss'
import dynamic from "next/dynamic"

export const Main = () => {
  // const MainPlayer = dynamic(() => import('../components/ReactPlayer/mainPlayer'), { ssr: false });
  const MainPlayer = dynamic(() => import('../../ReactPlayer/mainPlayer'), {ssr: false})
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
  )
}