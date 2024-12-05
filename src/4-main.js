/*------------장서현 코드: 달력-------------------*/
var calendarEl = document.getElementById("calendar");
var eventInfoEl = document.getElementById("event-info"); // 이벤트 정보를 표시할 요소
document.documentElement.style.setProperty("--fc-bg-event-opacity", "0");

const events = [
  {
    title: "2학기 기말고사 성적마감",
    start: "2024-01-02",
    end: "2024-01-03",
  },
  {
    title: "1학기 복학, 휴학 신청",
    start: "2024-01-22",
    end: "2024-01-28",
  },
  { title: "1학기 수강신청", start: "2024-02-13", end: "2024-02-16" },
  { title: "제82회 학위수여식", start: "2024-02-16", end: "2024-02-16" },
  { title: "1학기 등록", start: "2024-02-19", end: "2024-02-23" },
  { title: "입학식", start: "2024-02-26", end: "2024-02-26" },
  { title: "1학기 개강", start: "2024-03-04", end: "2024-03-04" },
  {
    title: "수강신청 과목 확인 및 변경",
    start: "2024-03-05",
    end: "2024-03-08",
  },
  { title: "교직신청", start: "2024-03-06", end: "2024-03-19" },
  { title: "수강신청과목 철회", start: "2024-03-27", end: "2024-03-29" },
  { title: "1학기 중간고사", start: "2024-04-22", end: "2024-04-26" },
  {
    title: "1학기 중간고사 성적 입력",
    start: "2024-04-27",
    end: "2024-05-01",
  },
  {
    title: "1학기 중간고사 성적 열람 및 정정",
    start: "2024-05-02",
    end: "2024-05-07",
  },
  {
    title: "창립 84주년 기념휴일 (창립일 : 1940. 5. 20)",
    start: "2024-05-03",
    end: "2024-05-03",
  },
  {
    title: "복수·부전공, 연계융합전공 신청",
    start: "2024-05-07",
    end: "2024-05-19",
  },
  {
    title: "하계 계절학기 수강신청",
    start: "2024-06-03",
    end: "2024-06-05",
  },
  { title: "1학기 강의평가", start: "2024-06-10", end: "2024-06-26" },
  {
    title: "1학기 기말고사 및 수업결손 보충",
    start: "2024-06-17",
    end: "2024-06-21",
  },
  {
    title: "1학기 기말고사 성적 입력",
    start: "2024-06-22",
    end: "2024-06-26",
  },
  {
    title: "하계방학 시작 및 계절학기 개강",
    start: "2024-06-24",
    end: "2024-06-24",
  },
  {
    title: "1학기 기말고사 성적 열람 및 정정",
    start: "2024-06-27",
    end: "2024-07-01",
  },
  {
    title: "1학기 기말고사 성적마감",
    start: "2024-07-02",
    end: "2024-07-03",
  },
  {
    title: "2학기 복학, 휴학 신청",
    start: "2024-07-29",
    end: "2024-08-04",
  },
  { title: "2학기 수강신청", start: "2024-08-12", end: "2024-08-19" },
  {
    title: "제82회 후기 학위수여식",
    start: "2024-08-16",
    end: "2024-08-16",
  },
  { title: "2학기 등록", start: "2024-08-20", end: "2024-08-23" },
  { title: "2학기 개강", start: "2024-09-02", end: "2024-09-02" },
  {
    title: "수강신청과목 확인 및 변경",
    start: "2024-09-03",
    end: "2024-09-06",
  },
  { title: "수강신청과목 철회", start: "2024-09-25", end: "2024-09-27" },
  { title: "2학기 중간고사", start: "2024-10-21", end: "2024-10-25" },
  {
    title: "2학기 중간고사 성적 입력",
    start: "2024-10-26",
    end: "2024-10-29",
  },
  {
    title: "2학기 중간고사 성적 열람 및 정정",
    start: "2024-10-30",
    end: "2024-11-03",
  },
  {
    title: "전공신청, 복수⋅부전공, 연계융합전공 신청",
    start: "2024-11-04",
    end: "2024-11-13",
  },
  {
    title: "동계 계절학기 수강신청",
    start: "2024-12-02",
    end: "2024-12-04",
  },
  { title: "2학기 강의평가", start: "2024-12-09", end: "2024-12-26" },
  {
    title: "2학기 기말고사 및 수업결손 보충",
    start: "2024-12-16",
    end: "2024-12-20",
  },
  {
    title: "2학기 기말고사 성적 입력",
    start: "2024-12-21",
    end: "2024-12-26",
  },
  {
    title: "동계방학 시작 및 계절학기 개강",
    start: "2024-12-23",
    end: "2024-12-23",
  },
  {
    title: "2학기 기말고사 성적 열람 및 정정",
    start: "2024-12-27",
    end: "2024-12-31",
  },
  {
    title: "2학기 기말고사 성적마감",
    start: "2025-01-02",
    end: "2025-01-03",
  },
  {
    title: "1학기 복학, 휴학 신청",
    start: "2025-01-27",
    end: "2025-02-02",
  },
  { title: "1학기 수강신청", start: "2025-02-11", end: "2025-02-14" },
  { title: "제83회 학위수여식", start: "2025-02-14", end: "2025-02-14" },
  { title: "1학기 등록", start: "2025-02-18", end: "2025-02-21" },
  { title: "입학식", start: "2025-02-24", end: "2025-02-24" },
];

