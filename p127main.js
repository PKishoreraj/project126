function setup(){
    canvas=createCnvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifiyCanvas);
    synth=window.speechSynthesis;
}
function preload(){
    classifier=ml5.imageClassifier('DoodleNet');
}
function clearcanvas(){
    background("white");
}