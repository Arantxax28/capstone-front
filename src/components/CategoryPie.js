import React from "react";
import Chart from "react-apexcharts";

const CategoryPie = (props) => {
    const state = {

        series: [props.makeup.length, props.skincare.length, props.subscriptions.length],
        options: {
            chart: {
                width: 380,
                type: 'pie',
            },
            colors: ['#93C3EE', '#E5C6A0', '#669DB5'],
            fill: ['#93C3EE', '#E5C6A0', '#669DB5'],
            stroke: {
                width: 4
            },
            dataLabels: {
                enabled: true,
                style: {
                    colors: ['#111']
                },
                background: {
                    enabled: true,
                    foreColor: '#fff',
                    borderWidth: 0
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },


    };

return (


    <div id="chart">
        <Chart options={state.options} series={state.series} type="pie" width={380} />
    </div>


);
}

export default CategoryPie;