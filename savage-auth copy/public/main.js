var thumbUp = document.getElementsByClassName("fa-check-circle");
// var trash = document.getElementsByClassName("fa-trash");
var name = document.getElementsByClassName("name");
var order = document.getElementsByClassName("order");
var checker = document.getElementsByClassName("checker")

Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        element.classList.add("complete");
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'msg': msg,
            'thumbUp':thumbUp,
            'checker': checker
          })
        })
        .then(response => {
          if (response.ok)
          thumbUp.addClass('complete')
          return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(checker).forEach(function(element) {
      element.addEventListener('click', function(){
        element.classList.remove("hidden");
        element.classList.add("complete");
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        const checker = this.parentNode.parentNode.childNodes[7].innerText
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'msg': msg,
            'thumbUp':thumbUp,
            'checker': checker
          })
        })
        .then(response => {
          if (response.ok)
          thumbUp.addClass('complete')
          return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});


// name.classList.add("complete");
// order.classList.add("complete");

///======================================

// Array.from(trash).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         fetch('messages', {
//           method: 'delete',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg
//           })
//         }).then(function (response) {
//           window.location.reload()
//         })
//       });
// });
