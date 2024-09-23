# Studio EDDA

### 프로젝트 구조

```
├── public
│   └── images: 아이콘 및 메타 데이터에 사용할 이미지를 저장
└── src
├── assets
│   ├── fonts: 프로젝트에 사용할 폰트 저장
│   └── images: 프로젝트에 사용할 이미지 저장
├── components
│   └── commons: 페이지에 상관없이 공통적으로 사용할 컴포넌트를 저장
├── consts: 프로젝트 전반적으로 사용되는 상수를 저장
├── data: 공개해도 상관없는 정보들을 저장(파잃 형식은 `JSON`)
├── hooks: 프로젝트에 사용되는 React Hook을 저장. 파일명은 `*.hook.ts`
├── pages: 페이지 컴포넌트를 저장
├── styles: 스타일드 컴포넌트를 저장 파일명은 `*.style.ts`
├── test: util 함수 유닛, 통합 테스트 코드를 저장. (컴포넌트, E2E 테스트 X) 파일명은 `*.test.ts`
└── utils: 프로젝트에서 사용되는 공용 함수를 저장. 파일명은 `*.util.ts`
```

### 코드 컨벤션

- 기본적으로 변수명은 카멜 케이스로 작성하되, 페이지 및 컴포넌트의 변수명은 파스칼 케이스로 작성한다.
- 변수명은 자주 사용되는 케이스를 제외하면 축약형을 사용하지 않는다. (`count => cnt`, `button => btn` (O), `title => t` (X))
- 함수명은 함수의 기능을 알 수 있도록 작성한다. (`handleClickButton`)
- 객체형 타입 선언은 `interface`로 하고, 그 외의 경우에는 `type`을 사용한다.
- `class`는 BEM 명명법을 사용한다. (Block\_\_Element--Modifier)
