import pageImg from "../assets/img/sea.jpg";
import textBackground from "../assets/img/2_sea.jpg";

const Messages = () => {
  return (
  <>
    <div className="row">
      <div className="col-md-6">
        <img src={pageImg} alt="" width={"100%"} />
      </div>
      <div className="col-md-6">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio magni praesentium sed qui voluptas, architecto maiores ab totam voluptates suscipit illum voluptatem commodi officia! Nobis in iusto assumenda! Voluptas, et.
      </div>
    </div>
    <div className="row mt-4">
      <div className="col-md-6 offset-6" style={{ backgroundImage: `url(${textBackground})` }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis nesciunt a alias illum id laborum aliquam, dolor optio eum, perspiciatis, dicta natus rem fugit cum iste magnam praesentium quasi eveniet!
      </div>
    </div>
  </>  
    
  );
};
export default Messages;
