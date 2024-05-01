import React, { useCallback, useEffect, useRef, useState } from 'react';

function HomePage() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const [mousePosition, setMousePosition] = useState(undefined);

  const [isPainting, setIsPainting] = useState(false);

  // 좌표 얻는 함수
  const getCoordinates = (event) => {
    if (!canvasRef.current) {
      return;
    }

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect(); // 캔버스의 절대 위치 정보를 얻습니다.
    // eslint-disable-next-line consistent-return
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  // canvas에 선을 긋는 함수
  const drawLine = (originalMousePosition, newMousePosition) => {
    if (!canvasRef.current) {
      return;
    }
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;
    context.strokeStyle = 'rgba(255, 183, 247, 0.3)';
    context.lineJoin = 'round';
    context.lineWidth = 5;
    context.globalCompositeOperation = 'source-over';

    context.beginPath();
    context.moveTo(originalMousePosition.x, originalMousePosition.y);
    context.lineTo(newMousePosition.x, newMousePosition.y);
    context.closePath();
    context.stroke();
  };

  const startPaint = useCallback((event) => {
    const coordinates = getCoordinates(event);
    if (coordinates) {
      setIsPainting(true);
      setMousePosition(coordinates);
    }
  }, []);

  const paint = useCallback(
    (event) => {
      event.preventDefault(); // drag 방지
      event.stopPropagation(); // drag 방지

      if (isPainting) {
        const newMousePosition = getCoordinates(event);

        if (mousePosition && newMousePosition) {
          drawLine(mousePosition, newMousePosition);
          setMousePosition(newMousePosition);
        }
      }
    },
    [isPainting, mousePosition],
  );

  const exitPaint = useCallback(() => {
    setIsPainting(false);
  }, []);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;

      canvas.addEventListener('mousedown', startPaint);
      canvas.addEventListener('mousemove', paint);
      canvas.addEventListener('mouseup', exitPaint);
      canvas.addEventListener('mouseleave', exitPaint);

      return () => {
        // Unmount 시 이벤트 리스터 제거
        canvas.removeEventListener('mousedown', startPaint);
        canvas.removeEventListener('mousemove', paint);
        canvas.removeEventListener('mouseup', exitPaint);
        canvas.removeEventListener('mouseleave', exitPaint);
      };
    }
  }, [startPaint, paint, exitPaint]);

  // 캔버스 크기(창) 조정 시 그림이 사라지는 오류 해결을 위해 구현
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (canvas && container === 'blank') {
      const context = canvas.getContext('2d');

      const resizeCanvas = () => {
        // 임시 캔버스 생성
        const tempCanvas = document.createElement('canvas');
        const tempContext = tempCanvas.getContext('2d');

        // 임시 캔버스 크기 설정 (메인 캔버스의 현재 크기와 동일하게)
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;

        // (0, 0) 위치에서 시작하여 메인 캔버스의 모든 내용을 임시 캔버스에 복사
        tempContext.drawImage(canvas, 0, 0);

        // 캔버스 크기 조정
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;

        // 캔버스 내용 복원
        context.drawImage(tempCanvas, 0, 0, canvas.width, canvas.height);
      };

      // 컨테이너 크기 변경 시마다 콜백 함수(resizeCanvas)를 호출
      const observer = new ResizeObserver(resizeCanvas);
      observer.observe(container);

      // 클린업 함수
      return () => {
        observer.disconnect();
      };
    }
  }, []);
  return (
    <div ref={containerRef}>
      dfdf
      <canvas
        ref={canvasRef}
        style={{
          backgroundColor: '#e1e1e1',

          width: '50rem',
          height: '50rem',
        }}
      />
    </div>
  );
}

export default HomePage;
