let meaning = document.querySelector(".components_wait_text span");
    line = document.querySelector(".components_wait_line span");


// console.log(meaning);

line.style.width = meaning.innerHTML;


const defaultSelect = () => {
    const element = document.querySelector('.select_1');
    const choices = new Choices(element, {
        searchEnabled: false,
});
};
defaultSelect();

const defaultSelect2 = () => {
    const element = document.querySelector('.select_2');
    const choices = new Choices(element, {
        searchEnabled: false,
});
};
defaultSelect2();


// const arrowNext = document.querySelector('th.next');
// console.log(arrowNext);

// var slider = document.getElementById('slider-round');

//     noUiSlider.create(slider, {
//         start: [20],
//         connect: true,
//         range: {
//             'min': 0,
//             'max': 100
//         }
//     });


// document.getElementById('slider_button').addEventListener('click', function () {
//     alert(slider.noUiSlider.get());
// });

// табы:

// const tab = document.querySelectorAll(".tab-new"); 
// const tabParent = document.querySelector('.tab-new_parent');
// const tabsContent = document.querySelectorAll(".tabcontent");

// function hideTabContent() {
// tabsContent.forEach(item => {
// item.style.display="none";
// });
// tab.forEach(item => {
// item.classList.remove("tab-new_active");
// });
// }
// function showTabContent(i=0) {
// tabsContent(i).style.display="block";
// tab(i).classList.add("tab-new_active");
        
// }

//     //   hideTabContent();
//     //   showTabContent();

// tabParent.addEventListener('click', function(event) {
//     const target = event.target;

// if(target && target.classList.contains('tab-new')) {
// tab.forEach((item, i) => {
// if (target == item) {
// hideTabContent();
// showTabContent(i);
// }
// });

// }
// });

let tab = document.querySelectorAll('.tab-new'),
      tabContent = document.querySelectorAll('.tabcontent');

  tab.forEach(function(tab, i) {
    tab.addEventListener('click', function() {
      hideTab();
      this.classList.add('tab-new_active');
      tabContent[i].classList.add('tabcontent_active');
    });
  });

  function hideTab() {
    tab.forEach((item) => {
      item.classList.remove('tab-new_active');
    });
    tabContent.forEach((item) => {
      item.classList.remove('tabcontent_active');
    });
  }

  let tabImg = document.querySelectorAll('.tab-new-icon'),
      tabContentI = document.querySelectorAll('.tabcontent_1');

    tabImg.forEach(function(tabImg, i) {
    tabImg.addEventListener('click', function() {
      hideTabI();
      this.classList.add('tab-new-icon_active');
      tabContentI[i].classList.add('tabcontent_1_active');
    });
  });

  function hideTabI() {
    tabImg.forEach((item) => {
      item.classList.remove('tab-new-icon_active');
    });
    tabContentI.forEach((item) => {
      item.classList.remove('tabcontent_1_active');
    });
  }


  let tabBig = document.querySelectorAll('.tab-new_big'),
      tabContentB = document.querySelectorAll('.tabcontent_3');

    tabBig.forEach(function(tabBig, i) {
    tabBig.addEventListener('click', function() {
      hideTabB();
      this.classList.add('tab-new_big_active');
      tabContentB[i].classList.add('tabcontent_3_active');
    });
  });

  function hideTabB() {
    tabBig.forEach((item) => {
      item.classList.remove('tab-new_big_active');
    });
    tabContentB.forEach((item) => {
      item.classList.remove('tabcontent_3_active');
    });
  }


  let tabIcons = document.querySelectorAll('.tab-icons_1'),
      tabContentIcons = document.querySelectorAll('.tabcontent_i');

      tabIcons.forEach(function(tabIcons, i) {
      tabIcons.addEventListener('click', function() {
      hideTabIcons();
      this.classList.add('tab-icons_1_active');
      tabContentIcons[i].classList.add('tabcontent_i_active');
    });
  });

  function hideTabIcons() {
    tabIcons.forEach((item) => {
      item.classList.remove('tab-icons_1_active');
    });
    tabContentIcons.forEach((item) => {
      item.classList.remove('tabcontent_i_active');
    });
  }

  let tabIcons2 = document.querySelectorAll('.tab-icons_2'),
      tabContentIcons2 = document.querySelectorAll('.tabcontent_i_2');

      tabIcons2.forEach(function(tabIcons2, i) {
      tabIcons2.addEventListener('click', function() {
      hideTabIcons2();
      this.classList.add('tab-icons_2_active');
      tabContentIcons2[i].classList.add('tabcontent_i_2_active');
    });
  });

  function hideTabIcons2() {
    tabIcons2.forEach((item) => {
      item.classList.remove('tab-icons_2_active');
    });
    tabContentIcons2.forEach((item) => {
      item.classList.remove('tabcontent_i_2_active');
    });
  }


  let tabIcons3 = document.querySelectorAll('.tab-icons_3'),
      tabContentIcons3 = document.querySelectorAll('.tabcontent_i_3');

      tabIcons3.forEach(function(tabIcons3, i) {
      tabIcons3.addEventListener('click', function() {
      hideTabIcons3();
      this.classList.add('tab-icons_3_active');
      tabContentIcons3[i].classList.add('tabcontent_i_3_active');
    });
  });

  function hideTabIcons3() {
    tabIcons3.forEach((item) => {
      item.classList.remove('tab-icons_3_active');
    });
    tabContentIcons3.forEach((item) => {
      item.classList.remove('tabcontent_i_3_active');
    });
  }