let num_0 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num_1 = [11, 12, 13, 14, 15, 16, 17, 18, 19];
let num_2 = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
let num_3 = [30, 31, 32, 33, 34, 35, 36, 37, 38, 39];
let num_4 = [40, 41, 42, 43, 44, 45, 46, 47, 48, 49];
let num_5 = [50, 51, 52, 53, 54, 55, 56, 57, 58, 59];
let num_6 = [60, 61, 62, 63, 64, 65, 66, 67, 68, 69];
let num_7 = [70, 71, 72, 73, 74, 75, 76, 77, 78, 79];
let num_8 = [80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99];

let output_text = "";

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
function changeTextColor(idbutton){
    let sellected_cell = document.getElementById(idbutton);
    if(sellected_cell.style.color != "red"){
        sellected_cell.style.color = "red";
    }else{
        sellected_cell.style.color = "black";
    }
    
}
output_text += '<table style="width:100%">';
for (let l = 0; l < 9; l++) {
    output_text += "<tr>";
    let main = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let render_array = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < 5; i++) {
        let k = random_item(main);
        let ltnum = 0;
        switch (k) {
            case 0:
                ltnum = random_item(num_0);
                removeItemOnce(num_0, ltnum);
                break;
            case 1:
                ltnum = random_item(num_1);
                removeItemOnce(num_1, ltnum);
                break;
            case 2:
                ltnum = random_item(num_2);
                removeItemOnce(num_2, ltnum);
                break;
            case 3:
                ltnum = random_item(num_3);
                removeItemOnce(num_3, ltnum);
                break;
            case 4:
                ltnum = random_item(num_4);
                removeItemOnce(num_4, ltnum);
                break;
            case 5:
                ltnum = random_item(num_5);
                removeItemOnce(num_5, ltnum);
                break;
            case 6:
                ltnum = random_item(num_6);
                removeItemOnce(num_6, ltnum);
                break;
            case 7:
                ltnum = random_item(num_7);
                removeItemOnce(num_7, ltnum);
                break;
            case 8:
                ltnum = random_item(num_8);
                removeItemOnce(num_8, ltnum);
                break;

        }
        render_array[k] = ltnum;
        removeItemOnce(main, k);
    }
    for (let j = 0; j < render_array.length; j++) {
        if (render_array[j] != 0) {
            output_text += '<td name = "lotocells" class="lotocell" id="loto'+l+j+'" onClick=changeTextColor("loto'+l+j+'")>' + render_array[j] + '</td>';
        } else {
            output_text += '<td class="emptycell" name="emptycell"></td>';
        }
    }
    output_text += "</tr>";
    console.log(render_array);
}
output_text += '</table>';
let lotoelement = document.getElementsByName('lotoshow');
lotoelement[0].innerHTML = output_text;
let emptycell = document.getElementsByName('emptycell');
let randomColor = Math.floor(Math.random()*16777215).toString(16);
for(let colorman = 0; colorman < emptycell.length; colorman++){
    emptycell[colorman].style.backgroundColor = "#"+randomColor;
}
function resetItem(){
    let lotocells = document.getElementsByName('lotocells');
    for(let colorman = 0; colorman < lotocells.length; colorman++){
        lotocells[colorman].style.color = "black";
    }
}