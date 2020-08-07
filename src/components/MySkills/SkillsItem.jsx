import React from 'react'

import { AiFillHtml5 } from "react-icons/ai";
import { DiSass } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiPhp } from "react-icons/di";
import { FaLaravel } from "react-icons/fa";
import { FaReact } from "react-icons/fa";



export default function SkillsItem() {
    return (
        <>
		
				<div className="skills__item">
	<div className="skills__label"><AiFillHtml5 /> </div>
					<div className="skills__progress-bar">
						<div className="skills__progress skills__progress--80">HTML5</div>
						<div className="skills__percentage">80%</div>
					</div>
				</div>

				<div className="skills__item">
					<div className="skills__label"><DiCss3 />  <DiSass /></div>
					<div className="skills__progress-bar">
						<div className="skills__progress skills__progress--80">CSS , SASS</div>
						<div className="skills__percentage">80%</div>
					</div>
				</div>

				<div className="skills__item">
					<div className="skills__label"><FaLaravel /></div>
					<div className="skills__progress-bar">
						<div className="skills__progress skills__progress--70">Laravel</div>
						<div className="skills__percentage">70%</div>
					</div>
				</div>

                <div className="skills__item">
					<div className="skills__label"><FaReact className="skills__react"/></div>
					<div className="skills__progress-bar">
						<div className="skills__progress skills__progress--70">React</div>
						<div className="skills__percentage">70%</div>
					</div>
				</div>

				<div className="skills__item">
					<div className="skills__label"><DiJavascript1 /></div>
					<div className="skills__progress-bar">
						<div className="skills__progress skills__progress--60">JavaScript</div>
						<div className="skills__percentage">60%</div>
					</div>
				</div>

				<div className="skills__item">
					<div className="skills__label"><DiPhp size={36}/></div>
					<div className="skills__progress-bar">
						<div className="skills__progress skills__progress--60">PHP</div>
						<div className="skills__percentage">60%</div>
					</div>
				</div>

				<div className="skills__item">
					<div className="skills__label">UX</div>
					<div className="skills__progress-bar">
						<div className="skills__progress skills__progress--50">UX</div>
						<div className="skills__percentage">50%</div>
					</div>
				</div>
			</>
    )
}
