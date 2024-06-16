window.onload = function() {
	let day = new Date();

	let month = day.getMonth() + 1;
	let date = day.getDate();
	for (let i = 1; i < 6; i++) {
		document.getElementById(`day${i}`).value = `${month} / ${date + i}`;
	}
	
	document.getElementById('orderForm').onsubmit = function(){
		let name = document.getElementById('name');
		let num1 = document.getElementById('num1');
		let num2 = document.getElementById('num2');
		let num3 = document.getElementById('num3');
		let address1 = document.getElementById('address1');
		let address2 = document.getElementById('address2');
		
		if(address1.value==""){	
			alert("주소 입력하세요");
			address1.focus();
			return false;
		}
		
		if(address2.value==""){	
			alert("상세주소 입력하세요");
			address2.focus();
			return false;
		}
		
		
		if(name.value==""){	
			alert("성명을 입력하세요");
			name.focus();
			return false;
		}
		
		if(name.value.length < 2 || name.value.length > 5){
			alert("이름을 2자리 이상 입력하세요");
			name.focus();
			return false;
		}
		
		if(num1.value==""){
			alert("전화번호 앞자리를 입력하세요");
			num1.focus();
			return false;
		}
		
		if(num2.value==""){
			alert("전화번호 가운데 입력하세요");
			num2.focus();
			return false;
		}
		
		if(num3.value==""){
			alert("전화번호 끝자리를 입력하세요");
			num3.focus();
			return false;
		}
		
		if(num1.value.length < 3 || num1.value.length > 4){
			alert("4자리 까지만 입력하세요");
			num1.focus();
			return false;
		}
		if(num2.value.length < 3 || num2.value.length > 4){
			alert("4자리 까지만 입력하세요");
			num2.focus();
			return false;
		}
		if(num3.value.length < 3 || num3.value.length > 4){
			alert("4자리 까지만 입력하세요");
			num3.focus();
			return false;
		}
		
		alert("주문 성공");
	};
	
}

  document.addEventListener('DOMContentLoaded', function() {
 let day_ch = document.querySelectorAll('.day');
    

    day_ch.forEach(function(button) {
      button.addEventListener('click', function() {
        day_ch.forEach(function(btn) {
          btn.classList.remove('selected');
        });
        this.classList.add('selected');
      });
    });
  });

let sel_Box = null;

function check_pay(e, p) {
    var pay_ch = document.querySelectorAll('.pay');
    pay_ch.forEach(btn => btn.classList.remove('show'));

    e.classList.add('show');

    var pay_ch = document.querySelectorAll('.card');
    pay_ch.forEach(form => form.classList.remove('show'));

    if (sel_Box !== null) {
        sel_Box.classList.remove("clicked");
    }

    if (sel_Box !== e) {
        e.classList.add("clicked");
        sel_Box = e;
    } else {
        sel_Box = null;
    }

    if (p === 'card') {
        document.getElementById('card_form').classList.add('show');
    }
}


function openWhiteWindow() {
   var newWindow = window.open('', '_blank', 'width=350,height=350,left=100,top=100');

    newWindow.document.write('<html><head><title>주소 1</title></head><body style="background-color: white;">137-070 서울특별시 서초구</body></html>');

    newWindow.onbeforeunload = function() {
        var address1 = newWindow.document.body.innerHTML;
        document.getElementById('address1').value = address1;
        return false;
    };}

