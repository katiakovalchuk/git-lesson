

function grid(N) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    if (N < 0) return null;

    const rows = [];
    for (let i = 0; i < N; i++){
        const row = [];
        for (let j = 0; j < N; j++){
            const idx = (i + j) % alphabet.length;
            row.push(alphabet[idx]);
        }
        rows.push(row.join(' '));
    }

    return rows.join('\n')
}

