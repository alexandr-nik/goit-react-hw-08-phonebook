import { RotatingLines } from 'react-loader-spinner';

export const Spinner = () => {
  return (    
    <div style={{ textAlign: 'center' }}>     
      <RotatingLines
        strokeColor="#1976d2"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};
