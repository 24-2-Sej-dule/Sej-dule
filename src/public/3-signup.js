// 단과대와 학과 데이터
const collegeMajors = {
  humanities: [
    "국어국문학과",
    "국제학부",
    "영어영문학과",
    "일어일문학과",
    "중국통상학과",
    "역사학과",
    "교육학과",
    "글로벌인재학부",
    "한국언어문화학과",
    "국제통상학과",
    "국제협력학과",
  ],
  social_science: ["행정학과", "미디어커뮤니케이션학과", "법학과"],
  business_economics: ["경제학과", "경영학부"],
  hotel_tourism: [
    "호텔관광외식경영학부",
    "호텔관광경영학과",
    "외식경영학과",
    "호텔외식관광프랜차이즈경영학과",
    "호텔외식비지니스학과",
    "글로벌조리학과",
  ],
  natural_science: ["수학통계학과", "물리천문학과", "화학과"],
  life_science: [
    "생명시스템학부",
    "식품생명공학전공",
    "바이오융합공학",
    "바이오산업자원공학",
    "스마트생명산업융합학과",
  ],
  ai_convergence: [
    "전자정보통신공학과",
    "반도체시스템공학과",
    "컴퓨터공학과",
    "소프트웨어학과",
    "정보보호학과",
    "AI로봇학과",
    "인공지능데이터사이언스학과",
    "창의소프트학부",
    "디자인이노베이션",
    "만화애니메이션텍",
    "지능정보융합학과",
  ],
  engineering: [
    "건축공학과",
    "건축학과",
    "건설환경공학과",
    "환경에너지공간융합학과",
    "지구자원시스템공학과",
    "기계공학과",
    "나노신소재공학과",
    "양자원자력공학과",
    "국방시스템공학과",
    "우주항공드론공학부",
    "우주항공공학",
    "지능형드론융합",
    "항공시스템공학",
  ],
  arts_sports: [
    "회화과",
    "패션디자인학과",
    "음악과",
    "체육학과",
    "무용과",
    "영화예술학과",
  ],
  software_convergence: [
    "데이터사이언스학과",
    "인공지능학과",
    "지능기전공학과",
    "무인이동체공학",
    "스마트기기공학",
  ],
};

// college select 요소
const collegeSelect = document.getElementById("college");
// major select 요소
const majorSelect = document.getElementById("major");

// college 선택시 major 목록 업데이트
collegeSelect.addEventListener("change", function () {
  const selectedCollege = collegeSelect.value; // 선택된 단과대학의 값

  // major select 초기화
  majorSelect.innerHTML =
    '<option value="" disabled selected>학과를 선택하세요</option>'; // disabled 속성 추가

  // 선택된 단과대학에 맞는 학과 목록 가져오기
  let majors = [];
  switch (selectedCollege) {
    case "college-humanities":
      majors = collegeMajors.humanities;
      break;
    case "college-social_science":
      majors = collegeMajors.social_science;
      break;
    case "college-business_economics":
      majors = collegeMajors.business_economics;
      break;
    case "college-hotel_tourism":
      majors = collegeMajors.hotel_tourism;
      break;
    case "college-natural_science":
      majors = collegeMajors.natural_science;
      break;
    case "college-life_science":
      majors = collegeMajors.life_science;
      break;
    case "college-ai_convergence":
      majors = collegeMajors.ai_convergence;
      break;
    case "college-engineering":
      majors = collegeMajors.engineering;
      break;
    case "college-arts_sports":
      majors = collegeMajors.arts_sports;
      break;
    case "college-software":
      majors = collegeMajors.software_convergence;
      break;
  }

  // major select에 학과 옵션 추가
  majors.forEach(function (major) {
    const option = document.createElement("option");
    option.value = major;
    option.textContent = major;
    majorSelect.appendChild(option);
  });
});

// select에서 내용 클릭했을 때 색상 진하게
document.querySelectorAll(".box-shadow10").forEach(function (selectBox) {
  // 각 셀렉트 박스에 대해 change 이벤트 리스너 추가
  selectBox.addEventListener("change", function () {
    // 사용자가 선택을 했을 경우 class를 추가하여 텍스트 색상을 검정색으로 변경
    if (this.value) {
      this.classList.add("focus");
    }
  });
});

//모달창, 백엔드 연결 없어서 catch만됨
document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");

  signupForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(signupForm);

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.get("email"),
          password: formData.get("password"),
        }),
      });
      if (!response.ok) throw Error();
      document.querySelector(".success-modal").style.display = "flex";
      // 확인 버튼 클릭 시 팝업창 닫고 로그인 페이지로 이동
      document
        .querySelector(".modal-button")
        .addEventListener("click", function () {
          document.querySelector(".success-modal").style.display = "none"; // 팝업창 숨기기
          window.location.href = "/2-login.html";
        });
    } catch (e) {
      alert("회원가입에 실패했습니다.");
    }
  });
});

// 닉네임, 아이디, 비밀번호 유효성 검사 후 만족하면 체크 초록색으로
document.addEventListener("DOMContentLoaded", () => {
  const nicknameInput = document.querySelector('input[name="nickname"]');
  const emailInput = document.querySelector('input[name="email"]');
  const passwordInput = document.querySelector('input[name="password"]');

  // 유효성 검사 함수
  function validateInput(input, condition) {
    if (condition(input.value)) {
      input.classList.add("valid");
      input.classList.remove("invalid");
    } else {
      input.classList.add("invalid");
      input.classList.remove("valid");
    }
  }

  // 닉네임 유효성 검사 (값이 비어 있지 않으면 valid)
  nicknameInput.addEventListener("input", () => {
    validateInput(nicknameInput, (value) => value.trim().length > 0);
  });

  // 이메일 유효성 검사
  emailInput.addEventListener("input", () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    validateInput(emailInput, (value) => emailPattern.test(value));
  });

  // 비밀번호 유효성 검사
  passwordInput.addEventListener("input", () => {
    const passwordPattern = /^(?=.*\d)[A-Za-z\d]{8,}$/; // 최소 8자, 숫자 1개 이상, 영어만 가능
    validateInput(passwordInput, (value) => passwordPattern.test(value));
  });
});
