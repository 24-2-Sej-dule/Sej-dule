# Contributing Guide 

## 1. 이슈 확인 및 등록 (Check and Create Issues)
- 기여를 시작하기 전에 GitHub의 이슈 탭에서 기존 이슈를 확인합니다.  
  Before contributing, check existing issues in the GitHub Issues tab.

- 새로운 기능 요청이나 버그 신고가 필요하면, 이슈에 문제나 기능의 목적, 구체적인 설명을 추가합니다.  
  If you need to request a new feature or report a bug, provide a clear and detailed description in the issue.

## 2. 브랜치 생성 규칙 (Branch Naming Rules)
- `main` 브랜치에서 직접 작업하지 말고, 각자의 브랜치를 생성하여 작업합니다.  
  Do not work directly on the `main` branch; create your own branch instead.

- 브랜치 이름은 본인 이름의 이니셜을 포함합니다.  
  Include your initials in the branch name (e.g., `feature/js-new-function`).

## 3. 코드 스타일 (Code Style)
- **HTML, CSS, JavaScript**를 사용하며, VS Code를 사용해 일관된 코드 스타일을 유지합니다.  
  Use **HTML, CSS, JavaScript**, and maintain consistent code style using VS Code.

  - HTML: 들여쓰기 2칸 사용  
    HTML: Use 2-space indentation
  - CSS: BEM(Block Element Modifier) 네이밍 사용  
    CSS: Follow BEM (Block Element Modifier) naming convention
  - JavaScript: ES6 문법 사용 (`const`, `let`, 화살표 함수 등)  
    JavaScript: Use ES6 syntax (`const`, `let`, arrow functions)

- 필요한 부분에 주석을 추가해, 기여자들이 코드를 쉽게 이해할 수 있도록 합니다.  
  Add comments where necessary to help contributors understand the code.

## 4. 커밋 메시지 작성 (Commit Message Format)
- 커밋할 때는 변경 사항에 대한 명확한 설명을 작성합니다.  
  Write clear and descriptive commit messages about the changes made.

## 5. 테스트 코드 작성 (Write Test Code)
- 기능 추가나 수정 시, 테스트 코드를 추가하고 주석으로 알립니다.  
  Add test code when implementing new features or making changes, and mark it with comments.

## 6. 풀 리퀘스트 작성 (Pull Request Guidelines)
- 각 Pull Request(PR)는 하나의 기능이나 버그 수정을 다룹니다.  
  Each Pull Request (PR) should address a single feature or bug fix.

- PR 제목은 간결하게 작성하고, 설명에는 변경 사항 요약과 관련된 이슈 번호를 포함합니다.  
  Write a concise PR title and include a summary of changes and the related issue number.

## 7. 코드 리뷰와 병합 절차 (Code Review and Merge Process)
- PR을 제출하면 팀원들의 코드 리뷰를 받습니다. 모든 팀원이 승인한 후 병합할 수 있습니다.  
  After submitting a PR, it will be reviewed by the team. The PR can only be merged after approval from all members.

- 주요 변경 사항과 목적을 간단히 설명합니다.  
  Briefly explain the key changes and purpose when requesting a review.

- 리뷰에서 수정 요청이 있을 경우, 브랜치를 업데이트하고 다시 제출합니다.  
  If changes are requested, update the branch and resubmit for review.

## 8. 라이선스 (License)
- 이 프로젝트는 **Apache License 2.0** 하에 배포됩니다. 모든 코드는 해당 라이선스 조건에 따라 사용됩니다.  
  This project is licensed under the **Apache License 2.0**. All contributions must comply with the terms of this license.
