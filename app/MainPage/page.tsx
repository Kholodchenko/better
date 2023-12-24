'use client'
import ReactPlayer from "react-player";
import styled from "styled-components";

export default function MainPage() {
  return (
    <div>
      <Text>архитектурное бюро, где каждая работа -</Text>
      <Text>результат поиска лучшего решения</Text>
      <ReactPlayer url={'https://vimeo.com/834088370'} muted={true} playing={true} loop={true} width="100%"/>
    </div>
  )
}

const Text = styled.div`
    padding-right: 55px;
    font-family: "Helvetica", Sans-serif;
    font-size: 40px;
    font-weight: 500;
    line-height: 50px;
    text-align: right;
    letter-spacing: -0.6px;
    margin: 0em 0em 0em 0em;
`