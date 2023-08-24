fetch('http://openAPI.seoul.go.kr:8088/73716259566c65653534455853574d/json/SJWPerform/1/30')

.then(response => {
	if (!response.ok) {
		throw new Error(`에러: ${response.status}`);
}return response.json();})

.then(jsonData => {
const a = document.querySelector("#result");
const uniquePlaceNames = new Set();
let count = 0;
// 중복 없이 공연 이름을 저장    

jsonData.DATA.forEach(item => {
if (!uniquePlaceNames.has(item.place_name) && count < 10) {
            uniquePlaceNames.add(item.place_name);
            console.log(item.place_name); // 중복 없는 공연 이름 출력        
            console.log(item.start_date); // 시작 날짜 출력 (포맷팅 없이)        
            // 여기서 각 데이터를 사용하는 로직을 작성하면 됩니다.        
            a.innerHTML +=
            `<div><span>${count}번째 아이템</span>
            <p>공연이름 : ${item.title}</p>
            <p>시작날짜 : ${item.start_date}</p>
            <p>종료날짜 : ${item.end_date}</p>
            <p>상세url : ${item.perform_url}</p>
            <p>공연장소 : ${item.place_name}</p>
            <p>공개여부 :${item.isopennm}</p></div> `;
            count++;
        }
    });
})
.catch(error => {console.error(error);});