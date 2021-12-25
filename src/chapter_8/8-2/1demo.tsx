import "asserts/css/chapter_8/8-2/global.css"
import "asserts/css/chapter_8/8-2/index.css"
import "asserts/css/chapter_8/iconfont/iconfont.css"
import Logo from "asserts/css/chapter_8/static/logo.svg"
import React, { useEffect } from "react"

export const AntPro = () => {
  useEffect(() => {
    // liEventListener()
    // 监听侧边栏点击事件
    getOnclick()
    barOnclick()
    
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
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
            <p>pppppppppp</p>
      </div>

      {/* <div className="g-ant__foot">

      </div> */}
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