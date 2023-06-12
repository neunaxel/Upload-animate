var container1 = document.getElementById('uploadInput1');
var container2 = document.getElementById('uploadInput2');
var container3 = document.getElementById('uploadInput3');
var state = '';


// Button 1
// link to json file
var button1 = bodymovin.loadAnimation({
    container: container1,
    path: 'data1.json',
    renderer: 'svg',
    loop: false,
    autoplay: false,
    name: "button Animation 1",
});
// When Clicked
container1.addEventListener('click', () => {
    function loop() {
        if (state == '') {
            button1.playSegments([31, 69], true);
        } else if (state == 'success') {
            button1.playSegments([69, 139], true);
            button1.removeEventListener('complete', loop);
            button1.loop = false;
            state = '';
        }
    }
    button1.playSegments([0, 31], true);
    if (state == '') {
        button1.addEventListener('complete', loop);
    }
});

// Button 2
// link to json file
var button2 = bodymovin.loadAnimation({
    container: container2,
    path: 'data2.json',
    renderer: 'svg',
    loop: false,
    autoplay: false,
    name: "button Animation 2",
});
// When Clicked
container2.addEventListener('click', () => {
    function loop() {
        if (state == '') {
            button2.playSegments([35, 115], true);
        } else if (state == 'success') {
            button2.playSegments([115, 190], true);
            button2.removeEventListener('complete', loop);
            button2.loop = false;
            state = '';
        }
    }
    button2.playSegments([0, 35], true);
    if (state == '') {
        button2.addEventListener('complete', loop);
    }
});

// Button 3
// link to json file
var button3 = bodymovin.loadAnimation({
    container: container3,
    path: 'data3.json',
    renderer: 'svg',
    loop: false,
    autoplay: false,
    name: "button Animation 3",
});
// When Clicked
container3.addEventListener('click', () => {
    function loop() {
        if (state == '') {
            button3.playSegments([35, 120], true);
        } else if (state == 'success') {
            button3.playSegments([120, 600], true);
            button3.removeEventListener('complete', loop);
            button3.loop = false;
            state = '';
        }
    }
    button3.playSegments([0, 35], true);
    if (state == '') {
        button3.addEventListener('complete', loop);
    }
});

// color Buttons
$(".purple").on("click", function () {
    $('.uploadInput path').attr("fill", "#A459D1");
    $('.uploadInput g[font-size] path').attr("fill", "white");
});
$(".red").on("click", function () {
    $('.uploadInput path').attr("fill", "#F45050");
    $('.uploadInput g[font-size] path').attr("fill", "white");
});
$(".blue").on("click", function () {
    $('.uploadInput path').attr("fill", "#4C4C6D");
    $('.uploadInput g[font-size] path').attr("fill", "white");
});
$(".green").on("click", function () {
    $('.uploadInput path').attr("fill", "#1B9C85");
    $('.uploadInput g[font-size] path').attr("fill", "white");
});
$(".gold").on("click", function () {
    $('.uploadInput path').attr("fill", "#FFB84C");
    $('.uploadInput g[font-size] path').attr("fill", "white");
});
$(".LightPink").on("click", function () {
    $('.uploadInput path').attr("fill", "rgb(255,182,182)");
    $('.uploadInput g[font-size] path').attr("fill", "white");
});
$(".success").on("click", function () {
    state = 'success';
});