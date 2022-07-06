import React from 'react'

//styles
import './Banner.css'

const bannerData = {
  title: 'React landing page',
  desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque exercitationem, vel esse minima consectetur a recusandae commodi qui nisi! Animi iste molestias, numquam ipsum voluptas tempora fugiat illo labore ipsam.',
}

export default function Banner() {
  return (
    <div className="banner-bg">
      <div className="container">
        <div className="banner-con">
          <div className="banner-text">
            <h1>{bannerData.title}</h1>
            <p>{bannerData.desc}</p>
            <a href="#" className="banner-btn">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
