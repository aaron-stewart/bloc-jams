var pointsArray = document.getElementsByClassName('point');

var revealPoint = function(index) {
    points[index].style.opacity = 1;
    points[index].style.transform = "scaleX(1) translateY(0)";
    points[index].style.msTransform = "scaleX(1) translateY(0)";
    points[index].style.WebkitTransform = "scaleX(1) translateY(0)";
}

var animatePoints = function(points) {
    forEach(points, revealPoint);
};

window.onload = function() {
    var sellingPoints = document.getElementsByClassName('selling-points')[0];
    var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;

    window.addEventListener("scroll", function(event) {
        //Automatically animate points on a tall screen that can't trigger event
        if (window.innerHeight > 950) {
          animatePoints(pointsArray);
        }

        If (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
            animatePoints(pointsArray);
        }
    });
}
