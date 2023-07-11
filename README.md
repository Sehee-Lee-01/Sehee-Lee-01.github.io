# Sehee-Lee-01.github.io

🪪 Making My Resume & Portfolio Project by using HTML, CSS, Javascript.

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
