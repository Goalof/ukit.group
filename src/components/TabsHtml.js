import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize"; // Put your HTML here:

const customHtml = `
<style>
.two-column {
    clear: both;
    overflow: auto;
    text-align: left;
    padding-top: 46px;
}
.column_left {
    float: left;
    width: 65%;
    box-sizing: border-box;
    padding: 0 5% 10px 0;
}
.column_left p {
    line-height: 1.5em;
    margin-bottom: 25px;
}
.column_right p {
    color: #8a959c;
    font-size: 20px;
    margin: 0 0 20px 0;
}
.column_right p b {
    font-size: 30px;
}
.type-of-site h3 {
    color: #222222;
    margin-bottom: 24px;
}
.type-of-site p {
    color: #8a959c;
    font-size: 16px;
    line-height: 1.5em;
}

#blocktab .link-button {
    display: inline-block;
    line-height: 56px;
    border-radius: 28px;
    background-color: #687aee;
    color: #fff;
    text-align: center;
    min-width: 235px;
    text-decoration: none;
    margin-top: 15px;
    font-size: 18px;
    font-weight: 500;
}
.column_right {
    float: right;
    width: 35%;
    box-sizing: border-box;
    border-left: 13px solid #ffdd67;
    padding: 5px 0 5px 30px;
    margin-top: 2px;
}

.active {
       padding: 10px !important;
    padding-bottom: 0px !important;
    margin: 10px;
    outline: 5px solid #ffdd67;
    background: #fff;
}
#blocktab li {
    padding: 10px !important;
    padding-bottom: 0px !important;
    margin: 10px !important;
}
.tabs {
    justify-content: center;
}
a.ukitlogo:hover {
    background-position: center -37px !important;
}
a.ukitlogo {
    background-image: url(https://ukit.group/img/tabs-logo_ukit.png) !important;
    width: 93px;
    height: 37px;
    display: inline-block !important;
    background-position: center  0 !important;
    background-repeat: no-repeat !important;
    vertical-align: middle;
    top: 15px;
}
a.ucozlogo:hover {
    background-position: 0 -72px !important;
}
a.ucozlogo {
    background-image: url(https://ukit.group/img/tabs-logo_ucoz.png) !important;
    width: 84px;
    height: 72px;
    display: inline-block !important;
    background-position: 0 0 !important;
    background-repeat: no-repeat !important;
    vertical-align: middle;
}
a.divlylogo:hover {
        background-position: 0 -36px !important;
}
a.divlylogo {
    background-image: url(https://ukit.group/img/tabs-new.png) !important;
    width: 141px;
    height: 36px;
    display: inline-block !important;
    background-position: 0 0 !important;
    background-repeat: no-repeat !important;
    vertical-align: middle;
    top: 15px;
}
a.ulandinglogo:hover {
        background-position: 0 -36px !important;
}
a.ulandinglogo {
    background-image: url(https://ukit.group/img/tabs-logo_ulanding.png) !important;
    width: 141px;
    height: 36px;
    display: inline-block !important;
    background-position: 0 0 !important;
    background-repeat: no-repeat !important;
    vertical-align: middle;
    top: 15px;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#blocktab ul {
  list-style: none;
}

#blocktab a {
  text-decoration: none;
  color: black;
}
.tabs-container {
  max-width: 1000px;
  margin: 50px auto;
  padding: 0px;
}

.tabs {
  display: flex;
}

.tabs li:not(:last-child) {
  margin-right: 7px;
}

.tabs li a {
  display: block;
  position: relative;
  padding: 10px 25px;
  border-radius: 2px 2px 0 0;
  background: white;
  transition: all 0.1s ease-in-out;
}

.tabs li.active a,
.tabs li a:hover {

}

.tabs-content {
  position: relative;
  z-index: 2;
  padding: 25px;
  padding-top: 0px;
  border-radius: 0 4px 4px 4px;
  background: white;
}

.tabs-panel {
  display: none;
}

.tabs-panel.active {
      display: block;
    outline: none;
}

.tabs-panel p + div {
  margin-top: 15px;
}

@media screen and (max-width: 600px) {
  .tabs {
    flex-direction: column;
  }

  .tabs li {
    width: 100%;
  }

  .tabs li:not(:last-child) {
    margin-right: 0;
  }

  .tabs li a {
    border-radius: 0;
    opacity: 1;
    top: 0;
  }

  .tabs li.active a::before {
    content: "•";
    padding-right: 5px;
  }

  .tabs-content {
    border-radius: 0;
  }
}
</style>
<div class="tabs-container">
  <ul class="tabs">
    <li class="active">
      <a href="" class="ukitlogo"></a>
    </li>
    <li>
      <a href="" class="ucozlogo"></a>
    </li>
    <li>
      <a href="" class="divlylogo"></a>
    </li>
       <li>
      <a href="" class="ulandinglogo"></a>
    </li>
  </ul>
  <div class="tabs-content">
    <div class="tabs-panel active" data-index="0">

<div class="tabs-content">
 <div class="two-column">
 <div class="column_left">
 <p>Один из&nbsp;самых быстрорастущих конструкторов сайтов на&nbsp;российском рынке, локализованный на&nbsp;мировые языки. Интуитивно понятная система управления, полная адаптивность, 30+&nbsp;инструментов для продвижения и&nbsp;лидогенерации плюс быстрая техподдержка делают uKit отличным выбором для малого и&nbsp;микро-бизнеса. </p>
<p>Маркетолог, дизайнер и&nbsp;разработчик уже поработали над шаблоном сайта&nbsp;— предпринимателю остается наполнить его контентом и&nbsp;начать получать клиентов. </p>
 </div>
 <div class="column_right">
 <p><b>1 млн</b> сайтов</p>
 <p><b>50+</b> стран</p>
 <p><b>$60-180</b><br>за поддержку сайта в год</p>
 </div>
 </div>
 <ul class="type-of-site">
 <li>
 <h3>Сайты из VK- и FB-страниц</h3>
 <p>Автоматическое <a href="https://ukit.com/ru/lp/convert" target="_blank">создание</a> сайта-визитки, магазина или лендинга из&nbsp;профиля или группы в&nbsp;соцсети на&nbsp;шаблоне uKit за&nbsp;2&nbsp;минуты.</p>
 </li>
 <!-- <li>
<h3>Divly</h3>
 <p>Услуга создания сайта, магазина или лендинга от&nbsp;3900 рублей с&nbsp;опцией дальнейшего продвижения. 60&nbsp;профессиональных исполнителей.&nbsp;5&nbsp;дней&nbsp;&mdash; среднее время разработки сайта.</p>
 </li> -->
 </ul>
 <a href="https://ukit.com/" class="link-button" target="_blank">ukit.com →</a>
 </div>


    </div>
    <div class="tabs-panel" data-index="1">
      
      <div class="tabs-content">
 <div class="two-column">
 <div class="column_left">
 <p>Проверенный временем конструктор сайтов любой сложности, с&nbsp;которого начинали многие веб-мастера, верстальщики и&nbsp;разработчики. С&nbsp;2013 года на&nbsp;базе uCoz работают сайты «Народ».</p>
<p><strong>«Премия Рунета»</strong> <br>в&nbsp;номинации «Технологии и&nbsp;инновации»</p>
<p><strong>Open Web Awards</strong> <br>в&nbsp;номинации Best Site For Publishers</p>
 <a href="https://ucoz.ru/" class="link-button" target="_blank">ucoz.ru →</a>
 </div>
 <div class="column_right">
 <p><b>35 млн</b> регистраций за все время</p>
 <p><b>2,5 млн</b> активных сайтов сейчас</p>
 <p>Ранний лидер на рынке Рунета</p>
 </div>
 <div class="clearfix"></div>
 </div>
 </div>
      
      
      
    </div>
    <div class="tabs-panel" data-index="2">

<div class="tabs-content">
 <div class="two-column">
 <div class="column_left">
 <p>Услуга создания сайта, магазина или лендинга от&nbsp;3900 рублей с&nbsp;опцией дальнейшего продвижения. 60&nbsp;профессиональных исполнителей.&nbsp;5&nbsp;дней&nbsp;— среднее время разработки сайта.</p>
 </div>
 <div class="column_right">
 <p><b>5000+</b> выполненных<br>работ</p>
 <p class="small-text"><b>1000+</b><br>отзывов</p>
 <p class="small-text">Проверено временем</p>
 </div>
 <div class="clearfix"></div>
 <a href="https://divly.ru" class="link-button" target="_blank">divly.ru →</a>
 </div>
 </div>


    </div>
    <div class="tabs-panel" data-index="3">
     
     
     <div class="tabs-content">
 <div class="two-column">
 <div class="column_left">
 <p>Инструмент для быстрого создания эффективных лендингов силами маркетологов и&nbsp;трафик-менеджеров. Система A/B-тестов. Отчеты о&nbsp;лидах.</p>
 <a href="https://ulanding.io/" class="link-button" target="_blank">ulanding.io →</a>
 </div>
 <div class="column_right">
 <p><b>44% компаний</b> используют сплит-тесты в онлайн-маркетинге</p>
 <p class="small-text"><b>Лишь 22% из них</b> удовлетворены качеством решений для оптимизации конверсии</p>
 <p class="small-text">Мы предлагаем доступный и удобный инструмент</p>
 </div>
 <div class="clearfix"></div>
 </div>
 </div>
     
     
     </div>
  </div>
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