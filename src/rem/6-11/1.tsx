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
                    <a href="#">登陆</a>
                </div>

                <div className={"head-app"}>
                    <a href="#">打开 APP</a>
                </div>
            </div>
        </div>
    </div>
}