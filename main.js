const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
  tab.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent event bubbling

    // Close all other folders
    document.querySelectorAll('.folder').forEach(folder => {
      folder.classList.remove('active', 'open');
      folder.style.zIndex = "1";
    });

    // Open the clicked folder
    const folder = tab.closest('.folder');  // Get the parent folder
    folder.classList.add('active', 'open');
    folder.style.zIndex = "10";
  });
});

// Optionally, close all folders if clicking outside the folders
document.addEventListener('click', () => {
  document.querySelectorAll('.folder').forEach(folder => {
    folder.classList.remove('active', 'open');
    folder.style.zIndex = "1";
  });
});

let dotHolder = document.getElementById("dot-holder");
let numOfDots = Math.floor(Math.random() * (30 - 10 + 1)) + 10;

let dotList = [];

for(i=0; i<numOfDots; i++){
  let newDot = document.createElement('DIV');
  newDot.style.width = '40px';
  newDot.style.height = '40px';
  newDot.style.borderRadius = '100%';
  newDot.style.backgroundColor = '#FFFFA9';
  newDot.style.position = 'absolute';

  newDot.classList.add('dot');

  newDot.style.zIndex = "1000";  // Very high value to be above everything


  let topPosDot = Math.floor(Math.random() * 101);
  let leftPosDot = Math.floor(Math.random() * 101);
  newDot.style.boxShadow = '0 1px 1px rgba(0, 0, 0, 0.1)';
  newDot.style.top = `${topPosDot}vh`
  newDot.style.left = `${leftPosDot}vw`
  dotHolder.appendChild(newDot)

  dotList.push(newDot)


  // let offsetX, offsetY;

  // newDot.addEventListener('mousedown', (e) => {
  //   offsetX = e.clientX - newDot.getBoundingClientRect().left;
  //   offsetY = e.clientY - newDot.getBoundingClientRect().top;
  //   newDot.style.cursor = 'grabbing';

  //   function onMouseMove(e) {
  //     newDot.style.left = `${e.clientX - offsetX}px`;
  //     newDot.style.top = `${e.clientY - offsetY}px`;
  //   }

  //   function onMouseUp() {
  //     document.removeEventListener('mousemove', onMouseMove);
  //     document.removeEventListener('mouseup', onMouseUp);
  //     newDot.style.cursor = 'grab';
  //   }

  //   document.addEventListener('mousemove', onMouseMove);
  //   document.addEventListener('mouseup', onMouseUp);
  // });

}

let webPhoto = document.getElementById("web-pic");
let postItWeb = document.getElementById("desk-postit");
let fundFlyer = document.getElementById("fund-flyer");

let webPhotoList = ["imgs/web-pic01.png", "imgs/web-pic02.png", "imgs/web-pic03.png", "imgs/web-pic04.png", "imgs/web-pic05.png", "imgs/web-pic06.png", "imgs/web-pic07.png", "imgs/web-pic08.png", "imgs/web-pic09.png"];

let randWebPhoto = Math.floor(Math.random() * webPhotoList.length);
webPhoto.src = webPhotoList[randWebPhoto]


let webPhotoRotate = Math.floor(Math.random() * (15 + 15 + 1)) -15;
webPhoto.style.transform = `rotate(${webPhotoRotate}deg)`;

let postItWebRotate = Math.floor(Math.random() * (15 + 15 + 1)) -15;
postItWeb.style.transform = `rotate(${postItWebRotate}deg)`;

let fundFlyerRotate = Math.floor(Math.random() * (15 + 15 + 1)) -15;
fundFlyer.style.transform = `rotate(${fundFlyerRotate}deg)`;

// webPhoto.addEventListener('mousedown', (e) => {
//   offsetX = e.clientX - webPhoto.getBoundingClientRect().left;
//   offsetY = e.clientY - webPhoto.getBoundingClientRect().top;
//   webPhoto.style.cursor = 'grabbing';

//   function onMouseMove(e) {
//     webPhoto.style.left = `${e.clientX - offsetX}px`;
//     webPhoto.style.top = `${e.clientY - offsetY}px`;
//   }

//   function onMouseUp() {
//     document.removeEventListener('mousemove', onMouseMove);
//     document.removeEventListener('mouseup', onMouseUp);
//     webPhoto.style.cursor = 'grab';
//   }

//   document.addEventListener('mousemove', onMouseMove);
//   document.addEventListener('mouseup', onMouseUp);
// });



let postIt1 = document.getElementById("postit1")
let postIt2 = document.getElementById("postit2")
let postIt3 = document.getElementById("postit3")

let postIt1Rotate = Math.floor(Math.random() * (15 + 15 + 1)) -15;
let postIt2Rotate = Math.floor(Math.random() * (15 + 15 + 1)) -15;
let postIt3Rotate = Math.floor(Math.random() * (15 + 15 + 1)) -15;

let postIt1Displace = Math.floor(Math.random() * (15 + 15 + 1)) -15;

postIt1.style.transform = `rotate(${postIt1Rotate}deg)`
postIt2.style.transform = `rotate(${postIt2Rotate}deg)`
postIt3.style.transform = `rotate(${postIt3Rotate}deg)`





let sheetID = "15WbKUQs-W8b_0XxmVSKp_XQvhACh1Q4FbaJ0fh39XQ0";
let tabName = "Sheet1";
let opensheet_uri = `https://opensheet.elk.sh/${sheetID}/${tabName}`;

