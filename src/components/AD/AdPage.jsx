import React, { useState } from 'react';
import AD from './Ad';

function AdPage() {
  const [showAD, setShowAD] = useState(true);

  const handleToggleClick = () => {
    setShowAD(!showAD);
  };

  return (
    <div>
      <AD show={showAD} />
      <button type="button" onClick={handleToggleClick}>
        {showAD ? '닫기' : '열기'}
      </button>
    </div>
  );
}

export default AdPage;
