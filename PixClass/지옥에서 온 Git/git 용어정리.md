# Git 용어정리
<br/>

> 기초용어
- git init : Git 저장소(repository)를 생성 , 여기에 작업할게요 라고 함
- git status : 현재 상태 확인
- git add : 다음 변경(commit)을 기록할 때까지 변경분을 모아놓기 위해(1차 준비? 과정) - git stage area > commit 하기 위한 대기 상태
- git commit :저장소의 Git 기록에 파일 변경 사항을 기록
- git commit -m "메세지": 커밋시 메세지 추가
- git commit -am : 커밋시 add + 메세지 추가(한번도 add 하지 않은 파일은 안됨)
<br/><br/>


> 기록
- git log : git에 기록한 내용 확인
- git log -p : git에 기록한 내용 상세확인(바뀐내용)
- git log --branches : 모든 브랜치의 기록 확인
- git log --decorate  : tag 정리
- git log --graph : 그래프 표시
- git log --oneline : 내용을 한줄로 표시
<br/><br/>

> 비교
- git diff 비교대상1..비교대상2 : 비교대상1과 비교대상2에 차이점을 표시(branch끼리도 비교 가능)
<br/><br/>

> 과거
- git reset 커밋1 --h(--hard) : 커밋1로 돌아가고 그 이후는 삭제 (삭제한 커밋 복구 가능)
<br/><br/>

>브랜치
- git branch : 브랜치 내역 및 사용 중인 브랜치 조회
- git branch 브랜치 : '브랜치'라는 새로운 브랜치 만들기
- git branch -d 브랜치 : '브랜치' 삭제
- git checkout 브랜치 : '브랜치'라는 브랜치로 브랜치 전환
- git checkout -b 브랜치 : '브랜치'라는 브랜치 생성 및 전환
- git merge master : 현재 브랜치에 master를 merge 시킴
- git stash : 현 브랜치 작업 중 다른 브랜치 작업을 해야 할 때 임시적으로 숨겨 타 브랜치에 영향이 가지 않도록 함(commit 안해도 됨)(add 한 파일만 가능)
- git stash apply : 임시 숨김처리 한 브랜치를 다시 복구
- git stash drop : 최신 stash 삭제
- git stash pop : apply + drop를 같이 함

