import "../styles/Info.css";

const Info = () => {
  return (
    <div className="info-body">
      <div className="info-elem">
        <div className="info-header">Ip Address</div>
        <div className="info-text">192.212.174.101</div>
      </div>
      <div className="info-elem">
        <div className="info-header">Location</div>
        <div className="info-text">Brooklyn, NY 10001</div>
      </div>
      <div className="info-elem">
        <div className="info-header">Timezone</div>
        <div className="info-text">UTC-05:00</div>
      </div>
      <div className="info-elem">
        <div className="info-header">Isp</div>
        <div className="info-text">SpaceX Starlink</div>
      </div>
    </div>
  );
};

export default Info;
