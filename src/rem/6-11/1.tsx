import "../../asserts/css/rem/6-11/1.css"
import "../../asserts/css/rem/6-11/iconfont/iconfont.css"
import Video1 from "../../asserts/css/rem/6-11/img/video1.jpg"

export const Rem5 = () => {
    return <div>
        <div className={"bilibili"}>
            <div className={"head"}>
                <div className={"head-logo"}>
                    <i className={"iconfont icon-BILIBILI_LOGO"}></i>
                </div>

                <div className={"head-search"}>
                    <i className={"iconfont icon-fangdajing"}></i>
                </div>

                <div className={"head-login"}>
                    <a href="#">登录</a>
                </div>

                <div className={"head-app"}>
                    <a href="#">下载 APP</a>
                </div>
            </div>

            <div className={"nav"}>
                <ul className={"nav-list"}>
                    <li className={"nav-list-active"}>
                        <a href="#">首页</a>
                    </li>

                    <li>
                        <a href="#">动画</a>
                    </li>
                    <li>
                        <a href="#">番剧</a>
                    </li>
                    <li>
                        <a href="#">国创</a>
                    </li>
                    <li>
                        <a href="#">音乐</a>
                    </li>
                    <li>
                        <a href="#">舞蹈</a>
                    </li>
                    <li>
                        <a href="#">漫画</a>
                    </li>
                    <li>
                        <a href="#">赛事</a>
                    </li>
                </ul>
                <div className="nav-arrow">
                    <i className="iconfont icon-arrow-bottom"></i>
                </div>
            </div>
        </div>
    </div>
}