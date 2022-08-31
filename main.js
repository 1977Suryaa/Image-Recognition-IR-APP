Webcam.set({
    width:350,
    height:400,
    image_format:"png",
    png_quality:90
})
Webcam.attach(document.getElementById("hai"))

function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("doo").innerHTML="<img id='photo' src="+data_uri+">"
   
    })

}

console.log(ml5.version)
var loader=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/TJZGi8te9/model.json",modelLoaded)

function modelLoaded(){
    console.log("working")
}

function identify(){
var photo=document.getElementById("photo")
loader.classify(photo,gotResult)
}
function gotResult(error,results){
        if(error){
            console.log("error")
        }
        else{
            console.log(results)
            document.getElementById("hhh").innerHTML="Accuracy :"+results[0].confidence.toFixed(3)
            document.getElementById("ggg").innerHTML="Object :"+results[0].label
            
        }
}
