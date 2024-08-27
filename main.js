function activate(option) {
    document.getElementById('one').classList.remove('active1');
    document.getElementById('two').classList.remove('active2');
    document.getElementById('three').classList.remove('active3');

    if (option === 1) {
        document.getElementById('one').classList.add('active1');
    } else if (option === 2) {
        document.getElementById('two').classList.add('active2');
    } else if (option === 3) {
        document.getElementById('three').classList.add('active3');
    }
}