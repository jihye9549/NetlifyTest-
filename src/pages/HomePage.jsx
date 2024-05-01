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
    const clientX = event.clientX || event.touches[0].clientX;
    const clientY = event.clientY || event.touches[0].clientY;

    // eslint-disable-next-line consistent-return
    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
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

      // 마우스 이벤트 리스너 등록
      canvas.addEventListener('mousedown', startPaint);
      canvas.addEventListener('mousemove', paint);
      canvas.addEventListener('mouseup', exitPaint);
      canvas.addEventListener('mouseleave', exitPaint);

      // 터치 이벤트 리스너 등록
      canvas.addEventListener('touchstart', startPaint);
      canvas.addEventListener('touchmove', paint);
      canvas.addEventListener('touchend', exitPaint);

      return () => {
        // 이벤트 리스너 제거
        canvas.removeEventListener('mousedown', startPaint);
        canvas.removeEventListener('mousemove', paint);
        canvas.removeEventListener('mouseup', exitPaint);
        canvas.removeEventListener('mouseleave', exitPaint);
        canvas.removeEventListener('touchstart', startPaint);
        canvas.removeEventListener('touchmove', paint);
        canvas.removeEventListener('touchend', exitPaint);
      };
    }
  }, [startPaint, paint, exitPaint]);

  return (
    <div ref={containerRef}>
      <canvas
        ref={canvasRef}
        style={{
          backgroundColor: '#e1e1e1',
          width: '100%', // 반응형 디자인을 위해 비율로 설정
          height: '50vh', // 높이도 비율로 조정
        }}
      />
    </div>
  );
}

export default HomePage;
