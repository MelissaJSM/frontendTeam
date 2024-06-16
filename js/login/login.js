
window.onload=function(){
	document.getElementById('loginForm').onsubmit=function(){
		

		// 아이디 입력
		let id = document.getElementById('id');
		let idError = document.getElementById('idError');
		if (id.value.trim() === "") {
			idError.textContent = "*아이디를 입력하세요";
			idError.style.display = "block";
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
	}//onsubmit 끝
	
}//window onload끝