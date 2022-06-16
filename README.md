# challengersAssignment

챌린저스 과제 전형

### GettingStarted

```
//.env
API_URL=""

yarn run ios

yarn run android
```

### 활용 패키지

- react-native
- react-navigation
- styled-component
- redux
- react-query
- typescript

## 기능 명세

[기능 명세 위키](https://github.com/eamon3481/challengersAssignment/wiki/%EA%B8%B0%EB%8A%A5-%EB%AA%85%EC%84%B8)

## 일정

월 - 일정 및 세팅 + 네비게이션 설정

화 - api 연결 및 챌린지 목록 보기

수 - 장바구니 저장하기

목 - 참가중인 목록 저장하기

금 - 점검 및 리팩토링

### API

- 챌린지 목록 조회 API

  - Parameters
    - category(optional): 운동 | 식습관 | 생활 | 정서 | 취미 | 환경
    - offset(optional): 기본값 0
    - limit(optional): 기본값 20

  ```tsx
  type response = {
    type: 'partner' | 'official';
    company: {
      id: number;
      name: string;
    };
    category: '운동' | '식습관' | '생활' | '정서' | '취미' | '환경';
    registerCount: number;
    registerEndDate: string;
    registerStartDate: string;
    endDate: string;
    startDate: string;
    title: string;
    thumbnailImageUrl: string;
    id: number;
  };
  ```

[Troubleshooting](https://github.com/eamon3481/challengersAssignment/wiki/Troubleshooting)
