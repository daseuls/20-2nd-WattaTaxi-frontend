# [Wa:tta Taxi🚤](https://youtu.be/1TwI_AG3N6Y)

## 프로젝트 소개
- **마이리얼트립**을 모티브로 하여 항공권을 **수상택시 예약권**으로, 숙박을 **택시기사 리뷰페이지**로 기획을 더해 cloning.
- **프로젝트 기간**: 2021.05.24-2021.06.04
- **프로젝트 기획 포인트**
  1. 한강 수상택시라는 새로운 교통플랫폼인 Wa:tta Taxi를 날짜, 기간을 설정해 검색하고 예약, 나의 예약확인 페이지
  2. 타고 난 후 택시 기사님들을 평가하고, 별점을 통해 많은 사람들에게 정보를 줄 수 있는 신개념 교통 플랫폼
  
  <br>

## 팀소개

>  🚤 Wa:tta Taxi의 세가지 의미 
  1. 수상(Water)의 영국식 발음 오우타 => 와타 
  2. 와~따👍🏻(최고)택시
  3. 와! 타!(와서 타!) 택시



## 팀원

Front - 🧚🏻‍♀️ 김예슬, 🐬 이다슬, 🧔🏻 윤세용, 🙋🏻 최원근 (4명) <br>
Back - 💃🏻 박은혜, 🐑 양영건 (2명)



## 메인 서비스

> 핵심 강점 : 한강 수상택시의 모든 정보를 보여주는 New Generation 교통 플랫폼
1. 카카오톡을 통해 로그인이 가능합니다. 
2. 출발지, 도착지, 날짜별, 인원별, 좌석별로 수상택시를 검색할 수 있습니다. 
3. 검색 후 원하는 택시 회사, 가격별, 날짜별로 필터링해 수상교통권을 예약할 수 있습니다. 
4. 예약내역페이지에서 나의 예약 내역을 확인 할 수 있습니다. 
5. 별점 순, 리뷰 순으로 택시기사님들을 확인 할 수 있습니다. 
6. 택시 기사 별점을 통해 평가하고 후기를 남길 수 있습니다. 

<br>

# 적용 기술 및 구현 기능 ⚔️
## 기술 스택
- Front-End : React, React Router, React Hooks, Styled Component, JavaScript, CRA
- Back-End : Python, Django, My SQL
- Communication Tool : Trello, Git, GitHub, Slack

## 구현 기능 상세
### 로그인 페이지 
### 메인 페이지
>1. 메인페이지 UI 구현 (레이아웃 구현)
>2. 서버에서 각각의 필요한 데이터를 받아와 UI에 적용. (서버와의 통신) 
>3. 슬라이드 carousel 구현. (기능구현)
### 수상택시 검색 바
### 수상택시 예약 페이지
### 택시 기사 상세 페이지 (이다슬)
>1. 택시 기사 API받아와 기사님 정보 rendering
>2. 별점과 댓글 Post, Get Method를 통해 보내주고, 받아와 댓글창과 평균 별점 받아오기
>3. path parameter를 통해 메인페이지와 동적 라우팅 setting
### 예약 내역 페이지 (이다슬)
>1. 저장된 예약 내역 API fetch Setting을 통해 rendering

## 📝 프로젝트 회고록
- 김예슬
- 이다슬
- 윤세용
- 최원근

## 📢 Reference

- 이 프로젝트는 [마이리얼트립](https://www.myrealtrip.com/?utm_source=google&utm_medium=search_pc&utm_campaign=44443142579&utm_term=%EB%A7%88%EC%9D%B4%EB%A6%AC%EC%96%BC%ED%8A%B8%EB%A6%BD&gclid=Cj0KCQjwk4yGBhDQARIsACGfAeuAIh7kcexdFz1i6xNi2L-mwf0iC8-9ho5HQWvE8O7hbQPtukia4ocaApneEALw_wcB)를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진과 영화 정보 대부분은 영화 소개의 목적으로 영화 제작사에서 제공한 자료를 사용했습니다.
- 이 프로젝트에서의 영화별 장르는 임의로 설정한 것이며 실제와 무관합니다.


