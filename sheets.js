const sheetID = '12lLb4t8wNfgIzCZ4HYEGH6xHaO-rdRlpvMugCaGN6ZI';
const base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
const sheetName = 'Data';

const output = document.querySelector('.output');

function init(url) {
    console.log('ready');
    fetch(url)
        .then(res => res.text())
        .then(rep => {
            try {
                const data = [];
            console.log(rep);
            const jsData = JSON.parse(rep.substr(47).slice(0, -2));
            console.log(jsData);
            if (!jsData.table.rows.length) throw "Vui lòng nhập lại mã vé"
            const colz = [];
            jsData.table.cols.forEach((heading) => {
                // if (heading.label) {
                //     console.log(heading.label)
                //     colz.push(heading.label.toLowerCase().replace(/\s/g, ''));
                // }
             
                    colz.push(heading.label.toLowerCase().replace(/\s/g, ''));
            
            })
            jsData.table.rows.forEach((main) => {
                const row = {};
                colz.forEach((ele, ind) => {
                    console.log(ele)
                    row[ele] = (main.c[ind] != null) ? main.c[ind].v : '';
                })
                data.push(row);
            })
            sessionStorage.setItem('data', JSON.stringify(data[0]))
            const storageData = sessionStorage.getItem('data')
            console.log(JSON.parse(storageData))
            // maker(JSON.parse(storageData));
            window.location.href='thanks.html'
            } catch (error) {
               maker(error)
            }
        })
}

function maker(error) {
    const ele = document.createElement('div');
    ele.textContent = `${error}`;
    output.append(ele);
}   

document.getElementById('xuLyButton')?.addEventListener('click', function(event) {
    event.preventDefault();
    var duLieu = document.getElementById('userData').value;
    sessionStorage.setItem('code',duLieu)
    const qu = `SELECT A WHERE C = '${duLieu}'`;
    const query = encodeURIComponent(qu);
    const url = `${base}&sheet=${sheetName}&tq=${query}`;
    init(url);
});
