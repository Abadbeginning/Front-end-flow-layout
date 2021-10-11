import "../../asserts/css/box/3_3/1demo.css";

// 块级盒子 类似div p h1 这些 它们会占领整行
export const BlockBox = () => {
    return <div>
        <div className={"box1"}></div>
        <div className={"box2"}></div>
        <span className="inline1">内联盒子1</span>
        <span className="inline2">内联盒子2</span>
    </div>
    
}