import {
  mdiTextBoxSearchOutline,
  mdiScaleBalance,
  mdiTextBoxCheckOutline,
} from '@mdi/js'

import ProminentPoints from './ProminentPoints'
import styles from './Home.module.css'

export default function Home() {
  const prominentPoints = [
    {
      icon: mdiTextBoxSearchOutline,
      title: 'ค้นหา',
      desc: 'ค้นหาข้อมูลที่คุณอยากรู้เกี่ยวกับผลิตภัณฑ์ทางการเงินได้เลย แถมยังมีตัวเลือกฟิลเตอร์ ให้กรองข้อมูลที่คุณอยากเจอได้ง่ายขึ้น ว่าแล้วกดค้นหาได้เลย!',
    },
    {
      icon: mdiScaleBalance,
      title: 'เปรียบเทียบ',
      desc: 'เปรียบเทียบประกันรถยนต์ที่โดนใจ หรือ บัตรเครดิตที่ใช่กับไลฟ์สไตล์ เพื่อให้ได้ผลิตภัณฑ์การเงินที่เหมาะกับตัวเองที่สุด คุ้มค่า คุ้มราคาที่สุด',
    },
    {
      icon: mdiTextBoxCheckOutline,
      title: 'สมัครในคลิกเดียว',
      desc: 'เมื่อได้ผลิตภัณฑ์ทางการเงินที่ใช่แล้ว แค่เข้าสู่ระบบ ก็สมัครได้ง่ายและมากกว่า จบได้ในคลิกเดียว ไม่ต้องกรอกซ้ำซาก ให้ยุ่งยากอีกต่อไป',
    },
  ]

  return (
    <div className={styles['home-contrainer']}>
      <div className={styles['home-breadcrumb-background']}>
        <div className="position-relative">
          <h1
            className={`${styles['mt-home-text-title-1']} mt-20px txt-shadow-blur mt-20px typo-size-lg`}
          >
            เช็คและเปรียบเทียบ ผลิตภัณฑ์ทางการเงิน
          </h1>
        </div>
        {/* <div>

        </div> */}
      </div>

      <div className={styles['home-prominent-points']}>
        <div className="container">
          <div className="row">
            {/* TODO: */}
            {prominentPoints.map((prominentPoint) => (
              <div key={prominentPoint.title} className="col-sm-4">
                <ProminentPoints
                  icon={prominentPoint.icon}
                  title={prominentPoint.title}
                  desc={prominentPoint.desc}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-8 py-40px pt-20px-xs">
            <a
              href="https://tiresbid.com/home?utm_source=pricezamoney-promotion&utm_medium=referral-coupon&utm_campaign=partner-exchange&utm_content=specialoffer-tiresbidxpricezamoney"
              rel="nofollow"
              target="_blank"
            >
              <img className={styles['home-banner-1']} src="/banner-big-1.jpg" alt="banner big" />
            </a>
          </div>
        </div>
      </div>

      <div className="container py-40px">
        <div className="row">
          <div className="col-md-12">
            <div className={styles['home-section-title']}>
              <h2>
                เช็คและเปรียบเทียบ  ผลิตภัณฑ์การเงินต่างๆ
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-40px">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className={styles['home-section-title']}>
              <h2>
                รีวิวจากผู้ใช้งานจริง
              </h2>
              <p className="my-1">Priceza Money ช่วยคุณเปรียบเทียบผลิตภัณฑ์การเงินให้ตรงกับความต้องการ</p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles['home-car-ins-background']} py-40px`}>
        <div className="container">
          <div className="position-relative">
            <h1
              className={`${styles['mt-home-text-title-1']} mt-20px typo-size-lg`}
            >
              ค้นหาผลิตภัณฑ์การเงินที่ตรงใจคุณ
            </h1>
            <p>
              ค้นหาและเปรียบเทียบ ประกันรถยนต์ บัตรเครดิต และผลิตภัณฑ์การเงินอื่นๆ
              รวบรวมข้อมูลสินค้าการเงินจากโบรกเกอร์ประกันภัยและสถาบันการเงินทั่วประเทศ
              มากกว่า 1 ล้านรายการ ช่วยคุณเลือกผลิตภัณฑ์การเงินที่ดีที่สุดและตรงใจที่สุดสำหรับคุณ
            </p>
          </div>
        </div>
        {/* <div>

        </div> */}
      </div>
    </div>
  )
}
