import "../../asserts/css/flex/4_17/reset.css";
import "../../asserts/css/flex/4_17/1demo.css";
import "../../asserts/css/flex/4_17/iconfont.css";

// 等高 
export const FlexCarousel = () => {
    return <div>
        <div className={"swiper-container"}>
            <div className={"swiper-wrapper"}>
                <div className={"swiper-slide"}>
                    <img src="https://images.pexels.com/photos/9513526/pexels-photo-9513526.jpeg?cs=srgb&dl=pexels-vladislav-filippov-9513526.jpg&fm=jpg" alt="" />
                </div>
                <div className={"swiper-slide"}>
                    <img src="https://images.pexels.com/photos/5056444/pexels-photo-5056444.jpeg?cs=srgb&dl=pexels-dylan-bueltel-5056444.jpg&fm=jpg" alt="" />
                </div>
                <div className={"swiper-slide"}>
                    <img src="https://images.pexels.com/photos/9459282/pexels-photo-9459282.jpeg?cs=srgb&dl=pexels-alex-barnes-9459282.jpg&fm=jpg" alt="" />
                </div>
                {/* <div className={"swiper-slide"}>
                    <img src="https://pic3.iqiyipic.com/common/lego/20210609/e66f0e28608f4aa7b08b5d93088c73c6.jpg?caplist=jpg,webp" alt="" />
                </div>
                <div className={"swiper-slide"}>
                    <img src="https://pic0.iqiyipic.com/common/lego/20210614/71f0084bddcb446db323fa9eebf53585.jpg?caplist=jpg,webp" alt="" />
                </div>
                <div className={"swiper-slide"}>
                    <img src="https://m.iqiyipic.com/common/lego/20210613/80bfb766ac36470f9ec3a3788f85eabe.jpg?caplist=jpg,webp" alt="" />
                </div> */}
            </div>
        
            {/* 如果需要分页器 */}
            <div className={"swiper-pagination"}>
                <span className={"swiper-pagination-bullet swiper-pagination-bullet-active"}></span>
                <span className={"swiper-pagination-bullet"}></span>
                <span className={"swiper-pagination-bullet"}></span>
            </div>
            
            {/* 如果需要导航按钮 */}
            <div className={"swiper-button-prev"}>
                <i className={"iconfont icon-swiperhoutui"}></i>
            </div>
            <div className={"swiper-button-next"}>
                <i className={"iconfont icon-swiperqianjin"}></i>
            </div>
        </div>
    </div>
}