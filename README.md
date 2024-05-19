# ddalgak

MBTI 기반 여행지 추천서비스
1. 서비스설명
사용자에게 12가지 질문을 통해 데이터를 수집 후 수치화하여 1) MBTI와 2) 알맞은 도시 여행지를 추천합니다.
2. 서비스화면 예시
게임처럼 지루하지 않게 12가지 질문을 통해 데이터를 수집합니다.

![image](https://github.com/jennkim0210/ddalgak/assets/131511782/33ae0a31-fa36-4669-a50c-328723fce038)


질문의 답변은 2가지 중 한가지만 선택할 수 있으며 답변은 8가지 항목에 맞게 처리 후 퍼센트가 부여됩니다. 

![image](https://github.com/jennkim0210/ddalgak/assets/131511782/ea09a0a0-aea3-4308-a1d6-22493fef388d)

분석을 통해 여행 MBTI와 좋아할 여행지를 나라-도시 순으로 상위 2개만 제시합니다.
사용자가 원하지 않은 결과가 나오면 다시 처음으로 돌아갈 수 있습니다. 

![image](https://github.com/jennkim0210/ddalgak/assets/131511782/70654a35-4629-45e0-aad5-449db092b4a7)


	
여행지 정보를 클릭하면 국가 -> 도시 순으로 제시되며, 각 도시의 대표여행지, 맛집, 카페 등의 정보를 제공합니다. 

![image](https://github.com/jennkim0210/ddalgak/assets/131511782/b6280b2c-60d8-49db-b512-8d89a7d92926)




3. MBTI 분석 방법과 여행지 추천 알고리즘 구현 방법 예시
1) MBTI Test
- MBTI를 약식으로 파악할 수 있는 12개의 문항을 구상
- 여행에 관련된 문항으로 구성
- MBTI 유형, 해당 유형의 여행지 적절한 여행지 정보를 제공
- 선택지에 따라 점수를 더하고 빼며 각 항목을 음수와 양수로 판단하여 결과
- 결과로 나온 MBTI를 User model에 반영

2) 여행지 추천 알고리즘
- MBTI(16종류)에 따라 좋아할 만한 여행지 장소를 나누고, 해당 장소 중 상위 2곳을 제공

3) MBTI와 여행지의 매칭 방법
- 현재 서비스 중인 여행플랫폼 등에서 키워드를 추출
 
- 추출한 키워드를 형용사 명사 등의 단어로 직접 분류
 
- 해당 키워드와 여행지를 매칭한 후 MBTI에 적절한 여행지를 사용자에게 최종적으로 제시

4) 활용 알고리즘: KNN 알고리즘
(1) 16가지의 MBTI의 요소인 (외향성, 내향성, 이성적, 감성적, 상상력, 현실성, 계획성, 충동성)의 %(퍼센트)를 부여
(2) 여행지 도시마다 MBTI와 동일한 요소 6가지로 %(퍼센트)를 부여
(3) 사용자로부터 받은 정보를 통해 MBTI정보 뿐만 아니라 각 MBTI의 %(퍼센트)까지 확인 후 여행지 데이터 중   가장 근접한 거리의 2장소를 추천 










5) 참고 오픈소스
https://github.com/park-gb/wine-classification-rfc/blob/main/src/wine_classification_rfc.ipynb
- 디시전트리
https://github.com/holllang/swyg_RecSys/blob/main/README.md
- 유사도추론 
https://github.com/threegenie/knn_project/blob/main/Project%20PPT.md
- KNN모델을 통한 키워드 추출 및 수치화
https://m.webtour.com/gevent/mbti/
- 유사서비스 사례
https://ko.wikipedia.org/wiki/5%EA%B0%80%EC%A7%80_%EC%84%B1%EA%B2%A9_%ED%8A%B9%EC%84%B1_%EC%9A%94%EC%86%8C
- 성격요소활용 참고사항
https://github.com/deepseasw/caltech101-image-cnn-classification/blob/master/Image%20CNN%20Classification.ipynb
- 사진모델링 참고
https://github.com/dearsyjang/BeTravelic?tab=readme-ov-file#%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C
- 유사서비스 참고
https://github.com/wjddls0828/traveling_recommendation/tree/main
- 유사서비스 및 모델링 참고
