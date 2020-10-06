import {
  mdiTextBoxSearchOutline,
  mdiScaleBalance,
  mdiTextBoxCheckOutline,
} from '@mdi/js'

export const prominentPoints = [
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

export const destinations = [
  {
    firstTitle: 'ประกันภัยรถยนต์',
    secondTitle: 'ต่อประกันใหม่เจ้าไหนดี?',
    desc: 'เปรียบเทียบแผนประกันภัยรถยนต์ ครอบคลุม คุ้มค่า พร้อมส่วนลด โปรโมชั่นมากมาย การันตีความมั่นใจ ด้วยรีวิวจากผู้ใช้จริง',
    imagePath: '/destinations-1.jpg',
  },
  {
    firstTitle: 'บัตรเครดิต',
    secondTitle: 'บัตรเครดิตไหน ตอบโจทย์ไลฟ์สไตล์คุณ',
    desc: 'เทียบความคุ้มค่าของทุกบัตรที่ต้องการ พบกับโปรโมชั่นสมัครบัตร ที่คุ้มค่าและโดนใจ เลือกบัตรที่ใช่และสมัครออนไลน์ได้แล้ววันนี้',
    imagePath: '/destinations-2.jpg',
  },
  {
    firstTitle: 'สินเชื่อส่วนบุคคล',
    secondTitle: 'สินเชื่อส่วนบุคคลที่ไหนดี',
    desc: 'ค้นหาสินเชื่อส่วนบุคคลที่ตอบโจทย์ความต้องการของคุณ คำนวณจำนวนผ่อนชำระง่ายๆ ให้คุณเปรียบเทียบเงื่อนไขที่ดีที่สุด',
    imagePath: '/destinations-3.jpg',
  },
  {
    firstTitle: 'บัตรกดเงินสด',
    secondTitle: 'บัตรกดเงินสด ที่ไหนง่าย',
    desc: 'เปรียบเทียบบัตรกดเงินสด หรือบัตรผ่อนสินค้า จากหลากหลายธนาคาร บัตรไหนดอกเบี้ยถูก ให้โอกาสอนุมัติสูง เลือกที่ใช่ และสมัครออนไลน์ได้เลย',
    imagePath: '/destinations-4.jpg',
  },
]

export const promotions = [
  {
    desc: 'ลูกค้าบัตรกรุงศรี เดบิต ทุกประเภท ซื้อบัตรชมภาพยนตร์ ราคา 80 บาท ทุกเรื่อง ทุกรอบ!',
    imgPath: '/promo-1.jpg',
    creator: {
      type: 'image',
      data: '/krungsri.png',
    },
    createDateForDisplay: 'วันนี้ - 31 Dec 2020',
  },
  {
    desc: 'เป็นเพื่อนกับเราปั๊บ รับปุ๊บ ส่วนลดประกันภัยรถยนต์ในราคาพิเศษ l ปรึกษาปัญหาประกัน l โปรโมชั่นเเละดีลพิเศษอื่นๆ เช็คด่วน!',
    imgPath: '/promo-2.jpg',
    creator: {
      type: 'image',
      data: '/Frank-logo.png',
    },
    createDateForDisplay: 'วันนี้ - 31 Dec 2020',
  },
  {
    desc: 'Wash Pro สิทธิพิเศษสำหรับสมาชิก Muang Thai Friends Club รับส่วนลดค่าบริการสูงสุด 50 %',
    imgPath: '/promo-3.jpg',
    creator: {
      type: 'text',
      data: 'เมืองไทยประกันภัย',
    },
    createDateForDisplay: 'วันนี้ - 31 Dec 2020',
  },
  {
    desc: 'สินเชื่อ SME Quick Loan ธุรกิจ ก้าวเร็ว โตไว ดอกเบี้ยต่ำ 5% ต่อปี',
    imgPath: '/promo-4.jpg',
    creator: {
      type: 'image',
      data: '/krungsri.png',
    },
    createDateForDisplay: 'วันนี้ - 31 Dec 2020',
  },
]

export const blogs = [
  {
    imgPath: '/blog-1.jpg',
    title: 'รวม 5 รายชื่อสินเชื่อส่วนบุคคลที่ดอกเบี้ยต่ำ',
    desc: 'สินเชื่อส่วนบุคคลถือเป็นทางเลือกหนึ่งที่ไม่เลวเลยนะครับสำหรับคนที่ต้องการเงินก้อน ซึ่งทางสถาบันทางการเงินจะสามารถอนุมัติให้เราได้สูงสุดถึง 5 เท่าของเงินเดือน แต่ยังไงก็ตามสินเชื่อส่วนบุคคลแต่ละสถาบันทางการเงินจะมีดอกเบี้ยที่ต่างกันออกไป',
    creator: {
      name: 'Tonfurn Priceza',
      avatar: '/blogger-avatar.jpg',
    },
    createdAtDisplay: 'Sep 4, 2018',
  },
  {
    imgPath: '/blog-2.jpg',
    title: 'โดน “ชนแล้วหนี” นี่คือสิ่งที่คนทำประกันรถยนต์ควรรู้',
    desc: ' ถ้าโดนชนแล้วหนี ประกันเค้าจะคุ้มครองเรายังไง แล้วเราต้องทำอะไรบ้าง ดังนั้นวันนี้เราจึงจะมาสรุปขั้นตอนให้เพื่อน ๆ กันว่า ถ้าโดนชนแล้วหนีแบบนี้นึ่ต้องทำยังไงดี ',
    creator: {
      name: 'Tonfurn Priceza',
      avatar: '/blogger-avatar.jpg',
    },
    createdAtDisplay: 'Jun 13, 2019',
  },
  {
    imgPath: '/blog-3.jpg',
    title: 'รวม 5 รายชื่อสินเชื่อส่วนบุคคลที่ดอกเบี้ยต่ำ',
    desc: 'หลังจากตัดสินใจซื้อรถแล้ว มือใหม่หลายๆ คนก็คงเป็นกังวลกับเรื่องของการทำประกันรถยนต์กันอยู่แน่ๆ ซึ่งการทำประกันรถยนต์นั้นบอกเลยว่าสำคัญมากนะครับ เพราะมันช่วยเราได้เมื่อยามที่เกิดอุบัติเหตุ ประกันรถยนต์ตัวนี้แหละที่จะคุ้มครองเรา และอำนวยความสะดวก พร้อมทั้งช่วยเหลือเราได้มากกว่าที่คิดเยอะ ซึ่งสำหรับมือใหม่แล้วก็อาจจะยังไม่เข้าใจว่าจะทำประกันรถยนต์แต่ละทีต้องรู้อะไรบ้าง วันนี้เราเลยรวบรวม 7 เรื่องน่ารู้ของประกันรถยนต์มาฝากทุกคนกัน',
    creator: {
      name: 'Tonfurn Priceza',
      avatar: '/blogger-avatar.jpg',
    },
    createdAtDisplay: 'Jun 17, 2019',
  },
  {
    imgPath: '/blog-4.jpg',
    title: '7 เรื่องของ ‘ประกันรถยนต์’ ที่คนใช้รถต้องรู้',
    desc: 'หลายคนอาจกำลังประสบปัญหากับการกู้ขอสินเชื่อไม่ผ่าน มักมาจากการติดเครดิตบูโร เรามาดูวิธีแก้กันว่า ติดเครดิตบูโรไปแล้ว เราควรทำอย่างไรดี',
    creator: {
      name: 'Tonfurn Priceza',
      avatar: '/blogger-avatar.jpg',
    },
    createdAtDisplay: 'Oct 26, 2018',
  },
]
