window.onload = function() {
	let checkAll = document.getElementById('checkAll');

	checkAll.addEventListener('click', function() {

		let isChecked = checkAll.checked;

		if (isChecked) {
			let checkboxes = document.querySelectorAll('.chk');

			for (let checkbox of checkboxes) {
				checkbox.checked = true;
			}
		}
		else {
			const checkboxes = document.querySelectorAll('.chk');
			for (const checkbox of checkboxes) {
				checkbox.checked = false;
			}
		}
	});

	calculateTotal();

};

function deleteRows() {
	let table = document.getElementById('shopping_table');
	let checkboxes = table.querySelectorAll('input[type="checkbox"]:checked');

	checkboxes.forEach(function(checkbox) {
		let row = checkbox.parentNode.parentNode;
		row.parentNode.removeChild(row);
	});
}

 function calculateTotal() {
            calculate();
        }

        function calculate() {
            let total = 0;
            const rows = document.querySelectorAll('#shopping_table tbody tr');

            rows.forEach(row => {
                const checkbox = row.querySelector('input[type="checkbox"]');
                if (checkbox && checkbox.checked) {
                    const quantity = parseFloat(row.querySelector('input[type="number"]').value) || 0;
                    const price = parseFloat(row.querySelector('.price_chk').textContent) || 0;
                    total += quantity * price;
                }
            });

            document.getElementById('totalDisplay').textContent = `${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원`;
        }

        document.addEventListener('DOMContentLoaded', calculate);