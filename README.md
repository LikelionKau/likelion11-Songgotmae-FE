# 🔉프로젝트 소개
> [항공대 멋쟁이사자처럼 11기 - 송곳매 프로젝트] 백엔드 레포지토리. <br/>

**멋쟁이사자처럼**은 국내에서 가장 많은 학생들이 활동하고 있는 전국 대학이 함께하는 연합 코딩 동아리입니다. ‘멋쟁이 사자처럼’은 **창업**과 **서비스 개발**에 대한 독보적인 교육을 제공합니다.
코딩을 모르는 분이라도 누구나 참여할 수 있으며, 그 무엇보다 **나의 아이디어**를 실현시키겠다는 열정이 중요합니다. 
<br/>

## 페이지 및 기능 소개
### 1️⃣ 메인
한국항공대학교 학우분들이 청원을 하거나 청원을 확인할 수 있는 메인 페이지입니다.

### 2️⃣ 청원하기
한국항공대학교에서 하고싶은 얘기가 있는 학우분들이 들어와서 청원을 열어주실 페이지입니다.

### 3️⃣ 청원 게시판
커뮤니티 페이지 내의 게시글들을 열람하는 기능입니다. 게시글마다 좋아요를 통해 인기 게시글을 확인할 수 있습니다.

### 4️⃣ VOC 게시판
송곳매 회원으로 등록된 구성원이 건의사항을 기재할 수 있는 게시판입니다. 더 나은 서비스 제공을 위한 소중한 의견들을 수렴합니다.

### 5️⃣ 마이페이지
송곳매 회원으로 등록된 구성원이 자신의 상세 정보를 열람하거나 수정하고 자신이 작성하거나 좋아요한 게시글과 댓글을 확인할 수 있는 페이지입니다.

### 6️⃣ 소셜로그인  
구글, 학교 메일을 통해 회원가입하고 로그인하는 기능입니다.

<br/>

## 👩🏻‍💻 팀원 소개

## 백엔드 팀 소개
|황제철|김진우|신윤종|
|:-:|:-:|:-:| 
|사진|사진|사진| 
|[]()|[]()|[@Vettel22](https://github.com/Vettel22)|
<br/>
## 프론트엔드 팀 소개
|김진영|이희정|안서현|
|:-:|:-:|:-:| 
|사진|사진|사진|
|[]()|[]()|[]()|
<br/>



|이희정|황제철|김진영|김진우|안서현|신윤종
|:-:|:-:|:-:|:-:|:-:|:-:|
|[]()|[]()|[]()|[]()|[]()|[@Vettel22](https://github.com/Vettel22)|
<br/>


## 🛠 기술 스택
|역할|종류|
|-|-|
|Framework|![Spring Boot](https://img.shields.io/badge/springboot-6DB33F.svg?style=for-the-badge&logo=springboot&logoColor=white)|
|Deploy|![Amazon EC2](https://img.shields.io/badge/Amazon_EC2-FF9900?style=for-the-badge&logo=AmazonEC2&logoColor=white)|
|Database|![MySQL](https://img.shields.io/badge/MySQL-4479A1.svg?style=for-the-badge&logo=MySQL&logoColor=white)  ![RDS](https://img.shields.io/badge/Amazon_RDS-527FFF.svg?style=for-the-badge&logo=AmazonRDS&logoColor=white) |
|Programming Language|![Java](https://img.shields.io/badge/JAVA-007396.svg?&style=for-the-badge&logo=JAVA&logoColor=white)|
|Cloud Storage|![Amazon S3](https://img.shields.io/badge/-Amazon_S3-569A31?style=for-the-badge&logo=AmazonS3&logoColor=white)|
|Version Control|![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) |

<br />

## 📂 폴더 구조
```
│  📂.gitignore
│  📂build.gradle
│  📂Dockerfile
│  📂gradlew
│  📂gradlew.bat
│  📂logs
│  📂settings.gradle
│  📂useFlow.md
│  
├─📂.github
│  └─📂workflows
│          
├─📂.gradle
│  │  
│  ├─📂8.2.1
│  │  │  
│  │  ├─📂checksums
│  │  │      
│  │  ├─📂dependencies-accessors
│  │  │      
│  │  ├─📂executionHistory
│  │  │      
│  │  ├─📂fileChanges
│  │  │      
│  │  ├─📂fileHashes
│  │  │      
│  │  └─📂vcsMetadata
│  ├─📂buildOutputCleanup
│  │      
│  └─📂vcs-1
│          
├─📂.idea
│  │  
│  └─📂modules
│          
├─📂build
│  │  
│  ├─📂classes
│  │  └─📂java
│  │                          
│  ├─📂generated
│  │  └─📂sources
│  ├─📂libs
│  │      
│  ├─📂reports
│  │  └─📂tests
│  │                  
│  ├─📂resources
│  │  └─📂main
│  │          
│  ├─📂test-results
│  │  └─📂test
│  │              
│  └─📂tmp
│      ├─📂bootJar
│      │      
│      ├─📂compileJava
│      │              
│      ├─📂compileTestJava
│      ├─📂jar
│      │      
│      └─📂test
├─📂gradle
│  └─📂wrapper
│          
├─📂src
│  ├─📂main
│  │  ├─📂java
│  │  │                              
│  │  └─📂resources
│  │
│  └─📂test
│      └─📂java
│                              
└─📂target
```
## 📺 화면 구성
|페이지 이름|페이지 화면|
|:-:|:-:|
|메인페이지|![메인페이지]|

##🎶JAVASCRIPT기능
|GET /api/vi/posts/{postId}|![게시글 하나의 디테일을 조회할 수 있는 기능](https://img.shields.io/badge/springboot-6DB33F.svg?style=for-the-badge&logo=springboot&logoColor=white)|
|PUT /api/v1/posts/{postId} |![게시물 수정](https://img.shields.io/badge/Amazon_EC2-FF9900?style=for-the-badge&logo=AmazonEC2&logoColor=white)|




