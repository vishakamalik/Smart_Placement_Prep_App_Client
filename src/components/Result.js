import React, { useContext, useEffect } from 'react'
import '../styles/Result.css'
import { Link } from 'react-router-dom'
import ResultTable from './ResultTable'
import { useDispatch, useSelector } from 'react-redux'
import { attempts_Number, earnPoints_Number, flagResult } from '../helper/helper'
import { resetAllAction } from '../redux/question_reducer'
import { resetResultAction } from '../redux/result_reducer'
import { usePublishResult } from '../hooks/setResult'
import PieContainer from './PieChart'

// 🟢 Theme context import
import { ThemeContext } from '../ThemeContext'

export default function Result() {

    const dispatch = useDispatch()
    const { theme } = useContext(ThemeContext) // 🟢 Access theme
    const {
        questions: { queue, answers },
        result: { result, userId }
    } = useSelector(state => state)

    const totalPoints = queue.length * 10
    const attempts = attempts_Number(result)
    const earnPoints = earnPoints_Number(result, answers, 10)
    const flag = flagResult(totalPoints, earnPoints)

    // 🟢 Publish result
    usePublishResult({
        result,
        username: userId,
        attempts,
        points: earnPoints,
        achived: flag ? "Passed" : "Failed"
    })

    function onRestart() {
        dispatch(resetAllAction())
        dispatch(resetResultAction())
    }

    return (
        <div className={`container ${theme}`}>
            <div className={`result flex-center ${theme}`}>
                <div className='flex'>
                    <span>Username</span>
                    <span className='bold'>{userId || ""}</span>
                </div>
                <div className='flex'>
                    <span>Total Questions :</span>
                    <span className='bold'>{queue.length || 0}</span>
                </div>
                <div className='flex'>
                    <span>Total Attempts :</span>
                    <span className='bold'>{attempts || 0}</span>
                </div>
                <div className='flex'>
                    <span>Quiz Result</span>
                    <span
                        style={{ color: `${flag ? "#2aff95" : "#ff2a66"}` }}
                        className='bold'
                    >
                        {flag ? "Passed" : "Failed"}
                    </span>
                </div>
            </div>

            <div className="start">
                <Link className='btn' to='/' onClick={onRestart}>Restart</Link>
            </div>

            <div>
                <PieContainer earn={earnPoints} theme={theme} />
            </div>

            {/* Uncomment if needed */}
            {/* <div className="container">
                <ResultTable theme={theme} />
            </div> */}
        </div>
    )
}
