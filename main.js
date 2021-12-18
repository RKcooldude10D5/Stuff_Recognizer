Webcam.set({
    width: 450,
    height: 400,
    image_format: 'png',
    png_quality: 100
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("cameraresult").innerHTML='<img id="capturedimg" src="' + data_uri + '"/>';
    });
}
console.log('ml5 version:', ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/X2E_RJ1wG/model.json', modelLoaded);
function modelLoaded(){
    console.log("Model Loaded");
}
function check(){
    img=document.getElementById("capturedimg");
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("objectresultname").innerHTML=results[0].label;
        document.getElementById("objectresultaccuracy").innerHTML=results[0].confidence.toFixed[2];    }
}