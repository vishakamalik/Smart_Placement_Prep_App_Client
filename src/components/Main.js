import React, { useRef, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { setUserId } from '../redux/result_reducer';
import '../styles/Main.css';
import { ThemeContext } from '../ThemeContext'; // ✅ Import context

export default function Main() {
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const { theme } = useContext(ThemeContext); // ✅ Get theme

    const testName = searchParams.get("c");

    function startQuiz() {
        if (inputRef.current?.value) {
            dispatch(setUserId(inputRef.current?.value));
        }
    }

    return (
        <div className={`container ${theme}`}> {/* ✅ Add theme class */}
            <h1 className='title'>Instructions</h1>

            <ol>
                <li>You will be asked 10 questions.</li>
                <li>Each question has three options. You can choose only one option.</li>
                <li>You can review and change answers before the quiz finishes.</li>
                <li>The result will be declared at the end of the quiz.</li>
            </ol>

            <form id="form">
                <input ref={inputRef} className="userid" type="text" placeholder='Username*' />
            </form>

            <div className='start'>
                <Link className='btn' to={`/quiz?c=${testName}`} onClick={startQuiz}>Start Quiz</Link>
            </div>
        </div>
    );
}
