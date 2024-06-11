import React from "react";
import { colorForSpeed } from "../../../../lib/wind-funcs";
import "./Compass.css";
// import GhostArrows from "./GhostArrows";
import HashMarks from "./HashMarks";

const Compass = ({ weather }) => {
  const { windDirection, windSpeed } = weather;
  let rotation;
  const correctedRotation = degree => {
    let angle;
    rotation = rotation || 0;
    angle = rotation % 360;
    if (angle < 0) angle += 360;
    if (angle < 180 && degree > angle + 180) rotation -= 360;
    if (angle >= 180 && degree <= angle - 180) rotation += 360;
    rotation += degree - angle;
    return rotation;
  };
  return (
    <div className='Compass'>
      <div className='Face'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='-105 -105 210 210'>
          <defs>
            <filter id='blur'>
              <feGaussianBlur in='SourceGraphic' stdDeviation='1' />
            </filter>
          </defs>
          <circle r={105} fill='hsla(240, 0%, 0%, 0.5)' />
          <HashMarks />
          <text
            alignmentBaseline='middle'
            textAnchor='middle'
            x={0}
            y={-90}
            fill='hsla(240, 100%, 75%, 0.75)'
          >
            N
          </text>
          <text
            alignmentBaseline='middle'
            textAnchor='middle'
            x={90}
            y={0}
            fill='hsla(240, 100%, 75%, 0.75)'
          >
            E
          </text>
          <text
            alignmentBaseline='middle'
            textAnchor='middle'
            x={0}
            y={90}
            fill='hsla(240, 100%, 75%, 0.75)'
          >
            S
          </text>
          <text
            alignmentBaseline='middle'
            textAnchor='middle'
            x={-90}
            y={0}
            fill='hsla(240, 100%, 75%, 0.75)'
          >
            W
          </text>
          <circle r='40' fill='hsla(240, 100%, 50%, 0.25)' />
          <path
            id='pointer'
            filter='url(#blur)'
            d='M0,100 L-22.45139882897927,30.901699437494752 L-2.0244413695060732,2.786404500042062 A3.4441853748633044,3.4441853748633044 0 0 1 -2.024441369506074,-2.786404500042062 L-3.2756149440922124,-4.508497187473714 L0,-100 L3.275614944092212,-4.508497187473714 L2.0244413695060737,-2.786404500042062 A3.4441853748633044,3.4441853748633044 0 0 1 2.0244413695060737,2.786404500042062 L22.451398828979276,30.901699437494752 Z'
            stroke='hsl(30, 100%, 50%)'
            fill='none'
            strokeWidth='2'
            style={{
              transform: `rotate(${correctedRotation(windDirection)}deg)`,
            }}
          />
          <path
            id='pointer'
            d='M0,100 L-22.45139882897927,30.901699437494752 L-2.0244413695060732,2.786404500042062 A3.4441853748633044,3.4441853748633044 0 0 1 -2.024441369506074,-2.786404500042062 L-3.2756149440922124,-4.508497187473714 L0,-100 L3.275614944092212,-4.508497187473714 L2.0244413695060737,-2.786404500042062 A3.4441853748633044,3.4441853748633044 0 0 1 2.0244413695060737,2.786404500042062 L22.451398828979276,30.901699437494752 Z'
            stroke='hsl(45, 100%, 50%)'
            fill='none'
            strokeWidth='0.5'
            style={{
              transform: `rotate(${correctedRotation(windDirection)}deg)`,
            }}
          />
          <text
            className='windspeed'
            alignmentBaseline='middle'
            textAnchor='middle'
            style={{ fill: colorForSpeed(windSpeed) }}
          >
            {windSpeed > -1 ? windSpeed : "--"}
          </text>
        </svg>

        {/* <div className='Circle' style={{ color: colorForSpeed(windSpeed) }}>
          {windSpeed > -1 ? windSpeed : "--"}
        </div>
        <GhostArrows prevDirs={prevWindDirs} />
        <div
          className='Arrow'
          style={{
            transform: `rotate(${correctedRotation(windDirection)}deg)`,
            opacity: `${windSpeed ? 0.75 : 0.25}`,
          }}
        />
        <HashMarks />
        <div className='LabelGrid'>
          <div className='grid-cell n'>N</div>
          <div className='grid-cell e'>E</div>
          <div className='grid-cell s'>S</div>
          <div className='grid-cell w'>W</div>
        </div> */}
      </div>
    </div>
  );
};
export default Compass;
