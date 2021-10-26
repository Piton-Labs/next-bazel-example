import { useState } from 'react';

function HomePage() {
  const [count, setCount] = useState(0);
  
  return (
    <div onClick={ () => setCount(count + 1) }>
      Example Home Page { count }
    </div>
  );
}

export default HomePage;