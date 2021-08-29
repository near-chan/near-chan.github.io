/**
* Template Name: Regna - v4.3.0
* Template URL: https://bootstrapmade.com/regna-bootstrap-onepage-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 20
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })
  /** gallery code
   */
  //generate gallery from json
  var creators=[
    {near:"nearchan.near",name:"NearChan guild",twitter:null},
    {near:"garrid.near",name:"Garrid",twitter:"garridspen"},
    {near:"riri.near",name:"riri.near",twitter:"ririera05"},
    {near:"khronos.near",name:"KhronosArts",twitter:"KhronosArts"},
    {near:"katrinapadayhag.near",name:"kuroneko96",twitter:"goyangi_kuro"},
    {near:"parzival.near",name:"Franz // フランツ",twitter:"FranzOniiChan"},
    {near:"agathearts.near",name:"Agathe Arts Alyx",twitter:"agathearts_alyx"},
    {near:"nearbits.near",name:"NEARBits Whale Club",twitter:"nearbits"},
    {near:"mzarts.near",name:"mzarts",twitter:null},
    {near:"rubenzmart.near",name:"rubenzmart",twitter:null},
    {near:"twinblade_ph.near",name:"twinblade ph",twitter:null},
    {near:"rabukome1.near",name:"rabukome1",twitter:"rabukome1"},
  ]
  // comand to fetch info from tweet
  //console.log(`{name:"${}",twitter:"${}"}`)
  var pieces=[
    {title:"NEARchan Genesis Card",creator:0,image:"https://ipfs.fleek.co/ipfs/bafybeiakkncanwtl4hhdwpnfpfn4mjmakrftwqbz7uwdwyexgvh64tdztm",link:"https://paras.id/token/bafybeigwzescoavvnbuugxnys7wzivpjdx7jczfygstqavor4exbnkzluu"},
    {title:"NEARchan#001",creator:5,image:"https://ipfs.fleek.co/ipfs/bafybeifxvh2poefhhjtzcmefrr6ujlh7vtwtrdzxqoncwgklawzc4e6a7u",link:"https://paras.id/token/bafybeigxnooifqytnuamuitd3s2gfy3dtfxhhhjypesolpzi5ws2kz7mci"},
    {title:"NEARchan #01",creator:4,image:"https://ipfs.fleek.co/ipfs/bafybeidtpdkmntte7kup3lhpgrzurifpmgmckyaiwv7gizyma4pfr3alqe",link:"https://paras.id/token/bafybeiffemaofckkun6oyabqynvhmgzf53633ecnrhqd2xkdh5xjcnq52i"},
    {title:"NEARchan #02",creator:4,image:"https://ipfs.fleek.co/ipfs/bafybeics7xi6ebk22dwzxmmwty7g66luogq5tc7xfzl3vkwz5c232flnwa",link:"https://paras.id/token/bafybeieolyfiuek4ybsglq5wucprcpeup4wuwzt2bhmsyaewjhfh7veb2q"},
    {title:"NEARchan",creator:8,image:"https://ipfs.fleek.co/ipfs/bafybeicl4x3zmnbh6a5ymre5ploblf7y6oxmplwhdaq42ka4djfae2erou",link:"https://paras.id/token/bafybeihd6tounoosrdak7ndemgo7bvubj3rzap242jpa4e4o57yxz5a3b4"},
    {title:"NEARchan",creator:6,image:"https://ipfs.fleek.co/ipfs/bafybeifdebx2dcupazaoxlac5q3cc7l2l3gekzyz6vp5tylatnbp5udbra",link:"https://paras.id/token/bafybeian4gzwepa3dywmhjk6vbvjylb57k63aqkguvrlbx6ds5qd4qnaja"},
    {title:"NEARchan [MECH4]",creator:9,image:"https://ipfs.fleek.co/ipfs/bafybeidbldr6vbjvc23vvm4omllgiaqyqxfd6vf5yyxs47azqkwkz5fjqe",link:"https://paras.id/token/bafybeigvgyty7mrhca6wag7767uogpkujdtqqezw6bywk6bnf5zuqzixiq"},
    {title:"NEARchan#01",creator:2,image:"https://ipfs.fleek.co/ipfs/bafybeie2t7qchynrxysxc5cm27j3geqkbw5yu5r3c3fkmpig7yjfpnsmte",link:"https://paras.id/token/bafybeifw72vzvbqbd75xj5yjcemaneoovj64crsrnuqqjknfxqigml7kya"},
    {title:"NEARchan #1",creator:3,image:"https://ipfs.fleek.co/ipfs/bafybeiajqemybulcvjutva7uyowdjtgqxmjnfzf4syrrinx7y7jojrguke",link:"https://paras.id/token/bafybeiblcqbgc6m5tg66itw2llwe33xfa3inrc4m4a6njq27w4ltwa4kcm"},
    {title:"NEARBit #0043 NEARchan",creator:7,image:"https://ipfs.fleek.co/ipfs/bafybeibbjt5d4ns4ogl3r6elnpgclyjzkhqihtfno5vy2osssvsyhfwh7u",link:"https://paras.id/token/bafybeicf2p52mglh6jpoacmyjkvtgfhhoccbrdojuoefhz5iv7i3r2xtc4"},
    {
      creator:10,
      image:"https://ipfs.fleek.co/ipfs/bafybeicghqnafssvm25ybapl3kwvpstavtl6bo6ph4xq6wnrf33lxoqjxe",
      link:"https://paras.id/token/bafybeihuje5vw3q5jdhfp67tv2mwfall6afmdnu4fswdds5pnbg6ysi5xy",
      title:"NEAR-CHAN Fan Art"
    },
    {
      creator:10,
      image:"https://ipfs.fleek.co/ipfs/bafybeifaix2cftnf5whccyc75yj7v6qobzchngucnfskav27tudq2ke5dq",
      link:"https://paras.id/token/bafybeiakztaniftlmltgacpf6fdqxitaq3f4fhd3u3gkqz2sjcropc6tii",
      title:"Animated NEAR-CHAN Fan Art"
    },
    {
      creator:11,
      image:"https://ipfs.fleek.co/ipfs/bafybeigxylxxhe7luvmmifkizt2ni3l57rho7ohbmd7ifpypniqry7sfjq",
      link:"https://paras.id/token/bafybeifwg4hos5us3l3tdivgi4mkdninjl3jbvzizmq4rdhdyk4wr7xtjq",
      title:"NEARchan on Stars"
    },
  ]
  //https://paras.id/search?q=nearchan&sort=cardcreate
  //add pieces into html
  var gallery =document.querySelector(".portfolio-container")
  pieces.forEach(x=>{
    var template=`
    <div class="col-lg-4 col-md-6 portfolio-item filter-near">
      <img loading="lazy" src="${x.image}" class="img-fluid" alt="">
      <div class="portfolio-info-holder">
        <div class="portfolio-info">
          <h4>${x.title}</h4>
          <h5 class="gallery-made-by">Made by: ${creators[x.creator].name}</h5>
          <p class="filterTag">$near</p>
          ${creators[x.creator].twitter?`<a href="https://twitter.com/${creators[x.creator].twitter}" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link"><i class="bi bi-twitter"></i></a>`:""}
          <a target="_blank" href="${x.link}" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
        </div>
      </div>
    </div>`;
    gallery.insertAdjacentHTML("beforeend",template);
  })
  gallery.addEventListener("click",e=>{
    if(e.target.matches("img")){
      // e.preventDefault()
      var modal =document.getElementById("img-modal")
      modal.querySelector("img").src=e.target.src;
      modal.style.display="block";
    }
  })
  // on("click","img.img-preview",function(e){
  //   
  // });
//command to fetch relevant data from paras page

/*
  var copytext=`{
    creator:"${document.querySelector("#activityListScroll a").href.split("https://paras.id/")[1]}",
    image:"${document.querySelector(".card img").src}",
    link:"${window.location.href}",
    title:"${document.querySelector("h1").innerText}"
  },`;
  const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };
  copyToClipboard(copytext);
*/
  document.getElementById("img-modal").addEventListener("click",close_modal)
  function close_modal(){
    document.getElementById("img-modal").style.display="none";  
  }

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      // let portfolioIsotope = new Isotope(portfolioContainer, {
      //   itemSelector: '.portfolio-item',
      //   layoutMode: 'fitRows'
      // });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        // portfolioIsotope.arrange({
        //   filter: this.getAttribute('data-filter')
        // });
        // portfolioIsotope.on('arrangeComplete', function() {
        //   AOS.refresh()
        // });
      }, true);
    }

  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()