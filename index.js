let batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
function totalBatteries(){
  return batteryBatches.reduce(sum,num => num + sum);
}