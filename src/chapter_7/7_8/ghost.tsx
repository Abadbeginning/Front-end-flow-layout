import "asserts/css/chapter_7/7_8/1.css"
import "asserts/css/chapter_7/7_8/iconfont/iconfont.css"
import Logo from "asserts/css/chapter_7/7_8/img/ghost-logo.png"

export const Ghost = () => {
  return <div className="main">
      {/* logo */}
      <div className="head">
        <img className="head-logo" src={Logo} alt="" />
      </div>

      {/* 导航栏 */}
      <div className="nav">
            <div className="nav-bar">
              <label htmlFor="nav-toggle">
                <i className="iconfont icon-zhedie"></i>
              </label>
            </div>
            <input type="checkbox" id="nav-toggle" className="nav-toggle" />
            <ul className="nav-list">
                <li className="active"><a href="#">首页</a></li>
                <li><a href="#">论坛</a></li>
                <li><a href="#">快捷手册</a></li>
                <li><a href="#">中文文档</a></li>
                <li><a href="#">关于</a></li>
            </ul>
      </div>
  </div>
}