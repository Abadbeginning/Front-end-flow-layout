import "../../asserts/css/flex/4_18/1demo.css"
import logo from "../../asserts/css/flex/4_18/logo.png"

export const Zhihu = () => {
    return <div>
        <div className={"header-container"}>
        <div className={"header-wrapper"}>
            <div className={"header-logo"}>
                <a href="#">
                    <img src={logo} alt="" />
                </a>
            </div>
            <ul className={"header-nav"}>
                <li>首页</li>
                <li>会员</li>
                <li>发现</li>
                <li>等你来答</li>
            </ul>
            <div className={"header-search"}>
                <div className={"header-search-wrapper"}>
                    <input className={"header-search-input"} type="text" placeholder="520文案" />
                    <i className={"iconfont icon-fangdajing"}></i>
                </div>
            </div>
            <div className={"header-btn"}>
                <button className={"header-btn-login"}>登录</button>
                <button className={"header-btn-zhihu"}>加入知乎</button>
            </div>
        </div>
    </div>
    </div>
}