import Image from 'next/image';
import { getServerSession } from 'next-auth';
import CarouselContainer from './components/carousel/CarouselContainer';
import Poster from './components/Poster';

const Home = () => {
  return (
    <>
      <Poster />
      <div className="container my-7">
        <CarouselContainer
          title="Latest movies"
          collection="movie"
          url="movie/top_rated"
        />
        <CarouselContainer
          title="Upcoming movies"
          collection="movie"
          url="movie/upcoming"
        />
      </div>
    </>
  );
};

export default Home;
