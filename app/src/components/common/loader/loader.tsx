import  { FC, Fragment } from 'react';


interface LoaderProps {}

const Loader: FC<LoaderProps> = () => (
  <Fragment>
     <div id="loader" >
        <img src="../assets/images/media/loader.svg" alt=""/>
    </div>
  </Fragment>
);

export default Loader;
