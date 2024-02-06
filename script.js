const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");
const scriptURL = 'https://script.google.com/macros/s/AKfycbzPbg6hpI7Xv_54WaE0eePpyMPvrljCygDp1uJSIsZ_s7ORxDE6s7D2Eh85lEeW_jb9/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

for(let i = 0; i < tablinks.length; i++){
    tablinks[i].addEventListener("click", (event) => {
        for(tablink of tablinks){
            tablink.classList.remove("active-link");          
        }

        event.target.classList.add("active-link");

        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");

            if(event.target.innerHTML === tabcontent.id){
                tabcontent.classList.add("active-tab");
            }
        }
    })
}

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
          msg.innerHTML = "Message sent successfully!"
          setTimeout(function(){
              msg.innerHTML = ""
          },5000)
          form.reset()
      })
      .catch(error => console.error('Error!', error.message))
})

var sidemenu = document.getElementById("sidemenu");

    function openmenu(){
        sidemenu.style.right = "0";
    }
    function closemenu(){
        sidemenu.style.right = "-200px";
    }
