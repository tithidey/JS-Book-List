//initialize value
const title = document.getElementById('name');

const author = document.getElementById('author');

const year = document.getElementById('year');

const addBtn = document.getElementById('btn');

const table = document.getElementById('tb');

const addBook = (event) => {
    event.preventDefault();

    if(title.value === '' || author.value === '' || year.value === ''){
        alert('Please fill all field');
    }
    else if(year.value.length != 4){
        alert('Invalid year');
    }
    else{
        const table_element = document.createElement('tr');

        const table_body1 = document.createElement('td');
        table_body1.textContent = title.value;

        title.value = '';

        const table_body2 = document.createElement('td');
        table_body2.textContent = author.value;

        author.value = '';

        const table_body3 = document.createElement('td');
        table_body3.textContent = year.value;

        year.value = '';

        table_element.appendChild(table_body1);
        table_element.appendChild(table_body2);
        table_element.appendChild(table_body3);

        table.appendChild(table_element);
    }
}

addBtn.addEventListener('click', addBook);