import Footer from "../components/Footer";

const Blogs = () => {
  return (
    <div>
      <div style={styles.article}>
        <h1>Blog Artikles</h1>
      </div>
      <Footer />
    </div>
    );
  };

  const styles = {
    article: {
      marginTop: 150,
      textAlign: 'center',
    }
  }
  
  export default Blogs;
  