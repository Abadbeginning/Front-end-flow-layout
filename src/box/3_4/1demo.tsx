import "../../asserts/css/box/3_4/1demo.css"

// 标准盒模型 宽高 ==> 默认为内容 设置padding margin自动向外扩增
export const StandardBox = () => {
    return <div className={"box1"}>
        <div className={"box2"}>盒子的内容</div>
    </div>
}