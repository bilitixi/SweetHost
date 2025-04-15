
  function pageEffect(effectName, target){
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting ) {
         
          entry.target.classList.add(effectName);
         
  }
  setTimeout(() => {
    entry.target.classList.remove(effectName);
  }, 1001);
  
        
      });
    }, { threshold: 0.1 }); // Trigger when 30% of element is in view
  
    observer.observe(target);
  }

const targetLogo = document.querySelectorAll('.Logo-container');
pageEffect('jello-horizontal',targetLogo[0]);
pageEffect('jello-horizontal',targetLogo[1]);


  const targetSection1 = document.querySelector('.sec1');
  const target1_1 = targetSection1.querySelector("p");
  const target1_2 = targetSection1.querySelector("img");
  pageEffect('slide-in-elliptic-left-fwd', target1_2);
  pageEffect('slide-in-right', target1_1);

  const targetSection2 = document.querySelector('.sec2');
  const target2_1 = targetSection2.querySelector("p");
  const target2_2 = targetSection2.querySelector("img");
  pageEffect('slide-in-elliptic-left-fwd', target2_1);
  pageEffect('slide-in-right', target2_2);

  const targetSection3 = document.querySelector('.sec3');
  const target3_1 = targetSection3.querySelector("p");
  const target3_2 = targetSection3.querySelector("img");
  pageEffect('slide-in-elliptic-left-fwd', target3_1);
  pageEffect('slide-in-right', target3_2);

  const targetSection4 = document.querySelector('.sec4');
  const target4_1 = targetSection4.querySelector("p");
  const target4_2 = targetSection4.querySelector("img");
  pageEffect('slide-in-elliptic-left-fwd', target4_1);
  pageEffect('slide-in-right', target4_2);

  
