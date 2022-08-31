import React from "react";
import styles from "./style";
import {
  Navbar,
  Business,
  Button,
  CardDeal,
  Clients,
  CTA,
  Footer,
  GetStarted,
  Hero,
  Stats,
  FeedbackCard,
  Testimonials,
} from "./components";
const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>Navbar</div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
      
          <Business />
          <CardDeal />
          <Button />
          <Clients />
          <CTA />
          <Footer />
          <GetStarted />
          <Hero />
          <Stats />
          <FeedbackCard />
          <Testimonials />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default App;
