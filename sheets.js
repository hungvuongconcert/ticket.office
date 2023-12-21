const sheetID = '12lLb4t8wNfgIzCZ4HYEGH6xHaO-rdRlpvMugCaGN6ZI';
const base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
const sheetName = 'Data';
const data = [];
const output = document.querySelector('.output');

function init(url) {
    console.log('ready');
    fetch(url)
        .then(res => res.text())
        .then(rep => {
            console.log(rep);
            const jsData = JSON.parse(rep.substr(47).slice(0, -2));
            console.log(jsData);
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
            console.log(data)
            const storageData = sessionStorage.getItem('data')
            console.log(storageData)
          
            sessionStorage.setItem('data', JSON.stringify(data[0]))
        
            maker(JSON.parse(storageData));
        })
}

function maker(json) {
    const div = document.createElement('div');
    output.append(div);

    // Assuming the structure of your JSON data is the same
    const name = Object.values(json); // Accessing the "v" data

    const ele = document.createElement('div');
    ele.textContent = `${name}`;
    div.append(ele);
}

document.getElementById('xuLyButton')?.addEventListener('click', function(event) {
    event.preventDefault();
    var duLieu = document.getElementById('userData').value;
    const qu = `SELECT A WHERE B = '${duLieu}'`;
    const query = encodeURIComponent(qu);
    const url = `${base}&sheet=${sheetName}&tq=${query}`;
    init(url);
});
