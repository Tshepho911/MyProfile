window.ctaModalInterop = {
  initModal: function () {
    const triggers = document.querySelectorAll('.cta-trigger');
    const modal = document.getElementById('ctaModal');
	
    const closeBtn = modal.querySelector('.cta-close');
    const title = modal.querySelector('#ctaTitle');
    const desc = modal.querySelector('#ctaDesc');

    const contentMap = {
      desktop: {
        title: "🚀 Ready to simplify your workflow?",
        desc: "Let’s build a desktop app that fits your business like a glove—offline, online, and fully customized."
      },
      web: {
        title: "🌍 Let’s bring your vision to the web",
        desc: "From sleek design to scalable performance—your next web app starts here."
      },
      mobile: {
        title: "📱 Reach your audience on the move",
        desc: "Let’s craft a mobile experience that connects, engages, and solves real-world problems."
      }
    };
	
	
	//populates each sectional modal with its dynamic data from the content-map
    triggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const section = trigger.getAttribute('data-section');
        if (contentMap[section]) {
          title.textContent = contentMap[section].title;
          desc.textContent = contentMap[section].desc;
        }
        modal.classList.add('active');

      });
    });
	
	//selects the section to position the sectional-modal in
	document.querySelectorAll('.cta-trigger').forEach(trig => {
	  trig.addEventListener('click', (e) => {
		const section = e.target.closest('section');
		
		 if (section) {
			console.log("You clicked inside section:", section.id);
		  } else {
//			console.log("Click was outside any section.");
		  }
		storeMySection(section);
		
		showModalInSection(section);
	  });
	});
	
	
	
	closeBtn.addEventListener('click', () => {
	  modal.classList.remove('active');
	  modal.style.display = 'none';
	});
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') modal.classList.remove('active');

    }); 

  }
};

window.emailModalInterop = {
	initEmailModal: function () {
		const emailModal = document.getElementById('modal');
		if (!emailModal) {
		  console.error("emailForm not found");
		  return;
		}else {
	//		console.log("emailForm rendered");
		}
		
	//	console.log("section of my emailform is: ", mySection );		
		setupEmailModal(mySection, emailModal);	  	
    },
		
	initEventListeners: function(){

	  const contactLinks = document.querySelector('.contact-links');
	  if (!contactLinks) {
		console.error("contact-links element not found");
		return;
	  }

	  contactLinks.addEventListener('click', (e) => {
		const section = e.target.closest('section');
		if (section) {
		  console.log("contact event listeners section:", section.id);
		} else {
		  console.log("Click was outside any section.");
		}
		storeMySection(section);
	  }); 
	},	

	initFeedbackModal: function(){
		
	//	console.log("section of my feedback is: ", msection.id );
		const fModal = document.getElementById('feedback');
		if (!fModal) {
		  console.error("feedback not found", fModal.id);
		  return;
		}else {
		//	console.log("feed back shown rendered");
		}
		setupEmailModal(mySection,fModal);
	}
};

window.getBoundingRect = function (elementId) {

	const el = document.getElementById(elementId);
    if (!el) {
      return null;
    }
	return el.getBoundingClientRect();
	
 
};

function showModalInSection(section) {
	 const modal = document.getElementById('ctaModal');
	  section.appendChild(modal);
	  section.style.position = 'relative';

	  modal.style.position = 'absolute';
	  modal.style.top = '50%';
	  modal.style.left = '50%';
	  modal.style.transform = 'translate(-50%, -50%)';
	  modal.style.display = 'flex';
	  modal.classList.add('show');
	  
	  /* needs to confirm the close functionality*/

	  document.querySelector('.cta-close').addEventListener('click', () => {
		  const modal = document.getElementById('ctaModal');
			console.log("modal closed from js");
		  modal.style.display = 'none';
		});
		
		 document.querySelector('#emailMe').addEventListener('click', () => {
		  const modal = document.getElementById('ctaModal');
			console.log("email me button clicked");
		  modal.style.display = 'none';
		});
	

	 window.addEventListener('keydown', (e) => {
		  if (e.key === 'Escape') modal.classList.remove('active');
	});
}
let mySection;
		
	function setupEmailModal(section, myModal) {
		//const emailModal = document.getElementById('emailForm');

		//section.appendChild(myModal);
		//console.error("type of mymodal", myModal.id);
		
		// check if the modal passed in is a feedback modal
		 if (myModal.id === 'feedback') {		
			
			console.log("my feedback modal should be positioned in its section*********");
			let dismissTimeout;

			// Show modal (reset styles if reused)
			myModal.style.opacity = '1';
			myModal.style.display = 'flex';
			myModal.classList.remove('fade-out');
/*
			// Start dismissal timer after initial render
			dismissTimeout = setTimeout(() => {
			  myModal.classList.add('fade-out');
			  setTimeout(() => {
				myModal.style.display = 'none';
			  }, 500); // after fade
			}, 6000); // 4 seconds

			// Cancel dismissal if user hovers
			myModal.addEventListener('mouseenter', () => {
			  clearTimeout(dismissTimeout);
			});

			// Restart dismissal if user leaves again
			myModal.addEventListener('mouseleave', () => {
			  dismissTimeout = setTimeout(() => {
				myModal.classList.add('fade-out');
				setTimeout(() => {
				  myModal.style.display = 'none';
				}, 500);
			  }, 6000);
			});			
*/
		myModal.style.top = '10%';
		myModal.style.left = '10%';
        }
		
		else{
			   console.log("when modal is not feedback Computed display: ", window.getComputedStyle(myModal).display, myModal.id);
			   myModal.style.top = '50%';
				myModal.style.left = '50%';
			}
		//section.style.position = 'relative';
		document.body.appendChild(myModal);
		myModal.style.position = 'fixed';
		
		
		myModal.style.transform = 'translate(-50%, -50%)';
		myModal.style.display = 'flex';
		myModal.style.zIndex = '1050';
		myModal.classList.add('show');	
		
	}

	function storeMySection(section) {
			mySection = section;
			
		//	console.log(mySection.innerHTML); // Logs the content of the section
			 
		}

	function getSection() {			
			return mySection; 	
		}
		
		