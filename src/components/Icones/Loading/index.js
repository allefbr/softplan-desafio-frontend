import React from 'react'

const Loading = () => (
    <svg width="120px"  height="120px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="lds-eclipse">
        <path stroke="none" d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#757575" transform="rotate(167.921 50 51)">
            <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 51;360 50 51" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite">
            </animateTransform>
        </path>
    </svg>
)

export default Loading
