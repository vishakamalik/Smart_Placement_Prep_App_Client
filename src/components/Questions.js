import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from "react-router-dom";

import { useFetchQestion } from '../hooks/FetchQuestion';
import { updateResult } from '../hooks/setResult';

import '../styles/Questions.css'

export default function Questions({ onChecked }) {
    const [checked, setChecked] = useState(undefined);
    const { trace } = useSelector(state => state.questions);
    const result = useSelector(state => state.result.result);
    const [searchParams] = useSearchParams();
    const params = searchParams.get("c");
    const [{ isLoading, apiData, serverError }] = useFetchQestion(params);

    const questions = useSelector(state => state.questions.queue[state.questions.trace]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateResult({ trace, checked }));
    }, [checked]);

    function onSelect(i) {
        onChecked(i);
        setChecked(i);
        dispatch(updateResult({ trace, checked }));
    }

    if (isLoading) return <h3 style={{ color: '#333' }}>Loading...</h3>;
    if (serverError) return <h3 style={{ color: '#333' }}>{"Unknown Error"}</h3>;

    return (
        <div className="questions">
            <h2 className="question-text">{questions?.question}</h2>
            <ul key={questions?.id}>
                {
                    questions?.options.map((q, i) => (
                        <li key={i} className="option-item">
                            <input
                                type="radio"
                                value={false}
                                name="options"
                                id={`q${i}-option`}
                                onChange={() => onSelect(i)}
                                className="option-input"
                            />
                            <label htmlFor={`q${i}-option`} className="option-label">
                                {q}
                            </label>
                            <div className={`check ${result[trace] === i ? 'checked' : ''}`}></div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
