var pointsArray = document.getElementsByClassName('point');

var revealPoint = function(index) {
    pointsArray[index].style.opacity = 1;
    pointsArray[index].style.transform = "scaleX(1) translateY(0)";
    pointsArray[index].style.msTransform = "scaleX(1) translateY(0)";
    pointsArray[index].style.WebkitTransform = "scaleX(1) translateY(0)";
}

var animatePoints = function() {
    forEach(pointsArray, revealPoint)
};

window.onload = function() {
    var sellingPoints = document.getElementsByClassName('selling-points')[0]
    var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;

    window.addEventListener("scroll", function(event) {
        //Automatically animate points on a tall screen that can't trigger event
        if (window.innerHeight > 950) {
          animatePoints()
        }

        if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
            animatePoints()
        }
    });
}
