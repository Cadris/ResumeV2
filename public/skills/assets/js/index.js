var theme = "Light";

alert("Click On the Heading To see the Magic.....");

document.getElementById("top-heading").addEventListener("click", function() {
    if(theme=="Light"){
        //alert(theme);
        // document.styleSheets[0].href = "./assets/css/dark.css";
        document.querySelector("link[href='./assets/css/style.css']").href = "./assets/css/dark.css";
        theme = "Dark";
        //alert(theme);
    }else{
        const backImages = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","1841209.jpg"];
        const random = Math.floor(Math.random() * backImages.length);
        console.log(random, backImages[random]);
        var img = backImages[random];

        var back = ") no-repeat center center fixed";
        var front =  "url(../skills/assets/images/";
        var answer = front+img+back;

        // document.body.style.background = "url('img_tree.png')";
        document.body.style.background = answer;
    }
  });