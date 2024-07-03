import "./styles.css";
import { useTheme } from "../ThemeContext";

const Switch = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div class="switch">
            <input type="checkbox"
                checked={theme === "light"}
                onChange={toggleTheme} id="toggle" />
            <label for="toggle" class="slider">
                <span class="light-mode-icon">☀️</span>
                <span class="dark-mode-icon">🌙</span>
            </label>
        </div>

    );
};

export default Switch;