function sendMail(event){
    event.preventDefault();
    console.log(event)
        let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("messaje").value,
        phone: document.getElementById("phone").value
    }
    emailjs.send("service_2dwjuz9", "template_yb9kd2r", params)
    .then((res) => {
            console.log(res)
           Swal.fire("You Got It", "We have received your information, our team will contact you as soon as possible.", "success")
          document.getElementById("name").value=""
          document.getElementById("email").value=""
          document.getElementById("email").value=""
          document.getElementById("messaje").value=""
        })
        .catch((err) => console.log(err))
}
