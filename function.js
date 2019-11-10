let kotodamanNumber = 1;
let pushedKotodamans = [];
let bottom = 0;

function enterKotodamanName(){
    if( window.event.keyCode == 13 ){
        window.event.preventDefault();
        if (kotodamanNumber < 13) {
            let elementID = 'kotodaman' + kotodamanNumber + '_name';
            document.getElementById(elementID).innerHTML = document.forms.id_form1.input.value;
            kotodamanNumber++;
            if (kotodamanNumber == 13) {
                document.getElementById('sentence').innerHTML = "1ターン目の1番目に出したコトダマンのボタンを押してください．";
            }
        }
        return false;
    }
}

function getKotodaman(number) {
    if (kotodamanNumber > 12 && pushedKotodamans.length < 8) {
        let elementID = 'kotodaman' + number + '_name';
        pushedKotodamans.push(document.getElementById(elementID).innerHTML);
        //console.log(pushedKotodamans);

        if (pushedKotodamans.length < 8) {
            let length = pushedKotodamans.length;
            document.getElementById('sentence').innerHTML = (parseInt(length / 4) + 1) + "ターン目の" + ((length % 4) + 1) + "番目に出したコトダマンのボタンを押してください．";
        } else {
            document.getElementById('sentence').innerHTML = "4ターン目の最後に引いたコトダマンのボタンを押してください．";
        }
    } else if (kotodamanNumber > 12 && pushedKotodamans.length == 8) {
        findBottom(number);
    }
}

function findBottom(number) {
    let ID = 'kotodaman' + number + '_name';
    for (let i = 0; i < 8; i++) {
        if (pushedKotodamans[i] == document.getElementById(ID).innerHTML) {
            bottom = i;
            break;
        }
    }

    let turn = '';
    if (bottom > 3) {
        turn = '偶数';
    } else {
        turn = '奇数';
    }

    let order = (bottom % 4) + 1;

    document.getElementById('sentence').innerHTML = turn + "ターンの" + order + "番目に出したコトダマンが次の偶数ターンのボトムになります．";
}

function resetAll() {
    kotodamanNumber = 1;
    pushedKotodamans = [];
    bottom = 0;
    document.getElementById('sentence').innerHTML = "パーティのコトダマンの名前を入力してください．";

    for (let i = 1; i <= 12; i++) {
        let ID = 'kotodaman' + i + '_name';
        document.getElementById(ID).innerHTML = 'コトダマン' + i;
    }
}

function resetExceptParty() {
    pushedKotodamans = [];
    bottom = 0;
    document.getElementById('sentence').innerHTML = "1ターン目の1番目に出したコトダマンのボタンを押してください．";
}

function undo() {
    if (kotodamanNumber < 12 && kotodamanNumber > 1) {
        kotodamanNumber--;
    }
}


