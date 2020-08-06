import React from 'react';
import SkillsItem from './SkillsItem.jsx';
import './MySkills.scss';

export default function MySkills() {
    return (
        <section id="skills" className="skills">
				<h2 className="heading">My skills</h2>
				<SkillsItem />
		</section>
    )
}
