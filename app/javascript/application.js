// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "bootstrap"
import "@popperjs/core"


const postLoad = document.querySelectorAll(".post-load")
const preLoader = document.querySelector(".svg_preloader")
const preLoaderContainer = document.querySelector(".svg-loader-container")
const glow = document.getElementById("glow")


if (window.innerWidth>1250) {
  setTimeout(() => {
    preLoader.classList.remove("d-none");
    preLoaderContainer.classList.remove("d-none");
  }, 420);
  setTimeout(() => {
    preLoader.classList.add("d-none");
    preLoaderContainer.classList.add("d-none");
    
  }, 2220);
  setTimeout(() => {
    postLoad.forEach ((load) => {
      load.classList.remove("d-none");
    })
    glow.classList.add("glow")
  }, 2250);
} else {
  postLoad.forEach ((load) => {
  load.classList.remove("d-none");
  })
}

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(projectCard => {
  projectCard.addEventListener('mouseenter', () => {
    projectCards.forEach(otherProjectCard => {
      if (otherProjectCard !== projectCard) {
        otherProjectCard.style.opacity = 0.5;
      }
    });
  });

  projectCard.addEventListener('mouseleave', () => {
    projectCards.forEach(otherProjectCard => {
      otherProjectCard.style.opacity = 1;
    });
  });
});
const experienceCards = document.querySelectorAll('.experience-card');

experienceCards.forEach(experienceCard => {
  experienceCard.addEventListener('mouseenter', () => {
    experienceCards.forEach(otherexperienceCard => {
      if (otherexperienceCard !== experienceCard) {
        otherexperienceCard.style.opacity = 0.5;
      }
    });
  });

  experienceCard.addEventListener('mouseleave', () => {
    experienceCards.forEach(otherexperienceCard => {
      otherexperienceCard.style.opacity = 1;
    });
  });
});




const aboutButton = document.querySelector(".menu-about")
const projectsButton = document.querySelector(".menu-projects")
const experienceButton = document.querySelector(".menu-experience")


aboutButton.addEventListener("click", (event) => {
  document.getElementById("about").scrollIntoView({ behavior: 'smooth', block: 'center' });
})

projectsButton.addEventListener("click", (event) => {
  document.getElementById("projects").scrollIntoView({ behavior: 'smooth', block: 'center' });
})

experienceButton.addEventListener("click", (event) => {
  document.getElementById("experience").scrollIntoView({ behavior: 'smooth', block: 'center' });
})



const stickyButton = document.querySelector(".sticky-button")

const rightContent = document.querySelector(".container .right-content");
const aboutContent = document.getElementById("about")
const projectsContent = document.getElementById("projects")
const experienceContent = document.getElementById("experience")


const aboutMenu = document.querySelector(".menu-about")
const projectsMenu = document.querySelector(".menu-projects")
const experienceMenu = document.querySelector(".menu-experience")
const container = document.querySelector(".container")
const leftSidebar = document.querySelector(".left-sidebar")

let hasTriggeredOnce = false;

