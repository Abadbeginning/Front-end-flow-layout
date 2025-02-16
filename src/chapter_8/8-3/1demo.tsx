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
    webFixAndShow()
  })

  return <div>
    <div className={"g-ant"}>
      {/* 左侧边栏 bem*/}
      <div className="g-ant__sider">
      {/* <div className="g-ant__sider g-ant__sider--closed"> */}
        <div className="g-ant-sider__wrap g-ant-sider__wrap--fixed">
           {/* 头部logo + 文字 */}
           <div className="g-ant-sider__head">
             <a className="m-logo" href="#">
                <img src={Logo} alt="" />
                <h2>Ant Design Pro</h2> 
             </a>
             
           </div>

           {/*  */}
           <ul className="g-ant-sider__main">
             {/* 是否被选中 */}
              {/* <li className="m-menu m-menu--selected"> */}
              <li className="m-menu m-menu--selected">
                {/* 内容的一级项目 */}
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
              
              {/* 具体子项 */}
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

           {/* 页脚 开发状态的图标 */}
           <div className="g-ant-sider__foot">
            <i className="iconfont icon-outdent u-bar"></i>
           </div>
        </div>
      </div>
    
      {/* 侧边栏的遮盖 */}
      <div className="u-mask"></div>

      {/*  具体内容页 */}
      <div className="g-ant__main">
        {/* 头 */}
        <div className="g-ant__main__head g-ant-main__head--fixed">
            <div className="m-logo1">
                <img src={Logo} alt="" />
                <i className="iconfont icon-outdent u-bar"></i>
            </div>
            <i className="iconfont icon-idcard"></i>
            <i className="iconfont icon-check-circle"></i>
            <i className="iconfont icon-read"></i>
            <i className="iconfont icon-user"></i>
            <span>adimn</span>
            <i className="iconfont icon-error"></i>
        </div>
        
        {/* 主体 */}
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
        
        {/* 尾 */}
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
    
    {/* 右侧设置侧边栏 固定 可展开收缩*/}
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

        {/* 下划线 */}
        <div className="u-divider"></div>

        <div className="m-setting__item">
            <h3>固定内容</h3>
            <ul className="m-setting-item__toggle">
                <li>
                    <span>内容头部</span>
                    <div className="u-switch j-head--fixed">
                        <div className="u-switch__handle"></div>
                    </div>
                </li>
                <li>
                    <span>侧边菜单</span>
                    <div className="u-switch j-sider--fixed">
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

    {/* 遮盖用的 */}
    <div className="u-mask"></div>
  </div>
}

