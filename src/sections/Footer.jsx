const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" onClick={() => window.open('https://github.com/aledog007', '_blank')} style={{ cursor: 'pointer' }}/>
        </div>
        <div className="social-icon">
          <img src="/assets/linkedin.svg" alt="linkedin" className="w-1/2 h-1/2" onClick={() => window.open('https://www.linkedin.com/in/alessio-giuseppe-fano/', '_blank')} style={{ cursor: 'pointer' }} />
        </div>
      </div>

      <p className="text-white-500">© 2024 Alessio Fano. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