rightContent.addEventListener("scroll", () => {
  const scrollPosition = rightContent.scrollTop;

  let aboutContentTop = aboutContent.offsetTop
  let projectsContentTop = projectsContent.offsetTop
  let experienceContentTop = experienceContent.offsetTop

  if (scrollPosition >= aboutContentTop && scrollPosition < projectsContentTop) {
    projectsMenu.classList.add("active")
    projectsMenu.classList.add("chonky-underline")
    aboutMenu.classList.remove("active")
    aboutMenu.classList.remove("chonky-underline")
    experienceMenu.classList.remove("active")
    experienceMenu.classList.remove("chonky-underline")
  } else if (scrollPosition >= projectsContentTop && scrollPosition < experienceContentTop) {
    experienceMenu.classList.add("active")
    experienceMenu.classList.add("chonky-underline")
    aboutMenu.classList.remove("active")
    aboutMenu.classList.remove("chonky-underline")
    projectsMenu.classList.remove("active")
    projectsMenu.classList.remove("chonky-underline")
  } else {
    aboutMenu.classList.add("active")
    aboutMenu.classList.add("chonky-underline")
    projectsMenu.classList.remove("active")
    projectsMenu.classList.remove("chonky-underline")
    experienceMenu.classList.remove("active")
    experienceMenu.classList.remove("chonky-underline")
  };

  console.log(`experience top is ${experienceContentTop}`);
  // console.log(`scroll is ${scrollPosition}`);
  // console.log(`document width ${window.innerWidth}`);
  if (scrollPosition > 650 && !hasTriggeredOnce) {
    changeColor();
    hasTriggeredOnce = true;
  } else if (scrollPosition <= 650 && hasTriggeredOnce) {
    changeColor();
    hasTriggeredOnce = false;
  }

  if (scrollPosition > (experienceContentTop - 380) && window.innerWidth>1250) {
        stickyButton.classList.remove("fa-arrow-down-long");
        stickyButton.classList.add("fa-arrow-up-long");
      } else if (scrollPosition < (experienceContentTop - 310) && window.innerWidth>1250) {
        stickyButton.classList.add("fa-arrow-down-long");
        stickyButton.classList.remove("fa-arrow-up-long");
      }
});


  window.addEventListener("wheel", (event) => {
    if (window.innerWidth > 1250) {
      const scroll = event.deltaY;
      rightContent.scrollBy(0, scroll);
      // event.preventDefault()
    }
    // console.log(`window inner is ${window.innerHeight}`);
    // console.log(`window scroll is ${window.scrollY}`);
    // console.log(`document height is ${document.body.scrollHeight}`);

    if ((window.innerHeight + window.scrollY + 100) >= document.body.scrollHeight && stickyButton.outerHTML.includes("fa-arrow-down-long") && window.innerWidth<1250) {
          stickyButton.classList.remove('fa-arrow-down-long');
          stickyButton.classList.add('fa-arrow-up-long');
      } else if ((window.innerHeight + window.scrollY + 100) <= document.body.scrollHeight && stickyButton.outerHTML.includes("fa-arrow-up-long") && window.innerWidth<1250)  {
        stickyButton.classList.add('fa-arrow-down-long');
        stickyButton.classList.remove('fa-arrow-up-long')
    }
})



stickyButton.addEventListener("click", () => {

  if (stickyButton.outerHTML.includes("fa-arrow-up-long") && window.innerWidth>1250) {
    document.getElementById("about").scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  else if (stickyButton.outerHTML.includes("fa-arrow-up-long") && window.innerWidth<=1250) {
    document.querySelector(".name").scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => {
      stickyButton.classList.add('fa-arrow-down-long');
      stickyButton.classList.remove('fa-arrow-up-long');
    }, 700);
  }
  else if (stickyButton.outerHTML.includes("fa-arrow-down-long") && window.innerWidth>1250){
    document.getElementById("experience").scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  else {
    document.getElementById("experience").scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => {
      stickyButton.classList.remove('fa-arrow-down-long');
      stickyButton.classList.add('fa-arrow-up-long');
    }, 700);
  }
})


let index = 0


const backgroundColor = ["#FEFCF7", "#002020"]
const mainColor = ["#273420", "#CDFFAF"]
const primaryWritingColor = ["#283520",  "#5E8562"]
const headersWritingColor = ["#273420",  "#94c098"]
const secondaryWritingColor = ["#6D7464", "#999C9E"]
const bubbleBackground = ["#596b50", "#173A31"]
const bubbleWriting = ["#E8F3DF", "#C3F5A8"]
const underline = ["#B4B6AC", "#6c6d67"]
const hover = ["#F3F3ED", "#003333"]
const cardShadow = ["rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px", "0px 0px 0px 0px"]

function changeColor() {
  document.documentElement.style.transitionDuration = '0.5s';
  document.documentElement.style.setProperty('--backgroundcolor', backgroundColor[index])
  document.documentElement.style.setProperty('--maincolor', mainColor[index])
  document.documentElement.style.setProperty('--primarywritingcolor', primaryWritingColor[index])
  document.documentElement.style.setProperty('--secondarywritingcolor', secondaryWritingColor[index])
  document.documentElement.style.setProperty('--bubblebackground', bubbleBackground[index])
  document.documentElement.style.setProperty('--bubblewriting', bubbleWriting[index])
  document.documentElement.style.setProperty('--underline', underline[index])
  document.documentElement.style.setProperty('--hover', hover[index])
  document.documentElement.style.setProperty('--headerswritingcolor', headersWritingColor[index])
  document.documentElement.style.setProperty('--cardshadow', cardShadow[index])
  
  index = (index + 1) % backgroundColor.length;
}



