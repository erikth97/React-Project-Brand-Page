const HeroSection = () => {
    return (
        <main className="hero container">
          <div className="hero-content">
            <h1>DENSO CRAFTING THE CORE</h1>
            <p>
            DENSO is a global manufacturer of automotive 
            components offering advanced automotive technologies, 
            systems and products.
            </p>

            <div className="hero-btn">
              <button>Customers</button>
              <button className="secondary-btn">Employees</button>
            </div>

            <div className="shopping">
              <p>Also Avilable on</p>
            
            <div className="brand-icons">
              <img src="../../public/images/amazon.png" alt="amazon-logo" />
              <img src="../../public/images/flipkart.png" alt="flipkart-image" />
             </div>
            </div>
          </div>
        <div className="hero-image"></div>
           <img src="../../public/images/vb-.png" alt="" />
        </main>
    );
};

export default HeroSection;