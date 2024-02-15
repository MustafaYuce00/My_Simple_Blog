var models = [{

        image: "img/araba.jpg",
    },
    {

        image: 'img/kar-agac.jpg',
    },
    {
        image: "img/kumsaati.jpg",
    },
    {
        image: "img/robot.jpg",
    },
    {
        image: "img/seker.jpg",
    },
    {
        image: "img/tarih.jpg",
    }
];

index = 0;
var slaytCount = models.length;
var settings = {
    duration: '3000'
}
var interval;

init(settings);

document.querySelector(".btn-left").addEventListener("click", function() {
    index--;
    showSlide(index);
});

document.querySelector(".btn-right").addEventListener("click", function() {
    index++;
    showSlide(index);
});

document.querySelectorAll(".btn").forEach(function(item) {
    item.addEventListener("mouseenter", function() {
        clearInterval(interval);
    })
})

document.querySelectorAll(".btn").forEach(function(item) {
    item.addEventListener("mouseleave", function() {
        init(settings);
    })
})

function init(settings) {

    interval = setInterval(function() {
        index++;
        showSlide(index);
    }, settings.duration)

}

function showSlide(i) {

    if (i < 0) {
        index = slaytCount - 1;
    } else if (i >= slaytCount) {
        index = 0;
    } else {
        index = i;
    }

    document.querySelector(".card-image").setAttribute("src", models[index].image)
}



var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}