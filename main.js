/** @format */

var arr = [];
var sum = 0;
var countSoDuong = 0;
var sumSoAm = 0;
var finalEvenNumber = 0;
// Kiểm tra array có phần tử hay không

function addNumber() {
	// Lấy thông tin từ user
	var number = document.getElementById("txtNumber").value * 1;

	// Tập hợp các số được thêm vào danh sách
	arr.push(number);
	console.log(arr);

	var result = "";
	// In các giá trị của mảng ra ngoài UI #listNumber
	for (var i = 0; i < arr.length; i++) {
		result += arr[i] + " ";
	}

	document.getElementById("listNumber").innerHTML = "Số đã thêm: " + result;
}

function tongsoduong() {
	for (var index = 0; index < arr.length; index++) {
		if (arr[index] > 0) {
			sum = sum + arr[index];
		}
	}
	document.getElementById("tongSoChan").innerHTML = "Tổng số chẵn: " + sum;
}

function demsoduong() {
	for (var index = 0; index < arr.length; index++) {
		if (arr[index] > 0) {
			countSoDuong = countSoDuong + 1;
		}
	}
	document.getElementById("demSoDuong").innerHTML =
		"Số dương: " + countSoDuong;
}

function sonhonhat() {
	for (var index = 0; index < arr.length; index++) {
        var minNumber = arr[0];
		if (minNumber > arr[index]) {
			minNumber = arr[index];
		}
	}
	document.getElementById("soNhoNhat").innerHTML = "Số nhỏ nhất " + minNumber;
}

function soduongnhonhat() {
	for (var index = 0; index < arr.length; index++) {
        var minNumberDuong = arr[0];
		if (minNumberDuong > arr[index] && arr[index] > 0) {
			minNumberDuong = arr[index];
		}
	}
	document.getElementById("soDuongNhoNhat").innerHTML =
		"Số dương nhỏ nhất " + minNumberDuong;
}
function sochancuoicung() {
	for (var index = arr.length-1; index >= 0; index--) {
		if (arr[index] % 2 == 0 ) {
			finalEvenNumber = arr[index];
		break;
        }
        else {
            finalEvenNumber = -1;
        }
	}
	document.getElementById("soChanCuoiCung").innerHTML =
		"Số chẵn cuối cùng " + finalEvenNumber;
}

function tangdan() {
	for (var index = 0; index < arr.length; index++) {
        var temp;
		if (arr[index] > arr[index+1] ) {
            arr[index] = temp;
            temp =  arr[index+1];
            arr[index+1] = arr[index];
        }
	}
	document.getElementById("tangDan").innerHTML =
		"Sắp xếp mảng tăng dần " + arr;
}
