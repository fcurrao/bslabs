import "../Footer/Footer.css";

const Footer = () => {
    const user='FEDERICO CURRAO'
    return (
    <>
      <div className="footer">
        APLICACION WEB REALIZADA POR {user} PARA BSMARTLAB
        <img className="pictureFooter" src="../assets/img/federicocurrao.jpg" />
      </div>
    </>
  );
};

export default Footer;
