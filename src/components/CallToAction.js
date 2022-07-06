import React from 'react'
import { FiCode } from 'react-icons/fi'

//styles
import './CallToAction.css'

export default function CallToAction() {
  return (
    <div className="cta-bg">
      <div className="overlay"></div>
      <div className="container">
        <div className="cta-text">
          <FiCode className="FiCode" />
          <h2>We're react team</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            magnam tenetur asperiores laboriosam mollitia quo provident libero
            voluptatum sunt voluptatibus perspiciatis fugit harum quas ad at
            maiores aut, quidem fuga.
          </p>
          <a href="#" className="cta-btn">
            get to know us
          </a>
        </div>
      </div>
    </div>
  )
}
