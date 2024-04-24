const Footer = () => {
    const currYear = new Date().getFullYear();
    return (
      <footer className="footer text-center text-ellipsis text-2xl">
        <p>
          Copyright &copy; {currYear}, Made with 💗 by <strong>Himanshu</strong>
        </p>
      </footer>
    );
  };
  
  export default Footer;
  