// FullCalendar 초기화
var calendar = new FullCalendar.Calendar(calendarEl, {
  initialView: "dayGridMonth",
  height: "auto",
  locale: "ko",
  headerToolbar: {
    left: "today",
    center: "title",
    right: "prev,next",
  },
  events: events.map((event) => {
    if (event.end) {
      let endDate = new Date(event.end);
      endDate.setDate(endDate.getDate() + 1); // end 날짜를 하루 증가시켜, 캘린더에 올바르게 반영하도록 조정
      return {
        ...event,
        end: endDate.toISOString().split("T")[0],
      };
    }
    return event;
  }),
  dayCellContent: function (arg) {
    const { date } = arg;
    return {
      html: `<div style="display: flex; justify-content: center; align-items: center; height: 100%;">${date.getDate()}</div>`,
    };
  },

  dateClick: function (info) {
    const clickedDate = info.dateStr; // 클릭된 날짜 (YYYY-MM-DD 형식)
    const relatedEvents = events.filter(
      (event) =>
        (event.start <= clickedDate && event.end >= clickedDate) ||
        (event.start === clickedDate && !event.end)
    );

    // 클릭한 날짜와 관련된 이벤트 정보를 표시
    let htmlContent = `<div class="selected-date">${clickedDate}</div>`; // 클릭한 날짜 표시

    if (relatedEvents.length > 0) {
      htmlContent += relatedEvents
        .map((event) => `<div class="event-details">• ${event.title}</div>`)
        .join("");
    } else {
      htmlContent += "<div class='no-event'>학사 일정이 없습니다.</div>";
    }

    // HTML 요소에 삽입
    eventInfoEl.innerHTML = htmlContent;

    // 모든 날짜 셀의 선택된 클래스 제거 후 클릭된 날짜 셀에만 클래스 추가
    document.querySelectorAll(".fc-daygrid-day").forEach((cell) => {
      cell.classList.remove("selected-date-cell"); // 기존 선택 제거
    });
    info.dayEl.classList.add("selected-date-cell"); // 클릭된 날짜에 클래스 추가
  },

  eventContent: function (arg) {
    return {
      html: `<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(33, 150, 243, 0.2); opacity: 1; z-index: -1;">${arg.event.title}</div>`,
    };
  },
  eventDisplay: "background",

  views: {
    dayGridMonth: {
      type: "dayGrid",
      duration: { months: 1 },
      monthMode: true,
    },
  },
});

calendar.render();

// 오늘 날짜 이벤트 자동 선택
function eventRenderToday() {
  const today = new Date();
  const todayStr = today.toISOString().split("T")[0];
  const todayCell = document.querySelector(
    `.fc-daygrid-day[data-date='${todayStr}']`
  );

  if (todayCell) {
    calendar.trigger("dateClick", {
      dateStr: todayStr,
      dayEl: todayCell,
    });
  }
}

// 페이지 로드 후 오늘 날짜 이벤트 정보 자동 표시
document.addEventListener("DOMContentLoaded", function () {
  eventRenderToday();
});

