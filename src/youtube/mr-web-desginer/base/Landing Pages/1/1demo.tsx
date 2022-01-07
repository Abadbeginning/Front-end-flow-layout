import "asserts/css/youtube/mr-web-desginer/base/Landing Pages/1/1.css"
import Bro from "asserts/css/youtube/mr-web-desginer/base/Landing Pages/1/img/Create-bro.svg"

export const Page = () => {
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
        <img src={Bro} alt="" />
      </div>
    </div>
  </div>
}