import "asserts/css/youtube/mr-web-desginer/base/Landing Pages/1/1.css"
import Bro from "asserts/css/youtube/mr-web-desginer/base/Landing Pages/1/img/Create-bro.svg"
import Animate from "asserts/css/youtube/mr-web-desginer/base/Landing Pages/1/img/create-animate.svg"
import { useEffect } from "react"

let countDate = new Date('jul 1, 2021 00:00:00').getTime();

// 设置天数 时分秒
const countDown = () => {
  let now = new Date().getTime()
  let gap = now - countDate
  
  let second = 1000
  let minute = second * 60
  let hour = minute * 60
  let day = hour * 24

  let d = Math.floor(gap / (day))
  let h = Math.floor((gap % (day)) / (hour))
  let m = Math.floor((gap % (hour)) / (minute))
  let s = Math.floor((gap % (minute)) / (second))
  let docDay = document.getElementById('day')
  docDay!.innerText = String(d)

  document.getElementById("hour")!.innerText = String(h)
  document.getElementById("minute")!.innerText = String(m)
  document.getElementById("second")!.innerText = String(s)
}

const init = () => {
  setInterval(() => {
    countDown()
  }, 1000)

}

export const Page = () => {
  useEffect(init)

  return <div>
    <div className="container">
      <div className="content">
        <h3 className="title">we are coming soon!</h3>
        <p>how to make a complete responsive coming soon landing page website design using html css and vanilla javascript with count down clock effect.
create a complete responsive coming soon page UI design with count down effect</p>

        <div className="count-down">
          <div className="box">
            <h3 id="day">00</h3>
            <span>day</span>
          </div>
          <div className="box">
            <h3 id="hour">00</h3>
            <span>hour</span>
          </div>
          <div className="box">
            <h3 id="minute">00</h3>
            <span>minute</span>
          </div>
          <div className="box">
            <h3 id="second">00</h3>
            <span>second</span>
          </div>
        </div>

        <a href="#" className="btn">notify me</a>

      </div>
      <div className="image">
        {/* <img src={Bro} alt="" /> */}
        <img src={Animate} alt="" />
      </div>
    </div>
  </div>
}

