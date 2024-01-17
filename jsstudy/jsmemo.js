/* JSON 코딩평가 : 로컬스토리지를 활용한 메모장 만들기 */
// JS시험은 본 코딩평가로 대체합니다.
// 제출기한 : 1/12(일)
// 제출방법 : 완료 후 소스코드 압축하여 트렐로에 업로드
// jsmemo.html, jsmemo.js

// 화면 : 메모 등록화면, 메모 목록화면
// 기능
//   1. 메모리스트
//   2. 메모등록
//   3. 메모삭제
//   4. 메모수정
//   5. 메모상세
//   6. 메모검색(제목, 내용)

const memoList = {
    list: new Map(),
    getTitles() {
        return this.list.keys();
    },
    addMemoList(memo) {
        if (memo instanceof Memo)
            Memo.list.set(memo.title, memo);
    },
    deleteMemo(memo) {

    },
    getMemoList() {
        return this.list;
    },
    getMemoTitles() {
        return this.list.keys();
    }
}

class Memo {
    constructor(title, content) {
        this.title = title;
        this.content = content;
        this.date = Date();
        memoList.addMemoList(this);
    }
    get title() {
        return this.title;
    }
    set title(title) {
        this.title = title;
        this.date = Date();
    }
    get content() {
        return this.content;
    }
    set content(content) {
        this.content = content;
        this.date = Date();
    }

}
const str = `동일한 제목의 메모가 있습니다.
저장 시 데이터가 덮어쓰여집니다.
그래도 저장하시겠습니까?`;

$(function () {

    loadMemoList();
    $('#createBtn').on('click', () => {
        addMemo($('#title').val(), $('#content').text());
    });
});

function loadMemoList() {
    for (const item in localStorage) {
        console.log(item);
        // const obj = JSON.parse(item);
        // if (obj instanceof Memo) {
        //     Memo.addMemoList(obj);
        //     console.log('메모추가됨');
        // }
    }
    memoList.list
    listUp();
}

function addMemo(title, content) {
    // 동일 제목 있는지 체크
    if (Memo.getMemoList().has(title)) {
        if (confirm('동일한 제목의 메모가 있습니다.\덮어씌우시겠습니까?')) {
            // 저장 기능
            alert('확인버튼 누름');
        } else {
            // 메모 작성에 타이틀 인풋텍스트박스 포커스
            alert('취소버튼 누름');
        }
        return;
    }
    const memo = new Memo(title, content);
    localStorage.setItem(memo.title, JSON.stringify(memo));
    listUp(title);
    alert('메모가 등록되었습니다.');
}

function listUp(title) {
    $('#memoList').append(`<li class="memoLi">${title}</li>`).on('click', function () {
        MemoListclickEvent($(this).text());
    });
}

function MemoListclickEvent(title) {
    console.log(title);
}