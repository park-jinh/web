var _a, _b, _c, _d, _e, _f, _g;
/**
 * 메모 데이터를 저장할 클래스
 * @class
 */
var Memo = /** @class */ (function () {
    function Memo(title, content) {
        this.type = 'JSMemo';
        this.title = title;
        this.content = content;
    }
    return Memo;
}());
/**@description 메모리스트를 저장할 배열 */
var memoArray = [];
// Dom요소 선택 부분
var any;
var searchText = document.getElementById('searchInput');
var createTitle = document.getElementById('createTitle');
var createContent = document.getElementById('createContent');
var createWrap = document.getElementById('createWrap');
var memoTitleTag = document.querySelector('#memoWrap > h2');
var memoContentTag = document.getElementById('memoContent');
console.log(searchText, createTitle, createContent, createWrap, memoTitleTag, memoContentTag);
// 로컬스토리지에서 memo불러와 memoArray에 저장
function loadMemoArray() {
    memoArray.splice(0);
    var item;
    for (var key in localStorage) {
        if (localStorage.hasOwnProperty(key) && (item = localStorage.getItem(key))) {
            var obj = JSON.parse(item);
            if (obj.type == 'JSMemo')
                memoArray.push(obj);
        }
    }
    console.log('로드 메모어레이', memoArray);
    insertArrayToHTML(memoArray);
}
;
loadMemoArray();
// 메모등록 버튼 클릭 시 이벤트 추가
(_a = document.getElementById("regist")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    createTitle.value = '';
    createContent.value = '';
    createWrap.style.display = 'block';
});
// 등록창에서 확인 버튼 눌렀을 때
(_b = document.getElementById('createBtn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var title = createTitle.value;
    var content = createContent.value;
    if (title != '' && content != '') {
        registMemo(title, content);
    }
    else
        alert('제목과 내용을 입력해주세요!');
});
// 등록창에서 취소 버튼 클릭 시
(_c = document.getElementById('cancleBtn')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () { createWrap.style.display = 'none'; });
// 리스트에서 메모 클릭 시
(_d = document.getElementById('memoList')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function (event) {
    var _a, _b;
    var target = event.target;
    if (target instanceof HTMLLIElement) {
        var title = target.textContent;
        if (title) {
            memoTitleTag.textContent = title;
            memoContentTag.value = (_b = (_a = exists(title)) === null || _a === void 0 ? void 0 : _a.content) !== null && _b !== void 0 ? _b : '오류';
        }
    }
});
// 리스트에서 검색 버튼 클릭 시
(_e = document.getElementById('searchButton')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', function () {
    if (searchText.value) {
        var reg_1 = new RegExp(searchText.value, 'i');
        var result = memoArray.filter(function (memo) { return reg_1.test(memo.title) || reg_1.test(memo.content); });
        if (result.length != 0) {
            insertArrayToHTML(result, true);
        }
        else {
            alert('검색 결과 없음');
            insertArrayToHTML(memoArray, true);
            searchText.value = '';
            searchText.focus();
        }
    }
    else {
        alert('검색할 문자를 입력하세요');
        searchText.focus();
    }
});
// 메모상세 창에서 수정 버튼 클릭 시
(_f = document.getElementById('changeBtn')) === null || _f === void 0 ? void 0 : _f.addEventListener('click', function () {
    var _a;
    var title = memoTitleTag.textContent;
    if (title) {
        deleteMemo((_a = memoTitleTag.textContent) !== null && _a !== void 0 ? _a : '없음');
        registMemo(title, memoContentTag.value);
    }
});
// 메모상세 창에서 삭제 버튼 클릭 시
(_g = document.getElementById('deleteBtn')) === null || _g === void 0 ? void 0 : _g.addEventListener('click', function () {
    var _a;
    deleteMemo((_a = memoTitleTag.textContent) !== null && _a !== void 0 ? _a : '');
});
// 새 메모 등록
function registMemo(title, content) {
    if (exists(title)) {
        if (!confirm('동일한 제목의 메모가 있습니다.\n덮어씌우시겠습니까?')) {
            // 취소 버튼 누름
            createTitle.focus();
            return;
        }
        else {
            // 확인 버튼 누름
            deleteMemo(title);
        }
    }
    var memo = new Memo(title, content);
    memoArray.push(memo);
    localStorage.setItem(title, JSON.stringify(memo));
    insertArrayToHTML([memo]);
    createWrap.style.display = 'none';
}
/**
 * HTML DOM에 넘겨준 메모 배열에 해당하는 li요소를 추가
 * @param array li에 추가할 메모배열
 * @param initializeOpt true: ul 초기화 후 li추가, false(defualt): 현재 li 뒤에 li요소 추가
 */
function insertArrayToHTML(array, initializeOpt) {
    var _a, _b;
    if (initializeOpt === void 0) { initializeOpt = false; }
    if (initializeOpt)
        (_a = document.getElementById('memoList')) === null || _a === void 0 ? void 0 : _a.replaceChildren();
    var fragment = document.createDocumentFragment();
    array.forEach(function (memo) {
        var li = document.createElement('li');
        li.innerText = memo.title;
        li.setAttribute('class', 'memoLi');
        fragment.appendChild(li);
    });
    (_b = document.getElementById('memoList')) === null || _b === void 0 ? void 0 : _b.append(fragment);
}
/**
 * 입력한 title을 가진 메모가 존재하는지 검사하는 함수
 * @param title 검색할 제목
 * @returns 있으면 해당 Memo, 없으면 null 반환
 */
function exists(title) {
    var result = null;
    for (var _i = 0, memoArray_1 = memoArray; _i < memoArray_1.length; _i++) {
        var memo = memoArray_1[_i];
        if (memo.title == title) {
            result = memo;
            break;
        }
    }
    return result;
}
/**
 * memoArray, localStorage, html에서 title이 같은 memo를 제거하는 함수
 * @param title 지울 메모의 제목
 */
function deleteMemo(title) {
    memoArray = memoArray.filter(function (memo) { return (memo.title != title); });
    localStorage.removeItem(title);
    var lis = document.querySelectorAll('.memoLi');
    lis.forEach(function (li) {
        var _a;
        if (li.innerText === title)
            (_a = document.querySelector('#memoList')) === null || _a === void 0 ? void 0 : _a.removeChild(li);
    });
}
