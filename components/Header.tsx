'use client'

import { Button } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import DehazeIcon from '@mui/icons-material/Dehaze';

const Header = () => {
  return (
    <header className="header">
      <div className="md:flex place-content-between">
        <div className="m-5">
          <Image
            src="/better-logo-black.png"
            width={100}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="header-links">
          <Button className="m-5 text-white" style={{background: '#2E2E2E', fontSize: '14px', padding: '10px 25px 10px 25px', borderRadius: '20px'}}>
            Больше
            <DehazeIcon style={{marginLeft: '10px'}}/>
          </Button>
          {/* <Link href="/">Home</Link>
          <Link href="/MainPage">MainPage</Link> */}
        </div>
      </div>
    </header>
  )
}

export { Header }