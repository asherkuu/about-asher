# 최신버전의 yarn(berry) 사용 설정

yarn set version stable

# 패키지 설치

yarn

# 위에서 node_modules가 생긴다면 아래를 package.json에 추가

"packageManager": "yarn@3.1.1",

# 아래를 그냥 실행(.yarnrc.yml 에 pnp 내용 추가)

echo 'nodeLinker: "pnp"' >> .yarnrc.yml

# yarn typescript 플러그인 설정

yarn plugin import typescript
yarn add -D typescript
yarn

# 타입/모듈 추론을 위한 yarn berry의 vscode 세팅 (중요)

yarn dlx @yarnpkg/sdks vscode

# 개발모드로 띄워보기

yarn dev
