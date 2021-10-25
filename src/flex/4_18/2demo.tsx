import "../../asserts/css/flex/4_18/2demo.css"
import "../../asserts/css/flex/4_18/iconfont.css"
import logo from "../../asserts/css/flex/4_18/logo.png"

export const Zhihu1 = () => {
    return <div className={"header"}>
        <div className={"header-container"}>
            <div className={"header-wrapper"}>
                <div className={"header-logo"}>
                    <a href="baidu.com">
                        <img src={logo} alt="" />
                    </a>
                </div>

                <ul className={"header-title"}>
                    <li>首页</li>
                    <li>会员</li>
                    <li>发现</li>
                    <li>等你来答</li>
                </ul>

                <div className={"header-search"}>
                    <div className={"header-search-wrapper"}>
                        <input placeholder="123" />
                        <i className={"iconfont icon-fangdajing"}></i>
                    </div>
                </div>

                <div className={"header-btn"}>
                    <button className={"header-btn-login"}>登陆</button>
                    <button className={"header-btn-join"}>加入知乎</button>
                </div>
            </div>
        </div>
    </div>
}