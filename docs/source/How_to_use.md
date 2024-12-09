# How to use

## **1) Project Download**

- **Clone the Project from GitHub**
  - Visit the [Sej-dule GitHub Repository](https://github.com/24-2-Sej-dule/Sej-dule).
  - Click **Code → Download ZIP** to download the ZIP file.
  - Use the following commands to clone the project:
  ```bash
  git clone https://github.com/24-2-Sej-dule/Sej-dule.git
  cd Sej-dule
  ```
- **Run the HTML File**
  - Open the `index.html` file in your browser.
  - This allows you to use the Sej-dule application.

## **2) Node.js and MongoDB Setup**

- **Install Node.js**
  - Use the following commands to install Node.js:
  ```bash
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
  nvm install --lts
  ```
- **Install and Run MongoDB**
  - Follow the [MongoDB Community Edition Installation Guide](https://www.mongodb.com/docs/manual/administration/install-community/) to install MongoDB.
  - Use the following command to start the MongoDB server:
  ```bash
  mongod --dbpath /path/to/your/database
  ```

## **3) Environment Variable Setup**

- **Create a `.env` File**
  - In the root directory of the project, create a `.env` file and add the following content:
  ```bash
  TOKEN_SECRET=Sej-dule-success
  ```

## **4) Install Packages and Run**

- **Install npm Packages**
  - Install the required packages for the project:
  ```bash
  npm i
  ```
- **Start the Project**
  - Use the following command to run the project:
  ```bash
  npm run start
  ```

## **5) Access Path**

- To access the project running on the local server, open your browser and go to the following URL:
  ```arduino
  http://localhost:3333/1-index.html
  ```

---

## 1) 프로젝트 다운로드

- GitHub에서 프로젝트 클론
  - [Sej-dule GitHub Repository](https://github.com/24-2-Sej-dule/Sej-dule)에 접속합니다.
  - Code → Download ZIP을 클릭하여 ZIP 파일을 다운로드합니다.
  - 아래 명령어를 사용하여 파일을 설치할 수 있습니다.
    ```bash
    git clone https://github.com/24-2-Sej-dule/Sej-dule.git
    cd Sej-dule
    ```
- HTML 파일 실행
  - `index.html` 파일을 브라우저에서 실행합니다.
  - 이를 통해 Sej-dule(셋둘)을 이용할 수 있습니다

## 2) Node.js 및 MongoDB 환경 설정

- node.js 설치
  - 아래 명령어를 사용하여 설치할 수 있습니다.
  ```bash
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
  nvm install --lts
  ```
- MongoDB 설치 및 실행 (전체 다 추가함)
  - [MongoDB Community Edition 설치 가이드](https://www.mongodb.com/ko-kr/docs/manual/administration/install-community/)를 참고하여 설치를 진행합니다.
  - 아래 명령어를 사용하여 MongoDB 서버를 실행합니다.
  ```bash
  mongod --dbpath /path/to/your/database
  ```

## 3) 환경 변수 설정

- `.env` 파일 생성
  - 프로젝트 최상위 디렉토리에 `.env` 파일을 생성하고 아래 내용을 추가합니다.

```bash
TOKEN_SECRET=Sej-dule-success
```

## 4) 패키지 설치 및 진행

- npm 패키지 설치
  - 프로젝트 실행에 필요한 패키지를 설치합니다.
  ```bash
  npm i
  ```
- 프로젝트 실행
  - 아래 명령어를 사용하여 프로젝트를 실행합니다.
  ```bash
  npm run start
  ```

## 5) 접속 경로

- 로컬 서버에서 실행된 프로젝트에 접속하려면 브라우저에서 다음 URL을 입력합니다.
  ```arduino
  http://localhost:3333/1-index.html
  ```
  ***
