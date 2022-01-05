import "asserts/css/chapter_8/8-3/global.css"
import "asserts/css/chapter_8/8-3/index.css"
import "asserts/css/chapter_8/iconfont/iconfont.css"
import Logo from "asserts/css/chapter_8/static/logo.svg"
import Index1 from "asserts/css/chapter_8/static/index-1.jpg"
import Index2 from "asserts/css/chapter_8/static/index-2.jpg"
import Index3 from "asserts/css/chapter_8/static/index-3.jpg"
import Index4 from "asserts/css/chapter_8/static/index-4.jpg"
import Index5 from "asserts/css/chapter_8/static/index-5.jpg"
import Index6 from "asserts/css/chapter_8/static/index-6.jpg"
import React, { useEffect } from "react"

export const AntPro1 = () => {
  useEffect(() => {
    // liEventListener()
    // 监听侧边栏点击事件
    getOnclick()
    barOnclick()
    selectStatus()
    
  })

  return <div>
    <div className={"g-ant"}>
      <div className="g-ant__sider">
      {/* <div className="g-ant__sider g-ant__sider--closed"> */}
        <div className="g-ant-sider__wrap g-ant-sider__wrap--fixed">
           <div className="g-ant-sider__head">
             <a className="m-logo" href="#">
              <img src={Logo} alt="" />
              <h2>Ant Design Pro</h2> 
             </a>
             
           </div>

           <ul className="g-ant-sider__main">
             {/* 是否被选中 */}
              {/* <li className="m-menu m-menu--selected"> */}
              <li className="m-menu m-menu--selected">
                <div className="m-menu__title">
                  <i className="iconfont icon-car"></i>
                  <span>Dashboard</span>
                  <i className="iconfont icon-arrowup"></i>
                </div>
                <ul className="m-menu__sub">
                  <li>分析页</li>
                  <li className="m-menu__sub--selected">监控页</li>
                  <li>工作台</li>
                </ul>
              </li>
              
              <li className="m-menu">
                  <div className="m-menu__title">
                      <i className="iconfont icon-printer"></i>
                      <span>表单页</span>
                      <i className="iconfont icon-arrowdown"></i>
                  </div>
                  <ul className="m-menu__sub">
                      <li>基础表单</li>
                      <li className="m-menu__sub--selected">分步表单</li>
                      <li>高级表单</li>
                  </ul>
              </li>
              <li className="m-menu">
                  <div className="m-menu__title">
                      <i className="iconfont icon-video"></i>
                      <span>列表页</span>
                      <i className="iconfont icon-arrowdown"></i>
                  </div>
                  <ul className="m-menu__sub">
                      <li>搜索列表</li>
                      <li className="m-menu__sub--selected">查询表格</li>
                      <li>标准列表</li>
                      <li>卡片列表</li>
                  </ul>
              </li>
              <li className="m-menu">
                  <div className="m-menu__title">
                      <i className="iconfont icon-check-circle"></i>
                      <span>详情页</span>
                      <i className="iconfont icon-arrowdown"></i>
                  </div>
                  <ul className="m-menu__sub">
                      <li>基础详情页</li>
                      <li className="m-menu__sub--selected">高级详情页</li>
                  </ul>
              </li>
              <li className="m-menu">
                  <div className="m-menu__title">
                      <i className="iconfont icon-user"></i>
                      <span>结果页</span>
                      <i className="iconfont icon-arrowdown"></i>
                  </div>
                  <ul className="m-menu__sub">
                      <li>成功页</li>
                      <li className="m-menu__sub--selected">失败页</li>
                  </ul>
              </li>
              <li className="m-menu">
                  <div className="m-menu__title">
                      <i className="iconfont icon-error"></i>
                      <span>结果页</span>
                      <i className="iconfont icon-arrowdown"></i>
                  </div>
                  <ul className="m-menu__sub">
                      <li>403</li>
                      <li>404</li>
                      <li className="m-menu__sub--selected">500</li>
                  </ul>
              </li>
              <li className="m-menu">
                  <div className="m-menu__title">
                      <i className="iconfont icon-highlight"></i>
                      <span>个人页</span>
                      <i className="iconfont icon-arrowdown"></i>
                  </div>
                  <ul className="m-menu__sub">
                      <li>个人中心</li>
                      <li className="m-menu__sub--selected">个人设置</li>
                  </ul>
              </li>
              <li className="m-menu">
                  <div className="m-menu__title">
                      <i className="iconfont icon-wrench"></i>
                      <span>图形编辑器</span>
                      <i className="iconfont icon-arrowdown"></i>
                  </div>
                  <ul className="m-menu__sub">
                      <li>流程编辑器</li>
                      <li className="m-menu__sub--selected">脑图编辑器</li>
                      <li>拓扑编辑器</li>
                  </ul>
              </li>
           </ul>

           <div className="g-ant-sider__foot">
            <i className="iconfont icon-outdent u-bar"></i>
           </div>
        </div>
      </div>

      <div className="g-ant__main">
        <div className="g-ant__main__head">
            <i className="iconfont icon-idcard"></i>
            <i className="iconfont icon-check-circle"></i>
            <i className="iconfont icon-read"></i>
            <i className="iconfont icon-user"></i>
            <span>adimn</span>
            <i className="iconfont icon-error"></i>
        </div>
        
        <div className="g-ant__main__main">
            <div className="index-main">
                <div className="m-card">
                    <div className="m-card__title">
                        活动实时交易情况
                    </div>
                    <div className="m-card__body">
                        <div className="index-main__bg1"></div>
                    </div>
                </div>
                
                <div className="m-card">
                    <div className="m-card__title">
                        活动情况预测
                    </div>
                    <div className="m-card__body">
                        <div className="index-main__bg2"></div>
                    </div>
                </div>
                
                <div className="m-card">
                    <div className="m-card__title">
                        券核效率
                    </div>
                    <div className="m-card__body">
                        <div className="index-main__bg3"></div>
                    </div>
                </div>

                <div className="m-card">
                    <div className="m-card__title">
                        活动实时交易情况
                    </div>
                    <div className="m-card__body">
                        <div className="index-main__bg4"></div>
                    </div>
                </div>

                <div className="m-card">
                    <div className="m-card__title">
                        活动实时交易情况
                    </div>
                    <div className="m-card__body">
                        <div className="index-main__bg5"></div>
                    </div>
                </div>

                <div className="m-card">
                    <div className="m-card__title">
                        活动实时交易情况
                    </div>
                    <div className="m-card__body">
                        <div className="index-main__bg6"></div>
                    </div>
                </div>
            </div>
        </div>

        <div className="g-ant__main__foot">
            <p>
                <a href="#">Ant Design Pro</a>
                <a href="#"><i className="iconfont icon-github-fill"></i></a>
                <a href="#">Ant Design</a>
            </p>
            <p>
                <i className="iconfont icon-user"></i> 2021 Produced by Ant Group Experience Technology Department
            </p>
        </div>
      </div>

      {/* <div className="g-ant__foot">

      </div> */}
    </div>
    
    {/* 右侧设置侧边栏 */}
    <div className="m-setting">
        <div className="m-setting__bar">
            <i className="iconfont icon-setting"></i>
        </div>

        <div className="m-setting__item">
            <h3>主题色</h3>
            <ul className="m-setting-item__theme">
                <li className="u-foxiaolan"><i className="iconfont icon-check"></i></li>
                <li className="u-bomu"></li>
                <li className="u-huoshan"></li>
                <li className="u-rimu"></li>
                <li className="u-mingqing"></li>
                <li className="u-jiguanglv"></li>
                <li className="u-jikelan"></li>
                <li className="u-jiangzi"></li>
            </ul>
        </div>

        <div className="u-divider"></div>

        <div className="m-setting__item">
            <h3>固定内容</h3>
            <ul className="m-setting-item__toggle">
                <li>
                    <span>内容头部</span>
                    <div className="u-switch j-head--show">
                        <div className="u-switch__handle"></div>
                    </div>
                </li>
                <li>
                    <span>侧边菜单</span>
                    <div className="u-switch j-head--show">
                        <div className="u-switch__handle"></div>
                    </div>
                </li>
            </ul>
        </div>

        <div className="u-divider"></div>

        <div className="m-setting__item">
            <h3>显示内容</h3>
            <ul className="m-setting-item__toggle">
                <li>
                    <span>内容头部</span>
                    <div className="u-switch j-head--show">
                        <div className="u-switch__handle"></div>
                    </div>
                </li>
                <li>
                    <span>侧边菜单</span>
                    <div className="u-switch j-sider--show">
                        <div className="u-switch__handle"></div>
                    </div> 
                </li>
            </ul>
        </div>
    </div>
  </div>
}

