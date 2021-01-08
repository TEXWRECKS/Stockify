import Loader from 'react-loader-spinner';

function Spinner() {
  return (
    <div className="spinner">
        <Loader
         type="Hearts"
         color="#00BFFF"
         height={200}
         width={200}
      />
    <p className="loading">Please wait...fetching your item</p>
    </div>
  );
}

export default Spinner;