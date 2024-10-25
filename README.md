# 스크롤 연습

비율 : 부분/전체

ex1) 이미지 번호 변경 비율
이미지 번호 / 총 이미지 갯수

ex2) 스크롤 진행도
현재 스크롤 위치 / 전체 스크롤 가능거리

ex3) 0 ~ 1비율 :: const ratio = Math.floor(부분 / 전체);

ex4) 백분율 :: const percentage = Math.floor((부분 / 전체) \* 100);

## 1. SECTION 01

1. 현재 이미지 번호(currentImage)의 state를 만들고 총 이미지 갯수의 변수(totalImages)를 만들어 스크롤에 따라 이미지의 번호(setCurrentImage에 바뀌는 번호를 저장)를 변경하세요.

### 1. Framer로 할 경우

- 스크롤 진행도가 0 ~ 0.3 일때 이미지 번호가 0 ~ 11

Tip1. on("change", callback)는 MotionValue가 변경될 때마다 특정 작업을 수행할 수 있게 해줌

```bash
currentImageIndex.on("change", (latest) => {
  console.log(`스크롤 진행도: ${latest}`);
});
```

따라서 currentImageIndex가 변경될 때마다 특정 작업을 수행할 수 있음

### 2. GSAP으로 할 경우

Tip1. 스크롤트리거에는 onUpdate를 사용해보세요.
Tip2. useGsapScrollTrigger 훅을 사용해보세요.

```bash
ScrollTrigger.create({
  trigger: ".element", // 트리거로 지정할 요소
  onUpdate: (self) => {
    console.log(`스크롤 진행도: ${self.progress}, 스크롤 방향: ${self.direction}`);
  }
});
```

2. 각 div가 순차적으로 올라오게 하세요.

Y축으로 브라우저 밖(100%)에서 안쪽(0%)으로 올라오게 하세요.
1번째 div : 스크롤 진행도가 0.3 ~ 0.35 일때 위치가 0% ~ 100%
2번째 div : 스크롤 진행도가 0.35 ~ 0.4 일때 위치가 0% ~ 100%
3번째 div : 스크롤 진행도가 0.4 ~ 0.45 일때 위치가 0% ~ 100%
4번째 div : 스크롤 진행도가 0.45 ~ 0.5 일때 위치가 0% ~ 100%

---

## 2. SECTION 02

1. text를 배열로 만들어 스크롤에 따라 각 글자마다 투명도를 조절하세요.

Hint. map안에서 useTransform을 사용해보세요.

- 스크롤 진행도가 0.6 ~ 0.7 일때 한 글자씩 투명도가 0 ~ 1

! React Hook은 반드시 컴포넌트의 최상위 레벨에서 호출되어야 하기 때문에 에러발생
-> 작동은 하기 때문에 시간이 남는 분들은 다른 방식으로 코드를 작성해주세요.

2. 원이 크기가 변하고 반시계방향으로 2바퀴 회전하게 하세요.

- 스크롤 진행도가 0.3 ~ 0.5 일때 원의 크기가 0 ~ 100%
- 스크롤 진행도가 0.3 ~ 0.5 일때 원이 회전

---

## 3. SECTION 03

1. 이미지들이 가로스크롤로 움직이게 하세요.

- 회전각도에 따라 이미지들이 살짝 회전하게 해보세요.

---

## 4. SECTION 04

1. 스크롤에 따라 polyline이 그려지게 해보세요.

- 스크롤 진행도가 0.3 ~ 0.4 일때 pathLength가 0 ~ 1
  (CSS에서 pathLength가 0이면 svg가 안보이고 1이면 보입니다.)

2. 이미지의 투명도는 스크롤에 따라 0 ~ 1로 변경하세요.

- 스크롤 진행도가 0.5 ~ 0.6 일때 이미지의 투명도가 0 ~ 1
