import styles from './IntroProductSection.module.css'

export default function IntroProductSection() {
  return (
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
  )
}
