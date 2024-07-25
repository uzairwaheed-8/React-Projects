import img from '../assets/blob 5.png';
import img_2 from '../assets/blob6.png';
import "@fontsource/karla"; // Defaults to weight 400
import "@fontsource/karla/400.css"; // Specify weight
import "@fontsource/karla/400-italic.css"; // Specify weight and style
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { decode } from 'html-entities';


const Qs = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [pageTwo, setPageTwo] = useState(true);
    const [userAns, setuserAns] = useState({});
    const [correctAns, setcorrectAns] = useState({});

    const shuffle = (array) => {
        let currentIndex = array.length-1, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            
            let temp = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temp;
            currentIndex--;
        }
        return array;
    }

    useEffect(() => {
        async function getData() {
            
            const res = await fetch("https://opentdb.com/api.php?amount=5&category=18&difficulty=medium&type=multiple");
            const dat = await res.json();
            const shuffledData = dat.results.map((item) => {
                return {
                    ...item,
                    answers: decode(shuffle([item.correct_answer, ...item.incorrect_answers]))
                };
            });
            setData(shuffledData);
        }
        getData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setuserAns((prevuserAns) => ({
            ...prevuserAns,
            [name]: value,
        }));
    };

    const handleClick = () => {
        if (pageTwo) {
            const correctAns = {};
            data.forEach((item, index) => {
                correctAns[`question-${index}`] = item.correct_answer === userAns[`question-${index}`];
            });
            setcorrectAns(correctAns);
            setPageTwo(false);
        } else {
            navigate('/');
            setPageTwo(true);
        }
    };

    const  classSelect=(pageTwo, correctAns, userAns, index, answer, item)=> {
        if (!pageTwo) { //used only in 3rd page

            if (correctAns[`question-${index}`]) {//user selected correct 
                return userAns[`question-${index}`] === answer ? 'correct' : '';
            }
            if (userAns[`question-${index}`] === answer) {// user selected wrong answer
                    return 'incorrect';
            } else if (item.correct_answer === answer) { // no answer is selected 
                    return 'correct';
            }
        }
    }
    
    const Form = data.map((item, index) => {
        return (
            <div key={index} className='question'>
                <div>
                    <h3>{decode(item.question)}</h3>
                </div>
                <div className='options'>
                    {item.answers.map((answer, idx) => (
                        <div key={idx}>
                            <input 
                                type="radio"
                                id={`${index}-${idx}`}
                                name={`question-${index}`}
                                value={answer}
                                checked={userAns[`question-${index}`] === answer}
                                onChange={handleChange}
                            />
                            <label 
                                className={classSelect(pageTwo,correctAns,userAns,index,answer,item)} 
                                htmlFor={`${index}-${idx}`}
                            >
                                {answer}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        );
    });
    const score=()=>{
        let score = 0;
        data.forEach((item, index) => {
            if (item.correct_answer === userAns[`question-${index}`]) {
                score++;
            }
        });
        return score;
    }
    return (
        <div className='main'>
          <div><img className="img_1" src={img} alt="decorative" /></div>
         <div className="qs">
            <div className='box_1'>
                <h1>Quiz</h1>
                {<form>
                    {Form}
                </form>}
                <button className='btn_1' onClick={handleClick}>
                    {pageTwo ? "Check Answer" : "Try Again"}
                </button>
                {!pageTwo && <p>{`You have ${score()}/5 correct answers`}</p>}
            </div>
        </div>
        <div><img className="img_2" src={img_2} alt="decorative" /></div>
        </div>
    );
}

export default Qs;
