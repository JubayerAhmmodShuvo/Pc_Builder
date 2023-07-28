import Image from "next/image";


const Banner = () => {
  return (
    <div className="carousel w-full my-10">
      <div id="slide1" className="carousel-item relative w-full">
    
        <Image
          src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2021/03/Intel-Rocker-Lake-2-e1615908186584.jpg"
          className="w-full"
          width={400}
          height={600}
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <Image
          src="https://cdn.mos.cms.futurecdn.net/Ze6XggwqCN3H8svBucnSjG-1200-80.jpg"
          className="w-full"
          width={400}
          height={600}
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <Image
          src="https://www.zdnet.com/a/img/resize/1cf5268702ea99d4dff8dffdf170f612e4b6f7bc/2022/12/06/23c850a1-686f-401c-b42a-66c80ac80c79/samsung-odyssey-neo-g9.jpg?auto=webp&fit=crop&height=900&width=1200"
          className="w-full"
          width={400}
          height={600}
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <Image
          src="https://www.datocms-assets.com/34299/1657698830-3-monitor-setup.png"
          className="w-full"
          width={400}
          height={600}
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;