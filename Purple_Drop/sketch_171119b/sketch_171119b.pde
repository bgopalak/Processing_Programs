Drop[] drops = new Drop[100];
void setup() {
    background(230,230,250);
    size(400,300);
    for (int i=0;i<drops.length;i++)
    {
       drops[i] = new Drop();
    }
}

void draw() {
  background(230,230,250);
  for (int i=0;i<drops.length;i++)
    {
       drops[i].show();
       drops[i].fall();
    }

}