import React from 'react'

const images=[
    { src: "/category/1.jpg", alt: "img_1" },
    { src: "/category/2.jpg", alt: "img_2" },
    { src: "/category/3.jpg", alt: "img_3" },
    { src: "/category/4.jpg", alt: "img_4" },
    { src: "/category/5.jpg", alt: "img_5" },
    { src: "/category/6.jpg", alt: "img_6" },
    { src: "/category/7.jpg", alt: "img_7" },
    { src: "/category/8.jpg", alt: "img_8" },
    { src: "/category/9.jpg", alt: "img_9" },
    { src: "/category/10.jpg", alt: "img_10" },
    { src: "/category/11.jpg", alt: "img_11" },
    { src: "/category/12.jpg", alt: "img_12" },
    { src: "/category/13.jpg", alt: "img_13" },
    { src: "/category/14.jpg", alt: "img_14" },
    { src: "/category/15.jpg", alt: "img_15" },
    { src: "/category/16.jpg", alt: "img_16" },
    { src: "/category/17.jpg", alt: "img_17" },
    { src: "/category/18.jpg", alt: "img_18" },
    { src: "/category/19.jpg", alt: "img_19" },
    { src: "/category/20.jpg", alt: "img_20" },
    { src: "/category/21.jpg", alt: "img_21" },
    { src: "/category/22.jpg", alt: "img_22" },
    { src: "/category/23.jpg", alt: "img_23" },
    { src: "/category/24.jpg", alt: "img_24" },
    { src: "/category/25.jpg", alt: "img_25" },
    { src: "/category/26.jpg", alt: "img_26" },
    { src: "/category/27.jpg", alt: "img_27" },
    { src: "/category/28.jpg", alt: "img_28" },
    { src: "/category/29.jpg", alt: "img_29" },
    { src: "/category/30.jpg", alt: "img_30" },
    { src: "/category/32.jpg", alt: "img_32" },
    { src: "/category/33.jpg", alt: "img_33" },
    { src: "/category/34.jpg", alt: "img_34" }
    
]


function Category() {
  return (
    <>
      <div className='category_header'>
        <img src="/category/headerr.jpg" alt="heading" width={'100%'} />
      </div>
      <div className="row image-grid d-flex justify-content-center align-items-center mt-2">
      {images.map((image, index) => (
        <div key={index} className="image-card col-2">
          <img src={image.src} alt={image.alt} className="image" />
        </div>
      ))}
    </div>
    </>
  )
}

export default Category
