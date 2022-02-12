let num_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99];

let output_text = "";
let result_ouput = [];
function random_item(items) {
    return items[Math.floor(Math.random() * items.length)];
}
function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}
function bocho() {
    let result = random_item(num_arr);
    result_ouput.push(result);
    removeItemOnce(num_arr, result);
    console.log(result_ouput);
    let newresult = document.getElementById("resultnum");
    newresult.innerHTML = result;
    let render_result = "";
    for(let i=0;i<result_ouput.length;i++){
        render_result += '<div class="lotonum">'+result_ouput[i]+'</div>';
    }
    let allresultbox = document.getElementById("lotobox");
    allresultbox.innerHTML = render_result;
}