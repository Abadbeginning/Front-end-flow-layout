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

        <div className={"nav-news"}>
            <ul className={"nav-news-list"}>
            {/* <ul className={"nav-news-list nav-news__closed"}> */}
                <li>
                    <a href="#">新闻</a>
                </li>
                <li>
                    <a href="#">抗疫</a>
                </li>
                <li>
                    <a href="#">娱乐</a>
                </li>
                <li>
                    <a href="#">体育</a>
                </li>
                <li>
                    <a href="#">财经</a>
                </li>
                <li>
                    <a href="#">图片</a>
                </li>
                <li>
                    <a href="#">汽车</a>
                </li>
                <li>
                    <a href="#">军事</a>
                </li>
                <li>
                    <a href="#">直播</a>
                </li>
                <li>
                    <a href="#">房产</a>
                </li>
                <li>
                    <a href="#">科技</a>
                </li>
                <li>
                    <a href="#">123</a>
                </li>
            </ul>

            <div className="nav-sub-arrow">
                <i className="iconfont icon-down-arrow"></i>
            </div>
        </div>

        <div className={"news"}>
            <h3 className={"news-title"}>今日要闻</h3>
            <div className={"news-item"}>
                <h2 className={"news-item-title"}>中国节目在俄罗斯“火了” 这场论坛给出答案
</h2>
<p className={"news-item-info"}>央视网 1小时前 879跟帖</p>
            </div>

            <div className={"news-item"}>
                <h2 className={"news-item-title"}>中国节目在俄罗斯“火了” 这场论坛给出答案
</h2>
<p className={"news-item-info"}>央视网 1小时前 879跟帖</p>
            </div>


        </div>
    </div>
}