import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize"; // Put your HTML here:

const customHtml = `
 <style>

    .slider {
      position: relative;
      overflow: hidden;
    }

    .slider__wrapper {
      display: flex;
      transition: transform 0.6s ease;
    }

    .slider__item {
      flex: 0 0 20%;
      max-width: 20%;
    }

    .slider__control {
      position: absolute;
      top: 50%;
      display: none;
      align-items: center;
      justify-content: center;
      width: 40px;
      color: #fff;
      text-align: center;
      opacity: 0.5;
      height: 50px;
      transform: translateY(-50%);
      background: rgba(0, 0, 0, .5);
    }

    .slider__control_show {
      display: flex;
    }

    .slider__control:hover,
    .slider__control:focus {
      color: #fff;
      text-decoration: none;
      outline: 0;
      opacity: .9;
    }

    .slider__control_left {
      left: 0;
    }

    .slider__control_right {
      right: 0;
    }

    .slider__control::before {
      content: '';
      display: inline-block;
      width: 20px;
      height: 20px;
      background: transparent no-repeat center center;
      background-size: 100% 100%;
    }

    .slider__control_left::before {
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
    }

    .slider__control_right::before {
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
    }

    .slider__item>div {
      font-size: 100px;
      text-align: center;
      
    }
  </style>
  
  
   <div class="slider">
    <div class="slider__wrapper">
      <div class="slider__item">
        <div style="height: 150px;"><img src="https://ukit.group/img/logo_inc.png"></div>
      </div>
      <div class="slider__item">
        <div style="height: 150px;"><img src="https://ukit.group/img/logo_secret.png"></div>
      </div>
      <div class="slider__item">
        <div style="height: 150px;"><img src="https://ukit.group/img/logo_rbk.png"></div>
      </div>
      <div class="slider__item">
        <div style="height: 150px;"><img src="https://ukit.group/img/logo_forbes.png"></div>
      </div>
      <div class="slider__item">
        <div style="height: 150px;"><img src="https://ukit.group/img/logo_commers.png"></div>
      </div>
      <div class="slider__item">
        <div style="height: 150px;"><img src="https://ukit.group/img/logo_rbth.png"></div>
      </div>
          <div class="slider__item">
        <div style="height: 150px;"><img src="https://ukit.group/img/logo_vcru.png"></div>
      </div>
          <div class="slider__item">
        <div style="height: 150px;"><img src="https://ukit.group/img/logo_roem.png"></div>
      </div>
          <div class="slider__item">
        <div style="height: 150px;"><img src="https://ukit.group/img/logo_cossa.png"></div>
      </div>
          <div class="slider__item">
        <div style="height: 150px;"><img src="https://ukit.group/img/logo_cmsmag.png"></div>
      </div>
          <div class="slider__item">
        <div style="height: 150px;"><img src="https://ukit.group/img/logo_expert.png"></div>
      </div>
          <div class="slider__item">
        <div style="height: 150px;"><img src="https://ukit.group/img/logo_village.png"></div>
      </div>
      <div class="slider__item">
        <div style="height: 150px;"><img src="https://ukit.group/img/logo_seonews.png"></div>
      </div>
    </div>
    <a class="slider__control slider__control_left" href="#" role="button"></a>
    <a class="slider__control slider__control_right slider__control_show" href="#" role="button"></a>
  </div>
`;

const EmbedHTML = ({
	children,
	...props
}) => {
	const ref = useRef(null);
	useLayoutEffect(() => {
		ref.current.innerHTML = customHtml;
	}, []);
	return <div {...props} ref={ref} />;
};

export default atomize(EmbedHTML)({
	name: "EmbedHTML",
	normalize: true,
	mixins: true
});