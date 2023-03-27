const addForm = document.getElementById('add-form');
const taskList = document.getElementById('task-list');

// Tạo một nhiệm vụ mới và thêm nó vào danh sách nhiệm vụ
function addTask(name, description) {
	// Tạo nhiệm vụ mới
	const newTask = document.createElement('li');
	const nameSpan = document.createElement('span');
	const descriptionSpan = document.createElement('span');
	const deleteButton = document.createElement('button');
	const editButton = document.createElement('button');
	
	nameSpan.textContent = name;
	descriptionSpan.textContent = description;
	deleteButton.textContent = 'Delete';
	editButton.textContent = 'Edit';
	editButton.classList.add('edit');
	
	// Thêm trình xử lý sự kiện vào các nút xóa và chỉnh sửa
	deleteButton.addEventListener('click', () => {
		newTask.remove();
	});

	editButton.addEventListener('click', () => {
		const newName = prompt('Enter a new name:', name);
		const newDescription = prompt('Enter a new description:', description);
		
		if (newName && newDescription) {
			nameSpan.textContent = newName;
			descriptionSpan.textContent = newDescription;
		}
	});

	// Thêm tên, mô tả, nút xóa và nút chỉnh sửa vào tác vụ mới
	newTask.appendChild(nameSpan);
	newTask.appendChild(descriptionSpan);
	newTask.appendChild(deleteButton);
	newTask.appendChild(editButton);
	
	// Thêm nhiệm vụ mới vào danh sách nhiệm vụ
	taskList.appendChild(newTask);
}

// Thêm một nhiệm vụ mới khi biểu mẫu được gửi
addForm.addEventListener('submit', (event) => {
	event.preventDefault();
	
	const nameInput = addForm.querySelector('#task-name');
	const descriptionInput = addForm.querySelector('#task-description');
	
	const name = nameInput.value.trim();
	const description = descriptionInput.value.trim();
	
	if (name.length >= 6 && description.length >= 21) {
		addTask(name, description);
		
		// Đặt lại biểu mẫu
		addForm.reset();
		nameInput.focus();
	} else {
		alert('Tên task bạn cần nhập ít nhất là 6 kí tự và phầm mô tả cần tối thiểu 21 kí tự nhé bạn vui lòng nhập lại. ');
	}
});