// 左侧边栏 左下角 开启/收缩图标 click监听
const barOnclick = () => {
    var bar = document.querySelector(".g-ant-sider__foot .u-bar")
    var sider = document.querySelector(".g-ant__sider")
    var menus = document.querySelectorAll('.m-menu');

    bar?.addEventListener("click", (e) => {
        // 收缩侧边栏
        sider?.classList.toggle("g-ant__sider--closed")
        
        // 每个收缩菜单项子项
        menus.forEach(element => {
            // 去除展开状态
            element.classList.remove("m-menu--selected")
            // 找到包含icon-arrow的类
            var arrow = element.querySelector('[class*="icon-arrow"]');
            if (arrow?.className) {
                // 设置收缩图标
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

// 菜单选中/或关闭 图标的处理 
const getOnclick = () => {
      // 收集侧边栏所有一级菜单    
      var menuTitles = document.querySelectorAll(".m-menu__title")
    //   console.log(menu);
     // 循环遍历 监听哪个菜单被点击了
     menuTitles.forEach(element => {
        //  console.log(element);
        element.addEventListener("click", (e) => {
            // console.log(e);
            // 获取父容器
            var menu = element?.parentElement
            // console.log(element?.parentElement);
            // console.log("menu ==>", menu);
            
            // 选中/去选中状态
            menu?.classList.toggle("m-menu--selected")

            // 若是选中状态
            if (menu?.className.includes("m-menu--selected")) {
                // 找到包含icon-arrow的类 替换它的标签
                var arrow = element.querySelector('[class*="icon-arrow"]');
                if (arrow?.className) {
                    arrow.className = 'iconfont icon-arrowup';
                }
                console.log("arrow ==>",arrow?.className);

            } else {
                //关闭状态 替换类
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

// 右侧边栏
const selectStatus = () => {
    // 获取类 m-setting m-setting__bar 右侧界面和按钮
    var m_set = document.querySelector(".m-setting")
    var m_bar = document.querySelector(".m-setting__bar")
    var bar_i = document.querySelector(".m-setting__bar i")
    var themes = document.querySelectorAll('.m-setting-item__theme>li');
    var bar = document.querySelector(".m-logo1 .u-bar")

    // 监控设置按钮
    m_bar?.addEventListener("click", () => {
        // 有m-setting--open则移除 没有则添加
        m_set?.classList.toggle("m-setting--open")
        
        // 若是打开状态 则图标显示为关闭按钮 否则设置按钮
        if (m_set?.className.includes("m-setting--open")) {
            if (bar_i?.className) {
                bar_i.className = "iconfont icon-close";
            }
        } else {
            if (bar_i?.className) {
                bar_i.className = "iconfont icon-setting";
            }
        }
    })

    // 遍历颜色主题
    for(var i=0;i<themes.length;i++){
        themes[i].addEventListener("click", () => {
            for(var i=0;i<themes.length;i++){
                themes[i].innerHTML = '';
            }

            themes[i].innerHTML = '<i class="iconfont icon-check"></i>';
            var color = getComputedStyle(themes[i]).backgroundColor;
            document.documentElement.style.setProperty('--theme', color);
        })
    }



}

// 右侧设置界面 固定内容和显示内容项的设置
const webFixAndShow = () => {
    // j-head--fixed
    var head_fixed = document.querySelector(".j-head--fixed")
    var sider_fixed = document.querySelector(".j-sider--fixed")
    var head_show = document.querySelector(".j-head--show")
    var sider_show = document.querySelector(".j-sider--show")
    var main_head = document.querySelector(".g-ant__main__head")
    var sider_wrap = document.querySelector(".g-ant-sider__wrap")
    var ant_sider = document.querySelector(".g-ant__sider")
    var sider_mask = document.querySelector(".g-ant__sider + .u-mask")
    var m_logo1 = document.querySelector(".m-logo1")
    var bar = document.querySelector(".m-logo1 .u-bar")
    
    // 固定头部
    head_fixed?.addEventListener("click", () => {
        // 改变开关按钮状态
        head_fixed?.classList.toggle("u-switch--closed")
        // 改变头部固定类
        main_head?.classList.toggle("g-ant-main__head--fixed")
    })

    // 侧边菜单固定
    sider_fixed?.addEventListener("click", () => {
        // 改变开关按钮状态
        sider_fixed?.classList.toggle("u-switch--closed")
        // 改变侧边栏固定类
        sider_wrap?.classList.toggle("g-ant-sider__wrap--fixed")
    })

    // 右侧边栏显示内容 ==> 内容头部开关按钮 是否隐藏头部
    head_show?.addEventListener("click", () => {
        // 改变开关按钮状态
        head_show?.classList.toggle("u-switch--closed")
        // 添加/隐藏头部
        main_head?.classList.toggle("hide")
    })

    // 侧边栏菜单显示/隐藏
    sider_show?.addEventListener("click", () => {
        // 改变开关按钮状态
        sider_show?.classList.toggle("u-switch--closed")
        // 显示/隐藏 添加/去除隐藏(display:none)即可 
        ant_sider?.classList.toggle("hide")
    })

    // 头部 菜单收缩按钮的监听
    bar?.addEventListener("click", () => {
        // 若右侧边栏 显示内容下的 侧边菜单 不是关闭状态 添加左侧边栏
        if (!ant_sider?.className.includes("hide")) {
            // 展开菜单栏
            ant_sider?.classList.add("show")
            // 隐藏头部最左侧的logo和菜单收缩按钮
            m_logo1?.classList.toggle("hide")
        }
    })

    // 菜单栏在特定宽度 出现遮盖效果时 监听
    sider_mask?.addEventListener("click", () => {
        // 关闭菜单栏
        ant_sider?.classList.remove("show")
        // 隐藏头部最左侧的logo和菜单收缩按钮
        m_logo1?.classList.toggle("hide")
    })

}
