Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:100
});

camera = document.getElementById("camera") ;

Webcam.attach('#camera');

function captureImage(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capturedImage" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Md7Rv_exQ/model.json', modelLoaded);

function modelLoaded(){
    console.log("model is loaded");
}

function identifyImage(){
    img = document.getElementById("capturedImage");
    classifier.classify(img , gotResults);
}

function gotResults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("Object_name").innerHTML=results[0].label;
        document.getElementById("Accurary_of_object").innerHTML=results[0].confidence.toFixed(3);
    }
}