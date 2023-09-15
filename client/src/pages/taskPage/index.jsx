import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

//IMPORTANDO O CSS
import './taskPage.css';

export default () => {

    const { id } = useParams();

    useEffect(async () => {
        const res = await axios.get(``)
    }, [id]);

    return (
        <section className='taskPage'>
            Task Page
            {id}
        </section>
    )
}