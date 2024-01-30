'use client'
import { animated, useSpring } from "@react-spring/web"
import { HeadBlockModalUl, HeadBlockNav, HeadBlockUl, HeadDiv, HeadModal } from "./style"
import { useCallback, useEffect, useState } from "react";
import { MocksMenu } from "./mocks";
import { usePathname } from "next/navigation";
import './style.scss';
import { Button } from "../Button/Button";
import { FiChevronDown, FiChevronUp, FiMenu, FiX } from "react-icons/fi";
import { useRouter } from 'next/navigation'

export default function HeadLogic() {
  const mocks = MocksMenu;
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const [openLinks, setOpenLinks] = useState<boolean>(false);
  const handleClickMenu = useCallback(() => {
    setOpen(open ? false : true);
  }, [open])

  const handleClickLinks = useCallback(() => {
    setOpenLinks(openLinks ? false : true);
  }, [openLinks])

  const handleLink = (link: string) => {
    router.push(`${link}`)
  };


  const springProps = useSpring({
    to: {
      transform: open ? 'translateX(0)' : 'translateX(-100%)',
      opacity: open ? 1 : 0,
    },
    from: {
      transform: 'translateX(-100%)',
      opacity: 0,
    },
  });
  return (
    <>
      <HeadBlockNav className={open ? "head-block-links" : "head-block-links"}>
            {mocks?.map((item) => {
              return (
                
                  <animated.div key={item.id} style={springProps}><HeadBlockUl key={item.id} open={open ? 'true' : 'false'} check={openLinks ? 'true' : 'false'} className="head-links">
                    {!item?.children && <HeadDiv onClick={() => handleLink(item?.link)} className="head-link" check={pathname === item.link ? 'true' : 'false'}>{item?.label}</HeadDiv>}
                    {item?.children && (
                      <>
                        <HeadDiv className="head-link-modal">
                          {item.label}
                          <HeadModal className="head-link-modal-window">{item?.children?.map((i) =>
                            <HeadBlockModalUl key={i?.id} href={i?.link} check={openLinks ? true : undefined}>
                              <span>{i.label}</span>
                            </HeadBlockModalUl>
                          )}
                          </HeadModal>
                        </HeadDiv>
                        <Button className="btn-nav-links" onClick={handleClickLinks}>{openLinks ? <FiChevronUp /> : <FiChevronDown />}</Button>
                      </>
                    )
                    }
                  </HeadBlockUl>
                  </animated.div>
                
              )
            })}
          </HeadBlockNav>
          <Button className="btn-nav" onClick={handleClickMenu}>
            <span className="btn-nav-span">Больше</span>
            {!open ? <FiMenu className="btn-nav-icon" /> : <FiX className="btn-nav-icon" />}
          </Button>
    </>
  )
}