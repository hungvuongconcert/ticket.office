const sheetID = '1qyoo-dCMR9dQOqSjgWa39lJVNSwHGawcwYpUhogv_CY';
const base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
const sheetName = 'Data';
// document.addEventListener('DOMContentLoaded', init);
 
const storageData = sessionStorage.getItem('data')
const data = JSON.parse(storageData)
const output = document.querySelector('.output');
 

    const div = document.createElement('p');
    output.append(div);
    const name = Object.values(data);
    const ele = document.createElement('p');
            ele.textContent = `${name}`;
            div.append(ele);
   
 