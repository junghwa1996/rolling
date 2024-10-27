# hooks

- 커스텀 훅을 관리하는 폴더

## 훅 파일 별 사용 방법

### useFetchData.js

- **GET 요청**을 수행하는 커스텀 훅
- 사용 예시:

```javascript
const { data: 별칭, loading, error } = useFetchData(API함수, [의존성 배열]);
```

### useApiAction.js

- **POST, PUT, PATCH, DELETE 요청**을 수행하는 커스텀 훅
- 사용 예시:

```javascript
const { loading, error, executeApiAction } = useApiAction(API함수);

await executeApiAction(전송할 데이터);
```

- 일반적인 사용 예시:

```javascript
const 이벤트함수 = () => {
  await executeApiAction(전송할 데이터);
}
```
