/* eslint-disable react/react-in-jsx-scope */
import Footer from "../components/Footer";

const Home = () => {
    return (
    <div style={styles.article}>
      <div style={styles.homeSection}>
        <h1>Home</h1>
      </div>

      <Footer />
    </div>
    );
  };

  const styles = {
    article: {
      marginTop: 150,
      textAlign: 'center',
    },
    homeSection: {
      top: 50
    },   
  }
  
  export default Home;
  