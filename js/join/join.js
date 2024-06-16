window.onload = function() {
	document.getElementById('JoinForm').onsubmit = function() {
	


		// 이름 입력
		let name = document.getElementById('name');
		let nameError = document.getElementById('nameError');
		if (name.value.trim() === "") {
			nameError.textContent = "*이름을 입력하세요";
			nameError.style.display = "block";
			name.focus();
			return false;

		} else {
			nameError.style.display = "none";
		}

		// 아이디 입력
		let id = document.getElementById('id');
		let idError = document.getElementById('idError');
		if (id.value.trim() === "") {
			idError.textContent = "*아이디를 입력하세요";
			idError.style.display = "block";
			id.focus();
			return false;

		} else if (!/^[a-zA-Z]{6,10}$/.test(id.value)) {
			idError.textContent = "*아이디는 6-10자의 영문자로 입력하세요";
			idError.style.display = "block";
			id.value = "";
			id.focus();
			return false;

		} else {
			idError.style.display = "none";
		}

		// 비밀번호 입력
		let password = document.getElementById('password');
		let passwordError = document.getElementById('passwordError');
		if (password.value.trim() === "") {
			passwordError.textContent = "*비밀번호를 입력하세요";
			passwordError.style.display = "block";
			password.focus();
			return false;

		} else {
			passwordError.style.display = "none";
		}

		// 비밀번호 확인 입력
		let confirmpassword = document.getElementById('confirmpassword');
		let confirmpasswordError = document.getElementById('confirmpasswordError');
		if (confirmpassword.value.trim() === "") {
			confirmpasswordError.textContent = "*비밀번호 확인을 입력하세요";
			confirmpasswordError.style.display = "block";
			confirmpassword.focus();
			return false;

		} else if (password.value !== confirmpassword.value) {
			confirmpasswordError.textContent = "비밀번호와 일치하지 않습니다";
			confirmpasswordError.style.display = "block";
			confirmpassword.value = "";
			confirmpassword.focus();
			return false;

		} else {
			confirmpasswordError.style.display = "none";
		}

		// 생년월일 입력
		let dob = document.getElementById('dob');
		let dobError = document.getElementById('dobError');
		if (dob.value.trim() === "") {
			dobError.textContent = "*생년월일을 입력하세요";
			dobError.style.display = "block";
			dob.focus();
			return false;

		} else {
			dobError.style.display = "none";
		}

		// 주소 입력
		let address2 = document.getElementById('address3');
		let addressError = document.getElementById('addressError');
		if (address2.value.trim() === "") {
			addressError.textContent = "*주소를 입력하세요";
			addressError.style.display = "block";
			address2.focus();
			return false;


		} else {
			addressError.style.display = "none";
		}

		// 휴대폰 번호 입력 확인
		let phone1 = document.getElementById('phone1');
		let phone2 = document.getElementById('phone2');
		let phone3 = document.getElementById('phone3');
		let phoneError = document.getElementById('phoneError');
		phone2.addEventListener('input', function() {
			if (phone2.value.length === 4) {
				phone3.focus();
			}
		});
		if (phone1.value.trim() === "" || phone2.value.trim() === "" || phone3.value.trim() === "") {
			phoneError.textContent = "*휴대폰 번호를 완성해주세요";
			phoneError.style.display = "block";
			return false;


		} else {
			phoneError.style.display = "none";
		}

		// 이메일 유효성 검사
		let email = document.getElementById('email');
		let emailError = document.getElementById('emailError');
		if (email.value.trim() === "") {
			emailError.textContent = "*이메일주소를 입력하세요";
			emailError.style.display = "block";
			email.focus();
			return false;

		} else {
			emailError.style.display = "none";
		}
		  // 이메일 수신 여부 확인
         let emailRcvOptions = document.getElementsByName('emailRcv');
        let selectedOption = null;
        for (let option of emailRcvOptions) {
            if (option.checked) {
                selectedOption = option.value;
                break;
            }
        }

        // 선택된 옵션이 없으면 오류 메시지 표시 
        if (!selectedOption) {
            let emailRcvError = document.getElementById('emailRcvError');
            emailRcvError.textContent = "*이메일 수신 여부를 선택하세요";
            emailRcvError.style.display = "block";
            return false; 
        }

        // 수신동의 여부에 따라 알림창 띄우기
        if (selectedOption === 'yemail') {
            alert("수신동의 하셨습니다");
        } else if (selectedOption === 'nemail') {
            alert("수신거부 하셨습니다");
        }

		return true; 
	};
}//window끝(유효성 검사 끝)

/*FB받은 부분 */
  function searchAddress() {
    new daum.Postcode({
		oncomplete:function(data){
			let findaddress='  ';
			
			if(data.userSelectedType==='R'){
				findaddress=data.roadAddress;
			}else{
				findaddress=data.jibunAddress;
			}
  document.getElementById('address1').value = findaddress;
 				 }
		
	}).open();
	}


  
  function chkId(){
	let inputid=document.getElementById('id').value.trim();
	if(inputid==="booknest"){
		alert("사용가능한 아이디 입니다.");didrbgus14
	}else{
		alert("중복된 아이디 입니다.")
		let duplicateId = document.getElementById('id');
      duplicateId .value = '';  // 입력란을 비웁니다.
      id .focus()
		
	}
  }

  
  function chkEmail(){
	let inputemail=document.getElementById('email').value.trim();
	if(inputemail==="1234"){
		alert("사용가능한 이메일 입니다.");
	}else{
		alert("가입되어 있는 이메일입니다.")
		let duplicateEmail = document.getElementById('email');
      duplicateEmail .value = '';  // 입력란을 비웁니다.
      email .focus()
	}
  }