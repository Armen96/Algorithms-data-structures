function solution(T, R) {
    const groups = {};
    let success = 0;

    for (let i = 0; i < T.length; i++) {
        for (let j = 0; j < T[i].length; j++) {
            if (!isNaN(T[i][j])) {
                if (T[i][j + 1]) {
                    if (isNaN(T[i][j + 1])) {
                        let group = T[i].substring(0, j + 1);
                        if (groups[group]) {
                            groups[group].push(T[i].substring(j + 1, T[i].length));
                        } else {
                            groups[group] = [T[i].substring(j + 1, T[i].length)];
                        }
                    }
                } else {
                    let group = T[i];
                    groups[group] = [group];
                }

            }
        }
    }

    let keys = Object.keys(groups);
    let totalGroups = keys.length;

    keys.forEach(key => {
        if (groups[key].length === 1) {
            let findIndex = T.indexOf(groups[key][0]);
            if (R[findIndex] === 'OK') {
                success = success + 1;
            }
        } else {
            let status = true;
            for (let i = 0; i < groups[key].length; i++) {
                let search = key + '' + groups[key][i];
                let findIndex = T.indexOf(search);
                if (R[findIndex] !== 'OK') {
                    status = false;
                }
            }

            if (status) {
                success = success + 1;
            }
        }
    })

    return Math.floor((success / totalGroups) * 100);
}

let TT = ['test1a', 'test2', 'test1b', 'test1c', 'test3']
let RR = ['asdasd', 'OK', 'Wrong', 'OK', 'asdasd']

let result = solution(TT, RR);
console.log('result', result);
