import "asserts/css/chapter_7/7_6/1.css"

export const Media4 = () => {
  return <div>
      <label htmlFor="menu">
        <span>
          菜单按钮
        </span>
      </label>

      <input type="checkbox" id="menu" />

      <ul>
        <li>首页</li>
        <li>教程</li>
        <li>文章</li>
        <li>问答</li>
      </ul>
  </div>
}