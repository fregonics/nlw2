import React from 'react';

import "./styles.css";
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../TeacherItem';


function TeachersList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <div id="search-teachers">
                    <form  className="search-teachers">
                        <div className="input-block">
                            <label htmlFor="subject">Matéria</label>
                            <input type="text" id="subject" />
                        </div>
                    </form>

                    <form  className="search-teachers">
                        <div className="input-block">
                            <label htmlFor="week_day">Dia da semana</label>
                            <input type="text" id="subject" />
                        </div>
                    </form>

                    <form  className="search-teachers">
                        <div className="input-block">
                            <label htmlFor="time">Horário</label>
                            <input type="text" id="subject" />
                        </div>
                    </form>
                </div>
            </PageHeader>
            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeachersList;