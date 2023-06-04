import { BallTriangle } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <BallTriangle
      className={css.loader}
      height={100}
      width={100}
      radius={5}
      color="#4fa94d"
      ariaLabel="ball-triangle-loading"
      wrapperClass={{}}
      wrapperStyle=""
      visible={true}
    />
  );
};
export default Loader;
