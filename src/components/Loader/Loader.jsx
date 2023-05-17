import { Bars } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Bars
      height="60"
      width="100"
      color="rgba(43, 153, 126)"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};
