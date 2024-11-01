import "./slider.css"

import FirstBook from "../../images/book1.png"
import SecondBook from "../../images/book2.png"
import ThirdBook from "../../images/book3.png"
import { useState } from "react"


const Slider = () => {

    const [sliderIndex, setSliderIndex] = useState(0);

    const hndleClick = (direction) => {
        if (direction === 'left') {
            setSliderIndex (sliderIndex > 0 ? sliderIndex - 1 : 2);
        } else {
            setSliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0);
        }
    }

    return ( 

        <div className="slider-container">

            {/* {sliderIndex !== 0 && <i onClick={() => hndleClick('left')} className="bi bi-chevron-double-left arrow-left"></i>} */}
            <i onClick={() => hndleClick('left')} className="bi bi-chevron-double-left arrow-left"></i>

            <div style={{transform: `translateX(${sliderIndex * -100}vw)`}} className="slider-wrapper">

                <div className="slide first-slide">
                    <div className="slide-img-wrapper">
                        <img src={FirstBook} alt=""/>
                    </div>
                    <div className="slide-info-wrapper">
                        <h1 className="silde-info-title">Book Store</h1>
                        <p className="slide-info-desc">
                            Its not just reading. its living the adventure.
                        </p>
                    </div>

                </div>

                <div className="slide second-slide">
                    <div className="slide-img-wrapper">
                        <img src={SecondBook} alt=""/>
                    </div>
                    <div className="slide-info-wrapper">
                        <h1 className="silde-info-title">The Books For Everyone</h1>
                        <p className="slide-info-desc">
                            You Can Read At Home Or At Booksstore.
                        </p>
                    </div>
                </div>

                <div className="slide third-slide">
                    <div className="slide-img-wrapper">
                        <img src={ThirdBook} alt=""/>
                    </div>
                    <div className="slide-info-wrapper">
                        <h1 className="silde-info-title">Check Out The New Titles</h1>
                        <p className="slide-info-desc">
                            We send you the book you want at home.
                        </p>
                    </div>
                </div>


            </div>

            {/* {sliderIndex !== 2 && <i onClick={() => hndleClick('right')} className="bi bi-chevron-double-right arrow-right"></i>} */}
            <i onClick={() => hndleClick('right')} className="bi bi-chevron-double-right arrow-right"></i>

        </div>
    );

}

export default Slider;