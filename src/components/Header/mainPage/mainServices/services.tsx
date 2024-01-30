import { ServicesOneMoks } from '../../mocks';
import LabelLink from '../mainLink';
import './style.scss';

export default function Services() {
  const blockFirst = ServicesOneMoks;
  return (
    <>
      <div className="main-service">
        <LabelLink props={{body: 'services-label', label: 'sr-label', number: 'sr-number', href: '/services', labelValue: 'Услуги'}}/>
        <div className="services-br"></div>
        <div className="services-container">
          <div className="service-box">
            {blockFirst.map((item, index) => (
              <div key={item.id} className='sr-block'>
                <div className='sr-index'>01.{index === 0 ? 1 : index + 1}</div>
                <div className='sr-value'>{item.value}</div>
                <div className='sr-labels'>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}