import React from "react";
import '../App.css'

export default function Blogs() {
  return (
    <div className="container">
      <div className="breadcrumb d-flex">
        <p>Blogs</p>
      </div>
      <div className="blog-list py-5">
        <div className="blog">
          <img className="img-blur" src="https://emonahmed.com/programming-hero/12/blog/1.jpg" alt="Blog" />
          <h3 className="py-1">Going all-in with millennial design</h3>
          <p className="py-1 text-secondary text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo</p>
          <p className="sub_btn d-inline-block">Read More</p>
        </div>
        <div className="blog">
          <img className="img-blur" src="https://emonahmed.com/programming-hero/12/blog/2.jpg" alt="Blog" />
          <h3 className="py-1">Exploring new ways of decorating</h3>
          <p className="py-1 text-secondary text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo</p>
          <p className="sub_btn d-inline-block">Read More</p>
        </div>
        <div className="blog">
          <img className="img-blur" src="https://emonahmed.com/programming-hero/12/blog/3.jpg" alt="Blog" />
          <h3 className="py-1">Handmade pieces that took time to make</h3>
          <p className="py-1 text-secondary text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo</p>
          <p className="sub_btn d-inline-block">Read More</p>
        </div>
        <div className="blog">
          <img className="img-blur" src="https://emonahmed.com/programming-hero/12/blog/4.jpg" alt="Blog" />
          <h3 className="py-1">Modern home in Milan Office Area</h3>
          <p className="py-1 text-secondary text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo</p>
          <p className="sub_btn d-inline-block">Read More</p>
        </div>
        <div className="blog">
          <img className="img-blur" src="https://emonahmed.com/programming-hero/12/blog/5.jpg" alt="Blog" />
          <h3 className="py-1">Colorful office redesign Office Area</h3>
          <p className="py-1 text-secondary text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo</p>
          <p className="sub_btn d-inline-block">Read More</p>
        </div>
        <div className="blog">
          <img className="img-blur" src="https://emonahmed.com/programming-hero/12/blog/6.jpg" alt="Blog" />
          <h3 className="py-1">Our favorute items from pottery studio.</h3>
          <p className="py-1 text-secondary text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo</p>
          <p className="sub_btn d-inline-block">Read More</p>
        </div>
      </div>
    </div>
  );
}
