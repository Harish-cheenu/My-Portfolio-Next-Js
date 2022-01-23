import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const textIntro = (elem: string) => {
  var tl = gsap.timeline({repeat: 0, repeatDelay: 0});
  tl.from(elem, {
    // y: -250,
    opacity: 0,
    delay: 1,
    scale: 1.5,
    stagger: 0.2,
    // scrub: 1,
    duration: 1,
    ease: "slow(0.7, 0.7, false)" 
  });
};

export const aboutAnime = () => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.from('.Who_who__container__XfeVa',{
    scrollTrigger:{
        trigger:'.Who_who__container__XfeVa',
        start: "top bottom",
        toggleActions: "restart pause resume pause" ,
        scrub: false,
      },
    x: -40,
    opacity: 0,
  //   display: 'none',
    // stagger: 0,
    delay: 0,
    duration: 2,
    scale: 1,
    ease: "none",
  }); 

  gsap.from('.Skills_Skill___Va40',{
      scrollTrigger:{
          trigger:'.Skills_Skills__Container__EWtjh',
          start: "top bottom",
          toggleActions: "restart pause resume pause" ,
          scrub: false,
        },
      x: 50,
      opacity: 0,
    //   display: 'none',
      stagger: 0.3,
      delay: 0,
      duration: 1,
      scale: 1,
      ease: "none",
    });
}

export const projectAnime = () => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.from(".Projects_card__V9ryr",{
      scrollTrigger:{
          trigger: ".Projects_Container__b0VGS",
          start: "top center",
          // markers: true,
          toggleActions: "restart pause resume pause" ,            
      },
      stagger: 0.5,
      opacity:0,
      yPercent: -100,
      delay: 0,
      duration: 1,
      scale: .5,
      ease: "power1.in",
    })
}
