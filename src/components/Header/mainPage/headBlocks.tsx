'use client'
import { useSpring, animated } from "@react-spring/web";
import { HeadBlocksMoks } from "../mocks";
import { GoHorizontalRule } from "react-icons/go";
import './style.scss';

export default function HeadBlocks() {
  const data = HeadBlocksMoks;

  return (
    <div className="main-blocks">
      <div className="mb-flex">
        {data.map((i) => (
          <div className="mb-box" key={i.id}>
            {i.label ? <div className="mb-head">{i.label}</div> : <div className="mb-head-custom">идея {<GoHorizontalRule />} основа<br/> проекта</div>}
            {i.value && <span className="mb-body">{i.value}</span>}
          </div>
        ))}
      </div>
    </div>
  )
}