import "../../asserts/css/rem/6-6/1.css"
import "../../asserts/css/rem/6-6/iconfont.css"
import Logo from "../../asserts/css/rem/6-6/img/logo.png"

export const Rem3 = () => {
    return <div>
        <div className={"head"}>
            <div className={"head-user"}>
                <i className={"iconfont icon-yonghu"}></i>
            </div>

            <div className={"head-logo"}>
                <img src={Logo} alt=""/>
            </div>

            <div className={"head-email"}>
                <i className={"iconfont icon-youxiang"}></i>
                邮箱
                <i className={"iconfont icon-jiantou"}></i>
            </div>
        </div>
        <ul className={"nav"}>
            <li className={"active"}>
                <a href="#">要闻</a>
            </li>
            <li>
                <a href="#">推荐</a>
            </li>
            <li>
                <a href="#">原创</a>
            </li>
            <li>
                <a href="#">热点</a>
            </li>
        </ul>
    </div>
}