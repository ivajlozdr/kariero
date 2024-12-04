import  { FC, Fragment } from 'react';


interface BacktotopProps {}

const Backtotop: FC<BacktotopProps> = () => (
  <Fragment>
    <div className="scrollToTop">
    <span className="arrow"><i className="ri-arrow-up-s-fill text-xl"></i></span>
</div>
  </Fragment>
);

export default Backtotop;
