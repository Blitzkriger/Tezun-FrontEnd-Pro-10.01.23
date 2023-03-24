const table = document.createElement('table');

table.style.border = '1px solid #000';
table.style.borderCollapse = 'collapse';
table.style.position = 'absolute';
table.style.top = '50%';
table.style.left = '50%';
table.style.transform = 'translate(-50%,-50%)';
table.style.width = '300px';

function tableGeneration () {

  for (let i = 1; i <= 10; i++) {
    const tr = document.createElement('tr');
    tr.style.border = '1px solid #000'
  
    for (let j = 1; j <= 10; j++) {
      const td = document.createElement('td');
      td.style.border = '1px solid #000'
      td.style.padding = '5px'
      let tdContent = document.createTextNode((i - 1) * 10 + j);
      td.appendChild(tdContent);
      tr.appendChild(td);
    }
  
    table.appendChild(tr);
  }
  
  document.body.appendChild(table);
}

tableGeneration();
