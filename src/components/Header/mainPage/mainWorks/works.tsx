import LabelLink from '../mainLink';
import './style.scss';

export default function Works() {

  return (
    <>
      <div className='main-works'>
        <LabelLink props={{body: 'works-label', label: 'wr-label', number: 'wr-number', href: '/works', labelValue: 'Работы'}}/>
        <div className="services-br"></div>
      </div>
    </>
  )
}