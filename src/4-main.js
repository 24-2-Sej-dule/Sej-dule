// Chart.js

const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["월", "화", "수", "목", "금"], // X축 레이블
    datasets: [],
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
        max: 19, // Y축 최대값
        reverse: true,
        grid: {
          color: "rgba(0, 0, 0, 0.06)", // X축 그리드 색상 연하게 설정
        },
      },
    },
  },
});
