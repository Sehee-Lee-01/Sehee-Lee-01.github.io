# Sehee-Lee-01.github.io

🪪 Making My Resume & Portfolio Project by using HTML, CSS, Javascript.

## 개선 사항

### 1. JSON 파일을 이용한 데이터 관리

### 2. HTML/CSS/JS 사용에서 React/Typescript 사용

- 반복되는 코드가 많아지고 HTML 문서의 길이가 너무 길었다.
- 리엑트로는 몇 번 만에 수정할 수 있는 것을 여러번 일일이 수정해야했다.
- 유지보수 및 새로운 페이지 생성 등을 위해서 리엑트를 사용했다.
- JS 언어의 단점을 보완하고 디버깅을 좀 더 확실히 하고자 TS를 사용했다.
- 참고
  - [React Github Pages를 이용해 나만의 이력서 페이지 만들기](https://velog.io/@junghyeonsu/React-Github-Pages%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%B4-%EB%82%98%EB%A7%8C%EC%9D%98-%EC%9D%B4%EB%A0%A5%EC%84%9C-%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%A7%8C%EB%93%A4%EA%B8%B0-pm1t1a9a)

## 트러블 슈팅

1. 로컬의 json file을 불러오기 위해 node.js의 fs 모듈 사용

   ```shell
   Uncaught SyntaxError: Cannot use import statement outside a module (at indexjs:1:1)
   ```

- 해결방안: fetch api 사용

  ```js
  const dataBuffer = fs.readFileSync(`data/${this.dataName}.json`);
  ```

- 상대 경로 설정

  ```
    fetch(`js/data/${name}.json`)
  ```

## 개선할 점

- 소개글 형식을 마크다운으로 쓸 수 있도록 변경
- 페이지 라우팅하여 더 많은 정보 보일 수 있도록 수정
