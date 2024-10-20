import React from "react";

const Section02 = () => {
  return (
    <>
      <div className="h-[400vh] relative">
        <div className="w-full h-full bg-blue-500 flex items-center justify-start px-20 relative">
          <div className="sticky w-full top-0 left-0 h-screen flex items-center justify-center">
            <p className="text-white text-sm md:text-2xl lg:text-4xl opacity-80">
              <span>그 시절 우리는 모두 선택받은 아이들이었다.</span>
            </p>
          </div>
        </div>
        <div className="absolute top-0 left-0 z-20 w-full h-full">
          <div className="sticky top-0 h-screen overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <mask id="circleMask">
                    <rect width="100%" height="100%" fill="white" />
                    <circle cx="50%" cy="50%" r="20%" fill="black" />
                  </mask>
                </defs>
                <rect width="100%" height="100%" className="fill-white" mask="url(#circleMask)" />
              </svg>
            </div>
            <div className="absolute inset-0">
              <svg className="w-full h-full fill-blue-500 " viewBox="0 0 680 680" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path
                    d="M341.97,41.93c1.18,7.67,2.26,14.72,3.36,21.76c0.46,2.98,0.72,5.77-3.41,6.33c-3.98,0.54-4.74-1.97-5.22-5.05
		c-1.12-7.19-2.36-14.37-3.62-21.98c-7.95,1.16-15.46,2.26-23.58,3.44c0.26,1.94,0.48,3.59,0.6,4.46c5,0.44,9.47,0.21,13.44,1.5
		c1.49,0.49,2.33,4.47,2.6,6.96c1.43,13.06,1.04,13.48-10.93,15.47c-9.04,1.5-9.58,0.97-12.8-13.1c-1.18,0.08-2.43,0.21-3.68,0.25
		c-2.47,0.09-5.35,0.68-5.93-2.84c-0.53-3.24,1.68-4.51,4.43-4.81c3.86-0.42,4.94-2.2,2.98-6.09c-1.59,0.15-3.46,0.76-5.09,0.37
		c-1.66-0.39-3.1-1.75-4.64-2.69c1.22-1.55,2.21-3.43,3.74-4.55c1.23-0.9,3.13-0.88,4.87-1.3c0.08-0.81,0.25-1.45,0.18-2.06
		c-1.04-9.41,0.62-11.52,9.9-12.82c6.59-0.92,13.16-2,19.75-2.91c7.08-0.98,9.53,0.73,10.54,7.69c0.41,2.88,1.31,4.32,4.42,3.53
		c0.95-0.24,2.15-0.5,2.96-0.13c2,0.9,5.05,1.78,5.52,3.32c1.09,3.55-2.39,3.53-4.75,4.05C345.86,41.13,344.09,41.49,341.97,41.93z
		 M308.01,38.55c8.01-1.16,15.62-2.26,23.14-3.35c0.51-3.24,0.14-5.33-3.28-4.87c-6.69,0.9-13.36,1.91-20.35,2.92
		C307.69,35.11,307.82,36.51,308.01,38.55z M310.35,59.56c1.77,3.53,2.74,5.7,4.02,7.68c0.11,0.18,2.97-0.7,3.11-1.39
		c0.38-1.8,0.59-4.23-0.34-5.53C316.47,59.39,313.83,59.86,310.35,59.56z"
                  />
                  <path
                    d="M169.37,112.65c2.6,2.95,5.05,6.11,7.95,8.79c0.92,0.85,3.66,1.12,4.52,0.4c6.59-5.55,12.92-11.41,19.98-17.74
		c-6.01-6.83-11.85-13.46-17.83-20.25c-5.01,4.32-9.65,8.31-14.28,12.33c-5.23,4.54-7.73,4.3-11.82-1.15
		c-0.5-0.67-0.87-1.46-1.47-2.01c-2.66-2.42-3.2-4.55,0.53-6.48c0.98-0.51,1.71-1.49,2.94-2.61c1.67,1.82,3.2,3.47,5.14,5.59
		c5.11-4.32,10.37-8.53,15.35-13.05c3.4-3.07,5.9-3.31,9.11,0.47c5.81,6.83,12.15,13.2,18.16,19.87c5.35,5.95,4.82,9.5-1.16,14.52
		c-7.38,6.2-14.55,12.66-21.69,19.14c-4.96,4.5-7.53,4.6-12.16-0.32c-3.76-4-7.44-8.07-10.93-12.31c-3.31-4.01-3.07-7.43,0.7-10.96
		c4.86-4.54,9.83-8.97,14.88-13.3c3.7-3.18,7.27-2.84,10.47,0.75c1.44,1.61,2.89,3.22,4.18,4.95c2.54,3.4,2.62,6.72-0.67,9.75
		c-1.1,1.01-2.26,1.97-3.38,2.96c-6.77,6.06-7.44,6.05-13.82-0.08C171.82,109.75,171.82,109.75,169.37,112.65z"
                  />
                  <path
                    d="M408.58,40.63c-4.22-3.2-6.31-8.33-12.07-8.48c4.49,6.62,2.69,13.79,2.82,20.6c0.06,3.09-1.92,5.39-5.41,5.3
		c-4.66-0.13-9.31-0.43-13.96-0.75c-3.4-0.23-4.99-2.28-5.17-5.56c-0.05-0.83-0.03-1.67-0.04-2.5c-0.11-7.26-2.09-15.33,9.14-17.55
		c-2.19-2.64-3.63-4.19-4.83-5.9c-0.62-0.88-1.45-2.59-1.1-2.99c0.74-0.85,2.18-1.47,3.34-1.48c1.4-0.02,3.44,0.24,4.09,1.17
		c3.38,4.78,6.81,3.56,10.97,1.12c1.28-0.75,4.23-0.14,5.53,0.93c4.34,3.57,8.28,7.64,12.53,11.66c3.05-2,5.94-3.9,9.06-5.95
		c1.65,1.3,3.27,2.57,5.4,4.25c-2.76,2.45-5.3,4.71-8.32,7.4c9.34,7.42,5.16,17.7,5.84,26.97c0.28,3.79-1.93,6.27-6.14,6.23
		c-4.17-0.03-8.33,0.05-12.5-0.03c-3.95-0.08-6.28-1.99-6.26-6.14c0.02-6.67-0.08-13.34,0.27-19.99c0.09-1.67,1.51-3.4,2.66-4.84
		C405.41,42.86,406.88,42.01,408.58,40.63z M418.59,59.15c-0.06,0-0.13,0-0.19,0c0-1.83,0.47-3.83-0.11-5.45
		c-0.86-2.38-2.42-6.32-3.77-6.35c-3.57-0.1-5.05,2.94-4.89,6.63c0.14,3.15,0.18,6.34-0.14,9.47c-0.39,3.75,0.95,4.96,4.71,4.86
		c3.8-0.11,5.07-1.55,4.43-5.17C418.4,61.85,418.59,60.48,418.59,59.15z"
                  />
                  <path
                    d="M487.79,610.14c-2.15-4.14-4.11-8.34-6.53-12.26c-0.55-0.89-3-1.55-4-1.08c-7.52,3.5-14.95,7.22-22.27,11.13
		c-0.99,0.53-2.02,2.92-1.62,3.79c3.52,7.49,7.37,14.83,11.43,22.8c6.26-2.94,12.23-5.61,18.06-8.55c4.51-2.28,7.47-1.54,9.79,2.93
		c0.38,0.74,0.62,1.54,0.94,2.31c3.39,8.26,2.66,9.29-6.37,8.75c-0.16-1.52,0.01-3.22-0.6-4.56c-0.46-1.01-2.33-2.42-2.88-2.16
		c-3.24,1.49-6.29,3.39-9.37,5.23c-0.8,0.48-1.37,1.35-2.18,1.81c-8.78,4.91-11.27,4.13-15.63-4.75
		c-3.58-7.31-7.24-14.58-10.76-21.91c-2.79-5.82-1.12-8.33,4.9-10.49c4.27-1.53,7.89-4.79,11.96-6.97
		c5.12-2.75,10.41-5.18,15.61-7.79c4.14-2.08,6.92-0.84,8.85,3.25c2.48,5.26,5.07,10.47,7.74,15.64c2.25,4.35,0.87,7.43-3.21,9.44
		c-6.24,3.09-12.5,6.18-18.94,8.82c-1.64,0.67-5.01,0.38-5.81-0.74c-2.47-3.44-4.15-7.46-5.94-11.36c-0.32-0.7,0.06-2.38,0.63-2.72
		c4.39-2.55,8.74-5.39,13.5-6.91c1.25-0.4,4.39,3.22,5.75,5.53C482.7,612.47,484.27,613.73,487.79,610.14z"
                  />
                  <path
                    d="M333.26,631.13c-2.03-0.4-3.48-0.7-4.93-0.97c-8.16-1.53-8.16-1.53-6.59-9.81c2.06-10.9,6.67-13.75,17.55-10.86
		c4.25,1.13,6.22,4.19,5.14,9.76c-0.85,4.38-0.63,6.69,4.73,6.24c1.13-0.1,2.47,2.24,3.72,3.46c-1.18,1.04-2.22,2.75-3.56,3.01
		c-6.35,1.27-6.37,1.13-6.6,5.89c2.1,0.74,4.37,1.26,6.34,2.34c1.07,0.58,1.61,2.11,2.4,3.21c-1.1,0.49-2.16,1.26-3.3,1.4
		c-1.95,0.23-3.94,0.06-5.57,0.06c-0.52,0.82-0.81,1.08-0.85,1.37c-1.62,11.46-2.74,12.17-14.04,10.33
		c-6.06-0.99-12.22-1.37-18.31-2.18c-7.22-0.97-9.17-3.18-8.06-10.15c0.7-4.37-2.95-3.61-4.79-4.96c-1.94-1.42-4.05-2.62-6.09-3.92
		c2.48-0.55,5.07-1.83,7.42-1.48c3.43,0.5,4.56-0.59,4.81-3.71c0.54-6.57,1.19-13.13,1.77-19.7c0.22-2.44,1-4.24,3.93-3.95
		c3.09,0.3,3.63,2.24,3.41,4.93c-0.63,7.72-1.14,15.45-1.73,23.53c7.77,0.85,14.96,1.64,22.72,2.5
		C332.94,635.31,333.08,633.44,333.26,631.13z M309.99,641.78c-0.5,0.45-0.99,0.91-1.49,1.36c0.9,1.78,1.57,4.9,2.74,5.1
		c6.33,1.1,12.78,1.62,19.21,1.96c0.99,0.05,2.78-1.73,2.92-2.83c0.13-1-1.37-3.06-2.35-3.2
		C324.04,643.16,317.01,642.53,309.99,641.78z M336.8,615.54c-4.09-0.34-7.71-1.41-7.38,4.09c0.17,2.84,0.09,6.44,4.12,5.59
		C339.24,624.01,335.7,619.19,336.8,615.54z"
                  />
                  <path
                    d="M236.82,617.39c7.15,11.91,7.15,11.91,10.82,10.25c-3.95-7.03,0.3-13.44,1.95-20.01c0.34-1.36,3.55-3.13,5.12-2.85
		c4.52,0.78,8.84,2.6,13.29,3.83c3.89,1.07,4.99,4,4.31,7.27c-0.9,4.37-2.39,8.65-4.09,12.78c-0.49,1.2-2.51,1.9-3.95,2.54
		c-1.77,0.78-3.67,1.24-5.7,1.9c1.17,2.58,2.33,4.6,2.98,6.77c0.33,1.12-0.24,2.5-0.4,3.77c-1.45-0.34-2.98-0.51-4.33-1.1
		c-0.61-0.27-0.91-1.34-1.28-2.08c-2.06-4.03-4.48-6.67-9.67-4.36c-2.88,1.28-5.47-0.25-7.11-3.04c-1.52-2.58-3.09-5.13-4.66-7.67
		c-3.86-6.26-3.86-6.25-10.57-3.34c-4.64,2.02-5.55,1.61-7.88-4.03c3.32-1.58,6.69-3.19,9.92-4.73c0.11-0.56,0.33-1,0.2-1.17
		c-7.16-9.67-0.41-18.56,1.77-27.6c0.82-3.41,3.77-4.77,7.52-3.46c3.28,1.15,6.67,2,10.01,3c6.18,1.84,7.37,4.03,5.56,10.09
		c-1.22,4.09-2.6,8.15-3.51,12.31c-0.99,4.51-2.46,8.27-7.67,9.2C238.59,615.81,237.86,616.68,236.82,617.39z M231.76,610.33
		c0.79,0.22,1.57,0.45,2.36,0.67c1.74-2.25,3.88-4.31,5.1-6.81c1.43-2.92,1.86-6.31,3.06-9.37c1.24-3.16,0.38-5.33-2.72-6.12
		c-3.24-0.83-5.87,0.14-6.59,3.98c-0.61,3.23-1.65,6.4-1.92,9.65C230.84,604.96,231.49,607.66,231.76,610.33z M264.54,614.54
		c-7.13-3.97-8.34-3.49-9.94,3.45c-0.15,0.64-0.5,1.33-0.4,1.93c0.35,2,0.87,3.97,1.33,5.95c2.25-1.21,5.11-1.93,6.58-3.77
		C263.62,620.22,263.75,617.25,264.54,614.54z"
                  />
                  <path
                    d="M235.28,100.23c-1.85-1.82-4.48-3.46-5.77-5.83c-5.54-10.23-10.78-20.62-15.94-31.05c-1.68-3.4-0.21-6.5,2.83-8.1
		c10.87-5.73,21.83-11.31,32.94-16.57c3.75-1.78,7.14-0.24,9.2,3.62c4.91,9.24,9.88,18.45,14.77,27.71
		c3.83,7.26,2.74,10.61-4.66,14.38c-8.89,4.52-17.79,9.02-26.73,13.44C240.15,98.7,238.2,99.19,235.28,100.23z M237.72,90.03
		c8.47-4.21,16.52-8.08,24.42-12.26c1.13-0.6,2.46-3.11,2.05-3.94c-4.34-8.91-9.02-17.66-13.86-26.95
		c-9.61,4.84-18.54,9.33-27.72,13.96C227.71,70.69,232.58,80.09,237.72,90.03z"
                  />
                  <path
                    d="M525.06,90.55c-2.41-2.17-5.01-3.88-6.69-6.25c-0.96-1.35-0.41-3.76-0.54-5.7c1.79,0.01,3.84-0.55,5.31,0.15
		c2.51,1.18,4.65,3.14,7.41,5.1c1.51-1.7,3.1-3.31,4.47-5.1c2.41-3.15,5.36-3.46,8.24-1.17c7.31,5.77,14.52,11.67,21.59,17.74
		c2.63,2.26,2.62,5.39,0.58,8.11c-6.28,8.37-12.7,16.64-19.05,24.96c-1.97,2.59-4.32,3.87-7.18,1.55c-2.67-2.17-1.89-4.52,0.01-6.95
		c5.23-6.67,10.27-13.49,15.54-20.14c2.08-2.62,2.13-4.29-0.83-6.42c-4.42-3.18-8.45-6.92-12.67-10.44
		c-3.34,2.08-3.82,3.9-0.52,6.02c1.39,0.89,2.67,1.98,3.93,3.06c2.97,2.54,3.73,5.31,1.04,8.63c-2.4,2.97-4.61,6.09-6.91,9.15
		c-2.55,3.4-5.42,4.05-8.87,1.19c-3.07-2.55-6.29-4.91-9.38-7.44c-4.22-3.46-4.37-5.14-0.93-9.53c0.92-1.17,1.94-2.27,2.9-3.42
		C523.36,92.68,524.16,91.67,525.06,90.55z M532.52,96.35c-5.64,4.98-5.52,5.99,0.74,8.75C537.94,100.33,537.91,99.74,532.52,96.35z
		"
                  />
                  <path
                    d="M375.63,620.85c-0.48-5.06,1.79-7.38,5.65-8.25c10.67-2.4,21.34-4.75,32.05-6.97c5.36-1.11,8.86,1.12,10.03,6.31
		c2.19,9.69,4.34,19.39,6.28,29.13c1.62,8.16-1.07,10.67-7.67,11.72c-10.14,1.61-20.17,3.84-30.23,5.91
		c-3.43,0.7-6.92,0.45-7.87-3.15C380.76,643.8,378.21,631.92,375.63,620.85z M422.34,646.28c-1.99-9.88-3.97-19.42-5.79-28.99
		c-0.68-3.55-2.56-4.7-5.97-3.93c-7.78,1.74-15.57,3.43-23.35,5.13c-2.64,0.58-3.93,1.56-3.11,4.83c2.13,8.48,3.8,17.08,5.59,25.64
		c0.63,3.01,2.16,4.15,5.28,3.43C403.96,650.31,412.96,648.37,422.34,646.28z"
                  />
                  <path
                    d="M473.12,57.13c-3.17-1.83-5.83-3.36-8.69-5.02c-3.9,8.32-7.54,16.12-11.22,23.9c-0.56,1.19-1.03,2.94-1.99,3.33
		c-2.21,0.9-4.89,1.87-6.98,1.32c-1.13-0.3-2.56-4.19-1.94-5.6c4.34-9.71,8.93-19.33,14.01-28.66c1.74-3.2,5.16-4.22,9.05-1.93
		c4.41,2.6,9.22,4.51,13.76,6.89c4.19,2.2,4.74,5.29,2.57,9.55c-3.37,6.64-6.23,13.52-9.26,20.18c6.74,5.94,9.22,5.53,13.02-1.84
		c0.61-1.18,0.89-2.76,1.84-3.49c1.18-0.91,3.32-1.96,4.27-1.46c1.38,0.72,3.19,3.12,2.85,4.19c-1.47,4.7-3.1,9.55-5.82,13.57
		c-1.25,1.85-5.43,3.11-7.77,2.54c-5.09-1.24-10.02-3.5-14.71-5.94c-4.88-2.54-3.7-6.94-2.05-10.92
		C466.88,71.03,469.92,64.4,473.12,57.13z"
                  />
                  <path
                    d="M119.51,154.03c-6.7,7.79-6.73,7.83,0.11,13.78c4.75,4.13,9.53,8.25,14.45,12.17c2.8,2.23,3.46,5.1,0.97,7.11
		c-1.41,1.14-5.31,1.03-6.87-0.14c-7.43-5.57-14.47-11.68-21.6-17.65c-3.32-2.78-4.06-7.52-1.33-11.15
		c3.18-4.24,6.69-8.26,10.33-12.12c2.58-2.73,5.53-3.18,8.77-0.47c5.22,4.37,10.68,8.45,15.95,12.75c1.98,1.62,3.96,2.34,5.3-0.28
		c1.07-2.09,5.04-3.98,1.12-7.01c-1.97-1.52-3.77-3.26-5.67-4.88c-2.68-2.28-3.08-5.21-0.43-7.19c1.37-1.02,4.76-0.83,6.32,0.2
		c3.56,2.36,6.58,5.55,9.76,8.46c2.82,2.58,2.59,5.7,0.76,8.56c-2.51,3.91-5.32,7.63-8.17,11.31c-3.02,3.9-6.31,4.47-10.35,1.52
		c-4.82-3.51-9.36-7.4-14.05-11.08C123.2,156.61,121.43,155.42,119.51,154.03z"
                  />
                  <path
                    d="M136.61,538.92c1.93,2.89,3.82,5.23,5.12,7.87c0.6,1.22,0.07,3,0.05,4.52c-1.41-0.43-3.16-0.49-4.17-1.38
		c-2.34-2.07-4.32-4.54-6.31-6.7c-0.69,0.1-1.08,0.05-1.31,0.22c-9.37,6.71-9.4,6.74-16.21-2.51c-4.14-5.62-8.14-11.33-12.24-16.98
		c-1.93-2.67-2.22-5.05,0.7-7.3c8.4-6.48,16.66-13.15,25.22-19.4c1.11-0.81,3.7,0.43,5.61,0.72c-0.42,1.81-0.23,4.33-1.37,5.3
		c-6.18,5.28-12.71,10.15-19.07,15.21c-1.53,1.22-2.92,2.63-4.53,4.1c4.18,5.8,8.14,11.28,12.33,17.09
		c1.81-1.03,3.34-1.91,5.52-3.16c-1.8-2.79-3.39-5.57-5.3-8.11c-2.42-3.23-1.79-5.74,1.26-8.02c2.78-2.08,5.57-4.16,8.27-6.36
		c2.6-2.12,5.35-1.59,7.14,0.5c3.23,3.76,6.16,7.85,8.65,12.12c1.47,2.53,1.37,5.28-2.19,6.98
		C141.3,534.81,139.27,536.91,136.61,538.92z M130.83,532.47c2.99-1.97,5.21-3.44,8.23-5.42c-2.05-1.94-3.61-4.56-5.15-4.55
		c-1.84,0.01-4.54,1.94-5.22,3.68C128.12,527.63,129.91,530.01,130.83,532.47z"
                  />
                  <path
                    d="M554.04,576.19c-4.87-6.84-9.48-13.32-14.08-19.8c-0.87-1.22-2.36-2.45-2.39-3.71c-0.05-2.04,0.32-4.6,1.58-5.95
		c0.71-0.76,4.44-0.18,5.29,0.94c6.24,8.19,12.2,16.6,18.04,25.08c2.59,3.75,0.96,7.09-2.23,9.59c-3.66,2.87-7.52,5.49-11.33,8.16
		c-4.07,2.84-7.78,2.26-10.8-1.73c-4.29-5.7-8.49-11.47-12.75-17.19c-0.28-0.38-0.78-0.59-1.13-0.85c-0.4,0.06-0.79,0.01-1.04,0.18
		c-7.06,4.64-7.06,4.65-2.29,11.62c0.66,0.96,1.8,1.88,1.89,2.88c0.15,1.88,0.37,4.68-0.68,5.51c-1.23,0.97-4.79,1.08-5.61,0.1
		c-3.5-4.17-6.69-8.7-9.24-13.49c-0.74-1.4,0.34-4.79,1.71-6.1c3.83-3.65,8.12-6.88,12.49-9.89c3.04-2.09,6.29-1.96,8.75,1.35
		c3.66,4.93,7.32,9.85,10.92,14.82c4.26,5.88,4.24,5.91,9.8,1.39C551.84,578.37,552.63,577.52,554.04,576.19z"
                  />
                  <path
                    d="M177.58,584.58c3.1,2.58,5.97,4.96,9.27,7.7c5.2-6.23,10.05-12.27,15.17-18.06c2.4-2.71,5.21-7.52,9.2-4.18
		c4.14,3.47-0.42,6.84-2.68,9.58c-5.06,6.14-10.41,12.04-15.6,18.08c-2.52,2.94-5.41,3.16-8.31,0.9
		c-4.56-3.56-9.04-7.24-13.37-11.09c-2.43-2.16-2.68-4.82-0.48-7.51c4.31-5.27,8.45-10.7,12.9-15.84c2.81-3.24,1.9-5.36-1.08-7.73
		c-2.97-2.37-5.12-2.45-7.23,1.02c-1.11,1.82-2.91,3.2-4.18,4.93c-2.37,3.22-4.67,1.83-6.63-0.19c-1.96-2.03-1.48-4,0.72-5.93
		c2.55-2.23,4.81-4.82,7.1-7.33c2.82-3.08,5.88-3.54,9.25-1.04c3.33,2.47,6.7,4.93,9.88,7.59c3.98,3.33,4.51,6.62,1.27,10.8
		C188.13,572.3,183.07,578.02,177.58,584.58z"
                  />
                  <path
                    d="M587.83,151.32c3.9-0.24,6.86-0.49,9.82-0.6c4.79-0.16,7.14,1.81,6.68,6.34c-0.48,4.77-1.61,9.48-2.58,14.19
		c-0.5,2.41-2.03,4.29-4.54,2.91c-1.7-0.94-3.73-3.04-3.82-4.72c-0.15-2.85,1.12-5.77,1.75-8.49c-4.64-0.74-10.39-0.02-13.04-2.54
		c-2.77-2.64-2.57-8.41-3.8-13.35c-4.03,0.6-8.72,1.19-13.37,2.03c-3.64,0.66-7.11,0.52-7.76-3.79c-0.65-4.34,2.77-4.65,6.18-5.12
		c5.4-0.75,10.75-2.03,16.06-3.31c5.41-1.3,7.97,0.27,8.37,5.8C588.03,143.95,587.83,147.26,587.83,151.32z"
                  />
                  <path
                    d="M595.3,525.69c-5.56,6.52-10.49,12.32-15.45,18.08c-1.52,1.76-2.89,3.87-4.82,4.98c-1.6,0.92-3.91,0.61-5.9,0.85
		c0.21-1.95-0.28-4.42,0.74-5.75c4.93-6.47,10.27-12.63,15.45-18.92c1.23-1.49,2.41-3.03,3.96-4.99c-2.33,0-4.02,0.34-5.48-0.09
		c-1.63-0.48-4.2-1.54-4.3-2.56c-0.15-1.5,1.24-4.33,2.44-4.61c6.13-1.41,12.39-2.42,18.66-2.96c1.07-0.09,3.31,2.72,3.42,4.3
		c0.37,5.29,0.58,10.73-0.31,15.92c-0.37,2.18-3.62,3.87-5.57,5.78c-0.51-0.29-1.01-0.59-1.52-0.88
		C596.24,532.16,595.85,529.48,595.3,525.69z"
                  />
                  <path
                    d="M93.54,226.3c2.39-1.09,3.86-2.26,5.38-2.33c1.58-0.07,4.24,0.59,4.56,1.55c0.5,1.51,0.01,4.58-1.07,5.17
		c-5.33,2.95-10.91,5.52-16.6,7.7c-1.09,0.42-4.04-1.14-4.48-2.38c-1.77-5-3.02-10.2-4.19-15.38c-0.3-1.35,0-3.09,0.66-4.32
		c0.63-1.18,2.03-2.56,3.18-2.65c0.85-0.07,2.13,1.64,2.74,2.81c0.8,1.55,1.14,3.35,2.1,6.4c1.34-2.53,2.11-3.86,2.76-5.24
		c3.55-7.5,6.9-15.1,10.73-22.46c0.81-1.55,3.64-3.4,4.99-3.04c3.1,0.82,2.69,3.7,1.56,6.18c-3.83,8.46-7.7,16.9-11.53,25.36
		C94.1,224.24,93.98,224.85,93.54,226.3z"
                  />
                  <path
                    d="M98.44,472.52c5.68,0.95,10.6,1.59,15.43,2.64c4.82,1.04,4.78,1.22,4.38,7.12c-5.52-0.35-11.06-0.92-16.6-0.99
		c-11.78-0.15-13.04-1.61-9.65-13.19c1.09-3.74,0.69-5.24-3.55-6.04c-11.49-2.15-12.12-3.77-6.81-14.29
		c0.97-1.91,1.92-3.9,3.27-5.53c0.89-1.07,2.47-1.57,3.74-2.33c0.95,1.6,2.82,3.28,2.71,4.8c-0.59,7.99-0.55,7.66,6.4,12.32
		c1.79,1.2,2.34,5.05,2.46,7.73C100.33,467.29,99.11,469.86,98.44,472.52z"
                  />
                  <path
                    d="M605.32,147.37c-2.1-0.23-4.43-0.83-6.73-0.69c-6.63,0.4-8.87-2.7-9.65-9.4c-0.46-3.97-1.21-7.94-1.19-11.91
		c0.01-1.71,1.64-3.42,2.53-5.13c1.73,1.45,4.06,2.58,5.04,4.43c1.02,1.93,1.03,4.55,0.98,6.86c-0.11,5.59,2.22,8,7.98,7.68
		c1.97-0.11,4.24,1.24,5.98,2.47c1.21,0.85,1.75,2.64,2.59,4.01c-1.6,0.56-3.19,1.2-4.82,1.64
		C607.26,147.55,606.38,147.37,605.32,147.37z"
                  />
                  <path
                    d="M68.3,461.96c5.35,1.66,10.65,2.71,15.32,5.03c2.04,1.01,3.87,4.61,3.89,7.05c0.05,4.92-1.06,9.89-2.02,14.77
		c-0.28,1.42-1.65,2.63-2.52,3.93c-1.22-1.54-3.25-2.97-3.47-4.65c-0.37-2.72,0.33-5.62,0.78-8.41c0.67-4.24,0.12-7.59-4.97-8.41
		c-1.29-0.21-2.52-0.82-3.78-1.25C67.96,468.8,66.35,466.63,68.3,461.96z"
                  />
                  <path
                    d="M560.21,173.81c-2.06-2.96-3.88-4.82-4.64-7.04c-0.3-0.86,1.53-2.96,2.84-3.77c3.22-1.98,6.58-3.91,10.13-5.12
		c1.76-0.6,4.71-0.29,6.01,0.86c2.12,1.89,1.67,4.34-1.09,6.1C569.35,167.46,565.37,170.3,560.21,173.81z"
                  />
                  <path
                    d="M570.45,183.56c3.31-5.97,5.94-10.98,8.95-15.75c0.34-0.54,3.17-0.15,4.28,0.62c1.06,0.75,2.19,2.81,1.87,3.85
		c-1.44,4.72-3.19,9.38-5.32,13.82c-0.46,0.96-3.17,1.57-4.52,1.19C573.97,186.8,572.56,185.14,570.45,183.56z"
                  />
                  <path
                    d="M528.68,140.36c-2.09,0.22-3.87,0.65-5.6,0.5c-0.94-0.08-2.22-0.96-2.61-1.81c-1.64-3.59,1.68-13.12,5.25-14.82
		c1.25-0.6,3.59-0.84,4.34-0.11c1.16,1.12,1.5,3.18,1.94,4.9c0.18,0.72-0.2,1.63-0.45,2.41
		C530.57,134.55,529.55,137.66,528.68,140.36z"
                  />
                  <path
                    d="M519.01,116.15c1.84,1.18,3.75,1.75,4.23,2.91c0.51,1.21,0.18,3.68-0.73,4.42c-3.29,2.65-6.83,5.1-10.61,6.96
		c-1.14,0.56-3.9-0.63-4.91-1.85c-0.86-1.04-0.96-4.24-0.17-4.83C510.59,120.95,514.77,118.72,519.01,116.15z"
                  />
                  <path
                    d="M126.54,457.31c-1.36,0.94-2.61,2.29-4.12,2.75c-3.6,1.1-7.29,2.18-11,2.47c-1.78,0.14-4.57-1.04-5.36-2.47
		c-1.35-2.46,0.52-4.17,3.16-4.77c4.02-0.91,7.99-2.28,12.05-2.63c1.74-0.15,3.66,1.76,5.5,2.74
		C126.7,456.04,126.62,456.67,126.54,457.31z"
                  />
                  <path
                    d="M148.76,515.44c-0.71-0.66-2.31-1.52-2.25-2.23c0.14-1.7,0.63-4.29,1.77-4.83c3.69-1.74,7.69-2.98,11.69-3.81
		c1.09-0.23,3.31,1.41,3.74,2.64c0.38,1.08-0.68,3.64-1.7,4.05C157.92,512.92,153.6,513.98,148.76,515.44z"
                  />
                  <path
                    d="M138.8,502.42c2.96-4.02,5.82-8.12,8.98-11.98c0.46-0.56,2.78-0.39,3.48,0.26c0.94,0.87,1.98,3.03,1.53,3.79
		c-2.4,4.08-4.86,8.25-8.07,11.66C142.68,508.32,139.64,506.23,138.8,502.42z"
                  />
                  <path
                    d="M99.9,445.26c2.76-3.66,5.28-7.35,8.22-10.68c0.87-0.98,3.91-1.64,4.24-1.19c1.08,1.46,2.39,4.08,1.75,5.23
		c-1.79,3.28-4.18,6.41-6.94,8.93C103.79,450.65,101.79,447.35,99.9,445.26z"
                  />
                  <path
                    d="M131.48,126.07c3.27,3.54,5.67,5.67,7.25,8.3c0.27,0.45-2.95,3-4.56,4.58c-2.14-2.21-4.57-4.22-6.2-6.75
		C127.53,131.53,129.58,129.27,131.48,126.07z"
                  />
                  <path
                    d="M496.09,59.3c2.21,1.46,3.98,2.63,6.15,4.07c-0.67,3.13-1.1,6.93-5.37,7.86c-1.32,0.29-3.98-0.88-4.4-2
		C490.84,64.92,493.43,61.92,496.09,59.3z"
                  />
                  <path
                    d="M534.36,602.57c-4.94,0.31-8.28,4.59-10.79-0.49c-0.95-1.92-1.49-4.51-0.99-6.47c0.27-1.05,4.13-2.47,4.71-1.93
		C529.75,595.95,531.58,598.91,534.36,602.57z"
                  />
                  <path
                    d="M165.1,569.05c-3.33,2.7-5.26,4.79-7.65,5.89c-0.71,0.33-2.7-2.1-4.1-3.26c1.78-2.08,3.32-4.53,5.5-6.03
		C159.53,565.19,161.97,567.29,165.1,569.05z"
                  />
                  <path
                    d="M254.16,75.07c-1.35,2.67-2.02,5.92-3.39,6.25c-2,0.48-4.51-1.14-6.92-1.91c0.03-0.1-0.1,0.55-0.36,1.14
		c-1.08,2.46-2.08,5.32-5.65,4.09c-3.69-1.27-1.86-3.93-1.22-6.21c0.13-0.48,0.23-0.97,0.4-1.45c2.17-6.24,2.15-6.15-4.19-8.18
		c-2.28-0.73-6.48-0.44-5.28-4.2c0.59-1.86,4.32-2.71,7.02-3.34c2.31-2.76,3.79-7.13,8.96-3.51c0.29-0.18,0.66-0.29,0.8-0.52
		c1.46-2.46,2.26-6.49,6.26-4.62c3.87,1.81,0.71,4.92,0.28,7.43c-0.28,1.61-0.86,3.17-1.47,5.36c2.31,0.73,4.42,1.48,6.57,2.06
		c2.81,0.75,6.04,1.36,5.32,5.2c-0.71,3.76-3.89,2.76-6.51,2.46C254.3,75.08,253.81,75.03,254.16,75.07z"
                  />
                  <path
                    d="M397.98,634.39c-2.63-1.61-4.95-3.14-7.37-4.49c-2.16-1.21-4.54-2.73-2.47-5.16c0.88-1.04,3.92-0.45,5.95-0.25
		c0.98,0.1,1.88,0.99,2.17,1.16c1.14-2.31,2.13-4.32,3.13-6.34c2.12,1.15,4.24,2.3,6.81,3.69c0.34-0.44,1.2-2.24,2.62-3.12
		c1.13-0.7,3.16-0.71,4.4-0.16c0.62,0.28,0.93,2.73,0.45,3.77c-1.37,2.93-4.87,5.97-4.41,8.35c0.47,2.38,4.86,3.87,7.24,6.06
		c0.81,0.75,1.35,2.81,0.88,3.65c-0.47,0.85-2.38,1.36-3.57,1.23c-1.37-0.15-2.64-1.17-4.1-1.87c-1.99,3.48-4.41,5.62-8.57,4.11
		c-0.71-0.26-1.7,0.33-2.57,0.47c-2.16,0.35-4.33,0.67-6.49,1.01c-0.28-0.54-0.57-1.09-0.85-1.63
		C393.31,641.62,395.39,638.4,397.98,634.39z"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section02;