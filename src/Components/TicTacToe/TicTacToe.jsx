import React, { useRef, useState } from "react";
import circle from "../Assets/circle.png"
import cross from '../Assets/cross.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from '@fortawesome/free-solid-svg-icons';

let data = ["","","","","","","","",""]

const TicTacToe = () => {
    let [count,setCount] = useState(0);
    let [lock,setLock] = useState(false);
    let titleRef = useRef(null);
    let b1 = useRef(null);
    let b2 = useRef(null);
    let b3 = useRef(null);
    let b4 = useRef(null);
    let b5 = useRef(null);
    let b6 = useRef(null);
    let b7 = useRef(null);
    let b8 = useRef(null);
    let b9 = useRef(null);

    let boxes = [b1,b2,b3,b4,b5,b6,b7,b8,b9]
    const toggle = (e,num) => {
        if(lock){
            return 0;
        }
        if(count % 2===0){
            e.target.innerHTML = `<img className='m-12' src='${cross}'>`;
            data[num]="x";
            setCount(++count);
        }
        else{
            e.target.innerHTML = `<img className='m-12' src='${circle}'>`;
            data[num]="o";
            setCount(++count);
        }
        checkwin()
    }

    const checkwin = () => {
        if(data[0]===data[1] && data[1]===data[2] && data[2]!==""){
            won(data[2]);
        }
        else if(data[3]===data[4] && data[4]===data[5] && data[5]!==""){
            won(data[5]);
        }
        else if(data[6]===data[7] && data[7]===data[8] && data[8]!==""){
            won(data[8]);
        }
        else if(data[0]===data[3] && data[3]===data[6] && data[6]!==""){
            won(data[6]);
        }
        else if(data[1]===data[4] && data[4]===data[7] && data[7]!==""){
            won(data[7]);
        }
        else if(data[2]===data[5] && data[5]===data[8] && data[8]!==""){
            won(data[8]);
        }
        else if(data[0]===data[4] && data[4]===data[8] && data[8]!==""){
            won(data[8]);
        }
        else if(data[2]===data[4] && data[4]===data[6] && data[6]!==""){
            won(data[6]);
        }
    }
    const won = (winner)=>{
        setLock(true);
        if(winner === 'x'){
            titleRef.current.innerHTML = `Congratulations: X wins`
        }
        else if(winner === 'o'){
            titleRef.current.innerHTML = `Congratulations: O wins`
        }
        else{
           titleRef.current.innerHTML = "Better luck next time" 
        }
    }

    const reset = () =>{
        setLock(false);
        data = ["","","","","","","","",""];
        titleRef.current.innerHTML = 'Tic Tac Toe Game';
        boxes.map((e)=>{
            e.current.innerHTML = "";
        })
    }

    return (
        <div className="w-full h-full bg-gray-900">
            <h1 className="mt-4 bg-gray-900 text-center text-white text-7xl font-bold items-start w-full mb-4 " ref={titleRef}> Tic Tac Toe Game</h1>
            <div className="w-[564px] h-[600px] flex m-auto">
                <div className="">
                    <div className="flex w-48 h-48 bg-gray-600 border-6 border-gray-900 cursor-pointer rounded-md  mr-1 mb-1" ref={b1} onClick={(e) => {toggle(e,0)}}></div>
                    <div className="flex w-48 h-48 bg-gray-600 border-6 border-gray-900 cursor-pointer rounded-md   mr-1 mb-1"ref={b2} onClick={(e) => {toggle(e,1)}}></div>
                    <div className="flex w-48 h-48 bg-gray-600 border-6 border-gray-900 cursor-pointer rounded-md  mr-1 mb-1"ref={b3} onClick={(e) => {toggle(e,2)}}></div>
                </div>
                <div className="">
                    <div className="flex w-48 h-48 bg-gray-600 border-6 border-gray-900 cursor-pointer rounded-md  mr-1 mb-1" ref={b4} onClick={(e) => {toggle(e,3)}}></div>
                    <div className="flex w-48 h-48 bg-gray-600 border-6 border-gray-900 cursor-pointer rounded-md  mr-1 mb-1" ref={b5} onClick={(e) => {toggle(e,4)}}></div>
                    <div className="flex w-48 h-48 bg-gray-600 border-6 border-gray-900 cursor-pointer rounded-md  mr-1 mb-1" ref={b6} onClick={(e) => {toggle(e,5)}}></div>
                </div>
                <div className="">
                    <div className="flex w-48 h-48 bg-gray-600 border-6 border-gray-900 cursor-pointer rounded-md mr-1 mb-1" ref={b7} onClick={(e) => {toggle(e,6)}}></div>
                    <div className="flex w-48 h-48 bg-gray-600 border-6 border-gray-900 cursor-pointer rounded-md mr-1 mb-1" ref={b8} onClick={(e) => {toggle(e,7)}}></div>
                    <div className="flex w-48 h-48 bg-gray-600 border-6 border-gray-900 cursor-pointer rounded-md  mr-1 mb-1" ref={b9} onClick={(e) => {toggle(e,8)}}></div>
                </div>
            </div>
            <button className="inline-block px-6 py-2 bg-gray-600 duration-200 hover:bg-blue-800 rounded-full" onClick={() =>{reset()}}>Reset</button>
        </div>
    )
}

export default TicTacToe