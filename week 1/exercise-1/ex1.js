//Exercise 1, uppercase the start of each word in a string
txtString = "the quick brown fox";
function capitalNoun(txt){
    txt = txt.toLowerCase();
    txt = txt.split(' ');
    for(var i = 0; i < txt.length; i++){
        txt[i] = txt[i].charAt(0).toUpperCase() + txt[i].slice(1);
    }
    return txt.join(' ');
}
console.log(capitalNoun(txtString));

//Exercise 2 Find largest value in 3 numbers
function max(num1, num2, num3) 
 {
  max_val = 0;
  if (num1 > num2)
  {
    max_val = num1;
  } else
  {
    max_val = num2;
  }
  if (num3 > max_val) 
  {
    max_val = num3;
  }
  return max_val;
}
console.log(max(5, 11, 3));

//Exercise 3 move the last three characters to the start
function moveLastThree(str){
    if (str.length > 1)
       {
         return str.slice(-3) + str.slice(0, -3);
       }
}
console.log(moveLastThree("python"));
console.log(moveLastThree("3"));
console.log(moveLastThree("actualWord"));

//Exercise 4 Find types of a given angle
function angle_Type(angle) {
    if(angle < 90) {
      return "Acute angle.";
    }
    if(angle === 90) {
      return "Right angle.";
    }
    if(angle < 180) {
      return "Obtuse angle.";
    }
    return "Straight angle.";
  }

//Exercise 5 Find maximum possible sum of some of its k consecutive numbers of a given array of positive integers
function maxConsecutiveSum(nums, k) {
    let result = 0;
    let temp_sum = 0;
    for (var i = 0; i < k - 1; i++) {
      temp_sum += nums[i];
    }
    for (var i = k - 1; i < nums.length; i++) {
      temp_sum += nums[i];
      if (temp_sum > result) {
        result = temp_sum;
      }
      temp_sum -= nums[i - k + 1];
    }
    return result;
  }

console.log(maxConsecutiveSum([1, 2, 3 , 14, 5], 2));
