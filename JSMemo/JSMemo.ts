/**
 * 메모 데이터를 저장할 클래스
 * @class
 */
class Memo {
    type: string;
    title: string;
    content: string;
    constructor(title:string, content:string){
        this.type = 'JSMemo';
        this.title = title;
        this.content = content;
    }
}

/**@description 메모리스트를 저장할 배열 */
let memoArray: Array<Memo> = [];

// Dom요소 선택 부분
const searchText = document.getElementById('searchInput') as HTMLInputElement;
const createTitle = document.getElementById('createTitle') as HTMLInputElement;
const createContent = document.getElementById('createContent') as HTMLTextAreaElement;
const createWrap = document.getElementById('createWrap') as HTMLDivElement;
const memoTitleTag = document.querySelector('#memoWrap > h2') as HTMLHeadingElement;
const memoContentTag = document.getElementById('memoContent') as HTMLTextAreaElement;

console.log(searchText,createTitle,createContent,createWrap,memoTitleTag,memoContentTag);

// 로컬스토리지에서 memo불러와 memoArray에 저장
function loadMemoArray(){
    memoArray.splice(0);
    let item:any;
    for(const key in localStorage){
        if(localStorage.hasOwnProperty(key) && (item = localStorage.getItem(key))){
            const obj = JSON.parse(item);
            if(obj.type=='JSMemo')
                memoArray.push(obj);
        }
    }
    console.log('로드 메모어레이', memoArray);
    insertArrayToHTML(memoArray);
};
loadMemoArray();

// 메모등록 버튼 클릭 시 이벤트 추가
document.getElementById("regist")?.addEventListener('click', () => {
    createTitle.value = '';
    createContent.value = '';
    createWrap.style.display = 'block';
});

// 등록창에서 확인 버튼 눌렀을 때
document.getElementById('createBtn')?.addEventListener('click',()=>{
    const title = createTitle.value;
    const content = createContent.value;
    if(title!=''&&content!=''){
        registMemo(title,content);
    } else alert('제목과 내용을 입력해주세요!');
});

// 등록창에서 취소 버튼 클릭 시
document.getElementById('cancleBtn')?.addEventListener('click',()=>{createWrap.style.display = 'none';});

// 리스트에서 메모 클릭 시
document.getElementById('memoList')?.addEventListener('click',function(event) {
    const target = event.target;
    if(target instanceof HTMLLIElement){
        const title = target.textContent;
        if(title){
            memoTitleTag.textContent = title;
            memoContentTag.value = exists(title)?.content??'오류';
        }
    }
});

// 리스트에서 검색 버튼 클릭 시
document.getElementById('searchButton')?.addEventListener('click',()=>{
    if(searchText.value){
        const reg = new RegExp(searchText.value, 'i');
        const result = memoArray.filter((memo)=>reg.test(memo.title) || reg.test(memo.content))
        if(result.length != 0){
            insertArrayToHTML(result, true);
        } else {
            alert('검색 결과 없음');
            insertArrayToHTML(memoArray,true);
            searchText.value = '';
            searchText.focus();
        }
    } else {
        alert('검색할 문자를 입력하세요');
        searchText.focus();
    } 
});

// 메모상세 창에서 수정 버튼 클릭 시
document.getElementById('changeBtn')?.addEventListener('click',()=>{
    const title = memoTitleTag.textContent;
    if(title){
        deleteMemo(memoTitleTag.textContent??'없음');
        registMemo(title,memoContentTag.value);
    }
});

// 메모상세 창에서 삭제 버튼 클릭 시
document.getElementById('deleteBtn')?.addEventListener('click',()=>{
    deleteMemo(memoTitleTag.textContent??'')});

// 새 메모 등록
function registMemo(title:string, content:string){
    if(exists(title)){
        if (!confirm('동일한 제목의 메모가 있습니다.\n덮어씌우시겠습니까?')) {
            // 취소 버튼 누름
            createTitle.focus();
            return;
        } else {
            // 확인 버튼 누름
            deleteMemo(title);
        }
    }
    const memo = new Memo(title,content);
    memoArray.push(memo);
    localStorage.setItem(title,JSON.stringify(memo));
    insertArrayToHTML([memo]);
    createWrap.style.display = 'none';
}


/**
 * HTML DOM에 넘겨준 메모 배열에 해당하는 li요소를 추가
 * @param array li에 추가할 메모배열
 * @param initializeOpt true: ul 초기화 후 li추가, false(defualt): 현재 li 뒤에 li요소 추가
 */
function insertArrayToHTML(array:Memo[], initializeOpt = false) {
    if (initializeOpt)
        document.getElementById('memoList')?.replaceChildren();

    const fragment = document.createDocumentFragment();
    array.forEach((memo) => {
        const li = document.createElement('li');
        li.innerText = memo.title;
        li.setAttribute('class', 'memoLi');
        fragment.appendChild(li);
    });
    document.getElementById('memoList')?.append(fragment);
}

/**
 * 입력한 title을 가진 메모가 존재하는지 검사하는 함수 
 * @param title 검색할 제목
 * @returns 있으면 해당 Memo, 없으면 null 반환
 */
function exists(title:string):Memo|null{
    let result:Memo|null = null;
    for(const memo of memoArray){
        if(memo.title == title){
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
function deleteMemo(title:string) {
    memoArray = memoArray.filter((memo)=>(memo.title != title));
    localStorage.removeItem(title);
    const lis = document.querySelectorAll('.memoLi') as NodeListOf<HTMLLIElement>;
    lis.forEach((li) => {
        if (li.innerText === title)
            document.querySelector('#memoList')?.removeChild(li);
    });
}