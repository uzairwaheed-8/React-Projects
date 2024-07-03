import "./App.css";
import { ThemeProvider, useTheme } from "./ThemeContext";
import Switch from "./Switch/Switch";
import mail from "./Assests/Mail.svg";
import linkedIn from "./Assests/Vector.svg";
import fb from "./Assests/Facebook Icon.svg";
import insta from "./Assests/Instagram Icon.svg";
import github from "./Assests/GitHub Icon.svg";
import x from "./Assests/Twitter Icon.svg";

const Title = ({ children }) => {
  const { theme } = useTheme();
  return (
    <h2 className="header"
      style={{
        color: theme === "light" ? "white" : "black",
        textAlign: "center",
      }}
    >
      {children}
    </h2>
  );
};

const Paragraph = ({ children }) => {
  const { theme } = useTheme();
  return (
    <p
      style={{
        color: theme === "light" ? "white" : "black",
      }}
    >
      {children}
    </p>
  );
};

const Text = ({ children }) => {
  const { theme } = useTheme();
  return (
    <h4
      style={{
        color: theme === "light" ? "#FAD8B2" : "#B2764B",
        textAlign: "center",
        padding: "0px",
        marginTop: "-10px",
      }}
    >
      {children}
    </h4>
  );
};

const Heading = ({ children }) => {
  const { theme } = useTheme();
  return (
    <h3
      style={{
        color: theme === "light" ? "white" : "black",
        padding: "0px",
        marginTop: "50px",
        fontWeight: "bold",
      }}
    >
      {children}
    </h3>
  );
};
// eslint-disable-next-line no-unused-vars
const Content = () => {
  return (
    <div>
      <Paragraph>
        I am currently in my third year of pursuing a Bachelor of Science degree in Computer Engineering, and I specialize as a frontend developer with proficiency in HTML, CSS, JavaScript, and React.
      </Paragraph>
    </div>
  );
};

const Interest = () => {
  return (
    <div>
      <Paragraph>
        In my free time, I'm dedicated to fitness, hitting the gym regularly and playing badminton to stay active. I also find solace in the pages of a good book, exploring various genres for relaxation and personal growth. And when I need a break, I enjoy unwinding with a captivating film or TV series, immersing myself in intriguing stories and cinematic artistry.
      </Paragraph>
    </div>
  );
}

const Header = () => {
  return (
    <header>
      <Switch />
    </header>
  );
};
const Footer = () => {
  const { theme } = useTheme();
  return (
    <div className="footer" style={{
      backgroundColor: theme === "light" ? "#161619" : "#D5D4D8",
    }}>
      <a href="https://twitter.com/Uzair_Waheed_8" target="__blank" ><img src={x} alt="x" style={{ width: "25px", height: "25px", }} /></a>
      <a href="https://web.facebook.com" target="__blank"><img src={fb} alt="fb" style={{ width: "25px", height: "25px", }} /></a>
      <a href="https://www.instagram.com/uzairwaheed_8/" target="__blank"><img src={insta} alt="insta" style={{ width: "25px", height: "25px", }} /></a>
      <a href="https://github.com/uzairwaheed-8" target="__blank"><img src={github} alt="gh" style={{ width: "25px", height: "25px", }} /></a>
    </div>
  );
}
const Page = () => {
  const { theme } = useTheme();
  const Color = {
    color: theme === "light" ? "#1A1B21" : "#E0E0E0",
  }
  return (
    <div className="Page" style={{
      backgroundColor: theme === "light" ? "#1A1B21" : "#E0E0E0",
      boxShadow: `5px 5px 15px ${Color.color}`,
      borderColor: theme === "light" ? "#1A1B21" : "#E0E0E0",
    }}>
      <img
        style={{
          width: "317px",
          height: "auto",
          borderRadius: "10px",
        }}
        src="https://shorturl.at/dnW89" alt="profile pic "
      />
      <Title >Uzair Waheed</Title>
      <Text>Computer Engineering Student</Text>
      <div className="btn-div">
        <button className="btn" onClick={() => { window.open("mailto:uzairw024@gmail.com", "_blank") }}><img src={mail} style={{ width: "17px", height: "16px", marginRight: "8px", }} alt="mail-icon" />  Email</button>
        <button className="btn" style={{ backgroundColor: "#5093E2", color: "#FFFFFF", }} onClick={() => { window.open("https://www.linkedin.com/in/uzair-waheed-755960262", "_blank") }}><img src={linkedIn} style={{ width: "13px", height: "13px", marginRight: "8px", }} alt="mail-icon" />  LinkedIn</button>
      </div>
      <div className="abt-section">
        <Heading>About</Heading>
        <Content />
        <Heading>Interests</Heading>
        <Interest />
      </div>
      <Footer />
    </div>
  );
};

function App() {
  const { theme } = useTheme();
  return (
    <div
      className="App"
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
      }}
    >
      <Header />
      <Page />
    </div>
  );
}

function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default Root;
