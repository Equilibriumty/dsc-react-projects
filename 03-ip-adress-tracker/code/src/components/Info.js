import "../styles/Info.css";

const Info = (props) => {
  return (
    <div className="info-body">
      <div className="info-elem">
        <div className="info-header">Ip Address</div>
        <div className="info-text">{props.info.ip}</div>
      </div>
      <div className="info-elem">
        <div className="info-header">Location</div>
        <div className="info-text">
          {props.location.city}, {props.location.country}{" "}
          {props.location.postalCode}
        </div>
      </div>
      <div className="info-elem">
        <div className="info-header">Timezone</div>
        <div className="info-text">{props.location.timezone}</div>
      </div>
      <div className="info-elem">
        <div className="info-header">Isp</div>
        <div className="info-text">{props.info.isp}</div>
      </div>
    </div>
  );
};

export default Info;
