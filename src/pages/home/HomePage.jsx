
import Slider from '../../component/slider/Slider'
import Srevices from '../../component/services/Services';
import BookSlider from '../../component/book-slider/BookSlider';
import { books } from "../../data/books";
import HeadingTitle from '../../component/heading-title/HeadingTitle';

const HomePage = () => {
    return ( 
    <div className="home">
        <Slider />
        <Srevices />

        <HeadingTitle title="Most Gifted" />
        <BookSlider data={books} />


        <HeadingTitle title="Best Saller" />
        <BookSlider data={books} />


        <HeadingTitle title="Most Wished For" />
        <BookSlider data={books} />
    </div> );
}

export default HomePage;