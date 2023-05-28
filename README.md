# Sehee-Lee-01.github.io

🪪 Making My Resume & Portfolio Project by using HTML, CSS, Javascript.

## 🤖 Toy Project: 이력서, 포트폴리오속성 간편 업데이트

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
  |       activity.json
  |       award.json
  |       career.json
  |       certificate.json
  |       contact.json
  |       education.json
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
    1. 로컬 환경에서 구동되는 페이지에서 추가 버튼을 입력하고 각 카데고리 폼에 원하는속성를 입력하면 etc/ 디렉토리 안의 입력한속성가 해당하는 카테고리의 json 파일에 저장된다.(json 파일이 일종의 DB 역할이다.)
    2. 그 후 새로고침을 하면 추가된 속성이 지정된 양식으로 페이지에 나타나게 된다.
    3. 이후 push하면 github page에도속성가 업데이트 된다.
  - 우선 정보 **추가 기능**만 되는 것으로 진행할 예정이다.

### 🗃️ 카데고리별 데이터 속성

1.  자기 소개 링크(contact.json)

    | 속성 | 설명        |
    | ---- | ----------- |
    | id   | 인덱스 번호 |
    | name | 링크 설명   |
    | url  | url 링크    |

2.  경력(career.json)

    | 속성    | 설명               |
    | ------- | ------------------ |
    | id      | 인덱스 번호        |
    | date    | 활동 기간          |
    | agency  | 기관               |
    | name    | 역할, 직무 이름    |
    | work    | 활동 내역          |
    | keyword | 사용한 기술 키워드 |

3.  프로젝트(project.json)

    | 속성    | 설명                 |
    | ------- | -------------------- |
    | id      | 인덱스 번호          |
    | title   | 프로젝트 이름        |
    | summary | 프로젝트 간단 설명   |
    | date    | 개발 기간            |
    | group   | 그룹 설명            |
    | scalr   | 참여 인원            |
    | role    | 역할                 |
    | keyword | 사용한 기술 스택     |
    | work    | 주요 개발 내용, 활동 |
    | trouble | 문제 해결 경험       |
    | result  | 성과                 |
    | url     | 저장소 링크          |

4.  수상 내역(award.json)

    | 속성    | 설명        |
    | ------- | ----------- |
    | id      | 인덱스 번호 |
    | name    | 대회명      |
    | section | 부문        |
    | award   | 상 종류     |
    | date    | 취득 날짜   |
    | agency  | 인증 기관   |

5.  활동/교육(activity.json)

    | 속성    | 설명               |
    | ------- | ------------------ |
    | id      | 인덱스 번호        |
    | date    | 활동 기간          |
    | agency  | 기관               |
    | name    | 역할, 직무 이름    |
    | work    | 활동 내역          |
    | keyword | 사용한 기술 키워드 |

6.  자격증(certificate.json)

    | 속성   | 설명        |
    | ------ | ----------- |
    | id     | 인덱스 번호 |
    | name   | 자격증명    |
    | date   | 취득 날짜   |
    | agency | 인증 기관   |

7.  학력(education.json)

    | 속성  | 설명        |
    | ----- | ----------- |
    | id    | 인덱스 번호 |
    | name  | 학교명      |
    | date  | 재학 기간   |
    | score | 학점        |
    | major | 전공        |
