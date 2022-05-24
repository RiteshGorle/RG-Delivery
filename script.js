var input = document.querySelector('#zipcode');
    var indicator = document.querySelector('.change');
    var info = document.querySelector('.info');
    var codelength = /^\d{6}$/

    input.addEventListener('keyup', () => {
        if (input.value.match(codelength)) {
            $.ajax({
                type: "GET",
                url: "https://api.postalpincode.in/pincode/" + input.value,

                success: (response) => {
                    info.innerHTML = "Congrats! we serve in your area!";

                }
            });

            indicator.classList.add('change-checkbox-circle-fill');
            indicator.classList.remove('change-close-circle-fill');
        }

        else {
            indicator.classList.add('change-close-circle-fill');
            indicator.classList.remove('change-checkbox-circle-fill');
            info.innerHTML = "Oops! We don't serve your zipcode yet! Please Contact us to serve in your area";
        }

    }); 
