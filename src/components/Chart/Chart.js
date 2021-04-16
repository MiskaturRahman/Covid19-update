import React, { useEffect, useState } from 'react'
import { fetchDailyData } from '../../api'
import { Line, Bar } from 'react-chartjs-2'
import './Chart.css'

const Chart = ({ data: { confirmed, deaths, recovered }, country }) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setDailyData(await fetchDailyData());
        }
        // console.log(dailyData);

        fetchApi();
    }, []);

    const lineChart = (
        dailyData.length ? (
            <Line
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                    }, {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255,0,0,0.5)',
                    }],
                }}
            />
        ) : null
    );


    const barChart = (
        confirmed
            ? (
                <Bar
                    data={{
                        labels: ['Infected', 'Recovered', 'Deaths'],
                        datasets: [{
                            label: 'People',
                            backgroundColor: [
                                'blue',
                                'green',
                                'red',
                            ],
                            data: [confirmed.value, recovered.value, deaths.value],
                        }]
                    }}
                    options={{
                        legend: { display: false },
                        title: { display: true, text: `Current State in ${country}` },
                    }}
                />
            ) : null
    );

    return (
        <div className="container">
            {country ? barChart : lineChart}
        </div>
    )
}

export default Chart
