var link=document.querySelector(".modal-close"),popup=document.querySelector(".modal-login"),close=popup.querySelector(".modal-close"),form=popup.querySelector("form"),date=popup.querySelector("[name=date]"),amount=popup.querySelector("[name=amount]"),isStorageSupport=!0,storage="";try{storage=localStorage.getItem("login")}catch(e){isStorageSupport=!1}link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-show")}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-show"),popup.classList.remove("modal-error"),storage?(date.value=storage,amount.focus()):date.focus(),date.focus()}),form.addEventListener("submit",function(e){date.value&&amount.value?isStorageSupport&&localStorage.setItem("date",date.value):(e.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popup.classList.contains("modal-show")&&(popup.classList.remove("modal-show"),popup.classList.remove("modal-error")))});
