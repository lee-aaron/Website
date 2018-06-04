var intro = document.createElement("span");
intro.setAttribute("class", "title");
intro.textContent = "Why is Food Wastage So Important?";

var image = document.createElement("img");
image.style.padding = "10px";
image.style.paddingTop = "15px";
image.setAttribute("src", "https://www.barfblog.com/wp-content/uploads/2017/05/food.waste_.jpg");

var text1 = document.createElement("p");
text1.style.fontFamily = "Architects Daughter";
text1.style.fontSize = "17px";
text1.textContent = "Looking at this graph, we see that 31% of the food supply went uneaten in the US in 2010. Yet, these excess foods cost a lot especially for farmers. \
                    Today, it is crucial to preserve our environment and there are ways farmers can reduce the impact of excess food. \
                    For farmers, we can look at two simple solutions! Scroll down to learn more.";

/* Sets the elements within the intro div */
document.getElementById("intro").appendChild(intro);
document.getElementById("intro").appendChild(image);
document.getElementById("intro").appendChild(text1);

document.getElementById("back1").style.backgroundImage = 'url("produce.jpg")';
document.getElementById("back1").style.height = "45%";
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

    if ($("#left-panel").hasClass("expand")) {
        $('#left-panel').load('left.html');
    } else {
        document.getElementById('left-panel').innerHTML = '<span class="title">Plan Ahead!</span><span class="click">Click me to read more!</span>';
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

    if ($("#right-panel").hasClass("expand")) {
        $('#right-panel').load('right.html');
    } else {
        document.getElementById('right-panel').innerHTML = '<span class="title">Invest in Technology!</span><span class="click">Click me to read more!</span>';
    }

});

document.getElementById("cite").addEventListener('click', function() {
    document.getElementById('content').classList.toggle('hide');

    if (document.getElementById('content').className.indexOf("hide") > -1) {
        document.getElementById("intro").style.width = "70%";
        $(document).ready(function(){
            $('#intro').load('sources.html');
        });
    } else {
        document.getElementById("intro").style.width = "40%";
        document.getElementById("intro").innerHTML="";
        
        /* Sets the elements within the intro div */
        document.getElementById("intro").appendChild(intro);
        document.getElementById("intro").appendChild(image);
        document.getElementById("intro").appendChild(text1);
    }

});