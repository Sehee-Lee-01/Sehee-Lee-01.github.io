# Sehee-Lee-01.github.io

🪪 Making My Resume & Portfolio Project by using HTML, CSS, Javascript.

## 🤖 Toy Project: 이력서, 포트폴리오 정보 간편 업데이트

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

- **전체적인 구조**

  ```shell
  |   index.html
  |   LICENSE
  |   README.md # 프로젝트 설명
  |
  +---css
  |       style.css
  |
  +---etc # 카데고리별 DB 역할
  |       certificate.json
  |       contact.json
  |       education.json
  |       etc.json
  |       experience.json
  |       project.json
  |
  +---images
  \---js
          index.js
  ```

  - 윈도우 환경에서 `tree /a /f` 명령어 실행 결과

- **사용 방법(제작하면서 계속 업로드할 예정입니다!)**

  - 따로 데이터베이스나 서버를 운영하지 않고 로컬 환경에서 데이터를 추가하고 github에 push하여 업로드 하는 과정을 진행하려고 한다.
    1. 로컬 환경에서 구동되는 페이지에서 추가 버튼을 입력하고 각 카데고리 폼에 원하는 정보를 입력하면 etc/ 디렉토리 안의 입력한 정보가 해당하는 카테고리의 json 파일에 저장된다.(json 파일이 일종의 DB 역할이다.)
    2. 그 후 새로고침을 하면 추가된 정보가 지정된 양식으로 페이지에 나타나게 된다.
    3. 이후 push하면 github page에도 정보가 업데이트 된다.
  - 우선 추가 기능만 되는 것으로 진행할 예정이다.

- **카데고리별 데이터 속성**

1.  자기 소개 링크

    | 정보 | 설명        |
    | ---- | ----------- |
    | id   | 인덱스 번호 |
    | name | 링크 설명   |
    | url  | url 링크    |

2.  경력
    | 정보 | 설명 |
    | ---- | ----------- |
    | id | 인덱스 번호 |
    | name | 링크 설명 |
    | url | url 링크 |
3.  프로젝트
    | 정보 | 설명 |
    | ---- | ----------- |
    | id | 인덱스 번호 |
    | name | 링크 설명 |
    | url | url 링크 |
4.  자격증
    | 정보 | 설명 |
    | ---- | ----------- |
    | id | 인덱스 번호 |
    | name | 링크 설명 |
    | url | url 링크 |
5.  교육/학력
    | 정보 | 설명 |
    | ---- | ----------- |
    | id | 인덱스 번호 |
    | name | 링크 설명 |
    | url | url 링크 |
6.  외부 기타 활동
    | 정보 | 설명 |
    | ---- | ----------- |
    | id | 인덱스 번호 |
    | name | 링크 설명 |
    | url | url 링크 |