function makeDraggable(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  
  // Make sure position is set properly before applying drag
  if (getComputedStyle(elmnt).position !== 'absolute') {
    elmnt.style.position = 'absolute';
  }
  
  if (elmnt.style.marginLeft === 'auto' && elmnt.style.marginRight === 'auto') {

    const containerWidth = elmnt.offsetWidth;
    const windowWidth = window.innerWidth;
    const leftPos = (windowWidth - containerWidth) / 2;
    
    elmnt.style.left = leftPos + 'px';
    elmnt.style.marginLeft = '0';
    elmnt.style.marginRight = '0';
    elmnt.style.right = 'auto';
  }
  
  elmnt.onmousedown = dragMouseDown;
  elmnt.style.cursor = 'grab';
  
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    
    pos3 = e.clientX;
    pos4 = e.clientY;
    
    elmnt.style.cursor = 'grabbing';
    
    elmnt.style.zIndex = "100";
    
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }
  
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }
  
  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
    elmnt.style.cursor = 'grab';
  }
}

fetch(opensheet_uri)
  .then((response) => response.json())
  .then((data) => {

    const sections = {};
    data.forEach((entry) => {
      const section = entry.Section?.trim() || "Unknown";
      if (!sections[section]) sections[section] = [];
      sections[section].push(entry);
    });

    Object.entries(sections).forEach(([sectionKey, students]) => {
      students.sort((a, b) => {
        const lastNameA = (a.LastName || "").toUpperCase();
        const lastNameB = (b.LastName || "").toUpperCase();
        if (lastNameA < lastNameB) return -1;
        if (lastNameA > lastNameB) return 1;
        return 0;
      });
      const folderId = `section${sectionKey}-folder`;
      const folder = document.getElementById(folderId);

      if (!folder) {
        console.warn(`No folder div found for section ${sectionKey}`);
        return;
      }

      let table = folder.querySelector("table");
      if (!table) {
        const wrapper = document.createElement("div");
        wrapper.className = "container-wrapper";
      
        const container = document.createElement("div");
        container.className = "container";
      
        const topOffset = -(Math.random() * 2 + 0);
        const rotation = Math.random() * 10 - 5;
      
        const containerWidth = 650; // Width from your CSS
        const windowWidth = window.innerWidth;
        const leftPos = (windowWidth - containerWidth) / 2;
      
        container.style.position = "absolute";
        container.style.top = `${topOffset}vh`;
        container.style.left = `${leftPos}px`;
        container.style.transform = `rotate(${rotation}deg)`;
      
        container.innerHTML = `
          <header>
            <h1>O2W</h1>
            <h2>2025 CD BFA</h2>
          </header>
          <table>
            <thead>
              <tr>
                <th>${sectionKey.toUpperCase()}</th>
                <th>Students</th>
                <th>Thesis Title</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        `;
      
        wrapper.appendChild(container);
        folder.appendChild(wrapper);
        table = container.querySelector("table");
      
        makeDraggable(container);
      }
      

      const tbody = table.querySelector("tbody");
      students.forEach((entry, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${index + 1}</td>
          <td>${entry.FirstName || "—"} ${entry.LastName || "—"}</td>
          <td>${entry.ThesisTitle || ""}</td>
        `;
        tbody.appendChild(row);
      });
    });
    
    // document.querySelectorAll('.container').forEach((container) => {
    //   makeDraggable(container);
    // });
    // document.querySelectorAll('img').forEach((img) => {
    //   makeDraggable(img);
    // });


    document.querySelectorAll('.dot').forEach((dot) => {
      makeDraggable(dot);
    });

    const draggableImages = document.querySelectorAll('.container img, #dot-holder img');

    draggableImages.forEach((img) => {
      makeDraggable(img);
    });


  })
  .catch((err) => {
    console.error("Something went wrong!", err);
  });
  function preventScrollPastFooter() {
    const footer = document.querySelector('.web-footer');
    if (!footer) return;
  
    const footerTop = footer.getBoundingClientRect().top + window.scrollY;
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
  
    if (scrollPosition + windowHeight > footerTop + footer.offsetHeight) {
      window.scrollTo(0, footerTop + footer.offsetHeight - windowHeight);
    }
  }
  
  window.addEventListener('scroll', function() {
    if (window.innerWidth > 500) { // Adjust the width threshold as needed
      preventScrollPastFooter();
    }
  });
  
  window.addEventListener('resize', function() {
    if (window.innerWidth > 500) {
      preventScrollPastFooter();
    }
  });
  

// Function to check if element is visible in viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}

// Function to toggle RSVP button colors when scrolling into footer
function toggleRsvpColors() {
  const footer = document.querySelector('.web-footer');
  const mobileFooter = document.querySelector('.mobile-footer');
  const activeFooter = window.innerWidth <= 500 ? mobileFooter : footer;
  const rsvpButton = document.querySelector('.rsvp-circle');
  
  if (!activeFooter || !rsvpButton) return;
  
  // Check if footer is visible in viewport
  if (isElementInViewport(activeFooter)) {
    // Reverse the colors when in footer
    rsvpButton.style.backgroundColor = 'var(--yellow)';
    rsvpButton.style.color = 'var(--black)';
  } else {
    // Reset to original colors when not in footer
    rsvpButton.style.backgroundColor = 'var(--black)';
    rsvpButton.style.color = 'var(--yellow)';
  }
}

// Add scroll event listener
window.addEventListener('scroll', toggleRsvpColors);

// Initialize on page load
window.addEventListener('DOMContentLoaded', toggleRsvpColors);

// Recheck when window is resized
window.addEventListener('resize', toggleRsvpColors);

const rsvpCircle = document.querySelector('.rsvp-circle');

  rsvpCircle.addEventListener('mouseenter', function() {
    const randomDegree = Math.random() * 20 - 10; // Generates a number between -5 and 5
    rsvpCircle.style.transform = `rotate(${randomDegree}deg)`;
  });

  rsvpCircle.addEventListener('mouseleave', function() {
    rsvpCircle.style.transform = 'rotate(0deg)';
  });

