'use client'
import { useRouter } from 'next/navigation'

export default function LabelLink (props: any, ) {
  const router = useRouter();
  return (
    <>
      <div className={props.props.body}>
          <span onClick={() => {
            router.push(`${props.props.href}`)
          }}
            className={props.props.label}>{props.props.labelValue}
          </span>
          <span className={props.props.number}>01</span>
        </div>
    </>
  )
}