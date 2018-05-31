var intro = document.createElement("span");
intro.setAttribute("class", "title");
intro.textContent = "Why is Food Wastage So Important?";

var image = document.createElement("img");
image.style.padding = "10px";
image.style.paddingTop = "15px";
image.setAttribute("src", "http://www.barfblog.com/wp-content/uploads/2017/05/food.waste_.jpg");

var text1 = document.createElement("p");
text1.style.fontFamily = "Architects Daughter";
text1.style.fontSize = "17px";
text1.textContent = "Looking at this graph, we see that 31% of the food supply went uneaten in the US in 2010. Yet, these excess foods cost a lot especially for farmers. \
                    Today, it is crucial to preserve our environment and there are ways farmers can reduce the impact of excess food. \
                    In order to help farmers, we can look at two simple solutions! Scroll down to learn more.";

/* Sets the elements within the intro div */
document.getElementById("intro").appendChild(intro);
document.getElementById("intro").appendChild(image);
document.getElementById("intro").appendChild(text1);

document.getElementById("back1").style.backgroundImage = 'url("produce.jpg")';
document.getElementById("back1").style.height = "50%";
document.getElementById("back2").style.backgroundImage = 'url("produce.jpg")';

document.getElementById("left-panel").addEventListener('click', function() {
    document.getElementById('left-panel').classList.toggle('expand');

    var rightPanel = document.getElementById('right-panel');
    /* smoothly inserts right solution back after 1.15s */
    if (rightPanel.style.display === 'none') {
        setTimeout(function (){
        
            rightPanel.style.display = rightPanel.style.display === 'none' ? '' : 'none';
          
        }, 1150);
    } else {
        rightPanel.style.display = rightPanel.style.display === 'none' ? '' : 'none';
    }
});

document.getElementById("right-panel").addEventListener('click', function() {
    document.getElementById('right-panel').classList.toggle('expand');

    var leftPanel = document.getElementById('left-panel');
    /* smoothly inserts left solution back after 1.15s */
    if (leftPanel.style.display === 'none') {
        setTimeout(function (){
        
            leftPanel.style.display = leftPanel.style.display === 'none' ? '' : 'none';
          
        }, 1150);
    } else {
        leftPanel.style.display = leftPanel.style.display === 'none' ? '' : 'none';
    }

});