import "../../asserts/css/rem/6-11/1.css"
import "../../asserts/css/rem/6-11/iconfont/iconfont.css"
import Video1 from "../../asserts/css/rem/6-11/img/video1.jpg"
import Video2 from "../../asserts/css/rem/6-11/img/video2.jpg"
import Video3 from "../../asserts/css/rem/6-11/img/video3.jpg"
import Video4 from "../../asserts/css/rem/6-11/img/video4.jpg"

export const Rem5 = () => {
    return <div>
        <div className={"bilibili"}>
            {/* 头部 */}
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

            {/* 导航栏 */}
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

            {/* 视频详情 */}
            <ul className={"video"}>
                <li className={"video-item"}>
                    <div className={"video-item-pic"}>
                        <img src={Video1} alt="" />
                        
                        <span>
                            <div>
                                <i className="iconfont icon-703bofang-fangxing-xianxing"></i>
                                73.7万
                            </div>
                            <div className={"video-item-info"}>
                                <i className="iconfont icon-xinxi"></i>
                                5592
                            </div>
                        </span>
                    </div>
                    <h3 className="video-item-title">
                        <a href="#">那些语文课本里的已删节</a>
                    </h3>
                </li>
                <li className={"video-item"}>
                    <div className={"video-item-pic"}>
                        <img src={Video2} alt="" />
                        
                        <span>
                            <div>
                                <i className="iconfont icon-703bofang-fangxing-xianxing"></i>
                                73.7万
                            </div>
                            <div>
                                <i className="iconfont icon-xinxi"></i>
                                5591
                            </div>    
                        </span>
                    </div>
                    <h3 className="video-item-title">
                        <a href="#">吃我一记大桶水</a>
                    </h3>
                </li>
                <li className={"video-item"}>
                    <div className={"video-item-pic"}>
                        <img src={Video3} alt="" />
                        
                        <span>
                            <div>
                                <i className="iconfont icon-703bofang-fangxing-xianxing"></i>
                                73.7万
                            </div>
                            <div>
                                <i className="iconfont icon-xinxi"></i>
                                5591
                            </div>    
                        </span>
                    </div>
                    <h3 className="video-item-title">
                        <a href="#">那些语文课本里的已删节</a>
                    </h3>
                </li>
                <li className={"video-item"}>
                    <div className={"video-item-pic"}>
                        <img src={Video4} alt="" />
                        
                        <span>
                            <div>
                                <i className="iconfont icon-703bofang-fangxing-xianxing"></i>
                                73.7万
                            </div>
                            <div>
                                <i className="iconfont icon-xinxi"></i>
                                5591
                            </div>    
                        </span>
                    </div>
                    <h3 className="video-item-title">
                        <a href="#">吃我一记大桶水</a>
                    </h3>
                </li>
                <li className={"video-item"}>
                    <div className={"video-item-pic"}>
                        <img src={Video1} alt="" />
                        
                        <span>
                            <div>
                                <i className="iconfont icon-703bofang-fangxing-xianxing"></i>
                                73.7万
                            </div>
                            <div>
                                <i className="iconfont icon-xinxi"></i>
                                5591
                            </div>    
                        </span>
                    </div>
                    <h3 className="video-item-title">
                        <a href="#">那些语文课本里的已删节</a>
                    </h3>
                </li>
                <li className={"video-item"}>
                    <div className={"video-item-pic"}>
                        <img src={Video2} alt="" />
                        
                        <span >
                            <div>
                                <i className="iconfont icon-703bofang-fangxing-xianxing"></i>
                                73.7万
                            </div>
                            <div>
                                <i className="iconfont icon-xinxi"></i>
                                5591
                            </div>    
                        </span>
                    </div>
                    <h3 className="video-item-title">
                        <a href="#">吃我一记大桶水</a>
                    </h3>
                </li>
                <li className={"video-item"}>
                    <div className={"video-item-pic"}>
                        <img src={Video3} alt="" />
                        
                        <span>
                            <div>
                                <i className="iconfont icon-703bofang-fangxing-xianxing"></i>
                                73.7万
                            </div>
                            <div>
                                <i className="iconfont icon-xinxi"></i>
                                5591
                            </div>    
                        </span>
                    </div>
                    <h3 className="video-item-title">
                        <a href="#">那些语文课本里的已删节</a>
                    </h3>
                </li>
                <li className={"video-item"}>
                    <div className={"video-item-pic"}>
                        <img src={Video4} alt="" />
                        
                        <span>
                            <div>
                                <i className="iconfont icon-703bofang-fangxing-xianxing"></i>
                                73.7万
                            </div>
                            <div>
                                <i className="iconfont icon-xinxi"></i>
                                5591
                            </div>    
                        </span>
                    </div>
                    <h3 className="video-item-title">
                        <a href="#">吃我一记大桶水</a>
                    </h3>
                </li>
                <li className={"video-item"}>
                    <div className={"video-item-pic"}>
                        <img src={Video1} alt="" />
                        
                        <span>
                            <div>
                                <i className="iconfont icon-703bofang-fangxing-xianxing"></i>
                                73.7万
                            </div>
                            <div>
                                <i className="iconfont icon-xinxi"></i>
                                5591
                            </div>    
                        </span>
                    </div>
                    <h3 className="video-item-title">
                        <a href="#">那些语文课本里的已删节</a>
                    </h3>
                </li>
                <li className={"video-item"}>
                    <div className={"video-item-pic"}>
                        <img src={Video2} alt="" />
                        
                        <span>
                            <div>
                                <i className="iconfont icon-703bofang-fangxing-xianxing"></i>
                                73.7万
                            </div>
                            <div>
                                <i className="iconfont icon-xinxi"></i>
                                5591
                            </div>    
                        </span>
                    </div>
                    <h3 className="video-item-title">
                        <a href="#">吃我一记大桶水</a>
                    </h3>
                </li>
                <li className={"video-item"}>
                    <div className={"video-item-pic"}>
                        <img src={Video3} alt="" />
                        
                        <span>
                            <div>
                                <i className="iconfont icon-703bofang-fangxing-xianxing"></i>
                                73.7万
                            </div>
                            <div>
                                <i className="iconfont icon-xinxi"></i>
                                5591
                            </div>    
                        </span>
                    </div>
                    <h3 className="video-item-title">
                        <a href="#">那些语文课本里的已删节</a>
                    </h3>
                </li>
                <li className={"video-item"}>
                    <div className={"video-item-pic"}>
                        <img src={Video4} alt="" />
                        
                        <span>
                            <div>
                                <i className="iconfont icon-703bofang-fangxing-xianxing"></i>
                                73.7万
                            </div>
                            <div>
                                <i className="iconfont icon-xinxi"></i>
                                5591
                            </div>    
                        </span>
                    </div>
                    <h3 className="video-item-title">
                        <a href="#">吃我一记大桶水</a>
                    </h3>
                </li>
            </ul>
        </div>
    </div>
}