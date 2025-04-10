import '../App.css'
export default function Header() {
    return (
        <header className="header">
            <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZeseYXIURcTZUMXLNi_EgAhjo9nuvqnf6jw&s"
                className="header--image"
                alt="Meme logo"
            />
            <h2 className="header--title">Meme Generator</h2>
        </header>
    )
}
