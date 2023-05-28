# Sehee-Lee-01.github.io

🪪 Making My Resume & Portfolio Project by using HTML, CSS, Javascript.

## 🤖 Toy Project: 이력서, 포트폴리오 속성 간편 업데이트

### 🌟 목표

- 취준동안 계속 업데이트 되는 이력서와 포트폴리오 내용을 쉽게 업로드하고 관리 하자!

### 🔎 배경

- **웹클라이언트 컴퓨팅 수업 복습**
  - 구체적으로 배운 javascript, HTML, CSS를 써보기 위해
  - _시험 준비를 위해..._
- **취업 준비 시작**
  - 취업 준비를 위해 이력서와 포트폴리오를 만들어야한다.
  - Github Page를 이용해 커스터마이징 해보고 싶었다.
    - 기존에 만들어진 플랫폼 보다는 내가 직접 관리하고 수정할 수 있도록 이력서와 포트폴리오 페이지를 직접 만들고 싶었다.

### 🧾 개발 방법

- 윈도우 환경에서 `tree /a /f` 명령어 실행 결과

### 🗃️ 카데고리별 json 구조

1. 자기 소개 링크(contact.json)

```
{
  "name": "링크 이름",
  "url": "url 링크"
},
```

2. 경력(career.json)

```
{
  "name": "직무명",
  "agency": "기관",
  "date": "활동 기간",
  "work": "활동 내역",
  "keyword": "사용한 기술 키워드"
},
```

3. 프로젝트(project.json)

```
{
  "thumbnail": "썸네일",
  "name": "프로젝트 이름",
  "summary": "프로젝트 간단 설명",
  "date": "개발 기간",
  "scale": "참여 인원",
  "role": "역할",
  "keyword": "사용한 기술 키워드",
  "work": "주요 개발 내용, 활동",
  "trouble": "문제 해결 경험",
  "result": "성과",
  "url": "저장소 링크"
},
```

4. 수상 내역(award.json)

```
{
  "name": "대회명",
  "section": "부문",
  "award": "상 종류",
  "date": "취득 날짜",
  "agency": "인증 기관"
},
```

5. 활동(activity.json)

```
{
  "name": "역할, 직무 이름",
  "agency": "기관",
  "date": "활동 기간",
  "work": "활동 내역",
  "keyword": "사용한 기술 키워드"
},
```

6. 자격증(certificate.json)

```
{
  "name": "자격증명",
  "date": "활동 기간",
  "agency": "인증 기관"
},
```

7. 학력(education.json)

```
{
  "name": "학교명",
  "date": "재학 기간",
  "major": "전공"
}
```

### 트러블 슈팅

1. 로컬의 json file을 불러오기 위해 node.js의 fs 모듈 사용

```shell
Uncaught SyntaxError: Cannot use import statement outside a module (at indexjs:1:1)
```

- 해결방안: web에서 제공하는 fetch api 사용

```
  const dataBuffer  = fs.readFileSync(`data/${this.dataName}.json`);
```

- 참고 링크
  - <https://namhandong.tistory.com/99>

2. 참조링크 상대 경로

```
  fetch(`js/data/${name}.json`)
```
https://junior-datalist.tistory.com/193