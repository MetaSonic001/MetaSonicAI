import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="MetaSonicAI__blog section__padding" id="blog">
    <div className="MetaSonicAI__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="MetaSonicAI__blog-container">
      <div className="MetaSonicAI__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2024" text="MetaSonicAI is the future. Let us exlore how it is?" />
      </div>
      <div className="MetaSonicAI__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2024" text="Explore the future through the lens of MetaSonicAI's innovations." />
        <Article imgUrl={blog03} date="Sep 26, 2024" text="Let's journey into the future and witness the power of MetaSonicAI." />
        <Article imgUrl={blog04} date="Sep 26, 2024" text="The future is now with MetaSonicAI - let's embark on an exploration together." />
        <Article imgUrl={blog05} date="Sep 26, 2024" text="Join us in uncovering the future with MetaSonicAI at the helm." />
      </div>
    </div>
  </div>
);

export default Blog;