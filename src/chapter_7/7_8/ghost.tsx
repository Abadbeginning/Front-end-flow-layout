import "asserts/css/chapter_7/7_8/1.css"
import "asserts/css/chapter_7/7_8/iconfont/iconfont.css"
import Logo from "asserts/css/chapter_7/7_8/img/ghost-logo.png"

export const Ghost = () => {
  return <div className="ghost-container">
      {/* logo */}
      <div className="head">
        <img className="head-logo" src={Logo} alt="" />
      </div>

      {/* 导航栏 */}
      <div className="nav">
            <div className="nav-bar">
              <label htmlFor="nav-toggle">
                <i className="iconfont icon-zhedie"></i>
              </label>
            </div>
            <input type="checkbox" id="nav-toggle" className="nav-toggle" />
            <ul className="nav-list">
                <li className="active"><a href="#">首页</a></li>
                <li><a href="#">论坛</a></li>
                <li><a href="#">快捷手册</a></li>
                <li><a href="#">中文文档</a></li>
                <li><a href="#">关于</a></li>
            </ul>
      </div>

      {/* 文章内容 */}
      <div className="main row">
        <div className="col-12 col-sm-12 col-lg-8"> 
          <div className="main-list">
            <h2>全新的 Ghost 文档上线</h2>
            <div>
              <span>作者：王思文</span> • <span>2021年12月20日</span>
            </div>
            <p>
              我们的整个 Ghost 文档 已经全新改版了！并且添加了一些新的补充，包括使用教程和功能集成。 新文档的目标是帮助更多人有效地安装并管理他们发布的内容，并且最大限度地发挥 Ghost 作为一个开源发布平台的灵活性。文档的设计和结构已经修订完毕，我们的改进包括 Ghost 安装和设
            </p>
            <button type="button">阅读全文</button>
            <section>
              <i className="iconfont icon-wenjianjia"></i>
              <a href="#">Android</a>，
              <a href="#">客户端</a>
            </section>
          </div>
          <div className="main-list">
            <h2>全新的 Ghost 文档上线</h2>
            <div>
              <span>作者：王思文</span> • <span>2021年12月20日</span>
            </div>
            <p>
              我们的整个 Ghost 文档 已经全新改版了！并且添加了一些新的补充，包括使用教程和功能集成。 新文档的目标是帮助更多人有效地安装并管理他们发布的内容，并且最大限度地发挥 Ghost 作为一个开源发布平台的灵活性。文档的设计和结构已经修订完毕，我们的改进包括 Ghost 安装和设
            </p>
            <button type="button">阅读全文</button>
            <section>
              <i className="iconfont icon-wenjianjia"></i>
              <a href="#">Android</a>，
              <a href="#">客户端</a>
            </section>
          </div>
          <div className="main-list">
            <h2>全新的 Ghost 文档上线</h2>
            <div>
              <span>作者：王思文</span> • <span>2021年12月20日</span>
            </div>
            <p>
              我们的整个 Ghost 文档 已经全新改版了！并且添加了一些新的补充，包括使用教程和功能集成。 新文档的目标是帮助更多人有效地安装并管理他们发布的内容，并且最大限度地发挥 Ghost 作为一个开源发布平台的灵活性。文档的设计和结构已经修订完毕，我们的改进包括 Ghost 安装和设
            </p>
            <button type="button">阅读全文</button>
            <section>
              <i className="iconfont icon-wenjianjia"></i>
              <a href="#">Android</a>，
              <a href="#">客户端</a>
            </section>
          </div>
          <div className="main-list">
            <h2>全新的 Ghost 文档上线</h2>
            <div>
              <span>作者：王思文</span> • <span>2021年12月20日</span>
            </div>
            <p>
              我们的整个 Ghost 文档 已经全新改版了！并且添加了一些新的补充，包括使用教程和功能集成。 新文档的目标是帮助更多人有效地安装并管理他们发布的内容，并且最大限度地发挥 Ghost 作为一个开源发布平台的灵活性。文档的设计和结构已经修订完毕，我们的改进包括 Ghost 安装和设
            </p>
            <button type="button">阅读全文</button>
            <section>
              <i className="iconfont icon-wenjianjia"></i>
              <a href="#">Android</a>，
              <a href="#">客户端</a>
            </section>
          </div>
          <div className="main-list">
            <h2>全新的 Ghost 文档上线</h2>
            <div>
              <span>作者：王思文</span> • <span>2021年12月20日</span>
            </div>
            <p>
              我们的整个 Ghost 文档 已经全新改版了！并且添加了一些新的补充，包括使用教程和功能集成。 新文档的目标是帮助更多人有效地安装并管理他们发布的内容，并且最大限度地发挥 Ghost 作为一个开源发布平台的灵活性。文档的设计和结构已经修订完毕，我们的改进包括 Ghost 安装和设
            </p>
            <button type="button">阅读全文</button>
            <section>
              <i className="iconfont icon-wenjianjia"></i>
              <a href="#">Android</a>，
              <a href="#">客户端</a>
            </section>
          </div>
          <div className="main-list">
            <h2>全新的 Ghost 文档上线</h2>
            <div>
              <span>作者：王思文</span> • <span>2021年12月20日</span>
            </div>
            <p>
              我们的整个 Ghost 文档 已经全新改版了！并且添加了一些新的补充，包括使用教程和功能集成。 新文档的目标是帮助更多人有效地安装并管理他们发布的内容，并且最大限度地发挥 Ghost 作为一个开源发布平台的灵活性。文档的设计和结构已经修订完毕，我们的改进包括 Ghost 安装和设
            </p>
            <button type="button">阅读全文</button>
            <section>
              <i className="iconfont icon-wenjianjia"></i>
              <a href="#">Android</a>，
              <a href="#">客户端</a>
            </section>
          </div>
          <div className="main-list">
            <h2>全新的 Ghost 文档上线</h2>
            <div>
              <span>作者：王思文</span> • <span>2021年12月20日</span>
            </div>
            <p>
              我们的整个 Ghost 文档 已经全新改版了！并且添加了一些新的补充，包括使用教程和功能集成。 新文档的目标是帮助更多人有效地安装并管理他们发布的内容，并且最大限度地发挥 Ghost 作为一个开源发布平台的灵活性。文档的设计和结构已经修订完毕，我们的改进包括 Ghost 安装和设
            </p>
            <button type="button">阅读全文</button>
            <section>
              <i className="iconfont icon-wenjianjia"></i>
              <a href="#">Android</a>，
              <a href="#">客户端</a>
            </section>
          </div>
          <div className="main-list">
            <h2>全新的 Ghost 文档上线</h2>
            <div>
              <span>作者：王思文</span> • <span>2021年12月20日</span>
            </div>
            <p>
              我们的整个 Ghost 文档 已经全新改版了！并且添加了一些新的补充，包括使用教程和功能集成。 新文档的目标是帮助更多人有效地安装并管理他们发布的内容，并且最大限度地发挥 Ghost 作为一个开源发布平台的灵活性。文档的设计和结构已经修订完毕，我们的改进包括 Ghost 安装和设
            </p>
            <button type="button">阅读全文</button>
            <section>
              <i className="iconfont icon-wenjianjia"></i>
              <a href="#">Android</a>， 
              <a href="#">客户端</a>
            </section>
          </div>       
        </div>

        <div className="col-12 col-sm-12 col-lg-4"> 
          <div className="main-aside">
            <h3>声明</h3>
            <p>
              Ghost 中文版不再继续维护，请去官方下载。
            </p>
          </div>

          <div className="main-aside">
            <h3>下载</h3>
            <button>Ghost最新版</button>
          </div>

          <div className="main-aside">
            <h3>标签云</h3>
            <div>
                <a href="#">客户端</a>
                <a href="#">Android</a>
                <a href="#">jQuery</a>
                <a href="#">Ghost 0.7 版本</a>
                <a href="#">开源</a>
                <a href="#">助手函数</a>
                <a href="#">客户端</a>
                <a href="#">客户端</a>
                <a href="#">Android</a>
                <a href="#">jQuery</a>
                <a href="#">Ghost 0.7 版本</a>
                <a href="#">开源</a>
                <a href="#">助手函数</a>
                <a href="#">客户端</a>
            </div>
          </div>
        </div>
      </div>

  </div>
}