import * as Spinners from "react-loader-spinner";

import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.loader}>
      <Spinners.ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
