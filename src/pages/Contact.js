import Footer from "../components/Footer";

const Contact = () => {
    return (<div>
      <div style={styles.article}>
        <h1>Contact Me</h1>
      </div>
      <Footer />
    </div>);
  };

  const styles = {
    article: {
      marginTop: 150,
      textAlign: 'center',
    }
  }
  
  export default Contact;
  