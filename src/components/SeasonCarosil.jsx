import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const images=[
    { src: "/season/1.png", alt: "img_1" },
    { src: "/season/2.png", alt: "img_2" },
    { src: "/season/3.png", alt: "img_3" },
    { src: "/season/4.png", alt: "img_4" },
    { src: "/season/5.png", alt: "img_5" },
    { src: "/season/6.png", alt: "img_6" },
    { src: "/season/7.png", alt: "img_7" },
    { src: "/season/8.png", alt: "img_8" },
    { src: "/season/9.png", alt: "img_9" },
    { src: "/season/10.png", alt: "img_10" },
    { src: "/season/11.png", alt: "img_11" },
    { src: "/season/12.png", alt: "img_12" },
    { src: "/season/13.png", alt: "img_13" },
    { src: "/season/14.png", alt: "img_14" },
    { src: "/season/15.png", alt: "img_15" },
    { src: "/season/16.png", alt: "img_16" },
    { src: "/season/17.png", alt: "img_17" },
    { src: "/season/18.png", alt: "img_18" }
]
function SeasonCarosil() {
  return (
    <>
     <div style={{
    paddingBottom: '30px',
    position: 'relative'
  }}>
        <Carousel
           infinite={true}
           autoPlay={true}
           autoPlaySpeed={1500}
           keyBoardControl={true}
           customTransition="all .5"
           transitionDuration={500}
           containerClass="carousel-container"
           removeArrowOnDeviceType={'all'}
           dotListClass=""
           itemClass="carousel-item-padding-40-px"
           renderDotsOutside
           sliderClass=""
           slidesToSlide={6}
           responsive={{
             all: {
               breakpoint: { max: 4000, min: 0 },
               items: 6
             }
           }}
           showDots
        >
           {images.map((image, index) => (
           <div key={index} className="carousel-card">
            <img src={image.src} alt={image.alt} width={'100%'} height={'auto'}  className="carousel-image" />
          </div>
        ))}
      
  
        </Carousel>
     </div>
    </>
  )
}

export default SeasonCarosil
