void keyPressed() {
  //print ("hi");
  if(keyCode == RIGHT ){
    paddle.x = paddle.x+10;
  }
  if(keyCode == LEFT){
    paddle.x = paddle.x-10;
  }
  if(paddle.x<=0 || paddle.x >= 200) {
    paddle.x =0;
  }
  
  if(keyCode == 'R'){
    location.x = 0;
    location.y = 0;
  }
}