const barOnclick = () => {
    var bar = document.querySelector(".u-bar")
    var sider = document.querySelector(".g-ant__sider")
    var menus = document.querySelectorAll('.m-menu');

    bar?.addEventListener("click", (e) => {
        sider?.classList.toggle("g-ant__sider--closed")
        
        menus.forEach(element => {
            element.classList.remove("m-menu--selected")
            var arrow = element.querySelector('[class*="icon-arrow"]');
            if (arrow?.className) {
                arrow.className = 'iconfont icon-arrowdown';
            }
        });
    })
}

const liEventListener = () => {
    var ul = document.querySelector(".g-ant-sider__main")
    // console.log(ul?.children);
    var child = ul?.children;

    console.log("ul?.childNodes ==>", ul);
    
    ul?.childNodes.forEach(element => {
        element.addEventListener("click", (e) => {
            // console.log(element);
            console.log(element);
        })
    });

    // ul?.addEventListener("click", (e) => {
    //     if (e.target) {
    //         console.log("target ==》",e.target);
    //     }
    // })
    
} 

const getOnclick = () => {
      // 收集侧边栏所有一级菜单    
      var menuTitles = document.querySelectorAll(".m-menu__title")
    //   console.log(menu);
     // 监听哪个菜单被点击了
     menuTitles.forEach(element => {
        //  console.log(element);
        element.addEventListener("click", (e) => {
            // console.log(e);
            var menu = element?.parentElement
            // console.log(element?.parentElement);
            // console.log("menu ==>", menu);
            
            menu?.classList.toggle("m-menu--selected")

            if (menu?.className.includes("m-menu--selected")) {
                //打开状态
                var arrow = element.querySelector('[class*="icon-arrow"]');
                if (arrow?.className) {
                    arrow.className = 'iconfont icon-arrowup';
                }
                console.log("arrow ==>",arrow?.className);

            } else {
                //关闭状态
                var arrow = element.querySelector('[class*="icon-arrow"]');
                // console.log("arrow ==>",arrow?.className);
                // arrow = "<i className='iconfont icon-arrowdown'></i>";
                if (arrow?.className) {
                    arrow.className = 'iconfont icon-arrowdown';
                }
                console.log("arrow ==>",arrow?.className);
                // arrow.className = 'iconfont icon-arrowdown';
            }
            
        })

         
     });
    // var menuTitles = document.querySelectorAll('.m-menu__title');
    //     for(var i=0;i<menuTitles.length;i++){
    //         menuTitles[i].onclick = function(){
    //             var menu = this.parentElement;
    //             menu.classList.toggle('m-menu--selected');
    //             if( menu.className.includes('m-menu--selected') ){
    //                 //打开状态
    //                 var arrow = this.querySelector('[class*="icon-arrow"]');
    //                 arrow.className = 'iconfont icon-arrowup';
    //             }
    //             else{
    //                 //关闭状态
    //                 var arrow = this.querySelector('[class*="icon-arrow"]');
    //                 arrow.className = 'iconfont icon-arrowdown';
    //             }
    //         };
    //     }
}