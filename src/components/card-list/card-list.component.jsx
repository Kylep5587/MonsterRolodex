// This component controls how the list of monsters is displayed
import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

// Displays the monster cards for each monster
export const CardList = props => (
    <div className='card-list'>
        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster} />
        ))}
    </div>
        // map causes the return of the method to iterate through each element in the array
        //.monsters.map() will iterate through each element in the monsters array
        // key tells react which element in the monster array to update
);