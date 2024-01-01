const sheetID = '12lLb4t8wNfgIzCZ4HYEGH6xHaO-rdRlpvMugCaGN6ZI';
const base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
const sheetName = 'Data';

const storageData = sessionStorage.getItem('data');
const data = JSON.parse(storageData);
const storageCode = sessionStorage.getItem('code');
const code = JSON.parse(storageCode);
const output = document.querySelector('.output');

const div = document.createElement('p');
output.append(div);

const name = Object.values(data);
const ele = document.createElement('p');
ele.innerHTML = `Họ và Tên: ${name} <br> Mã số Vé: ${code} <br> Số điện thoại: `;
div.append(ele);
