const price = document.getElementById('price');
const btn = document.getElementById('btn');
const coupon = document.getElementById('coupon');




    coupon.addEventListener('keyup', function (event) {
        const value = event.target.value;
        console.log(value);
        btn.addEventListener('click', function () {
            if(value === 'dom'){
                let priceNum = parseFloat(price.innerText)
                priceNum = Math.ceil(priceNum-(priceNum * .3));
                price.innerText = priceNum;
                btn.setAttribute('disabled', true);
            }
        })

    })
