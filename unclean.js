let x = '101101';

const o = (x) => {
    let z = '';
    for(let y = x.length - 1; y >= 0; y--) {
        z += x[y];
    }

    if(z === x) {
        console.log("Este corect");
    }
    else {
        console.log("Este gresit");
    }

    // Stricam stilul aici
    if(z !== x)
    {
        console.log('e diferit');
    }
    else
    {
        console.log('e la fel');
    }
}
o(x);