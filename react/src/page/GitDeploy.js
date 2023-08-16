import React from 'react'

function GitDeploy() {
  return (
    <>
        <h2>Git설치 및 인증</h2>
        * https://git-scm.com 접속(window 64 download)<br />
        * 설치 후 인증<br />
          ㄴ git config --global user.name 'git계정 이름'<br />
          ㄴ git config --global user.email 'git계정 메일'<br />

        <h2>Github 레파지토리 생성 및 파일 업로드</h2>
        * git init  (현재 작업폴더를 github에 연결) <br />
        * git add 파일명 / git add . (수정된 모든 파일) <br />
        * git commit -m '기록할문자' (add할 파일들을 스테이지에 올림)<br />
        * git branch main (사용자)<br />
        * git remote add origin http://레파지토리 URL<br />
          ㄴ git remote set-url origin http://레파지토리 URL<br />
          ㄴ git remote -v (연결된 레파이지토리 URL확인)<br />
        * git push origin main (레파지토리에 업로드)<br />
        * git pull origin main (레파지토리 내용을 로컬에 내려받기)<br />
        * git status (현재 상태 확인)<br />

        <h2>gh-pages 배포</h2>
        * 모듈설치 ( npm i gh-pages ) <br/>
        * package.json 설정 <br/>
          ㄴ "homepage": "https://m-kyu.github.io/react-basic"<br/>
          ㄴ "scripts": &#123; "deploy" : "gh-pages -d build" &#125;<br/><br/>

        * App.js (basename설정) <br />
        * BrowserRouter에 basename="/레파지토리명"<br /><br />

        * 터미널창 (npm run build > npm run deploy) <br /><br />


        
        

    </>
  )
}

export default GitDeploy