// 이전 달의 날짜와 다음 달의 날짜를 연한 회색으로 표시
const style = document.createElement("style");
style.innerHTML = `
  .fc-day-other {
    color: #c0c0c0; /* 연한 회색 */
  }
  .selected-date {
    display: inline-block;
    border-left: 2px solid rgba(0,0,0,0.8);
    padding-left:0.2rem;
    font-size: 0.8rem;
    letter-spacing: 0.1rem;
    margin-bottom: 0.2rem;
  }
  .event-details {
    font-size: 0.75rem;
    color:rgba(0,0,0,0.5);
    margin-top:0.3rem;
    letter-spacing: 0.02rem
  }
  .no-event {
    color:rgba(0,0,0,0.5);
    font-size: 0.75rem;
    letter-spacing: 0.02rem;
    margin-top:0.2rem;
    font-size: 0.8rem;
  }
  .selected-date-cell {
    background-color: rgba(255, 165, 0, 0.3); /* 주황색 배경 강조 */
  }
`;
document.head.appendChild(style);

// Chart.js

const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["월", "화", "수", "목", "금"], // X축 레이블
    datasets: [
      {
        label: "강의 시간",
        data: [9, 9, 9, 9, 9], // 데이터 값
        backgroundColor: "rgba(0, 0, 0, 0)", // 막대 색상
        borderRadius: 10, // 상단 모서리 둥글게 설정
      },
      {
        label: "이용 가능 시간",
        data: [1.5, 0, 1.5, 0, 0], // 데이터 값
        borderRadius: 50,
        backgroundColor: "rgba(251, 140, 0, 1)", // #fb8c00을 rgba로 변경
        borderRadius: 10, // 상단 모서리 둥글게 설정
      },
      {
        label: "강의 시간",
        data: [1.5, 0, 1.5, 7, 9], // 데이터 값
        backgroundColor: "rgba(0, 0, 0, 0.0)", // 막대 색상
        borderRadius: 10, // 상단 모서리 둥글게 설정
      },
      {
        label: "이용 가능 시간",
        data: [1.5, 0, 1.5, 2, 0], // 데이터 값
        borderRadius: 50,
        backgroundColor: "rgba(251, 140, 0, 1)", // #fb8c00을 rgba로 변경
        borderRadius: 10, // 상단 모서리 둥글게 설정
      },
      {
        label: "강의 시간",
        data: [1.5, 0, 1.5, 0, 0], // 데이터 값
        backgroundColor: "rgba(0, 0, 0, 0.0)", // 막대 색상
        borderRadius: 10, // 상단 모서리 둥글게 설정
      },
      {
        label: "강의 시간",
        data: [0, 0, 2, 0, 0], // 데이터 값
        backgroundColor: "rgba(0, 0, 0, 0.0)", // 막대 색상
        borderRadius: 10, // 상단 모서리 둥글게 설정
      },
      {
        label: "이용 가능 시간",
        data: [3, 0, 2, 1, 0], // 데이터 값
        borderRadius: 50,
        backgroundColor: "rgba(251, 140, 0, 1)", // #fb8c00을 rgba로 변경
        borderRadius: 10, // 상단 모서리 둥글게 설정
      },
      {
        label: "강의 시간",
        data: [15, 9, 18, 7, 18], // 데이터 값
        backgroundColor: "rgba(0, 0, 0, 0)", // 막대 색상
        borderRadius: 10, // 상단 모서리 둥글게 설정
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false, // 범례 숨기기
      },
    },
    responsive: false, // 반응형 비활성화
    maintainAspectRatio: false, // 종횡비 유지 비활성화
    scales: {
      x: {
        stacked: true, // X축 스택 활성화
        categoryPercentage: 1, // 카테고리 간격 조정
        grid: {
          color: "rgba(0, 0, 0, 0.06)", // X축 그리드 색상 연하게 설정
        },
        ticks: {
          font: {
            size: 14.5, // X축 레이블 크기 설정
          },
        },
      },
      y: {
        stacked: true, // Y축 스택 활성화
        ticks: {
          callback: function (value) {
            return value; // Y축 값 그대로 표시
          },
        },
        min: 9, // Y축 최소값
        max: 18, // Y축 최대값
        reverse: true,
        grid: {
          color: "rgba(0, 0, 0, 0.06)", // X축 그리드 색상 연하게 설정
        },
      },
    },
  },
});
